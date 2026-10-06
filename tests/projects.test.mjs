import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";

const source = readFileSync(new URL("../src/content/projects.ts", import.meta.url), "utf8");

test("portfolio contains six unique project slugs", () => {
  const slugs = [...source.matchAll(/slug: "([^"]+)"/g)].map((match) => match[1]);
  assert.equal(slugs.length, 6);
  assert.equal(new Set(slugs).size, slugs.length);
});

test("every referenced image exists in public/work", () => {
  const refs = [...source.matchAll(/img\("([^"]+)", "([^"]+)"\)/g)].map(([, slug, file]) => `public/work/${slug}/${file}`);
  assert.ok(refs.length > 20);
  for (const ref of refs) assert.ok(existsSync(new URL(`../${ref}`, import.meta.url)), `missing ${ref}`);
});

test("no stale point-in-time metrics", () => {
  assert.doesNotMatch(source, /\bMRR\b|\$436|293 paying|monthly active/i);
});
