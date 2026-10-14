import type {
  DecisionCriterion,
  HardStop,
  ReassessmentTrigger,
} from "@/lib/types";

export const decisionLenses = [
  "strategic-alignment",
  "impact-and-benefits",
  "risk-and-assurance",
  "readiness-and-feasibility",
  "operating-model-and-change",
  "stakeholder-trust",
] as const;

export const decisionCriteria = [
  {
    id: "dc-strategy-1",
    lens: "strategic-alignment",
    question:
      "Does the use case advance published strategic priorities and guardrails without creating silent policy drift?",
    signals: [
      "Explicit link to corporate plan themes (public)",
      "Sponsor can articulate non-goals and boundaries",
      "No conflict with AI transparency commitments",
    ],
    evidenceStatus: "proposed-illustrative",
  },
  {
    id: "dc-impact-1",
    lens: "impact-and-benefits",
    question:
      "Is the impact hypothesis measurable within two reporting cycles, with a credible baseline?",
    signals: [
      "Named decision or workflow outcome",
      "Leading and lagging metrics defined",
      "Counterfactual or control path documented",
    ],
    evidenceStatus: "proposed-illustrative",
  },
  {
    id: "dc-risk-1",
    lens: "risk-and-assurance",
    question:
      "Is risk tier proportionate to potential harm, with assurance activities mapped and funded?",
    signals: [
      "Tier assigned with rationale",
      "Assurance plan covers data, model, security, legal",
      "Independent review scheduled where required",
    ],
    evidenceStatus: "proposed-illustrative",
  },
  {
    id: "dc-ready-1",
    lens: "readiness-and-feasibility",
    question:
      "Are data, platform, and skill prerequisites satisfied or on a funded remediation path?",
    signals: [
      "Readiness scorecard ≥ threshold for tier",
      "Critical dependencies have owners and dates",
      "No hidden reliance on unapproved vendors",
    ],
    evidenceStatus: "proposed-illustrative",
  },
  {
    id: "dc-om-1",
    lens: "operating-model-and-change",
    question:
      "Will roles, handoffs, and incentives change—or will AI become an unofficial shadow process?",
    signals: [
      "RACI updated for human–AI decisions",
      "Change plan covers managers and control functions",
      "Support model defined before go-live",
    ],
    evidenceStatus: "proposed-illustrative",
  },
  {
    id: "dc-trust-1",
    lens: "stakeholder-trust",
    question:
      "Can we explain, audit, and if needed reverse or override outcomes that matter to stakeholders?",
    signals: [
      "Disclosure approach aligned to public AI statement themes",
      "Escalation and override paths tested",
      "Incident playbooks linked to cyber and risk",
    ],
    evidenceStatus: "proposed-illustrative",
  },
] as const satisfies readonly DecisionCriterion[];

