# Deployment

## Vercel (recommended)

1. Connect the Git repository to a Vercel project.
2. **Framework:** Next.js (auto-detected).
3. **Environment variables:**
   - `NEXT_PUBLIC_SITE_URL` — canonical site URL (e.g. `https://your-domain.example`)
4. **Build:** `npm run build`
5. **Install:** `npm ci` (default)

Preview deployments receive PR URLs; set `NEXT_PUBLIC_SITE_URL` per environment if sitemap URLs must differ.

## Other Node hosts

```bash
npm ci
npm run build
npm start
```

Set `PORT` as required by the host. Provide `NEXT_PUBLIC_SITE_URL` at build time for correct sitemap absolute URLs.

## CI parity

GitHub Actions (`.github/workflows/ci.yml`) runs `typecheck`, `lint`, `test`, and `build` on push/PR.

## Secrets

No server secrets required for static/content mode v0.1.0. Do not commit `.env.local`.
