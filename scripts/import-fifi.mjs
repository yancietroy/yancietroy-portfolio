// Converts Fifi's covers, App Store screenshots and app screens into web-sized WebP files.
// Usage: node scripts/import-fifi.mjs
//   FIFI_ASSETS  folder holding "Fifi Covers/" and "appstore fifi 4/" (default ~/Downloads/Fifi Assets)
//   FIFI_SCREENS folder holding the raw app screens 1.webp, 2.jpg, 3.webp (optional; skipped if unset)
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import sharp from "sharp";

const assets = process.env.FIFI_ASSETS || path.join(os.homedir(), "Downloads", "Fifi Assets");
const out = path.resolve("public", "work", "fifi");
const frame = "#0b2545"; // Fifi's theme.soft

const save = async (input, name, width = 2000) => {
  const info = await sharp(input).resize({ width, withoutEnlargement: true }).webp({ quality: 82 }).toFile(path.join(out, `${name}.webp`));
  console.log(`fifi/${name}.webp  ${info.width}x${info.height}  ${Math.round(info.size / 1024)} KB`);
};

const covers = path.join(assets, "Fifi Covers");
const coverMap = {
  "4c — Dawn (1440×960).jpg": "cover",
  "4b — The cast": "cast",
  "4e — What arrives": "what-arrives",
  "4f — Not all of them are nice": "different-ways",
  "5a — How it works": "how-it-works",
  "4c — Dawn (1440×960)-1": "note",
};
for (const [match, name] of Object.entries(coverMap)) {
  const file = fs.readdirSync(covers).find((f) => f.includes(match));
  if (!file) throw new Error(`No cover matching "${match}" in ${covers}`);
  await save(path.join(covers, file), name);
}

// Six App Store screenshots side by side, like GroceryBudget's store set.
const store = path.join(assets, "appstore fifi 4");
const storeFiles = ["2 · Cast.png", "2 · Record your voice (recording).png", "3 · Briefing", "6 · Alarm list — dark (§4.7 fix).png", "7 · Streak", "call sounds.png"];
const height = 1100, gap = 28, pad = 56, radius = 36;
const shots = [];
for (const match of storeFiles) {
  const file = fs.readdirSync(store).find((f) => f.startsWith(match));
  if (!file) throw new Error(`No screenshot matching "${match}" in ${store}`);
  const resized = await sharp(path.join(store, file)).resize({ height }).toBuffer({ resolveWithObject: true });
  const mask = Buffer.from(`<svg width="${resized.info.width}" height="${height}"><rect width="100%" height="100%" rx="${radius}"/></svg>`);
  shots.push(await sharp(resized.data).composite([{ input: mask, blend: "dest-in" }]).png().toBuffer({ resolveWithObject: true }));
}
const width = shots.reduce((sum, s) => sum + s.info.width, 0) + gap * (shots.length - 1) + pad * 2;
let left = pad;
const strip = await sharp({ create: { width, height: height + pad * 2, channels: 4, background: frame } })
  .composite(shots.map((s) => { const at = { input: s.data, left, top: pad }; left += s.info.width + gap; return at; }))
  .png()
  .toBuffer();
await save(strip, "store-screenshots");

// Raw screens from the app. 1.webp comes inside a phone frame with a drop shadow, so it's cut
// down to the screen (outer edge, minus the 14px bezel) to match the other two.
const screens = process.env.FIFI_SCREENS;
if (screens) {
  await save(path.join(screens, "3.webp"), "call-morning", 1000);
  await save(path.join(screens, "2.jpg"), "streak", 1000);

  const framed = path.join(screens, "1.webp");
  const { data, info } = await sharp(framed).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const solid = (x, y) => data[(y * info.width + x) * 4 + 3] > 250;
  const midX = info.width >> 1, midY = info.height >> 1, bezel = 14;
  let l = 0, r = info.width - 1, t = 0, b = info.height - 1;
  while (!solid(l, midY)) l++;
  while (!solid(r, midY)) r--;
  while (!solid(midX, t)) t++;
  while (!solid(midX, b)) b--;
  const box = { left: l + bezel, top: t + bezel, width: r - l - bezel * 2 + 1, height: b - t - bezel * 2 + 1 };
  const corners = Buffer.from(`<svg width="${box.width}" height="${box.height}"><rect width="100%" height="100%" rx="92"/></svg>`);
  await save(await sharp(framed).extract(box).composite([{ input: corners, blend: "dest-in" }]).png().toBuffer(), "call-sergeant", 1000);
}