export const hardStops = [
  {
    id: "hs-no-sponsor",
    name: "No accountable executive sponsor",
    condition:
      "Gate 1 exit attempted without a named sponsor, decision rights, and funding envelope.",
    rationale:
      "Without sponsorship, assurance and change workstreams lack authority and benefits ownership collapses.",
    escalation: "AI Program Director and Business Executive Sponsor forum",
    evidenceStatus: "proposed-illustrative",
  },
  {
    id: "hs-tier-mismatch",
    name: "Risk tier not assessed",
    condition: "Tier 2+ use case proceeds past Gate 3 without documented tiering and sign-off.",
    rationale:
      "Australian assurance and ASIC themes require proportionate controls before material deployment.",
    escalation: "Enterprise Risk and Legal & Privacy joint review",
    evidenceStatus: "proposed-illustrative",
  },
  {
    id: "hs-no-assurance-plan",
    name: "Missing assurance plan",
    condition:
      "Build or pilot funding released without an approved AI Assurance Plan and evidence index.",
    rationale: "Evidence packs cannot be assembled retroactively under audit pressure.",
    escalation: "Assurance Planning Sync → Gate Decision Record hold",
    evidenceStatus: "proposed-illustrative",
  },
  {
    id: "hs-unapproved-data",
    name: "Unapproved data use or classification breach",
    condition:
      "Training or inference uses data outside approved classification, retention, or consent boundaries.",
    rationale: "Data misuse is a reputational and regulatory hard stop in financial and public contexts.",
    escalation: "Data Owner, Legal & Privacy, Cyber Security immediate halt",
    evidenceStatus: "proposed-illustrative",
  },
  {
    id: "hs-no-human-oversight",
    name: "No human oversight for material decisions",
    condition:
      "Automated outputs could materially affect investment, compliance, or stakeholder reporting without defined human review.",
    rationale: "Aligns with ASIC deployment themes and responsible AI transparency expectations.",
    escalation: "Process Owner and Enterprise Risk veto until oversight design approved",
    evidenceStatus: "proposed-illustrative",
  },
  {
    id: "hs-vendor-black-box",
    name: "Unassessed third-party AI",
    condition:
      "Production dependency on vendor AI without completed third-party assessment and contract controls.",
    rationale: "Embedded models shift liability and monitoring obligations to the institution.",
    escalation: "Legal & Privacy and Procurement block contract activation",
    evidenceStatus: "proposed-illustrative",
  },
  {
    id: "hs-no-monitoring",
    name: "No monitoring plan at go-live",
    condition: "Gate 8 production release without Model Performance Monitoring Plan and incident hooks.",
    rationale: "Model drift and security issues emerge post-deployment; continuous assurance is required.",
    escalation: "Cyber Security and AI Engineering Lead block release",
    evidenceStatus: "proposed-illustrative",
  },
  {
    id: "hs-benefits-unowned",
    name: "Benefits owner absent",
    condition: "Scale decision (Gate 7) without named benefits owner and baseline metrics.",
    rationale: "Impact Lead facilitates measurement; benefits ownership must sit with the business line.",
    escalation: "Business Executive Sponsor must assign owner or defer scale",
    evidenceStatus: "proposed-illustrative",
  },
] as const satisfies readonly HardStop[];

export const reassessmentTriggers = [
  {
    id: "rt-model-change",
    trigger: "Material model change, retraining, or new foundation model swap",
    response:
      "Re-open Gate 4 assurance scope; update Model/System Card and re-run tier-appropriate testing.",
    evidenceStatus: "proposed-illustrative",
  },
  {
    id: "rt-data-drift",
    trigger: "Significant data source change, quality degradation, or new personal/sensitive fields",
    response: "Data Owner review; repeat privacy screening; pause inference if classification uncertain.",
    evidenceStatus: "proposed-illustrative",
  },
  {
    id: "rt-incident",
    trigger: "AI-related security incident, harmful output, or near-miss in production or pilot",
    response:
      "Activate incident log; root-cause review; optional rollback; Gate 6 or 8 retrospective within 10 business days.",
    evidenceStatus: "proposed-illustrative",
  },
  {
    id: "rt-regulatory",
    trigger: "New regulatory guidance or enforcement action affecting AI in financial services",
    response: "Legal & Privacy impact scan across portfolio; update hard stops and committee memo templates.",
    evidenceStatus: "proposed-illustrative",
  },
  {
    id: "rt-benefits-miss",
    trigger: "Benefits miss > agreed tolerance for two consecutive measurement periods",
    response:
      "Benefits Review meeting; options: redesign workflow, retrain users, reduce scope, or retire use case.",
    evidenceStatus: "proposed-illustrative",
  },
  {
    id: "rt-org-change",
    trigger: "Major reorganisation, leadership change, or outsourcing affecting process owners",
    response: "Refresh RACI and sponsorship charter; re-validate Gates 1–2 within 30 days.",
    evidenceStatus: "proposed-illustrative",
  },
] as const satisfies readonly ReassessmentTrigger[];
