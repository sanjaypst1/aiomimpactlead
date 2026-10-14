# Security Policy

## Supported versions

| Version | Supported |
|---------|-----------|
| 0.1.x   | Yes       |

## Reporting a vulnerability

If you discover a security issue in this application (dependency, exposed secret, unsafe configuration):

1. **Do not** open a public issue with exploit details.
2. Contact the repository maintainer through your organisation’s secure channel.
3. Include steps to reproduce, impact, and suggested mitigation if known.

This is a static/content-heavy Next.js site with no authenticated user area in v0.1.0. Reports about **incorrect regulatory claims** or **misleading evidence labelling** are also welcome via the same channel.

## Secrets

- Never commit `.env`, `.env.local`, API keys, or internal agency documents.
- Use `.env.example` as the only committed environment template.

## Dependencies

Run `npm audit` periodically and address high-severity issues. CI runs `npm ci` and build on pull requests.
