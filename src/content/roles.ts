import type { Role } from "@/lib/types";

export const impactLeadRoleId = "role-impact-lead" as const;

export const roles = [
  {
    id: impactLeadRoleId,
    name: "Impact Lead",
    purpose:
      "Orchestrate measurable AI impact across the lifecycle—connecting sponsorship, assurance, change, and benefits without owning delivery or risk sign-off.",
    accountabilities: [
      "Facilitate six-gate ceremonies and decision packs",
      "Maintain traceability from signal to benefits evidence",
      "Broker cross-functional alignment and escalate hard stops",
      "Ensure evidenceStatus labelling and source citation discipline",
      "Coach sponsors and process owners on impact hypothesis quality",
    ],
    keyDecisions: [
      "Recommend pursue/defer/stop at triage (Gate 0–1)",
      "Recommend gate exit readiness (not final risk approval)",
      "Propose scale/stop narrative after pilot evidence",
      "Trigger reassessment workflows when thresholds breach",
    ],
    coreArtifacts: [
      "art-intake-record",
      "art-impact-hypothesis",
      "art-readiness-scorecard",
      "art-evidence-index",
      "art-gate-decision-record",
      "art-committee-memo",
      "art-lessons-learned",
    ],
    relationshipWithImpactLead:
      "N/A—this role is the integrator; partners with all roles below via RACI, not hierarchy.",
    mustNotAbsorb: [
      "Enterprise risk sign-off",
      "Legal or privacy determinations",
      "Engineering delivery management",
      "Product backlog ownership",
      "Internal audit opinions",
    ],
    evidenceStatus: "proposed-illustrative",
  },
  {
    id: "role-workstream-lead",
    name: "Workstream Lead",
    purpose:
      "Deliver a defined workstream (e.g., data platform, pilot build) on time and budget within programme guardrails.",
    accountabilities: [
      "Resource and milestone management for assigned stream",
      "Status reporting to AI Program Director",
      "Dependency management with other streams",
    ],
    keyDecisions: [
      "Stream-level prioritisation within approved scope",
      "Escalation of stream blockers",
    ],
    coreArtifacts: ["art-funding-request", "art-pilot-plan"],
    relationshipWithImpactLead:
      "Impact Lead clarifies outcomes and evidence needs; Workstream Lead commits delivery plans—does not redefine benefits or tier.",
    mustNotAbsorb: [
      "Impact hypothesis authorship",
      "Risk tier approval",
      "Sponsor accountability for benefits",
    ],
    evidenceStatus: "proposed-illustrative",
  },
  {
    id: "role-ai-program-director",
    name: "AI Program Director",
    purpose:
      "Own the AI portfolio pipeline, funding envelopes, and cross-initiative coherence (proposed programme office function).",
    accountabilities: [
      "Portfolio prioritisation and capacity allocation",
      "Chair or delegate gate forums where appropriate",
      "Resolve cross-initiative conflicts",
      "Report portfolio health to executive governance",
    ],
    keyDecisions: [
      "Fund/defer initiatives at programme level",
      "Approve gate calendar and resourcing",
      "Kill or merge duplicate initiatives",
    ],
    coreArtifacts: ["art-portfolio-dashboard-spec", "art-gate-decision-record"],
    relationshipWithImpactLead:
      "Impact Lead provides evidence-based recommendations; Program Director decides portfolio moves and resourcing.",
    mustNotAbsorb: [
      "Facilitation of every workshop",
      "Detailed assurance testing",
      "Process workflow design ownership",
    ],
    evidenceStatus: "proposed-illustrative",
  },
  {
    id: "role-business-exec-sponsor",
    name: "Business Executive Sponsor",
    purpose:
      "Accountable executive for outcomes, funding, and organisational commitment for a use case or portfolio slice.",
    accountabilities: [
      "Sign Sponsorship Charter and major gate decisions",
      "Assign benefits owner and process owner",
      "Remove organisational blockers",
      "Defend investment in governance forums",
    ],
    keyDecisions: ["Proceed/stop at Gates 1, 6, 7", "Benefits variance tolerance", "Scale funding"],
    coreArtifacts: ["art-sponsorship-charter", "art-committee-memo", "art-benefits-tracker"],
    relationshipWithImpactLead:
      "Impact Lead prepares decision-ready packs; Sponsor decides and owns consequences—especially benefits.",
    mustNotAbsorb: [
      "Day-to-day pilot facilitation",
      "Technical architecture choices",
      "Risk tier determination",
    ],
    evidenceStatus: "proposed-illustrative",
  },
  {
    id: "role-product-owner",
    name: "Product Owner",
    purpose:
      "Maximise product value for internal or external users when delivery follows product management patterns.",
    accountabilities: [
      "Backlog prioritisation aligned to use case brief",
      "Acceptance criteria for releases",
      "Stakeholder feedback loop",
    ],
    keyDecisions: ["Release scope within charter", "Accept/reject delivered increments"],
    coreArtifacts: ["art-use-case-brief", "art-pilot-plan"],
    relationshipWithImpactLead:
      "Impact Lead ensures backlog ties to impact hypothesis; Product Owner owns prioritisation trade-offs.",
    mustNotAbsorb: ["Portfolio funding decisions", "Assurance plan approval", "Legal sign-off"],
    evidenceStatus: "proposed-illustrative",
  },
  {
    id: "role-process-owner",
    name: "Process Owner",
    purpose:
      "Accountable for end-to-end business process performance, controls, and human judgment points affected by AI.",
    accountabilities: [
      "Validate current/target process maps",
      "Own human oversight design with Risk",
      "Monitor operational metrics during pilot and production",
      "Authorise workflow changes",
    ],
    keyDecisions: [
      "Process changes accompanying AI",
      "Override policies and escalation paths",
      "Hypercare exit sign-off",
    ],
    coreArtifacts: [
      "art-process-map-current",
      "art-human-oversight-design",
      "art-runbook-support",
    ],
    relationshipWithImpactLead:
      "Impact Lead surfaces impact and change implications; Process Owner owns operational integrity.",
    mustNotAbsorb: ["Building models or pipelines", "Enterprise risk appetite setting"],
    evidenceStatus: "proposed-illustrative",
  },
  {
    id: "role-org-design-lead",
    name: "Organisation Design Lead",
    purpose:
      "Design structural and role implications when AI shifts work allocation, spans of control, or governance forums.",
    accountabilities: [
      "Propose operating model deltas for scale",
      "Assess role clarity and decision rights",
      "Partner with People & Culture on job impacts",
    ],
    keyDecisions: ["Recommended team structures for scaled AI", "Governance forum design proposals"],
    coreArtifacts: ["art-operating-model-delta", "art-stakeholder-raci"],
    relationshipWithImpactLead:
      "Impact Lead documents workflow impact; Org Design translates to structures—joint workshop at Gate 7.",
    mustNotAbsorb: ["Benefits ownership", "Technical delivery", "Risk tiering"],
    evidenceStatus: "proposed-illustrative",
  },
  {
    id: "role-change-lead",
    name: "Change Lead",
    purpose:
      "Plan and execute adoption, communications, and capability building for AI-enabled workflow change.",
    accountabilities: [
      "Change Impact Assessment",
      "Comms and learning plan delivery",
      "Adoption metrics and feedback",
    ],
    keyDecisions: ["Change interventions scope", "Training cohort design"],
    coreArtifacts: ["art-change-impact", "art-comms-plan", "art-learning-plan"],
    relationshipWithImpactLead:
      "Impact Lead defines who must change and why; Change Lead owns how adoption happens.",
    mustNotAbsorb: ["Impact hypothesis metrics design", "Assurance testing", "Process control sign-off"],
    evidenceStatus: "proposed-illustrative",
  },
  {
    id: "role-ai-product-manager",
    name: "AI Product Manager",
    purpose:
      "Manage AI product lifecycle from pilot to production—balancing user value, model behaviour, and release cadence.",
    accountabilities: [
      "Roadmap for AI features and experiments",
      "Coordinate with engineering and design",
      "Define product-level monitoring requirements",
    ],
    keyDecisions: ["Feature rollout sequencing", "Pilot scope adjustments within gate approvals"],
    coreArtifacts: ["art-pilot-plan", "art-model-system-card", "art-monitoring-plan"],
    relationshipWithImpactLead:
      "Impact Lead guards benefits and gate evidence; AI PM owns product delivery trade-offs inside approved bounds.",
    mustNotAbsorb: ["Executive sponsorship", "Legal compliance determinations"],
    evidenceStatus: "proposed-illustrative",
  },
  {
    id: "role-ai-engineering-lead",
    name: "AI Engineering Lead",
    purpose:
      "Lead implementation of models, integrations, MLOps/LLMOps, and production reliability for AI systems.",
    accountabilities: [
      "Technical design and deployment",
      "Implement monitoring and security controls",
      "Manage technical debt and runbooks",
    ],
    keyDecisions: [
      "Architecture patterns within standards",
      "Release go/no-go on technical grounds",
    ],
    coreArtifacts: [
      "art-model-system-card",
      "art-test-eval-protocol",
      "art-runbook-support",
      "art-monitoring-plan",
    ],
    relationshipWithImpactLead:
      "Impact Lead specifies evidence and success criteria; Engineering Lead proves technical feasibility and operability.",
    mustNotAbsorb: ["Business benefits accountability", "Risk appetite decisions"],
    evidenceStatus: "proposed-illustrative",
  },
  {
    id: "role-enterprise-architect",
    name: "Enterprise Architect",
    purpose:
      "Ensure AI solutions align with target architecture, integration standards, and platform strategy.",
    accountabilities: [
      "Architecture review at design authority",
      "Integration and data flow standards",
      "Non-functional requirements alignment",
    ],
    keyDecisions: ["Approve/deny architecture exceptions", "Platform reuse vs build"],
    coreArtifacts: ["art-target-state-sketch", "art-data-inventory-summary"],
    relationshipWithImpactLead:
      "Impact Lead flags scale implications early; EA enforces long-term coherence—especially at Gates 3 and 7.",
    mustNotAbsorb: ["Process control design", "Sponsor funding decisions"],
    evidenceStatus: "proposed-illustrative",
  },
  {
    id: "role-data-owner",
    name: "Data Owner",
    purpose:
      "Accountable for data domains used in AI—quality, classification, access, and lifecycle compliance.",
    accountabilities: [
      "Approve data use for training and inference",
      "Maintain data inventory accuracy",
      "Enforce classification and retention rules",
    ],
    keyDecisions: ["Data access grants", "Data remediation priorities"],
    coreArtifacts: ["art-data-inventory-summary"],
    relationshipWithImpactLead:
      "Impact Lead surfaces data-dependent impact claims; Data Owner validates feasibility and compliance.",
    mustNotAbsorb: ["Model selection", "Benefits reporting to executives"],
    evidenceStatus: "proposed-illustrative",
  },
  {
    id: "role-enterprise-risk",
    name: "Enterprise Risk",
    purpose:
      "Set risk appetite, approve AI risk tiering, and oversee assurance alignment to regulatory and policy expectations.",
    accountabilities: [
      "Approve Enterprise Risk Tier Record",
      "Endorse AI Assurance Plan",
      "Monitor risk treatments and incidents",
    ],
    keyDecisions: ["Risk tier and assurance depth", "Accept residual risk", "Escalate to board/committee themes"],
    coreArtifacts: ["art-risk-tier-record", "art-assurance-plan", "art-assurance-audit-register"],
    relationshipWithImpactLead:
      "Impact Lead integrates risk narrative into gate packs; Enterprise Risk owns tier and assurance sign-off.",
    mustNotAbsorb: ["Delivery management", "Change training delivery"],
    evidenceStatus: "proposed-illustrative",
  },
  {
    id: "role-legal-privacy",
    name: "Legal and Privacy",
    purpose:
      "Assess legal, regulatory, and privacy obligations for AI use cases, contracts, and disclosures.",
    accountabilities: [
      "Legal & Regulatory Assessment",
      "Privacy screening and DPIA-equivalent where needed",
      "Contract clauses for vendor AI",
    ],
    keyDecisions: ["Lawful basis and disclosure approach", "Contractual hold/release"],
    coreArtifacts: ["art-legal-assessment", "art-privacy-screening", "art-vendor-ai-assessment"],
    relationshipWithImpactLead:
      "Impact Lead ensures legal review is scheduled early; Legal/Privacy provides determinations—not facilitated by Impact Lead.",
    mustNotAbsorb: ["Risk tier ownership", "Technical security implementation"],
    evidenceStatus: "proposed-illustrative",
  },
  {
    id: "role-cyber-security",
    name: "Cyber Security",
    purpose:
      "Protect confidentiality, integrity, and availability of AI systems and data; assess AI-specific threats.",
    accountabilities: [
      "AI security reviews",
      "Monitor production security controls",
      "Incident response for AI-tagged events",
    ],
    keyDecisions: ["Security release holds", "Control compensating measures"],
    coreArtifacts: ["art-cyber-ai-review", "art-incident-issue-log", "art-monitoring-plan"],
    relationshipWithImpactLead:
      "Impact Lead tracks security findings to gate exit; Cyber owns control effectiveness.",
    mustNotAbsorb: ["Benefits realisation", "Process workflow ownership"],
    evidenceStatus: "proposed-illustrative",
  },
  {
    id: "role-people-culture",
    name: "People and Culture",
    purpose:
      "Address workforce, capability, industrial relations, and culture impacts of AI-enabled change.",
    accountabilities: [
      "Review change impacts on roles and skills",
      "Align learning with capability frameworks",
      "Advise on consultation requirements",
    ],
    keyDecisions: ["Workforce planning inputs for scale", "Learning investment approval"],
    coreArtifacts: ["art-learning-plan", "art-change-impact"],
    relationshipWithImpactLead:
      "Impact Lead quantifies adoption risks; P&C ensures people policies and fairness are respected.",
    mustNotAbsorb: ["Technical pilot execution", "Risk tier approval"],
    evidenceStatus: "proposed-illustrative",
  },
  {
    id: "role-internal-audit",
    name: "Internal Audit",
    purpose:
      "Provide independent assurance over control design and operating effectiveness for AI initiatives (especially higher tiers).",
    accountabilities: [
      "Review evidence trails and gate compliance",
      "Recommend control improvements",
      "Align with ISO 42001-style management system optional path",
    ],
    keyDecisions: ["Audit scope and timing", "Rating of control gaps"],
    coreArtifacts: ["art-assurance-audit-register", "art-evidence-pack-index"],
    relationshipWithImpactLead:
      "Impact Lead facilitates evidence access; Internal Audit maintains independence—does not co-author gate packs.",
    mustNotAbsorb: ["Management remediation ownership", "Sponsor decisions"],
    evidenceStatus: "proposed-illustrative",
  },
] as const satisfies readonly Role[];

export const roleById: Record<string, Role> = Object.fromEntries(
  roles.map((r) => [r.id, r]),
);
