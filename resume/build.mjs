// Builds both résumé PDFs into public/resume/ with headless Chrome.
// Usage: node resume/build.mjs
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { resumes, shared } from "./content.mjs";

const root = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(root, "..", "public", "resume");
const htmlDir = path.join(root, "out");
const chrome = [
  process.env.CHROME_PATH,
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
].find((p) => p && fs.existsSync(p));

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const css = `
@page { size: Letter; margin: 0.5in 0.6in 0.45in; }
* { box-sizing: border-box; }
body { margin: 0; font-family: Calibri, Carlito, Arial, sans-serif; font-size: 10.5pt; line-height: 1.22; color: #000; }
h1 { margin: 0; text-align: center; font-family: Garamond, "EB Garamond", Georgia, serif; font-weight: 400; font-size: 28pt; line-height: 1.05; }
.title { margin: 2pt 0 5pt; text-align: center; font-family: Georgia, serif; font-style: italic; font-size: 11.5pt; color: #333; }
.contact { margin: 0; padding: 4pt 0; border-top: 0.75pt solid #000; border-bottom: 0.75pt solid #000; text-align: center; }
.contact a { color: #1155cc; text-decoration: underline; }
h2 { margin: 9pt 0 3pt; font-family: Garamond, "EB Garamond", Georgia, serif; font-weight: 700; font-size: 11pt; letter-spacing: .06em; text-transform: uppercase; }
p { margin: 0; }
.row { display: flex; justify-content: space-between; gap: 12pt; margin-top: 6pt; }
.row:first-of-type { margin-top: 0; }
.row strong { font-weight: 700; }
ul { margin: 1pt 0 0; padding-left: 26pt; }
li { margin: 0 0 1pt; padding-left: 3pt; }
.skills p + p { margin-top: 2pt; }
`;

const row = (left, date) => `<div class="row"><span>${left}</span><span>${esc(date)}</span></div>`;
const list = (items) => `<ul>${items.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>`;

function render(r) {
  const contact = shared.contact
    .map((c) => (typeof c === "string" ? esc(c) : `<a href="${c.href}">${esc(c.text)}</a>`))
    .join(" &nbsp;|&nbsp; ");
  const experience = r.experience
    .map((e) => row(`<strong>${esc(e.role)}</strong> | ${esc(e.company)}, ${esc(e.location)}`, e.date) + list(e.bullets))
    .join("");
  const projects = r.projects
    .map((p) => row(`<strong>${esc(p.name)}</strong> | ${esc(p.meta)}`, p.date) + list(p.bullets))
    .join("");
  const skills = r.skills.map(([k, v]) => `<p><strong>${esc(k)}:</strong> ${esc(v)}</p>`).join("");
  const { degree, school, date } = shared.education;

  return `<!doctype html><html lang="en"><head><meta charset="utf-8">
<title>${esc(shared.name)} – ${esc(r.title)}</title><style>${css}</style></head><body>
<h1>${esc(shared.name)}</h1>
<p class="title">${esc(r.title)}</p>
<p class="contact">${contact}</p>
<h2>Professional Summary</h2><p>${esc(r.summary)}</p>
<h2>Work Experience</h2>${experience}
<h2>Projects</h2>${projects}
<h2>Skills</h2><div class="skills">${skills}</div>
<h2>Education</h2>${row(`<strong>${esc(degree)}</strong> | ${esc(school)}`, date)}
</body></html>`;
}

if (!chrome) throw new Error("Chrome or Edge not found; set CHROME_PATH.");
fs.mkdirSync(outDir, { recursive: true });
fs.mkdirSync(htmlDir, { recursive: true });

for (const r of Object.values(resumes)) {
  const html = path.join(htmlDir, `${r.file}.html`);
  const pdf = path.join(outDir, `${r.file}.pdf`);
  fs.writeFileSync(html, render(r));
  execFileSync(chrome, ["--headless=new", "--disable-gpu", "--no-pdf-header-footer", `--print-to-pdf=${pdf}`, pathToFileURL(html).href], { stdio: "ignore" });
  const pages = (fs.readFileSync(pdf, "latin1").match(/\/Type\s*\/Page[^s]/g) || []).length;
  console.log(`${path.basename(pdf)}: ${pages} page${pages === 1 ? "" : "s"}`);
  if (pages !== 1) process.exitCode = 1;
}
