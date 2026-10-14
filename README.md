# AI Operating Model Impact Playbook

An evidence-led, interactive playbook for translating AI ambition into accountable delivery across lifecycle gates, roles, meetings, and artifacts. Content is illustrated for sovereign wealth and public-interest investors, with Australian assurance and financial-services guidance woven into proposed operating-model patterns.

## Author positioning

**Sanjay** is presented as the playbook author and facilitator. This repository and site **do not** state or imply current or past employment at the Future Fund or any other specific institution. Future Fund references cite **public publications only**; internal structures shown here are **proposed for discussion** unless explicitly labelled as confirmed-public.

## Quick start

Prerequisites: Node.js 20+, npm.

```bash
npm ci
cp .env.example .env.local   # optional; set NEXT_PUBLIC_SITE_URL for sitemap/metadata
npm run dev                  # http://localhost:3000
```

| Script | Purpose |
|--------|---------|
| `npm run dev` | Next.js development server |
| `npm run build` | Production build |
| `npm start` | Serve production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript (`tsc --noEmit`) |
| `npm test` | Vitest content and rule tests |

## Repository structure

```
├── src/
│   ├── app/              # Next.js App Router pages
│   ├── components/       # UI, layout, interactive tools
│   └── content/          # Typed playbook data (gates, artifacts, use cases, sources)
├── docs/                 # Maintainer and design documentation
├── templates/            # Editable Markdown artifact templates
├── tests/                # Vitest integrity and rule tests
└── .github/workflows/    # CI pipeline
```

Key content modules live under `src/content/` with types in `src/lib/types.ts`. Gate URLs are mapped in `src/lib/gate-routes.ts`.

## Disclaimer

This project is **not** legal, investment, or regulatory advice. Org charts, committees, use cases, gates, and internal AI program structures are **proposed or illustrative** unless marked with a confirmed-public evidence status. See [ASSUMPTIONS.md](./ASSUMPTIONS.md) and the site `/about` page.

## Deployment (Vercel)

1. Import the repository in [Vercel](https://vercel.com).
2. Framework preset: **Next.js** (default).
3. Set environment variable `NEXT_PUBLIC_SITE_URL` to the production URL (used by `sitemap.ts` and `robots.ts`).
4. Build command: `npm run build`; output: Next.js default.

See [docs/deployment.md](./docs/deployment.md) for details.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md).

## Sources and evidence

Public source register: [SOURCE_REGISTER.md](./SOURCE_REGISTER.md). In-app catalogue: `/evidence`.

## License

Private / internal use unless otherwise specified by the repository owner.
