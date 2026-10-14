# Content model

Typed content modules in `src/content/` with schemas in `src/lib/types.ts`.

## Core entities

| Module | File | Description |
|--------|------|-------------|
| Gates | `gates.ts` | Ten lifecycle gates (0–9): criteria, activities, meetings, artifacts |
| Meetings | `meetings.ts` | Sixteen workshop / forum types |
| Artifacts | `artifacts.ts` | Records, packs, registers by category and gate |
| Use cases | `use-cases.ts` | Function-area scenarios with risk tier |
| Roles | `roles.ts` | Stakeholder and Impact Lead roles |
| Sources | `sources.ts` | Public bibliography with `evidenceStatus` |
| Decisions | `decisions.ts` | Lenses, criteria, hard stops, reassessment triggers |
| Frameworks | `frameworks.ts` | External framework mapping |
| Comparative | `comparative.ts` | Benchmark organisations |
| Mobilisation | `mobilisation.ts` | 30/60/90 objectives |
| Worked example | `worked-example.ts` | Synthetic gate walkthrough steps |
| Site | `site.ts` | Global copy, nav, disclaimer |

## Shared fields

- **`id`** — Stable slug for linking (`gate-0`, `mtg-*`, `art-*`, `uc-*`, `src-*`)
- **`evidenceStatus`** — Where applicable; drives badges and integrity policy
- **Gate linkage** — Gates reference meeting IDs and artifact IDs; artifacts list gate numbers

## Helpers

- `src/lib/content-helpers.ts` — Resolve gate, artifact names
- `src/lib/gate-routes.ts` — Map gate numbers to `/playbook/*` paths
- `src/lib/labels.ts` — Human-readable risk tier labels
- `src/lib/simulator.ts` — Deterministic use-case tiering rules (tests)

## Templates

Workshop-facing Markdown blanks live in `templates/` and should mirror artifact IDs where possible.
