import type { LifecycleGate } from "@/lib/types";

/**
 * Six consolidated gates. Earlier ten-gate draft was a playbook synthesis
 * (NIST AI RMF + DTA impact assessment + ISO 42001 + stage-gate practice)—
 * not a single company’s mandated nine/ten-gate standard. See gate-model-rationale.ts.
 */
export const gates = [
  {
    id: "gate-1",
    number: 1,
    name: "Mobilise & Intake",
    objective:
      "Confirm Impact Lead mandate, interfaces and first-wave priorities; triage submitted use cases so only material AI problems with named owners enter discovery.",
    entryCriteria: [
      "AI Operating Model Workstream Lead and sponsor identified",
      "Intake channel available for use-case submissions",
      "Evidence labelling and repository conventions agreed",
    ],
    impactLeadActivities: [
      "Facilitate mobilisation with Workstream Lead and AI Program",
      "Interview functional leaders; publish stakeholder and forum map",
      "Quality-check intake forms; run triage clinic",
      "Record disposition: reject, redirect, combine, request info, or accept",
    ],
    otherRoleActivities: [
      {
        roleId: "role-workstream-lead",
        activities: ["Set workstream priorities", "Resolve portfolio conflicts"],
      },
      {
        roleId: "role-business-exec-sponsor",
        activities: ["Name business owner", "Confirm problem materiality"],
      },
      {
        roleId: "role-enterprise-risk",
        activities: ["Flag early hard stops on high-sensitivity signals"],
      },
    ],
    meetings: ["mtg-mobilisation-sponsor", "mtg-functional-leader-interview", "mtg-use-case-triage-clinic"],
    participants: [
      "Impact Lead",
      "Workstream Lead",
      "AI Program",
      "Business sponsor",
      "Architecture",
      "Risk (as needed)",
    ],
    inputs: ["Sponsor mandate", "Use-case intake submissions", "Public strategy themes", "Existing backlog"],
    artifacts: ["art-stakeholder-raci", "art-intake-record", "art-use-case-brief", "art-scope-boundary"],
    owners: ["Impact Lead (method)", "Business sponsor (problem)"],
    reviewers: ["Workstream Lead", "AI Program", "Risk representative"],
    approvers: ["Workstream Lead / AI Program Director for acceptance into discovery"],
    decisionBasis: [
      "Named accountable owner exists",
      "AI is necessary vs non-AI improvement",
      "Preliminary sensitivity and duplication check",
    ],
    exitCriteria: [
      "Mandate and interfaces documented",
      "Triage disposition recorded for each submission",
      "Accepted cases have owner, baseline hypothesis and non-goals",
    ],
    possibleDecisions: [
      "Reject",
      "Redirect to non-AI improvement",
      "Combine with existing capability",
      "Request more information",
      "Accept to Discover & Design",
    ],
    risksIfSkipped: [
      "Shadow AI without ownership",
      "Duplicate builds",
      "Impact Lead absorbed into undirected delivery",
    ],
    exampleEvidence: ["Charter notes", "Intake form", "Triage decision log"],
    durationRange: "1–3 weeks for mobilisation; triage in weekly clinics",
    handoffs: ["Accepted cases → Gate 2 with intake pack"],
    evidenceStatus: "proposed-illustrative",
  },
  {
    id: "gate-2",
    number: 2,
    name: "Discover & Design",
    objective:
      "Understand how work is done today and design the future human–AI workflow with explicit decision rights, oversight and fallbacks.",
    entryCriteria: [
      "Accepted intake with named process and business owners",
      "Access to practitioners and systems for discovery",
    ],
    impactLeadActivities: [
      "Facilitate current-state discovery workshops and observation",
      "Map tasks, decisions, controls, data and workarounds",
      "Facilitate human–AI allocation and decision-rights design",
      "Document AI may / may not and meaningful human oversight",
    ],
    otherRoleActivities: [
      {
        roleId: "role-process-owner",
        activities: ["Validate current-state map", "Own future process performance"],
      },
      {
        roleId: "role-ai-engineering-lead",
        activities: ["Advise technical feasibility of oversight and logging"],
      },
      {
        roleId: "role-data-owner",
        activities: ["Confirm approved sources and access boundaries"],
      },
    ],
    meetings: [
      "mtg-current-state-discovery",
      "mtg-human-ai-workflow-design",
      "mtg-decision-rights",
    ],
    participants: [
      "Impact Lead",
      "Process owner",
      "Practitioners",
      "Product/AI engineering",
      "Data",
      "Risk / Legal / Cyber as needed",
    ],
    inputs: ["Intake pack", "Procedure docs", "System access", "Baseline metrics hypothesis"],
    artifacts: [
      "art-process-map-current",
      "art-benefits-baseline",
      "art-target-state-sketch",
      "art-human-oversight-design",
      "art-impact-hypothesis",
    ],
    owners: ["Process owner (process)", "Impact Lead (facilitation & synthesis)"],
    reviewers: ["Business owner", "Practitioners", "Data", "Risk/Legal/Cyber as applicable"],
    approvers: ["Business owner for future workflow boundaries"],
    decisionBasis: [
      "Baseline understood",
      "AI authority boundaries explicit",
      "Human oversight is meaningful and affordable",
    ],
    exitCriteria: [
      "Current-state validated",
      "Future human–AI workflow and decision-right matrix agreed",
      "Non-goals and kill-switch authority documented",
    ],
    possibleDecisions: [
      "Proceed to Impact Assessment",
      "Return to reframe problem",
      "Stop — AI not appropriate",
    ],
    risksIfSkipped: [
      "Automating the wrong process",
      "Rubber-stamp oversight",
      "Unclear decision rights at go-live",
    ],
    exampleEvidence: ["Service blueprint", "Task inventory", "Decision-right matrix"],
    durationRange: "2–4 weeks per use case",
    handoffs: ["Design pack → Gate 3 Impact Assessment"],
    evidenceStatus: "proposed-illustrative",
  },
  {
    id: "gate-3",
    number: 3,
    name: "Impact Assessment",
    objective:
      "Identify operating-model, role, accountability, skills, control and second-order impacts; assign owners; surface trade-offs before assurance and governance.",
    entryCriteria: [
      "Agreed future human–AI workflow",
      "Baseline metrics and stakeholder map",
    ],
    impactLeadActivities: [
      "Run operating-model impact and workforce workshops",
      "Produce impact heat map and role impact cards",
      "Register second-order impacts (learning, SoD, committee capacity, vendor dependency)",
      "Challenge inflated benefits; name value owners (not the Impact Lead as guarantor)",
    ],
    otherRoleActivities: [
      {
        roleId: "role-people-culture",
        activities: ["Advise job/skills/consultation implications"],
      },
      {
        roleId: "role-business-exec-sponsor",
        activities: ["Accept or reject material role/accountability changes"],
      },
      {
        roleId: "role-enterprise-risk",
        activities: ["Challenge control and residual-risk implications"],
      },
    ],
    meetings: [
      "mtg-operating-model-impact",
      "mtg-decision-rights",
      "mtg-workforce-capability",
    ],
    participants: [
      "Impact Lead",
      "Affected function owners",
      "People and Culture",
      "Risk",
      "Product owner",
    ],
    inputs: ["Design pack", "Org chart / role descriptions", "Control inventory"],
    artifacts: [
      "art-operating-model-delta",
      "art-change-impact",
      "art-learning-plan",
      "art-comms-plan",
      "art-stakeholder-raci",
    ],
    owners: ["Impact Lead (synthesis)", "Functional owners (dimension sign-off)"],
    reviewers: ["Workstream Lead", "People and Culture", "Risk", "Business owner"],
    approvers: ["Business owner accepts impact statement for assurance path"],
    decisionBasis: [
      "Every material impact has an owner",
      "Trade-offs are explicit",
      "Second-order risks have mitigations or accepted residual risk path",
    ],
    exitCriteria: [
      "Impact assessment complete with owner-assigned actions",
      "Value owner named for benefits",
      "Hard questions and trade-offs logged for Gate 4",
    ],
    possibleDecisions: [
      "Proceed to Assure & Decide",
      "Remediate design/impacts",
      "Stop or pause",
    ],
    risksIfSkipped: [
      "Late discovery of accountability gaps",
      "Junior learning and SoD erosion",
      "Benefits claimed with no owner",
    ],
    exampleEvidence: ["Impact assessment", "Role cards", "Second-order register"],
    durationRange: "1–3 weeks",
    handoffs: ["Impact pack → Gate 4 with trade-offs and open questions"],
    evidenceStatus: "proposed-illustrative",
  },
  {
    id: "gate-4",
    number: 4,
    name: "Assure & Decide",
    objective:
      "Complete risk-tiered assurance and readiness with GRC partners; obtain a traceable governance decision (approve, conditional, defer, reject).",
    entryCriteria: [
      "Impact assessment with named owners",
      "Human–AI boundaries agreed",
      "Draft residual-risk narrative",
    ],
    impactLeadActivities: [
      "Facilitate control/assurance clinic and readiness review",
      "Map controls to ISMS (ISO 27001-aligned) and ISO 42001 practices",
      "Compile governance decision paper with conditions",
      "Present operating-model readiness advice—not risk acceptance",
    ],
    otherRoleActivities: [
      {
        roleId: "role-enterprise-risk",
        activities: ["Risk tier challenge", "Residual risk advice"],
      },
      {
        roleId: "role-legal-privacy",
        activities: ["Legal/privacy assessment", "Privilege and disclosure advice"],
      },
      {
        roleId: "role-cyber-security",
        activities: ["Cyber review", "Access and logging evidence"],
      },
    ],
    meetings: [
      "mtg-control-assurance-clinic",
      "mtg-readiness-review",
      "mtg-governance-pre-brief",
      "mtg-formal-governance-decision",
    ],
    participants: [
      "Impact Lead",
      "Business sponsor",
      "Risk",
      "Legal/Privacy",
      "Cyber",
      "Data",
      "Technology",
      "Governance forum",
    ],
    inputs: ["Impact pack", "Test plans", "Privacy/legal/cyber inputs", "Funding ask"],
    artifacts: [
      "art-risk-tier-record",
      "art-assurance-plan",
      "art-readiness-scorecard",
      "art-evidence-index",
      "art-committee-memo",
      "art-gate-decision-record",
    ],
    owners: [
      "Business owner (decision request)",
      "Risk (risk advice)",
      "Impact Lead (readiness synthesis)",
    ],
    reviewers: ["GRC functions", "Workstream Lead", "AI Program", "Architecture"],
    approvers: ["Delegated governance forum"],
    decisionBasis: [
      "Six decision lenses with narrative evidence",
      "Hard stops cleared or accepted with authority",
      "Conditions of approval are owned and dated",
    ],
    exitCriteria: [
      "Documented governance outcome",
      "Conditions register live",
      "Named accountable owners for residual risk and benefits",
    ],
    possibleDecisions: [
      "Approve",
      "Approve with conditions",
      "Defer",
      "Return for remediation",
      "Reject",
    ],
    risksIfSkipped: [
      "Governance gap (adoption ahead of controls)",
      "Unowned residual risk",
      "No kill criteria",
    ],
    exampleEvidence: ["Decision paper", "Readiness scorecard", "Conditions register"],
    durationRange: "2–4 weeks depending on tier",
    handoffs: ["Approved pilots → Gate 5; rejected cases → closed with lessons"],
    evidenceStatus: "proposed-illustrative",
  },
  {
    id: "gate-5",
    number: 5,
    name: "Pilot & Implement",
    objective:
      "Translate approved impacts into owned actions; validate readiness for pilot/release; track conditions and scope drift without the Impact Lead becoming delivery owner.",
    entryCriteria: [
      "Governance approval (or conditional approval)",
      "Delivery and product owners assigned",
    ],
    impactLeadActivities: [
      "Translate impacts into implementation backlog items with owners",
      "Observe pilot checkpoints; track conditions and scope drift",
      "Escalate cross-stream dependencies to Workstream Lead",
      "Verify procedures, training and RACI match the approved design",
    ],
    otherRoleActivities: [
      {
        roleId: "role-ai-product-manager",
        activities: ["Own product delivery and backlog priority"],
      },
      {
        roleId: "role-change-lead",
        activities: ["Execute change and communications plans"],
      },
      {
        roleId: "role-process-owner",
        activities: ["Validate updated procedures in live use"],
      },
    ],
    meetings: ["mtg-pilot-checkpoint", "mtg-readiness-review"],
    participants: [
      "Impact Lead",
      "Delivery/product lead",
      "Business owner",
      "Change",
      "Risk",
      "Support owner",
    ],
    inputs: ["Decision record", "Conditions register", "Pilot plan", "Test protocol"],
    artifacts: [
      "art-pilot-plan",
      "art-test-eval-protocol",
      "art-runbook-support",
      "art-monitoring-plan",
      "art-gate-decision-record",
    ],
    owners: ["Product/delivery lead (implementation)", "Impact Lead (impact actions tracker)"],
    reviewers: ["Business owner", "Risk", "Workstream Lead"],
    approvers: ["Business owner for operational readiness recommendation"],
    decisionBasis: [
      "Conditions closed or waived by authority",
      "Monitoring and support live",
      "No material scope drift from approved decision rights",
    ],
    exitCriteria: [
      "Pilot/release readiness recommendation recorded",
      "Override/incident paths tested",
      "Review date for Gate 6 scheduled",
    ],
    possibleDecisions: [
      "Start / continue pilot",
      "Hold for remediation",
      "Escalate scope drift",
      "Recommend stop",
    ],
    risksIfSkipped: [
      "Approved design not implemented",
      "Conditions quietly dropped",
      "Impact Lead becomes accidental PM",
    ],
    exampleEvidence: ["Checkpoint minutes", "Conditions tracker", "Scope-drift note"],
    durationRange: "Pilot typically 4–8 weeks",
    handoffs: ["Operating evidence → Gate 6 Review & Learn"],
    evidenceStatus: "proposed-illustrative",
  },
  {
    id: "gate-6",
    number: 6,
    name: "Review & Learn",
    objective:
      "Compare outcomes to assumptions; decide scale/modify/suspend/retire; convert local lessons into enterprise themes for the Workstream Lead and AI governance.",
    entryCriteria: [
      "Pilot or release has operated long enough for evidence (risk-tier dependent)",
      "Monitoring data and user feedback available",
    ],
    impactLeadActivities: [
      "Coordinate post-implementation review with evidence from owners",
      "Measure benefits, overrides, incidents, workload and unintended role effects",
      "Aggregate enterprise themes and pattern updates",
      "Roll up concise advice to Workstream Lead: decisions, takeaways, asks",
    ],
    otherRoleActivities: [
      {
        roleId: "role-business-exec-sponsor",
        activities: ["Decide scale / modify / stop for the business"],
      },
      {
        roleId: "role-workstream-lead",
        activities: ["Accept enterprise themes into workstream roadmap"],
      },
      {
        roleId: "role-enterprise-risk",
        activities: ["Reassess residual risk and monitoring adequacy"],
      },
    ],
    meetings: [
      "mtg-post-implementation-review",
      "mtg-enterprise-themes-council",
      "mtg-quarterly-maturity-review",
    ],
    participants: [
      "Impact Lead",
      "Business owner",
      "Users",
      "Product owner",
      "Risk",
      "Workstream Lead",
      "AI Program",
    ],
    inputs: ["Monitoring dashboard", "Benefits baseline", "Incident log", "User feedback"],
    artifacts: [
      "art-benefits-tracker",
      "art-lessons-learned",
      "art-incident-issue-log",
      "art-portfolio-dashboard-spec",
      "art-gate-decision-record",
    ],
    owners: ["Impact Lead (review synthesis)", "Business owner (scale decision)"],
    reviewers: ["Workstream Lead", "Risk", "AI Program"],
    approvers: ["Business owner / governance for scale; Workstream Lead for enterprise actions"],
    decisionBasis: [
      "Evidence vs intended benefits and trade-offs",
      "Control performance and override quality",
      "Systemic vs local issues distinguished",
    ],
    exitCriteria: [
      "Scale/modify/suspend/retire recommendation recorded",
      "Enterprise themes assigned owners",
      "Roll-up to Workstream Lead completed",
    ],
    possibleDecisions: [
      "Scale",
      "Continue with conditions",
      "Modify design",
      "Suspend",
      "Retire",
      "Raise enterprise capability investment",
    ],
    risksIfSkipped: [
      "Local pilots never become enterprise learning",
      "Silent benefit failure",
      "Repeated mistakes across teams",
    ],
    exampleEvidence: ["PIR report", "Themes register", "Workstream roll-up note"],
    durationRange: "Review at ~30/60/90 days for higher tiers; themes quarterly",
    handoffs: ["Enterprise actions → Workstream Lead & AI governance; next-wave intakes → Gate 1"],
    evidenceStatus: "proposed-illustrative",
  },
] as const satisfies readonly LifecycleGate[];

export const gateById = Object.fromEntries(gates.map((g) => [g.id, g])) as Record<
  string,
  (typeof gates)[number]
>;
