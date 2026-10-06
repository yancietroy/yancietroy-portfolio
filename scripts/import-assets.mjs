// Converts selected images from the Framer backup into web-sized WebP files.
// Usage: node scripts/import-assets.mjs  (BACKUP_DIR overrides ../framer-backup)
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const backup = process.env.BACKUP_DIR || path.resolve("..", "framer-backup");
const out = path.resolve("public", "work");

const map = {
  velaro: {
    "velaro-customer-engagement-platform/02": "cover",
    "velaro-customer-engagement-platform/03": "ai-chatbot",
    "velaro-customer-engagement-platform/04": "workflow-builder",
    "velaro-customer-engagement-platform/05": "reports",
    "velaro-customer-engagement-platform/06": "inbox",
    "velaro-customer-engagement-platform/07": "chat-window",
    "velaro-customer-engagement-platform/08": "chat-window-designer",
    "velaro-customer-engagement-platform/09": "templates-and-deployment",
    "velaro-customer-engagement-platform/10": "omnichannel-bot",
  },
  allie: {
    "allie-clinic/02": "cover",
    "allie-clinic/03": "clinic-dashboard",
    "allie-clinic/04": "practitioner-views",
    "allie-clinic/05": "mobile-and-targets",
    "allie-clinic/06": "actions-and-notes",
    "allie-clinic/07": "mobile-and-integrations",
  },
  grocerybudget: {
    "grocerybudget-app/03": "store-screenshots",
    "grocerybudget-app/04": "label-scan",
    "grocerybudget-app/05": "receipt-scan",
    "grocerybudget-app/06": "marketing-site",
  },
  "marketing-sites": {
    "marketing-website-designs/03": "allie-landing",
    "marketing-website-designs/04": "allie-features",
    "marketing-website-designs/05": "allie-pricing",
    "marketing-website-designs/07": "uwai-landing",
    "marketing-website-designs/08": "uwai-about",
  },
  "earlier-work": {
    "digital-contributions/03": "nifty",
    "digital-contributions/04": "gluta-c",
    "digital-contributions/05": "soundcore",
    "digital-contributions/06": "seatmi",
  },
};

for (const [slug, files] of Object.entries(map)) {
  fs.mkdirSync(path.join(out, slug), { recursive: true });
  for (const [src, name] of Object.entries(files)) {
    const [dir, prefix] = src.split("/");
    const file = fs.readdirSync(path.join(backup, dir)).find((f) => f.startsWith(`${prefix}-`));
    if (!file) throw new Error(`Missing ${src} in ${backup}`);
    const dest = path.join(out, slug, `${name}.webp`);
    const info = await sharp(path.join(backup, dir, file)).resize({ width: 2000, withoutEnlargement: true }).webp({ quality: 80 }).toFile(dest);
    console.log(`${slug}/${name}.webp  ${info.width}x${info.height}  ${Math.round(info.size / 1024)} KB`);
  }
}
