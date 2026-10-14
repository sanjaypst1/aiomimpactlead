# Performance

## Stack characteristics

- Next.js 16 App Router with mostly static content pages
- Client components isolated to interactive tools (simulator, heat map, 3D/visual sections)
- Content loaded from in-bundle TypeScript modules (no runtime CMS)

## Recommendations

1. **Keep interactives lazy** — Import heavy visualisations only on pages that need them.
2. **Images** — Use Next.js `Image` with explicit dimensions when adding media.
3. **Fonts** — Google fonts via `next/font` with subsetting (already in `layout.tsx`).
4. **Production** — Run `npm run build` and review route bundle sizes in build output.

## Monitoring (production)

On Vercel or similar:

- Enable Web Vitals analytics
- Watch LCP on home and `/playbook` index

## Budgets (guidance)

| Metric | Target |
|--------|--------|
| LCP | < 2.5s on broadband |
| CLS | < 0.1 |
| INP | < 200ms on primary nav |

No formal budget enforcement in CI for v0.1.0.
