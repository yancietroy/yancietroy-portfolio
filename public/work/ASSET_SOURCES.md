# Asset sources

- `grocerybudget/hero-v2|inside-cart|insights.webp`: converted from `grocerybudget-marketing/public/mockups/`.
- `fifi/*`: Troy's own Fifi assets, converted with `node scripts/import-fifi.mjs`. Covers (`cover`, `cast`, `what-arrives`, `different-ways`, `how-it-works`, `note`) and the six-screen `store-screenshots` strip come from `~/Downloads/Fifi Assets/`. `call-morning`, `call-sergeant` and `streak` are real app screens Troy shared in chat (run with `FIFI_SCREENS` pointing at them). `icon.png` is from `ringrise-marketing`.
- `about/portrait.webp`: from the old site's About page in `../framer-backup/about/`, reused at Troy's request.
- `src/app/icon.svg`: the old site's "YTS" favicon redrawn as vector paths. `icon.png` (32px) and `apple-icon.png` (180px) are rendered from it with sharp.
- Everything else (`velaro/`, `allie/`, `marketing-sites/`, `earlier-work/`, and the other `grocerybudget/` images): Troy's own case-study images, backed up from his old Framer site to `../framer-backup/` and converted with `node scripts/import-assets.mjs` (WebP, max 2000px wide).

The EmergencyCare concept from the backup is deliberately excluded: its screens show phone numbers.
