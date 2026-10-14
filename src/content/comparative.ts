import type { ComparativeExample } from "@/lib/types";

export const comparativeExamples = [
  {
    id: "cmp-nbim-scale",
    name: "NBIM — Strategy 25 scale and platform consolidation",
    context:
      "Global asset owner public close-out on technology, data, and operating-model evolution over a multi-year strategy horizon.",
    evidenceStatus: "international-benchmark",
    transferableLesson:
      "Separate platform modernisation from use-case delivery; fund both, but gate AI use cases on shared data and identity foundations.",
    howItInformsProposal:
      "Readiness domain weighting for data-model and technology-platform in Gate 3; enterprise architect as mandatory reviewer before Gate 5.",
    limitations:
      "NBIM context differs in mandate, geography, and public disclosure regime; not transferable as a Future Fund org chart.",
    sourceIds: ["src-nbim-strategy-25"],
  },
  {
    id: "cmp-wef-value-risk",
    name: "WEF — Intelligent Finance AI Playbook",
    context:
      "Cross-firm guidance on value pools, risk themes, and operating-model implications for financial-services AI.",
    evidenceStatus: "industry-guidance",
    transferableLesson:
      "Anchor each use case to a measurable decision or workflow outcome, not model capability alone.",
    howItInformsProposal:
      "Impact Hypothesis Statement mandatory fields and benefits baseline in Gate 2; portfolio dashboard in Gate 9.",
    limitations:
      "Industry playbook is not regulatory text; does not replace ASIC or Australian Government assurance requirements.",
    sourceIds: ["src-wef-ai-fs-playbook"],
  },
  {
    id: "cmp-mckinsey-operating-model",
    name: "McKinsey — AI operating model patterns (industry synthesis)",
    context:
      "Common consulting pattern: federated innovation with central guardrails, product teams, and a value office.",
    evidenceStatus: "industry-guidance",
    transferableLesson:
      "Impact Lead functions as a value office partner—not a substitute for product, engineering, or risk ownership.",
    howItInformsProposal:
      "Role boundaries in mustNotAbsorb lists; Gate 7 operating model delta brief before scale.",
    limitations:
      "Generic pattern; no single citation in public Future Fund materials—treat as illustrative design choice.",
    sourceIds: ["src-wef-ai-fs-playbook"],
  },
  {
    id: "cmp-deloitte-trust",
    name: "Deloitte — Trusted AI in regulated institutions",
    context:
      "Industry framing on trust, explainability, and control testing for AI in regulated financial contexts.",
    evidenceStatus: "industry-guidance",
    transferableLesson:
      "Trust is operationalised through evidence packs and monitoring, not policy slides.",
    howItInformsProposal:
      "Evidence Pack Index and Model Performance Monitoring Plan as Gate 6 exit requirements for tier 2+.",
    limitations:
      "Vendor perspectives vary; align hard stops to ASIC and national assurance frameworks first.",
    sourceIds: ["src-asic-rep-798", "src-nf-ai-assurance-2024"],
  },
  {
    id: "cmp-accenture-workforce",
    name: "Accenture — Workforce and human–AI collaboration",
    context:
      "Change and workforce implications of copilots and agentic patterns in knowledge work.",
    evidenceStatus: "industry-guidance",
    transferableLesson:
      "Redesign workflows and incentives before scaling seat-based copilot licences.",
    howItInformsProposal:
      "Change Impact Assessment and Learning Plan required at Gate 4; pilot success criteria include adoption quality metrics.",
    limitations:
      "Workforce data is organisation-specific; illustrative use cases require local industrial relations and culture review.",
    sourceIds: ["src-wef-ai-fs-playbook"],
  },
  {
    id: "cmp-bcg-portfolio",
    name: "BCG — AI portfolio prioritisation",
    context:
      "Portfolio lens: feasibility, value, risk, and strategic fit scoring for AI initiatives.",
    evidenceStatus: "industry-guidance",
    transferableLesson:
      "Kill or pause early when readiness gaps exceed value at risk; avoid parallel unfunded pilots.",
    howItInformsProposal:
      "Gate 0–1 triage meetings and possibleDecisions include defer/pivot; portfolio health dashboard at Gate 9.",
    limitations:
      "Scoring weights must be set by local executives; not implied as Future Fund committee practice.",
    sourceIds: ["src-wef-ai-fs-playbook"],
  },
  {
    id: "cmp-au-public-sector",
    name: "Australian public sector — AI assurance alignment",
    context:
      "National assurance framework and DTA pilot practices for government AI systems.",
    evidenceStatus: "confirmed-public",
    transferableLesson:
      "Proportionate assurance: higher tiers demand independent review and stronger evidence before production.",
    howItInformsProposal:
      "Risk tiering matrix, assurance plan templates, and hard stops on missing evidence for tier 3–4.",
    limitations:
      "Future Fund is not a generic agency; apply framework themes while respecting fund-specific governance and secrecy needs.",
    sourceIds: ["src-nf-ai-assurance-2024", "src-dta-ai-assurance-pilot"],
  },
  {
    id: "cmp-asic-lessons",
    name: "ASIC REP 798 — Deployment lessons for financial services AI",
    context:
      "October 2024 ASIC report on governance, testing, monitoring, and third-party AI in financial services.",
    evidenceStatus: "confirmed-public",
    transferableLesson:
      "Material customer or investor impact requires documented testing, human oversight, and ongoing monitoring—not one-off model validation.",
    howItInformsProposal:
      "Hard stops on production deployment without monitoring plan; vendor AI assessment for embedded models.",
    limitations:
      "Report speaks to regulatory expectations broadly; specific obligations depend on entity type and activities—legal review required.",
    sourceIds: ["src-asic-rep-798"],
  },
] as const satisfies readonly ComparativeExample[];
