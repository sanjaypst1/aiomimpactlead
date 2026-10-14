# Accessibility

Target: WCAG 2.2 Level AA where feasible for a document-heavy Next.js site.

## Implemented patterns

- **Skip link** — `SkipLink` to `#main-content`
- **Landmarks** — `<main>`, header/footer, section headings with `aria-labelledby` on key pages
- **Focus** — Visible `:focus-visible` outline (teal) in `globals.css`
- **Forms** — Labels associated with simulator selects; hard-stop region uses `role="alert"`
- **Motion** — `prefers-reduced-motion` disables smooth scrolling

## Public statement

User-facing accessibility page: `/accessibility`.

## Testing checklist

- [ ] Keyboard-only navigation through header nav and gate prev/next links
- [ ] Screen reader spot-check on home, one gate page, artifact filter
- [ ] Colour contrast on navy/teal/coral combinations (especially alert panels)
- [ ] Zoom to 200% without horizontal scroll on primary templates

## Future work

See [roadmap.md](./roadmap.md) — automated axe checks in CI, reduced-motion for GSAP sequences.
