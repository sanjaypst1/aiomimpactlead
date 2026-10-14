# Contributing

Thank you for improving the AI Operating Model Impact Playbook. This project prioritises **factual integrity**, clear evidence labelling, and workshop-ready content over speculative claims about any institution.

## Before you start

- Read [ASSUMPTIONS.md](./ASSUMPTIONS.md) and [SOURCE_REGISTER.md](./SOURCE_REGISTER.md).
- Do **not** add confidential Future Fund or agency material. Use public citations only.
- Label new content with an appropriate `evidenceStatus` (see `src/lib/types.ts` and `EvidenceBadge`).

## Local setup

```bash
npm ci
npm run dev
```

Run checks before opening a pull request:

```bash
npm run typecheck
npm run lint
npm test
npm run build
```

## Content changes

- **Gates, meetings, artifacts, use cases:** edit files under `src/content/`. Keep IDs stable where possible; update tests in `tests/` if counts or names change.
- **Routes:** add App Router pages under `src/app/` and update `src/app/sitemap.ts` and [docs/information-architecture.md](./docs/information-architecture.md).
- **Templates:** workshop Markdown lives in `templates/`; mirror naming with artifact IDs where applicable.

## Pull requests

- One logical change per PR when practical.
- Describe evidence status of new claims in the PR body.
- Note any illustrative or proposed structures explicitly.

## Reporting security issues

See [SECURITY.md](./SECURITY.md).

## Changelog

User-facing releases: [CHANGELOG.md](./CHANGELOG.md).
