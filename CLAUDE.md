# Portfolio repo: scope

This repo holds Troy's portfolio site (Next.js static export) and nothing else. Do job-search and résumé work in `../troy-job-search`, not here.

## Where the facts come from

Read these, but don't edit them from this repo:

- `../troy-job-search/profile.md`: verified experience, the metrics he's approved, and which projects back which claims. The site must not contradict it.
- `../troy-job-search/resume/content.mjs`: the exact résumé wording and dates.
- `../grocerybudget/docs/` and `../ringrise/docs/`: product, design and metrics source material. RingRise is Fifi's old codebase name.

Every metric shown on the site has to be in the approved metrics list in `profile.md`. Use only durable numbers (cumulative totals, fixed past windows), never MRR, active subscriptions or MAU.

## Don't

- Don't pull content or assets from the old Framer site (`yancietroy.framer.website`). The new site is written from the sources above.
- Don't edit `public/resume/*.pdf` by hand. They're published from `troy-job-search` with `node resume/build.mjs --publish`.
- Don't publish phone numbers or home addresses.
