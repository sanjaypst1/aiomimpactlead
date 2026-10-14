/**
 * Maps Future Fund interview prep guide + Impact Lead JD into the six-gate walkthrough.
 * Sources: Generic Interview Preparation Guide (Workstream Lead context) and
 * Job Brief Template_August 26_AI Operating Model Lead.
 */

export const rolePlacement = {
  organisation: "Future Fund Management Agency",
  office: "Chief Operating Officer (COO) Office",
  pillar: "Data, Operations & Tech Strategy",
  program: "AI Program",
  verticalWorkstreams: [
    "Investments",
    "Governance",
    "Technology & Infrastructure",
    "People & Change",
  ],
  horizontalWorkstream: "AI Operating Model",
  reportingLine: "AI Operating Model Workstream Lead",
  roleTitle: "AI Operating Model Impact Lead",
  teamCharacter:
    "Lean, fast-paced, highly autonomous—hands-on execution and advisory alongside enterprise Business Architects. Facilitate senior workshops and author blueprints/impact assessments directly.",
  mandate:
    "Connect domain AI initiatives into agency-wide operating-model capability: roles, accountabilities, risk controls, decision rights, ways of working, skills, processes and technology ownership—while business units retain accountability for decisions, design and implementation.",
};

export const deliveryChallenge = {
  title: "Delivery challenge this playbook is built to address",
  context:
    "The AI Operating Model workstream commenced later in the agency’s program cycle and needs immediate capability to align business units around the operational implications of AI adoption.",
  whatGoodLooksLike:
    "Practical, leader-focused impact assessments that translate AI capabilities into concrete decision rights, role boundaries, risk controls and technology ownership—without over-complicating governance frameworks.",
  exampleThemes: [
    {
      theme: "Human-in-the-loop decision boundaries",
      primaryGates: [2, 3],
    },
    {
      theme: "Second-order risks in automated workflows",
      primaryGates: [3, 4],
    },
    {
      theme: "Separating technology ownership from business accountability",
      primaryGates: [1, 3, 4],
    },
    {
      theme: "Sequencing adoption readiness",
      primaryGates: [4, 5, 6],
    },
  ],
};

/** JD key deliverables from the Impact Lead job brief */
export const jdDeliverables = [
  {
    id: "jd-impacts",
    task: "Identify operating model impacts",
    outcome:
      "Evidence-based impact assessments of prioritised AI use cases and enabling capabilities across near- and longer-term operating-model dimensions; support business readiness.",
    primaryGates: [2, 3],
    artifacts: [
      "Current-state map",
      "AI Operating Model Impact Assessment",
      "Role impact cards",
      "Second-order impact register",
    ],
  },
  {
    id: "jd-challenge",
    task: "Provide insight and challenge",
    outcome:
      "Challenge assumptions about AI-enabled work; articulate risks, tensions, trade-offs and second-order impacts in practical, leader-focused language.",
    primaryGates: [3, 4],
    artifacts: [
      "Trade-off log",
      "Hard-question register",
      "Governance decision paper (impact chapter)",
    ],
  },
  {
    id: "jd-facilitate",
    task: "Facilitate cross-agency engagement",
    outcome:
      "Plan and facilitate workshops, clinics and leadership discussions that translate AI concepts into operating-model implications for each business unit context.",
    primaryGates: [1, 2, 3],
    artifacts: [
      "Workshop agendas",
      "Stakeholder map",
      "Decision-right matrix",
      "Human–AI allocation matrix",
    ],
  },
  {
    id: "jd-advise",
    task: "Advise AI Program governance",
    outcome:
      "Concise advice on operating-model readiness, risks, sequencing and dependencies; surface recurring themes needing program or enterprise attention.",
    primaryGates: [4, 5],
    artifacts: [
      "Readiness heat map",
      "Conditions of approval register",
      "Go/no-go recommendation",
      "Decision log",
    ],
  },
  {
    id: "jd-integrate",
    task: "Integrate insights and learnings",
    outcome:
      "Synthesise use-case and early-adoption insights into the broader AI operating model and related initiatives (including Evolve DOT Capabilities), maintaining clear ownership boundaries.",
    primaryGates: [6],
    artifacts: [
      "Enterprise themes register",
      "Pattern library",
      "Quarterly systemic-impact report",
      "Workstream Lead roll-up pack",
    ],
  },
] as const;

export type InterviewLens = "behavioural" | "technical" | "culture";

