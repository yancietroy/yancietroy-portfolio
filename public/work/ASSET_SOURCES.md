# Asset sources

- `grocerybudget/hero-v2|inside-cart|insights.webp`: converted from `grocerybudget-marketing/public/mockups/`.
- `fifi/*`: copied from `ringrise-marketing` (scenes, character art, icon).
- `about/portrait.webp`: from the old site's About page in `../framer-backup/about/`, reused at Troy's request.
- `src/app/icon.svg`: the old site's "YTS" favicon redrawn as vector paths. `icon.png` (32px) and `apple-icon.png` (180px) are rendered from it with sharp.
- Everything else (`velaro/`, `allie/`, `marketing-sites/`, `earlier-work/`, and the other `grocerybudget/` images): Troy's own case-study images, backed up from his old Framer site to `../framer-backup/` and converted with `node scripts/import-assets.mjs` (WebP, max 2000px wide).

The EmergencyCare concept from the backup is deliberately excluded: its screens show phone numbers.
