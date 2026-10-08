# Yancie Troy Portfolio

Code-owned portfolio for Product Designer and Product Designer & Product Builder roles.

## Local development

```bash
npm install
npm run dev
```

## Verification

```bash
npm test
npm run typecheck
npm run build
```

The production build is a static export in `out/`. Pushing to `main` deploys it to https://yancietroy.github.io via `.github/workflows/deploy-pages.yml`.

## Content still needed

- Velaro, Allie, marketing-site and earlier-work images come from `../framer-backup` via `scripts/import-assets.mjs`.
- Keep metrics durable (cumulative totals, fixed past windows); only use metrics approved in `troy-job-search/profile.md`.
- Link the résumé PDFs in `public/resume/` from the résumé page. They're generated in the private `troy-job-search` repo (`node resume/build.mjs --publish`), not edited here.
