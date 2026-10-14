# Source register

Canonical bibliography for public and benchmark sources referenced by the playbook. In-app mirror: `src/content/sources.ts` and `/evidence`.

**Default access date for register entries:** 2026-10-13 (unless otherwise noted).

| ID | Title | Publisher | Date | Evidence status | URL |
|----|-------|-----------|------|-----------------|-----|
| src-ff-yir-2024-25 | Future Fund Year in Review 2024–25 | Future Fund (Australian Government) | 2024-09 | confirmed-public | https://www.futurefund.gov.au/publications/year-review-2024-25 |
| src-ff-corp-plan-2025-26 | Corporate Plan 2025–26 | Future Fund (Australian Government) | 2025-08 | confirmed-public | https://www.futurefund.gov.au/publications/corporate-plan-2025-26 |
| src-ff-ai-transparency | Artificial Intelligence Transparency Statement | Future Fund (Australian Government) | 2024 | confirmed-public | https://www.futurefund.gov.au/about-us/artificial-intelligence-transparency-statement |
| src-nf-ai-assurance-2024 | National Framework for the Assurance of Artificial Intelligence in Government | Department of Industry, Science and Resources (Australia) | 2024-06-21 | confirmed-public | https://www.industry.gov.au/publications/national-framework-assurance-artificial-intelligence-government |
| src-dta-ai-assurance-pilot | AI Assurance Framework Pilot | Digital Transformation Agency (Australia) | 2024 | confirmed-public | https://www.dta.gov.au/ai-assurance-framework |
| src-asic-rep-798 | Report 798: Deploying AI in Financial Services | ASIC | 2024-10-29 | confirmed-public | https://www.asic.gov.au/regulatory-resources/find-a-document/reports/rep-798-deploying-ai-in-financial-services/ |
| src-nist-ai-rmf | Artificial Intelligence Risk Management Framework (AI RMF 1.0) | NIST (US) | 2023-01 | international-benchmark | https://www.nist.gov/itl/ai-risk-management-framework |
| src-iso-42001 | ISO/IEC 42001:2023 — AI management system | ISO | 2023-12 | international-benchmark | https://www.iso.org/standard/81230.html |
| src-nbim-strategy-25 | Strategy 25 Close-Out Report | NBIM | 2024 | international-benchmark | https://www.nbim.no/en/publications/reports/2024/strategy-25-close-out-report/ |
| src-wef-ai-fs-playbook | A Blueprint for Intelligent Finance: AI Playbook for Financial Services | World Economic Forum | 2024 | industry-guidance | https://www.weforum.org/publications/a-blueprint-for-intelligent-finance-ai-playbook-for-financial-services/ |

## How sources are used

- **confirmed-public:** Direct citation of published agency or government material; does not by itself confirm internal AI operating model details.
- **international-benchmark / industry-guidance:** Comparative patterns only; not Future Fund policy.

## Maintenance

When adding a source:

1. Add a row here with access date and evidence status.
2. Add a matching entry in `src/content/sources.ts`.
3. Link from relevant gates, frameworks, or evidence pages where claims depend on the source.
