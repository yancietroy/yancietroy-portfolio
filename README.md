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

The production build is a static export in `out/`, suitable for Cloudflare Pages. Set the build command to `npm run build` and output directory to `out`.

## Content still needed

- Replace the Velaro and GrowthBox placeholder artwork with new visuals (not from the Framer site).
- Keep metrics durable (cumulative totals, fixed past windows); only use metrics approved in `troy-job-search/profile.md`.
- Link the résumé PDFs in `public/resume/` from the résumé page. They're generated in the private `troy-job-search` repo (`node resume/build.mjs --publish`), not edited here.
- Confirm the production domain and update `src/app/sitemap.ts` and `public/robots.txt` if it is not `yancietroy.com`.
