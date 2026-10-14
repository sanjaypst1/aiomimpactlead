# Evidence strategy

## Principles

1. **Label every claim** — Use `evidenceStatus` values consistently (`confirmed-public`, `proposed-illustrative`, `international-benchmark`, `industry-guidance`, `synthetic-example`).
2. **Separate institution from pattern** — Public Future Fund citations anchor context; gates, meetings, and artifacts describe **proposed** delivery patterns unless sourced.
3. **No confidential paste** — Workshop templates and issues must not contain agency-confidential data.
4. **Traceability** — Material claims should link to `src/content/sources.ts` IDs or SOURCE_REGISTER rows.

## UI conventions

- `EvidenceBadge` on pages and interactive tools signals default status for that surface.
- `/evidence` lists the full source catalogue with relevance notes.

## Content workflow

| Step | Action |
|------|--------|
| Intake | Classify new idea as public citation vs illustrative proposal |
| Draft | Add to `src/content/*` with `evidenceStatus` on records |
| Review | Cross-check against ASSUMPTIONS.md |
| Release | Update CHANGELOG and SOURCE_REGISTER if sources change |

## Testing

`tests/content-integrity.test.ts` guards minimum corpus size (gates, meetings, use cases, hard stops, sources).
