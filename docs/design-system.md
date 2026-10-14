# Design system

Visual language for the playbook site. Implementation: Tailwind CSS v4 + CSS variables in `src/app/globals.css`.

## Colour tokens

| Token | Role | Hex (approx.) |
|-------|------|----------------|
| `--navy` / `navy` | Headings, chrome | `#0b1f33` |
| `--cream` / `cream` | Page background | `#f7f4ef` |
| `--teal` / `teal` | Links, focus, accents | `#2a6f6a` |
| `--amber` / `amber` | Illustrative / workshop borders | `#c4872a` |
| `--coral` / `coral` | Alerts, hard stops | `#c45c4a` |
| `--green` / `green` | Positive status text | `#3f7a5a` |
| `--muted` | Secondary text | `#5c6675` |
| `--line` | Borders | `#d9d2c8` |
| `--surface` | Cards | `#fffdf9` |

## Typography

- **Sans:** IBM Plex Sans (`--font-ibm-plex-sans`) — UI, headings, navigation
- **Serif:** Source Serif 4 (`--font-source-serif`) — long-form prose via `Prose` component

## Components (`src/components/ui/`)

- `Button` / link variants
- `Card`, `Section`, `PageHero`
- `Badge`, `EvidenceBadge`
- `Prose` — playbook body copy

## Layout

- `SiteHeader`, `SiteFooter`, `SkipLink`
- Utility: `.page-shell` for content width in `globals.css`

## Motion

- `ScrollReveal` and GSAP used sparingly on marketing surfaces
- `prefers-reduced-motion` reduces scroll smoothing

## Evidence labelling

Always pair illustrative interactives (simulator, heat maps, explorers) with `EvidenceBadge` where status is non-public.
