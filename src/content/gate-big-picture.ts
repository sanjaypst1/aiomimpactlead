import type { EvidenceStatus } from "@/lib/types";

export type BigPictureGate = {
  gateNumber: number;
  name: string;
  oneLiner: string;
  inputs: string[];
  outputs: string[];
  impactLeadActivities: string[];
  impactLeadDecisions: string[];
  tradeOffs: string[];
  showStoppers: string[];
  partnersInLoop: {
    team: string;
    howKeptInLoop: string;
  }[];
  rollUpToWorkstreamLead: string;
  evidenceStatus: EvidenceStatus;
};

export const bigPictureMeta = {
  title: "Big picture: six-gate Impact Lead map",
  subtitle:
    "End-to-end view of what enters and leaves each gate, what the Impact Lead does and decides, trade-offs, show-stoppers, GRC partners in the loop, and what rolls up to the AI Operating Model Workstream Lead.",
  endStateRollUp: {
    title: "End-state roll-up to the Workstream Lead",
    summary:
      "Across all gates, the Impact Lead does not own strategy, engineering, risk acceptance or benefits realisation. They return a disciplined package the Workstream Lead can use to steer the portfolio.",
    outcomes: [
      "Clear disposition of each use case (accept / hold / stop / scale / retire)",
      "Named owners for impacts, residual risk, benefits and conditions",
      "Documented trade-offs and show-stoppers that were accepted or escalated",
      "Evidence that GRC partners were engaged at the right depth for the tier",
      "Enterprise themes and pattern updates that should not be solved team-by-team",
      "Honest view of where AI created value—and where it created workload or control debt",
    ],
    artefactsReturned: [
      "Gate decision log (six gates)",
      "Conditions / RAID summary",
      "Impact & second-order register highlights",
      "Readiness / residual-risk advice note",
      "Pilot evidence snapshot",
      "Enterprise themes & asks for the workstream roadmap",
    ],
  },
} as const;

