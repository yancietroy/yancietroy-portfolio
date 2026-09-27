import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const source = readFileSync(new URL("../src/content/projects.ts", import.meta.url), "utf8");

test("portfolio contains four unique project slugs", () => {
  const slugs = [...source.matchAll(/slug: "([^"]+)"/g)].map((match) => match[1]);
  assert.equal(slugs.length, 4);
  assert.equal(new Set(slugs).size, slugs.length);
});

test("flagship products use local cover assets", () => {
  assert.match(source, /slug: "grocerybudget"[\s\S]*cover: assetPath\("\/work\/grocerybudget\//);
  assert.match(source, /slug: "fifi"[\s\S]*cover: assetPath\("\/work\/fifi\//);
});
