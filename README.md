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

- Replace Velaro and GrowthBox placeholder artwork with exports from the existing Framer portfolio.
- Keep metrics durable (cumulative totals, fixed past windows); see `resume/README.md`.
- Link the résumé PDFs in `public/resume/` from the résumé page.
- Confirm the production domain and update `src/app/sitemap.ts` and `public/robots.txt` if it is not `yancietroy.com`.
