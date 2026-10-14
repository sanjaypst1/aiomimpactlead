# Information architecture

All App Router routes as of v0.1.0. Dynamic use-case pages use slug = use case `id`.

## Primary navigation (site header)

| Route | Description |
|-------|-------------|
| `/` | Home — overview, lifecycle navigator |
| `/role` | Impact Lead role |
| `/operating-model` | Integrator operating model |
| `/playbook` | Gate index |
| `/artifacts` | Artifact catalogue (filterable) |
| `/use-cases` | Use case index |
| `/worked-example` | Synthetic IC memo walkthrough |
| `/evidence` | Sources and evidence conventions |

## Playbook gates (0–9)

| Gate | Route |
|------|-------|
| 0 Mobilise | `/playbook/mobilise` |
| 1 Intake | `/playbook/intake` |
| 2 Discovery | `/playbook/discovery` |
| 3 Human–AI design | `/playbook/human-ai-design` |
| 4 Impact assessment | `/playbook/impact-assessment` |
| 5 Readiness | `/playbook/readiness` |
| 6 Governance | `/playbook/governance` |
| 7 Pilot | `/playbook/pilot` |
| 8 Review | `/playbook/review` |
| 9 Enterprise learning | `/playbook/enterprise-learning` |

## Secondary pages

| Route | Description |
|-------|-------------|
| `/stakeholders` | Proposed stakeholder roles |
| `/meetings` | Sixteen meeting types |
| `/decision-framework` | Lenses, criteria, hard stops |
| `/comparative-practice` | Benchmark organisations |
| `/frameworks` | Mapped assurance frameworks |
| `/mobilisation-plan` | Illustrative 30/60/90 plan |
| `/metrics` | Impact and portfolio metrics |
| `/about` | Author and disclaimer |
| `/project` | Technical project notes |
| `/privacy` | Privacy notice |
| `/accessibility` | Accessibility statement |

## Dynamic

| Route | Description |
|-------|-------------|
| `/use-cases/[slug]` | Per use case detail |

## Machine-readable

| Route | Description |
|-------|-------------|
| `/sitemap.xml` | Generated from `src/app/sitemap.ts` |
| `/robots.txt` | From `src/app/robots.ts` |

## Content map

Data driving routes lives in `src/content/` (gates, meetings, artifacts, use-cases, roles, sources, decisions, frameworks, comparative, mobilisation, worked-example).