export const bigPictureGates: BigPictureGate[] = [
  {
    gateNumber: 1,
    name: "Mobilise & Intake",
    oneLiner: "Mandate the workstream and only let material, owned AI problems through.",
    inputs: [
      "Sponsor / Workstream Lead mandate",
      "Use-case intake submissions",
      "Existing AI backlog and known platforms",
      "Preliminary sensitivity signals",
    ],
    outputs: [
      "Workstream interfaces and triage cadence",
      "Stakeholder / forum map",
      "Triage disposition per submission",
      "Accepted intake pack with non-goals",
    ],
    impactLeadActivities: [
      "Facilitate mobilisation with Workstream Lead and AI Program",
      "Interview functional leaders",
      "Quality-check intakes; run triage clinic",
      "Stop duplicates and non-AI problems early",
    ],
    impactLeadDecisions: [
      "Recommend accept / reject / redirect / combine / request more info",
      "Recommend preliminary assessment route and partners to engage",
      "Escalate missing sponsors or unclear accountability",
    ],
    tradeOffs: [
      "Speed of intake vs quality of problem framing",
      "Local enthusiasm vs portfolio duplication",
      "Broad experimentation vs controlled first wave",
    ],
    showStoppers: [
      "No named business owner",
      "Proposed autonomous action on investment, employment or financial records without authority path",
      "Sensitive data destined for unapproved external models",
    ],
    partnersInLoop: [
      { team: "Workstream Lead / AI Program", howKeptInLoop: "Mobilisation cadence and triage decisions" },
      { team: "Enterprise Risk", howKeptInLoop: "Early hard-stop flags on high-sensitivity intakes" },
      { team: "Architecture", howKeptInLoop: "Duplication / platform reuse check" },
      { team: "Business sponsor", howKeptInLoop: "Owns problem statement and acceptance into discovery" },
    ],
    rollUpToWorkstreamLead:
      "First-wave portfolio view: what was accepted, rejected, redirected; capacity ask; emerging systemic themes (e.g. missing approved-source registry).",
    evidenceStatus: "proposed-illustrative",
  },
  {
    gateNumber: 2,
    name: "Discover & Design",
    oneLiner: "Map real work; design human–AI workflow and decision rights before build locks in.",
    inputs: [
      "Accepted intake pack",
      "Practitioner access and procedures",
      "Systems / data inventory",
      "Baseline time and quality hypotheses",
    ],
    outputs: [
      "Validated current-state map and baseline",
      "Future human–AI workflow",
      "Decision-right / oversight specification",
      "AI may / may not list and fallback design",
    ],
    impactLeadActivities: [
      "Facilitate discovery workshops and observation",
      "Inventory tasks, decisions, controls and workarounds",
      "Facilitate human–AI allocation and oversight design",
      "Pressure-test rubber-stamp review risk",
    ],
    impactLeadDecisions: [
      "Recommend proceed / reframe / stop based on process fit",
      "Advise whether oversight is meaningful and affordable",
      "Flag design choices that weaken segregation of duties",
    ],
    tradeOffs: [
      "Automation breadth vs human learning pathways",
      "Tight approved-source boundaries vs coverage of useful context",
      "Ideal controls vs operational capacity to execute them",
    ],
    showStoppers: [
      "Cannot define who decides / overrides / suspends",
      "No access to observe real work (designing on fiction)",
      "AI proposed as accountable decision maker",
    ],
    partnersInLoop: [
      { team: "Process owner & practitioners", howKeptInLoop: "Co-design and validation of current/future state" },
      { team: "Data owner", howKeptInLoop: "Approved sources and access boundaries" },
      { team: "Risk / Legal / Cyber", howKeptInLoop: "Engage when design touches sensitive data or consequential decisions" },
      { team: "AI Engineering / Product", howKeptInLoop: "Feasibility of logging, citation, kill-switch" },
    ],
    rollUpToWorkstreamLead:
      "Design readiness signal: whether the use case has explicit decision rights and a viable oversight model—or should be stopped before build spend.",
    evidenceStatus: "proposed-illustrative",
  },
  {
    gateNumber: 3,
    name: "Impact Assessment",
    oneLiner: "Make organisational consequences, owners, trade-offs and hard questions explicit.",
    inputs: [
      "Agreed future workflow",
      "Baseline metrics",
      "Role / org context",
      "Control inventory",
    ],
    outputs: [
      "Operating-model impact assessment",
      "Role impact cards and RACI deltas",
      "Second-order impact register",
      "Named value owner for benefits",
    ],
    impactLeadActivities: [
      "Run impact and workforce workshops",
      "Synthesise cross-functional impacts",
      "Surface second-order effects (learning, IC capacity, vendor lock-in)",
      "Challenge unowned benefit claims",
    ],
    impactLeadDecisions: [
      "Recommend proceed only if every material impact has an owner",
      "Recommend safeguards (e.g. junior learning quotas) even if they slow gains",
      "Escalate unresolved cross-business impacts",
    ],
    tradeOffs: [
      "Productivity speed vs junior judgement development",
      "Local optimisation vs enterprise consistency",
      "Fewer headcount hours vs higher senior review load",
    ],
    showStoppers: [
      "Accountability retained by a role without evidence access",
      "Segregation of duties broken by AI path",
      "No owner willing to accept benefits or residual consequences",
    ],
    partnersInLoop: [
      { team: "People & Culture", howKeptInLoop: "Skills, consultation and job-architecture implications" },
      { team: "Enterprise Risk", howKeptInLoop: "Control and residual-risk implications" },
      { team: "Business executives", howKeptInLoop: "Accept or reject material operating-model changes" },
      { team: "Product owner", howKeptInLoop: "Service ownership and support load" },
    ],
    rollUpToWorkstreamLead:
      "Impact synopsis: material deltas, trade-offs accepted, unowned issues requiring enterprise attention, and readiness to enter assurance.",
    evidenceStatus: "proposed-illustrative",
  },
  {
    gateNumber: 4,
    name: "Assure & Decide",
    oneLiner: "Risk-tiered assurance with GRC; governance decision with conditions—not enthusiasm.",
    inputs: [
      "Impact pack and trade-offs",
      "Test / evaluation plans",
      "Privacy, legal, cyber inputs",
      "Funding and scope ask",
    ],
    outputs: [
      "Risk-tier rationale and assurance plan",
      "Readiness scorecard and evidence index",
      "Governance decision record",
      "Conditions of approval register",
    ],
    impactLeadActivities: [
      "Facilitate assurance clinic and readiness review",
      "Map to ISMS (ISO 27001-aligned) and ISO 42001 practices",
      "Compile decision paper; run pre-brief",
      "Present readiness advice; keep risk acceptance with Risk/business",
    ],
    impactLeadDecisions: [
      "Recommend go / conditional go / hold / stop to the forum",
      "Recommend which conditions are non-negotiable before pilot",
      "Refuse to paper over hard stops",
    ],
    tradeOffs: [
      "Time-to-pilot vs depth of assurance for the tier",
      "Reuse of existing ISMS controls vs AI-specific add-ons",
      "Conditional approval speed vs unresolved dependencies",
    ],
    showStoppers: [
      "Hard stop triggered (unlawful use, missing owner, ineffective oversight, prohibited data path)",
      "GRC partners withhold endorsement for the tier",
      "Residual risk with no authorised acceptor",
    ],
    partnersInLoop: [
      { team: "Enterprise Risk", howKeptInLoop: "Tiering, residual risk, monitoring expectations" },
      { team: "Legal & Privacy", howKeptInLoop: "Legal/privacy assessment; privilege and disclosure" },
      { team: "Cyber Security", howKeptInLoop: "Access, logging, adversarial and vendor controls" },
      { team: "Compliance", howKeptInLoop: "Regulatory / policy obligations where applicable" },
      { team: "Governance forum", howKeptInLoop: "Formal approve / conditional / defer / reject decision" },
    ],
    rollUpToWorkstreamLead:
      "Decision outcome, conditions, residual-risk owners, and whether the portfolio should fund pilot capacity or stop.",
    evidenceStatus: "proposed-illustrative",
  },
  {
    gateNumber: 5,
    name: "Pilot & Implement",
    oneLiner: "Make the approved design real; track conditions and drift without owning delivery.",
    inputs: [
      "Governance decision and conditions",
      "Pilot plan and test protocol",
      "Training / procedure updates",
      "Support and monitoring design",
    ],
    outputs: [
      "Closed or tracked conditions",
      "Pilot observation log",
      "Updated RACI / procedures in use",
      "Operational readiness recommendation",
    ],
    impactLeadActivities: [
      "Translate impacts into owned implementation actions",
      "Attend checkpoints; watch scope drift",
      "Verify oversight is actually practised",
      "Escalate cross-stream blockers to Workstream Lead",
    ],
    impactLeadDecisions: [
      "Recommend continue / hold / escalate based on conditions and drift",
      "Recommend stop if approved decision rights are being bypassed",
      "Signal when delivery is re-opening Gate 2–3 design choices",
    ],
    tradeOffs: [
      "Pilot speed vs waiting for perfect lineage / golden sets",
      "Tight cohort control vs pressure to expand users early",
      "Impact Lead challenge vs being pulled into delivery management",
    ],
    showStoppers: [
      "Conditions of approval ignored",
      "AI decision rights expanded beyond governance approval",
      "No support / incident owner in practice",
    ],
    partnersInLoop: [
      { team: "Product / delivery", howKeptInLoop: "Own build and pilot execution" },
      { team: "Change / P&C", howKeptInLoop: "Training and communications fidelity to decision rights" },
      { team: "Risk", howKeptInLoop: "Condition tracking and emerging risk signals" },
      { team: "Service support", howKeptInLoop: "Runbook and incident path rehearsal" },
    ],
    rollUpToWorkstreamLead:
      "Pilot health: conditions status, drift alerts, dependency escalations, and whether evidence supports moving to review.",
    evidenceStatus: "proposed-illustrative",
  },
  {
    gateNumber: 6,
    name: "Review & Learn",
    oneLiner: "Prove value and control performance; scale or stop; feed enterprise patterns upward.",
    inputs: [
      "Monitoring and benefits data",
      "Override / incident / quality evidence",
      "User and leader feedback",
      "Prior trade-offs and conditions",
    ],
    outputs: [
      "Post-implementation review",
      "Scale / modify / suspend / retire recommendation",
      "Lessons learned",
      "Enterprise themes and pattern updates",
    ],
    impactLeadActivities: [
      "Coordinate PIR with evidence from owners",
      "Compare outcomes to Gate 1 benefits and Gate 3 trade-offs",
      "Separate local fixes from systemic themes",
      "Produce Workstream Lead roll-up pack",
    ],
    impactLeadDecisions: [
      "Recommend scale / modify / suspend / retire with evidence",
      "Recommend enterprise investments (platform, policy, skills)",
      "Recommend reassessment triggers for model/vendor/use changes",
    ],
    tradeOffs: [
      "Scaling a ‘good enough’ pilot vs waiting for cleaner evidence",
      "Local customisation vs reusable enterprise pattern",
      "Celebrating productivity vs acknowledging control near-misses",
    ],
    showStoppers: [
      "Benefits unrealised with rising control exceptions",
      "Human oversight degraded under volume",
      "Systemic issue repeating across use cases with no enterprise owner",
    ],
    partnersInLoop: [
      { team: "Business owner", howKeptInLoop: "Owns scale/stop decision for the use case" },
      { team: "Risk & assurance", howKeptInLoop: "Reassess residual risk and monitoring" },
      { team: "Workstream Lead", howKeptInLoop: "Receives enterprise themes and roadmap asks" },
      { team: "AI Program / governance", howKeptInLoop: "Portfolio reporting and policy updates" },
    ],
    rollUpToWorkstreamLead:
      "Final package: use-case decision, evidence snapshot, conditions still open, enterprise themes with proposed owners, and next-wave intake recommendations.",
    evidenceStatus: "proposed-illustrative",
  },
];
