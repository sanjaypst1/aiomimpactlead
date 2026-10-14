import type { Framework } from "@/lib/types";

export const frameworks = [
  {
    id: "fw-nf-ai-assurance",
    name: "National Framework for AI Assurance (Government)",
    publisher: "Australian Government (DISR)",
    summary:
      "Lifecycle assurance for public-sector AI: proportionate evidence, accountability, and transparency aligned to risk and impact.",
    applicationAreas: [
      "Gate 3 readiness and risk tiering",
      "Gate 4 assurance planning",
      "Artifact: AI Assurance Plan",
      "Portfolio transparency alignment",
    ],
    sourceIds: ["src-nf-ai-assurance-2024", "src-dta-ai-assurance-pilot"],
    evidenceStatus: "confirmed-public",
  },
  {
    id: "fw-dta-assurance-pilot",
    name: "DTA AI Assurance Framework (Pilot)",
    publisher: "Digital Transformation Agency",
    summary:
      "Operationalises assurance through structured assessment, documentation, and review checkpoints for AI systems.",
    applicationAreas: [
      "Evidence pack indexing",
      "Independent review scheduling",
      "Tier 2–3 control selection",
    ],
    sourceIds: ["src-dta-ai-assurance-pilot"],
    evidenceStatus: "confirmed-public",
  },
  {
    id: "fw-asic-ai-fs",
    name: "ASIC AI in Financial Services Expectations",
    publisher: "ASIC",
    summary:
      "Governance, testing, monitoring, and third-party AI controls for licensees and regulated activities.",
    applicationAreas: [
      "Hard stops on unvalidated models in material decisions",
      "Vendor AI assessments",
      "Monitoring and incident response artifacts",
    ],
    sourceIds: ["src-asic-rep-798"],
    evidenceStatus: "confirmed-public",
  },
  {
    id: "fw-nist-ai-rmf",
    name: "NIST AI RMF 1.0",
    publisher: "NIST",
    summary:
      "Risk management functions (Govern, Map, Measure, Manage) with profiles for sector-specific AI risk.",
    applicationAreas: [
      "Impact dimensions and risk registers",
      "Test & evaluation protocols",
      "Continuous monitoring plans",
    ],
    sourceIds: ["src-nist-ai-rmf"],
    evidenceStatus: "international-benchmark",
  },
  {
    id: "fw-iso-42001",
    name: "ISO/IEC 42001 AI Management System",
    publisher: "ISO",
    summary:
      "Certifiable management-system requirements for establishing, implementing, and improving responsible AI practices.",
    applicationAreas: [
      "Portfolio assurance cadence",
      "Internal audit trail design",
      "Policy and objective alignment (optional maturity path)",
    ],
    sourceIds: ["src-iso-42001"],
    evidenceStatus: "international-benchmark",
  },
  {
    id: "fw-ff-transparency",
    name: "Future Fund AI Transparency Principles (Public)",
    publisher: "Future Fund",
    summary:
      "Public commitments on responsible AI use, transparency, and accountability—used to shape proposed disclosure and oversight artifacts.",
    applicationAreas: [
      "Gate 1 sponsorship alignment",
      "Committee memo disclosure sections",
      "Stakeholder communications",
    ],
    sourceIds: ["src-ff-ai-transparency", "src-ff-yir-2024-25"],
    evidenceStatus: "confirmed-public",
  },
  {
    id: "fw-wef-intelligent-finance",
    name: "WEF Intelligent Finance AI Playbook",
    publisher: "World Economic Forum",
    summary:
      "Industry playbook for value realisation, operating-model shifts, and control themes in financial-services AI.",
    applicationAreas: [
      "Benefits realisation framing",
      "Operating model delta briefs",
      "Comparative benchmarking workshops",
    ],
    sourceIds: ["src-wef-ai-fs-playbook"],
    evidenceStatus: "industry-guidance",
  },
  {
    id: "fw-nbim-strategy-25",
    name: "NBIM Strategy 25 Operating Lessons",
    publisher: "NBIM",
    summary:
      "Asset-owner lessons on scale, data platforms, and organisational design—inform proposed handoffs, not Future Fund policy.",
    applicationAreas: [
      "Enterprise architecture alignment",
      "Data platform readiness domain",
      "Portfolio retrospectives",
    ],
    sourceIds: ["src-nbim-strategy-25"],
    evidenceStatus: "international-benchmark",
  },
] as const satisfies readonly Framework[];