export type GateInterviewBeat = {
  gateNumber: number;
  walkthroughNarrative: string;
  jdFocus: string[];
  deliveryThemesAddressed: string[];
  questionsAnsweredOrganically: {
    lens: InterviewLens;
    question: string;
    howGateAnswersIt: string;
  }[];
};

/**
 * Place interview guide Qs (sections 05–07) so a gate walkthrough answers them organically.
 */
export const gateInterviewBeats: GateInterviewBeat[] = [
  {
    gateNumber: 1,
    walkthroughNarrative:
      "Mobilise inside the COO Office / DOT Strategy AI Operating Model horizontal workstream. Confirm mandate with the Workstream Lead, map vertical partners (Investments, Governance, Tech & Infrastructure, People & Change), and triage first-wave use cases—because the workstream started later and needs immediate, structured intake.",
    jdFocus: ["Facilitate cross-agency engagement", "Advise AI Program governance (early triage)"],
    deliveryThemesAddressed: [
      "Separating technology ownership from business accountability (owners named at intake)",
      "Sequencing adoption readiness (what enters first wave)",
    ],
    questionsAnsweredOrganically: [
      {
        lens: "behavioural",
        question:
          "How did you structure an operating-model engagement across multiple business units?",
        howGateAnswersIt:
          "Show the mobilisation charter, stakeholder map across vertical workstreams, and triage clinic that forces named business owners before discovery spend.",
      },
      {
        lens: "culture",
        question:
          "How do you navigate ambiguous, early-stage programs where scope is still evolving?",
        howGateAnswersIt:
          "Gate 1 creates minimum viable structure—mandate, taxonomy, triage rules, RAID—without waiting for a perfect enterprise target-state.",
      },
      {
        lens: "behavioural",
        question:
          "How have you delivered high-quality strategy deliverables without junior analyst support?",
        howGateAnswersIt:
          "Impact Lead personally authors the intake quality bar, stakeholder map and triage dispositions—lean-team, hands-on execution.",
      },
    ],
  },
  {
    gateNumber: 2,
    walkthroughNarrative:
      "Discover real work with practitioners and co-design the human–AI workflow with Business Architects and domain teams. Translate the abstract use case into process, decision rights and Human-in-the-Loop boundaries—without inventing heavy new governance bureaucracy.",
    jdFocus: [
      "Identify operating model impacts (process baseline)",
      "Facilitate cross-agency engagement",
    ],
    deliveryThemesAddressed: [
      "Human-in-the-loop decision boundaries",
      "Separating technology ownership from business accountability",
    ],
    questionsAnsweredOrganically: [
      {
        lens: "technical",
        question:
          "How do you translate an abstract AI use case into operating-model dimensions (roles, processes, controls, technology ownership)?",
        howGateAnswersIt:
          "Current-state map → task/decision inventory → human–AI allocation matrix → decision-right matrix with explicit AI may / may not.",
      },
      {
        lens: "behavioural",
        question:
          "How did you facilitate co-design with senior executives who held competing priorities?",
        howGateAnswersIt:
          "Discovery and design workshops bring Exec sponsors, practitioners, Architecture/Engineering and Risk into one decision-rights conversation with visible trade-offs.",
      },
      {
        lens: "technical",
        question:
          "How do you separate technology platform ownership from business-unit accountability?",
        howGateAnswersIt:
          "Design pack names Product/Platform owner for the service and Business/Process owner for outcomes—AI never becomes the accountable decision maker.",
      },
    ],
  },
  {
    gateNumber: 3,
    walkthroughNarrative:
      "Run the Impact Lead’s core craft: evidence-based impact assessment, insight and challenge. Surface second-order and systemic risks, role boundary shifts, and trade-offs in leader language—while business units retain ownership of operating-model decisions.",
    jdFocus: ["Identify operating model impacts", "Provide insight and challenge"],
    deliveryThemesAddressed: [
      "Second-order risks in automated workflows",
      "Human-in-the-loop decision boundaries (role impacts)",
    ],
    questionsAnsweredOrganically: [
      {
        lens: "behavioural",
        question:
          "Share an example of identifying second-order or systemic risks when introducing AI into operational workflows.",
        howGateAnswersIt:
          "Second-order register covers junior learning, SoD, committee capacity, vendor concentration and accountability-without-evidence—each with an owner.",
      },
      {
        lens: "behavioural",
        question:
          "How have you managed stakeholders hesitant about changing decision rights or accountabilities?",
        howGateAnswersIt:
          "Impact workshops convert fear into explicit RACI deltas and safeguards; business owners remain outcome owners, not displaced by the Impact Lead.",
      },
      {
        lens: "behavioural",
        question:
          "How did you map accountabilities, decision rights and technology ownership across diverse units?",
        howGateAnswersIt:
          "Role impact cards + accountability change map + technology/product ownership lines—authored hands-on for governance.",
      },
    ],
  },
  {
    gateNumber: 4,
    walkthroughNarrative:
      "Assure with GRC partners and advise AI Program governance. Evaluate readiness (data, security, controls, capability) and sequence what is ready for pilot—balancing rapid adoption with regulated-environment obligations. Present evidence so executives can decide.",
    jdFocus: ["Advise AI Program governance", "Provide insight and challenge"],
    deliveryThemesAddressed: [
      "Sequencing adoption readiness",
      "Second-order risks (residual risk & conditions)",
    ],
    questionsAnsweredOrganically: [
      {
        lens: "technical",
        question:
          "What frameworks do you use to evaluate organisational readiness and sequence AI use cases?",
        howGateAnswersIt:
          "Risk-tiered readiness heat map across ownership, process, data, tech, security, privacy, skills, support and monitoring—conditions dated before go.",
      },
      {
        lens: "technical",
        question:
          "In an advisory role, how do you ensure governance recommendations are adopted?",
        howGateAnswersIt:
          "Pre-brief + decision paper with hard stops, residual-risk owners and conditions; Impact Lead advises, delegated forum decides, decision log traces follow-through.",
      },
      {
        lens: "culture",
        question:
          "How do you balance rapid AI adoption with strict regulatory, risk and control obligations?",
        howGateAnswersIt:
          "Conditional approvals and kill criteria—not blanket blocks or reckless speed; ISMS/ISO 27001 controls inherited; ISO 42001 practices used for AI oversight evidence.",
      },
    ],
  },
  {
    gateNumber: 5,
    walkthroughNarrative:
      "Support pilot and implementation readiness without absorbing delivery ownership. Track conditions, scope drift and whether human oversight is real in practice—escalating cross-stream issues to the Workstream Lead.",
    jdFocus: ["Advise AI Program governance", "Facilitate cross-agency engagement (checkpoints)"],
    deliveryThemesAddressed: ["Sequencing adoption readiness (conditions before scale)"],
    questionsAnsweredOrganically: [
      {
        lens: "behavioural",
        question:
          "How did you establish human oversight, exception pathways and risk control mechanisms?",
        howGateAnswersIt:
          "Pilot checkpoints test attestation, overrides, fallbacks and incident paths against the approved design—not slideware.",
      },
      {
        lens: "technical",
        question:
          "How do you keep business units accountable while program advice is followed?",
        howGateAnswersIt:
          "Implementation backlog assigns every impact action to business/product owners; Impact Lead tracks, does not take over delivery or benefits realisation.",
      },
    ],
  },
  {
    gateNumber: 6,
    walkthroughNarrative:
      "Review outcomes and integrate learnings into the broader AI operating model and Evolve DOT Capabilities—maintaining ownership boundaries. Roll up decisions, themes and asks to the Workstream Lead.",
    jdFocus: ["Integrate insights and learnings"],
    deliveryThemesAddressed: [
      "Sequencing adoption readiness (scale vs stop)",
      "Second-order risks (did mitigations work?)",
    ],
    questionsAnsweredOrganically: [
      {
        lens: "behavioural",
        question:
          "How did you structure engagement from design through to outcomes across units?",
        howGateAnswersIt:
          "PIR compares Gate 1 benefits and Gate 3 trade-offs to lived results; scale/modify/stop is a business decision with evidence.",
      },
      {
        lens: "culture",
        question:
          "How do you build structure from greenfield ideation through implementation?",
        howGateAnswersIt:
          "Enterprise themes and pattern library turn local pilots into reusable agency capability—without the Impact Lead owning every BU’s operating model.",
      },
      {
        lens: "technical",
        question:
          "How do hub-and-spoke / platform standards coexist with business stewardship?",
        howGateAnswersIt:
          "Themes distinguish platform/control investments (central) from BU process ownership (spoke)—fed to Workstream Lead and AI Program.",
      },
    ],
  },
];

export const walkthroughMeta = {
  title: "Interview walkthrough: six gates in action",
  subtitle:
    "Use this page to walk a panel through where the Impact Lead sits, the delivery challenge, JD outcomes and artifacts, and how behavioural, technical and culture questions are answered organically gate by gate.",
  primaryCta: "Start at Gate 1",
};
