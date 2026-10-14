import type { Source } from "@/lib/types";

export const sources = [
  {
    id: "src-ff-yir-2024-25",
    title: "Future Fund Year in Review 2024–25",
    publisher: "Future Fund (Australian Government)",
    date: "2024-09",
    url: "https://www.futurefund.gov.au/publications/year-review-2024-25",
    accessDate: "2026-10-13",
    evidenceStatus: "confirmed-public",
    relevance:
      "Public accountability narrative, governance context, and strategic priorities for a sovereign wealth fund—used to anchor illustrative operating-model proposals, not as confirmation of internal AI structures.",
  },
  {
    id: "src-ff-corp-plan-2025-26",
    title: "Corporate Plan 2025–26",
    publisher: "Future Fund (Australian Government)",
    date: "2025-08",
    url: "https://www.futurefund.gov.au/publications/corporate-plan-2025-26",
    accessDate: "2026-10-13",
    evidenceStatus: "confirmed-public",
    relevance:
      "Forward-looking objectives and capability themes; informs alignment checks in Gates 1–2 without asserting unpublished AI program design.",
  },
  {
    id: "src-ff-ai-transparency",
    title: "Artificial Intelligence Transparency Statement",
    publisher: "Future Fund (Australian Government)",
    date: "2024",
    url: "https://www.futurefund.gov.au/about-us/artificial-intelligence-transparency-statement",
    accessDate: "2026-10-13",
    evidenceStatus: "confirmed-public",
    relevance:
      "Public AI use principles and transparency commitments—primary reference for assurance, oversight, and disclosure patterns in proposed artifacts.",
  },
  {
    id: "src-nf-ai-assurance-2024",
    title: "National Framework for the Assurance of Artificial Intelligence in Government",
    publisher: "Department of Industry, Science and Resources (Australia)",
    date: "2024-06",
    url: "https://www.industry.gov.au/publications/national-framework-assurance-artificial-intelligence-government",
    accessDate: "2026-10-13",
    evidenceStatus: "confirmed-public",
    relevance:
      "Whole-of-government assurance expectations for AI lifecycle, risk, and accountability—maps to readiness domains and Gate 3–4 assurance planning.",
  },
  {
    id: "src-dta-ai-assurance-pilot",
    title: "AI Assurance Framework Pilot (DTA)",
    publisher: "Digital Transformation Agency (Australia)",
    date: "2024",
    url: "https://www.dta.gov.au/ai-assurance-framework",
    accessDate: "2026-10-13",
    evidenceStatus: "confirmed-public",
    relevance:
      "Practical assurance pilot materials and assessment patterns for public-sector AI systems; informs tiering and evidence pack design.",
  },
  {
    id: "src-asic-rep-798",
    title: "Report 798: Deploying AI in Financial Services",
    publisher: "Australian Securities and Investments Commission (ASIC)",
    date: "2024-10",
    url: "https://www.asic.gov.au/regulatory-resources/find-a-document/reports/rep-798-deploying-ai-in-financial-services/",
    accessDate: "2026-10-13",
    evidenceStatus: "confirmed-public",
    relevance:
      "Regulatory expectations on governance, testing, monitoring, and third-party AI in financial services—critical for risk tiering and hard stops.",
  },
  {
    id: "src-nist-ai-rmf",
    title: "Artificial Intelligence Risk Management Framework (AI RMF 1.0)",
    publisher: "National Institute of Standards and Technology (US)",
    date: "2023-01",
    url: "https://www.nist.gov/itl/ai-risk-management-framework",
    accessDate: "2026-10-13",
    evidenceStatus: "international-benchmark",
    relevance:
      "Govern–Map–Measure–Manage lifecycle for AI risk; complements Australian assurance framing in proposed control design.",
  },
  {
    id: "src-iso-42001",
    title: "ISO/IEC 42001:2023 — AI management system",
    publisher: "International Organization for Standardization",
    date: "2023-12",
    url: "https://www.iso.org/standard/81230.html",
    accessDate: "2026-10-13",
    evidenceStatus: "international-benchmark",
    relevance:
      "Management-system structure for responsible AI; optional maturity anchor for portfolio assurance and audit trail artifacts.",
  },
  {
    id: "src-nbim-strategy-25",
    title: "Strategy 25 Close-Out Report",
    publisher: "Norges Bank Investment Management (NBIM)",
    date: "2024",
    url: "https://www.nbim.no/en/publications/reports/2024/strategy-25-close-out-report/",
    accessDate: "2026-10-13",
    evidenceStatus: "international-benchmark",
    relevance:
      "Large-scale asset owner operating-model and technology evolution lessons; comparative benchmark only—not a Future Fund blueprint.",
  },
  {
    id: "src-wef-ai-fs-playbook",
    title: "A Blueprint for Intelligent Finance: AI Playbook for Financial Services",
    publisher: "World Economic Forum",
    date: "2024",
    url: "https://www.weforum.org/publications/a-blueprint-for-intelligent-finance-ai-playbook-for-financial-services/",
    accessDate: "2026-10-13",
    evidenceStatus: "industry-guidance",
    relevance:
      "Cross-industry patterns for value, risk, and operating-model change in financial services AI—used for comparative lessons, not prescriptive policy.",
  },
] as const satisfies readonly Source[];

export type SourceId = (typeof sources)[number]["id"];

export const sourceById: Record<string, Source> = Object.fromEntries(
  sources.map((s) => [s.id, s]),
);
