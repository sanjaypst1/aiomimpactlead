/**
 * Why the playbook uses six gates — and what inspired (but did not dictate) the count.
 *
 * There is no single company standard that mandates nine or ten AI operating-model gates.
 * The earlier ten-gate draft was a synthesis for completeness. Six gates keep the same
 * decision quality with less ceremony.
 */
export const gateModelRationale = {
  title: "Sources & design notes",
  summary:
    "The original ten-gate draft was a working synthesis for this playbook—not a published Future Fund, NBIM, or regulator standard. Six gates preserve every decision moment while reducing overlap.",
  notACompanyStandard:
    "No sovereign fund or Australian agency publishes a mandatory nine- or ten-gate AI Impact Lead lifecycle. The count was proposed in this playbook for teaching completeness, then consolidated for practical use.",
  inspirations: [
    {
      name: "NIST AI Risk Management Framework (AI RMF 1.0)",
      whatItProvides: "Four functions—Govern, Map, Measure, Manage—not a fixed stage count.",
      howUsed:
        "Govern runs across all gates; Map informs Discover & Design and Impact; Measure informs Assure & Decide and Review; Manage informs Pilot and Review & Learn.",
      url: "https://www.nist.gov/itl/ai-risk-management-framework",
      evidenceStatus: "international-benchmark" as const,
    },
    {
      name: "Australian Government / DTA AI assurance & impact assessment approach",
      whatItProvides:
        "Use-case level impact assessment, proportionate assurance, and lifecycle documentation—not a nine-gate playbook.",
      howUsed:
        "Shapes Gate 3 impact depth and Gate 4 assurance evidence expectations.",
      url: "https://www.digital.gov.au/policy/ai/ai-assurance-framework-pilot-report",
      evidenceStatus: "confirmed-public" as const,
    },
    {
      name: "ISO/IEC 42001 AI Management System",
      whatItProvides:
        "Plan–Do–Check–Act style management-system thinking for AI (roles, impact, monitoring, improvement).",
      howUsed:
        "Maps to Impact → Assure & Decide → Pilot → Review & Learn without requiring certification claims.",
      url: "https://www.iso.org/standard/81230.html",
      evidenceStatus: "international-benchmark" as const,
    },
    {
      name: "Classic stage-gate / gated delivery (product & transformation practice)",
      whatItProvides:
        "Industry practice of a small number of go/kill decision points with entry/exit criteria (often ~5 stages in Cooper-style stage-gate).",
      howUsed:
        "Justifies consolidating discovery/design and assure/governance into single decision gates.",
      url: "https://www.stage-gate.com/",
      evidenceStatus: "industry-guidance" as const,
    },
  ],
  consolidationMap: [
    {
      newGate: 1,
      name: "Mobilise & Intake",
      absorbed: "Former Gate 0 Mobilise + Gate 1 Intake & triage",
      reason: "Mandate and first triage are one mobilisation conversation in practice.",
    },
    {
      newGate: 2,
      name: "Discover & Design",
      absorbed: "Former Gate 2 Current-state discovery + Gate 3 Human–AI workflow design",
      reason: "Current and future workflow are designed as one facilitation arc.",
    },
    {
      newGate: 3,
      name: "Impact Assessment",
      absorbed: "Former Gate 4 Operating-model impact assessment",
      reason: "Kept distinct—this is the Impact Lead’s core value moment.",
    },
    {
      newGate: 4,
      name: "Assure & Decide",
      absorbed: "Former Gate 5 Risk/assurance/readiness + Gate 6 Governance decision",
      reason: "Readiness evidence and the governance ask belong in one decision pack.",
    },
    {
      newGate: 5,
      name: "Pilot & Implement",
      absorbed: "Former Gate 7 Pilot and implementation readiness",
      reason: "Delivery support without absorbing ownership—kept as its own control period.",
    },
    {
      newGate: 6,
      name: "Review & Learn",
      absorbed: "Former Gate 8 Post-implementation review + Gate 9 Enterprise learning",
      reason: "Local outcomes and enterprise themes should be closed in one learning cycle.",
    },
  ],
} as const;
