// Snapshots the last year of commits in Troy's (private) app repos for the "A year in blocks" section.
// Usage: node scripts/contributions.mjs  (REPOS_DIR overrides the parent folder of the repos)
//
// Only a 1–4 activity level and the leading product are saved per day, never raw counts:
// commit totals aren't an approved metric (../troy-job-search/profile.md), so none reach the site.
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const reposDir = process.env.REPOS_DIR || path.resolve("..");
const products = {
  grocerybudget: ["grocerybudget", "grocerybudget-marketing"],
  fifi: ["ringrise", "ringrise-marketing"],
};

const iso = (date) => date.toISOString().slice(0, 10);
const end = new Date(`${iso(new Date())}T00:00:00Z`);
// 52 full weeks back, starting on a Sunday, like GitHub's graph.
const start = new Date(end);
start.setUTCDate(start.getUTCDate() - 364 - start.getUTCDay());

const counts = {}; // date -> { grocerybudget, fifi }
for (const [product, repos] of Object.entries(products)) {
  for (const repo of repos) {
    const dir = path.join(reposDir, repo);
    if (!fs.existsSync(path.join(dir, ".git"))) {
      console.warn(`skipping ${repo}: not found in ${reposDir}`);
      continue;
    }
    // Branches, remotes and tags only: --all would also count refs/stash, which isn't committed work.
    const log = execFileSync("git", ["-C", dir, "log", "--branches", "--remotes", "--tags", `--since=${iso(start)}`, "--format=%ad", "--date=short"], { encoding: "utf8" });
    for (const day of log.split("\n").filter(Boolean)) {
      counts[day] ??= { grocerybudget: 0, fifi: 0 };
      counts[day][product] += 1;
    }
  }
}

// Levels by quartile of active days, so the scale fits however busy the year was.
const totals = Object.values(counts).map((c) => c.grocerybudget + c.fifi).sort((a, b) => a - b);
const quartile = (q) => totals[Math.min(totals.length - 1, Math.floor(totals.length * q))];
const cuts = [quartile(0.25), quartile(0.5), quartile(0.75)];
const level = (n) => 1 + cuts.filter((cut) => n > cut).length;

const days = {};
for (const [day, c] of Object.entries(counts).sort()) {
  if (day < iso(start) || day > iso(end)) continue;
  days[day] = [c.grocerybudget >= c.fifi ? "grocerybudget" : "fifi", level(c.grocerybudget + c.fifi)];
}

const out = path.resolve("src", "content", "contributions.json");
fs.writeFileSync(out, `${JSON.stringify({ start: iso(start), end: iso(end), days }, null, 0)}\n`);
console.log(`${path.relative(process.cwd(), out)}: ${iso(start)} to ${iso(end)}, ${Object.keys(days).length} active days`);
