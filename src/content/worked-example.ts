import type { WorkedExampleCase, WorkedExampleStep } from "@/lib/types";

const demo = "synthetic-example" as const;

function step(
  partial: Omit<WorkedExampleStep, "evidenceStatus"> & { evidenceStatus?: WorkedExampleStep["evidenceStatus"] },
): WorkedExampleStep {
  return { evidenceStatus: demo, ...partial };
}

/** Primary deep case: IC memo assist — answers placed across six gates. */
const icMemoSteps: WorkedExampleStep[] = [
  step({
    gateId: "gate-1",
    gateNumber: 1,
    title: "Mobilise & Intake: mandate, problem, rationale, and intended benefits",
    narrative:
      "The AI Program and Research Executive Sponsor mobilise the workstream; the Impact Lead confirms mandate to assess operating-model implications of AI assists on IC evidence packs—without absorbing investment decision authority. Research Head submits the use case to Triage Clinic; the Impact Lead quality-checks intake for clear problem, measurable benefits, named owners, and explicit non-goals (no AI investment decision).",
    syntheticData: {
      workstreamId: "WS-RESEARCH-AI-2026",
      sponsor: "Executive Director, Research",
      mandate: "Impact assessment + readiness advice for research AI use cases",
      intakeId: "INT-2026-IC-017",
      disposition: "Accept to Gate 2",
      preliminaryTier: "Tier 2 — high influence on recommendation evidence",
      submitter: "Research Head (business owner)",
    },
    artifactsProduced: ["art-stakeholder-raci", "art-intake-record", "art-use-case-brief"],
    decision: "Mobilise; accept IC memo use case into discover & design",
    deepDive: [
      {
        question: "Why start here rather than a tech-platform use case?",
        answer:
          "Research IC memos sit on the critical path to investment judgement. If AI changes how evidence is prepared, the organisation must prove accountability before scaling elsewhere.",
      },
      {
        question: "What is the problem statement of the current use case?",
        answer:
          "Analysts spend 12–15 hours assembling licensed and internal sources into a first-draft IC memo. Source collation is inconsistent, citation trails are uneven, and senior review time is consumed by formatting and retrieval rather than thesis challenge.",
      },
      {
        question: "Why was the use case submitted?",
        answer:
          "Submitted by Research leadership after repeated IC cycles showed preparation lag and uneven evidence packs. The submitter wants AI to accelerate retrieval and first-draft structure so humans can spend more time on judgement—not to automate investment recommendations.",
      },
      {
        question: "What tangible benefits does the submitter intend?",
        answer:
          "(1) Cut first-draft prep time by ~30%. (2) Raise citation coverage on factual claims. (3) Free senior review capacity for challenge. (4) Reduce last-minute pack defects before IC. Benefits are conditional on human attestation remaining mandatory.",
      },
    ],
  }),
  step({
    gateId: "gate-2",
    gateNumber: 2,
    title: "Discover & Design: process deep dive and human–AI boundaries",
    narrative:
      "The Impact Lead facilitates current-state discovery with analysts, portfolio managers, Risk, Data, Legal and Secretariat—observing real work, not policy diagrams alone. Workflow and Decision-Rights workshops then define what AI may do: retrieve approved sources, summarise with citations, flag contradictions, and draft factual sections while humans retain every consequential decision.",
    syntheticData: {
      baselineHours: "13.2 hours average first draft",
      processTouched: "Research retrieval → draft memo → peer review → IC pack → committee",
      controlPoints: "Peer review, Risk challenge, IC pack sign-off",
      aiMay: "Retrieve, classify, summarise, draft factual sections with citations",
      aiMayNot:
        "Invent sources; approve thesis; set conviction; allocate; bypass Risk; submit trades",
      oversight: "Analyst attestation on every IC-bound memo",
    },
    artifactsProduced: [
      "art-process-map-current",
      "art-benefits-baseline",
      "art-scope-boundary",
      "art-use-case-brief",
      "art-target-state-sketch",
      "art-human-oversight-design",
      "art-impact-hypothesis",
    ],
    decision: "Proceed to operating-model impact assessment",
    deepDive: [
      {
        question: "How is the Impact Lead doing a deep dive, and what process will change?",
        answer:
          "Deep dive method: shadow two memo cycles, map SIPOC/task inventory, inventory systems and licensed feeds, baseline time/quality, and document who currently decides what. Process change: the retrieval-and-first-draft segment of the research-to-IC workflow. Unchanged: thesis approval, conviction, allocation, Risk independent challenge, and IC decision.",
      },
      {
        question: "What difficult question is the Impact Lead asking at this gate?",
        answer:
          "If the AI drafts faster, will the analyst still read the underlying sources enough to retain judgement—and can we evidence meaningful human oversight rather than rubber-stamping?",
      },
    ],
  }),
  step({
    gateId: "gate-3",
    gateNumber: 3,
    title: "Impact Assessment: role changes, value ownership, trade-offs and hard choices",
    narrative:
      "Operating-model impact workshops quantify role shifts, second-order effects (junior learning, IC volume), and who owns benefits realisation. The Impact Lead surfaces trade-offs and refuses to let AI become the accountable decision maker.",
    syntheticData: {
      roleDelta: "Analyst becomes editor-in-chief + source verifier; AI is assist only",
      valueOwner: "Research Head (benefits); Product Owner (service); Risk (residual risk advice)",
      secondOrder: "Junior learning pathway and IC capacity risk flagged",
    },
    artifactsProduced: [
      "art-operating-model-delta",
      "art-change-impact",
      "art-learning-plan",
      "art-comms-plan",
      "art-stakeholder-raci",
    ],
    decision: "Proceed to risk, assurance and readiness with trade-offs documented",
    deepDive: [
      {
        question: "How are role responsibilities changing?",
        answer:
          "Analysts: less collation, more verification, synthesis and challenge. Juniors: retain a minimum raw-source review quota so judgement pathways are not hollowed out. Research Head: remains accountable for research quality. Portfolio manager: independent thesis challenge unchanged. IC: remains the decision forum. Product Owner: owns the AI service run. Impact Lead: owns impact method and readiness synthesis—not delivery or risk acceptance.",
      },
      {
        question: "Who will take guarantee that bringing AI will bring more value?",
        answer:
          "No one 'guarantees' AI value in the abstract. The Research Head (business owner) owns benefit claims and baseline metrics. The Product Owner owns service performance. The Impact Lead challenges inflated claims and requires evidence before scale. Governance accepts residual risk only with named owners—not with the Impact Lead as guarantor.",
      },
      {
        question: "What trade-off is the Impact Lead highlighting?",
        answer:
          "Speed vs learning and control capacity: faster drafts can increase IC proposal volume and weaken junior apprenticeship if raw review disappears. Another trade-off: tighter approved-source boundaries reduce hallucination risk but may exclude useful external colour unless separately licensed and governed.",
      },
      {
        question: "What difficult decision is the Impact Lead making?",
        answer:
          "Recommend a bounded pilot with mandatory source attestation and junior learning safeguards—even if that means slower initial productivity gains—rather than a broad rollout that looks impressive but hollows out judgement and accountability.",
      },
      {
        question: "What difficult questions will the Impact Lead ask leaders?",
        answer:
          "Who is accountable if a cited claim is wrong and influences a recommendation? Can you show the human review is meaningful under time pressure? If prep time falls 30%, will IC volume rise—and who funds that capacity? What happens when the model or vendor changes mid-cycle?",
      },
    ],
  }),
  step({
    gateId: "gate-4",
    gateNumber: 4,
    title: "Assure & Decide: GRC, ISO 27001/42001, and governance decision",
    narrative:
      "Control and Assurance Clinic and Readiness Review bring Risk, Legal, Privacy, Cyber, Data and Model assurance. The Impact Lead maps controls to existing ISMS (ISO/IEC 27001-aligned information security) and to AI management practices (ISO/IEC 42001), without inventing a parallel bureaucracy. Business sponsor tables the decision paper; Impact Lead presents impacts, trade-offs and readiness; Risk presents residual-risk advice; Technology presents architecture readiness. The forum approves a limited pilot—not enterprise scale.",
    syntheticData: {
      riskTier: "Tier 2",
      isms27001: "Reuse access control, logging, vendor, incident, and confidentiality controls",
      iso42001: "Map use-case to Govern/Map/Measure/Manage practices; AIMS gap log opened",
      grc: "Enterprise Risk + Legal/Privacy + Cyber endorsement required before governance forum",
      fundingEnvelope: "AUD 420k pilot",
      cohortSize: "8 analysts, 3 sectors, 6 weeks",
      governanceOutcome: "Approve pilot with conditions register",
    },
    artifactsProduced: [
      "art-assurance-plan",
      "art-evidence-index",
      "art-readiness-scorecard",
      "art-risk-tier-record",
      "art-model-system-card",
      "art-privacy-screening",
      "art-legal-assessment",
      "art-cyber-ai-review",
      "art-committee-memo",
      "art-funding-request",
      "art-gate-decision-record",
    ],
    decision: "Approve pilot path; human authority for all investment decisions retained",
    deepDive: [
      {
        question: "Do we need blessing from governance, risk and compliance?",
        answer:
          "Yes. For this tier, specialist challenge and endorsement from Enterprise Risk, Legal/Privacy and Cyber are required before the Formal Governance Decision Forum. The Impact Lead prepares the readiness synthesis; GRC functions retain their mandates. Compliance is engaged where regulatory or disclosure obligations apply.",
      },
      {
        question: "Is ISMS / ISO 27001 involved?",
        answer:
          "Yes, where the organisation operates an information security management system (often ISO/IEC 27001-aligned). AI use cases that touch confidential research, licensed data and IC packs must inherit access control, classification, logging, vendor assurance, incident response and continuity controls—not bypass them.",
      },
      {
        question: "Is ISO 42001 involved?",
        answer:
          "Yes as a management-system reference for AI. The Impact Lead maps the use case to ISO/IEC 42001-style practices (roles, impact assessment, human oversight, monitoring, change control) and records gaps for enterprise AIMS maturity—without claiming the agency is already certified unless verified.",
      },
      {
        question: "What does governance bless—and what does it refuse?",
        answer:
          "Blesses: bounded assistive pilot with citation controls, attestation, monitoring and kill-switch. Refuses: AI thesis approval, conviction setting, allocation, trade submission, or unsupervised scale across all research teams.",
      },
    ],
  }),
  step({
    gateId: "gate-5",
    gateNumber: 5,
    title: "Pilot & Implement: conditions closed, learning safeguards live",
    narrative:
      "Impact Lead tracks approval conditions without owning delivery. Junior learning quota, golden-set citation tests, and fortnightly pilot checkpoints are confirmed before go-live.",
    syntheticData: {
      citationPassThreshold: "95% on golden set v1",
      learningSafeguard: "Minimum raw-source review hours for juniors",
      checkpointCadence: "Fortnightly",
    },
    artifactsProduced: [
      "art-pilot-plan",
      "art-test-eval-protocol",
      "art-runbook-support",
      "art-monitoring-plan",
      "art-gate-decision-record",
    ],
    decision: "Pilot start authorised",
  }),
  step({
    gateId: "gate-6",
    gateNumber: 6,
    title: "Review & Learn: PIR, enterprise patterns, and value check",
    narrative:
      "Post-implementation review compares outcomes to the submitter’s intended benefits and the trade-offs flagged at Gate 3. One citation paraphrase incident caught by analyst override—treated as a learning event, not a success metric to hide. Recurring needs become enterprise themes: approved-source registry, attestation standard, model-change notification, evaluation service, and ISO 42001 gap closure—not one-off fixes per team.",
    syntheticData: {
      avgDraftHours: "9.4 (vs 13.2 baseline)",
      citationPassRate: "96.1%",
      overrideRate: "11% of memos",
      incidentId: "AI-INC-2026-003",
      benefitsVariance: "-28% hours vs baseline sustained",
      enterpriseThemes: "Source registry; attestation; model-change; evaluation service",
      nextWave: "Earnings-call notes assist — separate intake",
    },
    artifactsProduced: [
      "art-evidence-index",
      "art-incident-issue-log",
      "art-benefits-tracker",
      "art-lessons-learned",
      "art-assurance-audit-register",
      "art-gate-decision-record",
      "art-portfolio-dashboard-spec",
    ],
    decision: "Enhance and continue with phased rollout; no expansion of AI decision rights; log next-wave candidate",
    deepDive: [
      {
        question: "Did the value owners deliver on the intended benefits?",
        answer:
          "Partially and conditionally: draft time down ~29%, citation pass above threshold, one material near-miss caught by human oversight. Scale only where learning safeguards and override discipline remain healthy.",
      },
    ],
  }),
];

export const workedExampleCases: WorkedExampleCase[] = [
  {
    id: "we-investment-research-ic-memo",
    title: "AI-Assisted Investment Research and Investment Committee Memo",
    division: "investment-business",
    functionArea: "Investment research",
    problemStatement:
      "Analysts spend 12–15 hours assembling sources into first-draft IC memos; citation trails and senior challenge time are uneven.",
    whySubmitted:
      "Research leadership submitted the case to reduce preparation lag while keeping investment judgement human-owned.",
    intendedBenefits: [
      "~30% reduction in first-draft preparation time",
      "Higher citation coverage on factual claims",
      "More senior time on thesis challenge vs collation",
      "Fewer last-minute IC pack defects",
    ],
    industryContext:
      "Peer sovereign investors (e.g. NBIM) publicly emphasise AI for research and monitoring with humans retaining decision authority—informing this pattern without copying another fund’s design.",
    organisationContext:
      "Future Fund–style investment organisation working design. Demonstration metrics are labelled. Public anchors include Future Fund AI transparency themes and peer sovereign AI practice.",
    narrator:
      "Follow how the Impact Lead takes an IC memo assist through six gates—from mobilise and intake to review and learn—answering problem, benefits, process change, role shifts, value ownership, GRC blessing, ISO 27001/42001 mapping, trade-offs and hard questions at the right gate.",
    primaryUseCaseId: "uc-investment-research",
    evidenceStatus: demo,
    steps: icMemoSteps,
  },
  {
    id: "we-ri-esg-screening",
    title: "Responsible Investment: AI-supported company signal screening",
    division: "investment-business",
    functionArea: "Listed equities & responsible investment",
    problemStatement:
      "Coverage of governance, sustainability and reputational signals across a large listed universe exceeds manual screening capacity.",
    whySubmitted:
      "RI and equities teams need earlier signal detection without letting models decide materiality or engagement action.",
    intendedBenefits: [
      "Broader continuous coverage of portfolio and benchmark names",
      "Faster triage of emerging controversies",
      "Clearer evidence packs for engagement decisions",
    ],
    industryContext:
      "NBIM publicly describes AI-supported sustainability due diligence and daily incident monitoring across thousands of companies, with human verification and engagement ownership retained.",
    organisationContext:
      "Business use case for Responsible Investment / Listed Equities. Screening assists analysts; humans decide materiality and action.",
    narrator:
      "Impact Lead focuses on false-positive load, contested information, escalation rights, and preventing AI from becoming the engagement decision maker.",
    primaryUseCaseId: "uc-esg",
    evidenceStatus: demo,
    steps: [
      step({
        gateId: "gate-1",
        gateNumber: 1,
        title: "Intake: scale coverage without automating stewardship decisions",
        narrative:
          "RI lead submits use case for AI screening of public and licensed signals. Non-goals: autonomous engagement letters, voting recommendations, or divestment decisions.",
        syntheticData: {
          submitter: "Head of Responsible Investment",
          nonGoals: "No autonomous engagement, voting, or divestment",
        },
        artifactsProduced: ["art-intake-record", "art-use-case-brief"],
        decision: "Accept to discovery",
        deepDive: [
          {
            question: "Problem and intended benefits?",
            answer:
              "Problem: manual screening cannot keep pace with universe scale. Benefits: earlier signals and better triage—materiality and action remain human.",
          },
        ],
      }),
      step({
        gateId: "gate-2",
        gateNumber: 2,
        title: "Discovery: screening → triage → engagement workflow",
        narrative:
          "Maps current controversy workflow, data vendors, and escalation to investment and ethics forums.",
        syntheticData: {
          processTouched: "Signal intake → triage → RI assessment → engagement / monitoring",
        },
        artifactsProduced: ["art-process-map-current", "art-benefits-baseline"],
        decision: "Proceed to human–AI design",
        deepDive: [
          {
            question: "What process changes?",
            answer:
              "First-pass screening and clustering change; human RI assessment, investment dialogue and any divestment path do not.",
          },
        ],
      }),
      step({
        gateId: "gate-3",
        gateNumber: 3,
        title: "Impact: analyst capacity, false positives, contested facts",
        narrative:
          "Impact Lead stresses alert fatigue and contested sources. RI remains accountable for materiality calls.",
        syntheticData: {
          tradeOff: "Coverage scale vs false-positive review burden on scarce RI experts",
          valueOwner: "RI Head owns benefits and false-positive tolerance",
        },
        artifactsProduced: ["art-operating-model-delta", "art-change-impact"],
        decision: "Document trade-offs; proceed to assurance",
        deepDive: [
          {
            question: "Difficult question from the Impact Lead?",
            answer:
              "If the model ranks a controversy high and the analyst is behind on queue, will the organisation treat the score as a decision—or still require human materiality judgement?",
          },
        ],
      }),
      step({
        gateId: "gate-4",
        gateNumber: 4,
        title: "Assure & Decide: standards, GRC, and governance approval",
        narrative:
          "Tier typically elevated where outputs influence stewardship. Reuse ISMS controls for data access; map monitoring and human oversight to ISO 42001 practices. Forum approves pilot with mandatory human materiality review and vendor-data audit trail.",
        syntheticData: {
          grc: "Risk, Legal, RI policy owners endorse before governance",
          iso42001: "Impact assessment + monitoring + human oversight documented",
          governanceOutcome: "Approve pilot; no autonomous engagement",
        },
        artifactsProduced: [
          "art-risk-tier-record",
          "art-assurance-plan",
          "art-readiness-scorecard",
          "art-committee-memo",
          "art-gate-decision-record",
        ],
        decision: "Pilot approved with conditions",
        deepDive: [
          {
            question: "GRC / ISO involvement?",
            answer:
              "Yes—Risk and Legal challenge required. ISO 27001-aligned controls for data/vendor; ISO 42001 used to structure AI management evidence.",
          },
        ],
      }),
    ],
  },
  {
    id: "we-private-markets-dd",
    title: "Private markets: AI-assisted data-room and memo review",
    division: "investment-business",
    functionArea: "Alternatives / private markets",
    problemStatement:
      "Due-diligence teams face large, time-boxed data rooms; junior time is consumed extracting clauses and facts from manager materials.",
    whySubmitted:
      "Private markets leadership wants faster extraction and comparison against playbooks while preserving privilege, confidentiality and human investment conclusions.",
    intendedBenefits: [
      "Faster clause and fact extraction from approved data-room sets",
      "More consistent issue lists for IC memos",
      "Protected junior learning via structured review tasks",
    ],
    industryContext:
      "Asset owners and managers globally concentrate GenAI in document-heavy diligence and research workflows—high value, high confidentiality risk.",
    organisationContext:
      "Alternatives / private markets working design with strict access boundaries.",
    narrator:
      "Impact Lead prioritises privilege, access control, and preventing AI from writing the investment conclusion.",
    evidenceStatus: demo,
    steps: [
      step({
        gateId: "gate-1",
        gateNumber: 1,
        title: "Intake with confidentiality hard stops",
        narrative:
          "Use case accepted only if data-room access is identity-bound and external model training on deal content is prohibited.",
        syntheticData: {
          hardStop: "No deal content into unapproved external models",
          submitter: "Head of Private Markets",
        },
        artifactsProduced: ["art-intake-record", "art-scope-boundary"],
        decision: "Accept with cyber/legal preconditions",
        deepDive: [
          {
            question: "Why submitted and what benefits?",
            answer:
              "Submitted to compress diligence cycle time. Benefits: faster extraction and issue lists—not automated invest/do-not-invest recommendations.",
          },
        ],
      }),
      step({
        gateId: "gate-3",
        gateNumber: 3,
        title: "Roles: deal team accountability retained",
        narrative:
          "Deal lead remains accountable for diligence conclusions. AI drafts extraction tables; humans own IC recommendation.",
        syntheticData: {
          roleDelta: "Associates extract less manually; still own verification",
          tradeOff: "Speed vs junior apprenticeship on raw documents",
        },
        artifactsProduced: ["art-operating-model-delta", "art-human-oversight-design"],
        decision: "Proceed with learning safeguards",
        deepDive: [
          {
            question: "Who guarantees value?",
            answer:
              "Private Markets deal sponsor owns benefit realisation. Impact Lead challenges claims and sequences readiness; does not guarantee returns or deal outcomes.",
          },
        ],
      }),
      step({
        gateId: "gate-4",
        gateNumber: 4,
        title: "Assure & Decide: ISMS-heavy assurance and governance",
        narrative:
          "Cyber and Legal dominate readiness: classification, DLP, privilege, vendor terms, audit logging. ISO 27001 controls are first-class; ISO 42001 frames AI-specific oversight. Governance approves pilot only with Legal privilege, Cyber and Risk endorsement.",
        syntheticData: {
          isms27001: "Mandatory — confidentiality, access, logging, vendor, incident",
          iso42001: "Human oversight + change control for model/vendor updates",
        },
        artifactsProduced: ["art-cyber-ai-review", "art-legal-assessment", "art-assurance-plan"],
        decision: "Conditional readiness; pilot subject to governance approval",
        deepDive: [
          {
            question: "GRC blessing required?",
            answer:
              "Yes—Legal privilege, Cyber and Risk endorsement before any pilot touching live data rooms.",
          },
        ],
      }),
    ],
  },
  {
    id: "we-investment-ops-breaks",
    title: "Investment operations: reconciliation break classification",
    division: "operations-risk",
    functionArea: "Investment operations",
    problemStatement:
      "Ops staff spend high effort classifying reconciliation breaks and drafting root-cause notes across fragmented systems.",
    whySubmitted:
      "Operations leadership wants faster triage of breaks while keeping financial-record corrections human-approved (segregation of duties).",
    intendedBenefits: [
      "Lower mean time to classify breaks",
      "More consistent root-cause tagging",
      "Protected SoD on financial corrections",
    ],
    industryContext:
      "Asset managers and custodians widely apply AI to exception management and ops triage—classic middle/back-office AI pattern.",
    organisationContext: "Investment operations working design under strong SoD and audit evidence needs.",
    narrator:
      "Impact Lead’s hard line: AI may classify and suggest; humans approve any financial-record change.",
    evidenceStatus: demo,
    steps: [
      step({
        gateId: "gate-1",
        gateNumber: 1,
        title: "Intake: assist classification, never auto-correct money",
        narrative: "Hard stop recorded: no autonomous posting or settlement instruction.",
        syntheticData: { nonGoals: "No auto-posting, no settlement instruction submission" },
        artifactsProduced: ["art-intake-record"],
        decision: "Accept to discovery",
        deepDive: [
          {
            question: "Problem and benefits?",
            answer:
              "Problem: exception queues consume scarce ops capacity. Benefits: faster classification—corrections remain human-authorised.",
          },
        ],
      }),
      step({
        gateId: "gate-3",
        gateNumber: 3,
        title: "SoD and role impacts",
        narrative:
          "Impact assessment stresses segregation of duties and audit evidence. Ops supervisor remains accountable for approved corrections.",
        syntheticData: {
          tradeOff: "Speed vs risk of silent process drift if suggestions become de-facto instructions",
        },
        artifactsProduced: ["art-operating-model-delta", "art-assurance-plan"],
        decision: "Proceed with SoD controls explicit",
        deepDive: [
          {
            question: "Difficult decision?",
            answer:
              "Recommend blocking any path that lets AI write to ledgers—even if a vendor demo shows 'straight-through' resolution.",
          },
        ],
      }),
      step({
        gateId: "gate-4",
        gateNumber: 4,
        title: "Assure & Decide: audit trail, ISMS, and governance",
        narrative:
          "Internal Audit consulted on evidence integrity. ISO 27001 logging/access controls; ISO 42001 monitoring of suggestion quality and override rates. Governance approves assist path with SoD attestation.",
        syntheticData: { grc: "Risk + Ops control owner + Audit awareness" },
        artifactsProduced: ["art-readiness-scorecard", "art-risk-tier-record"],
        decision: "Ready for governance with SoD attestation",
      }),
    ],
  },
  {
    id: "we-knowledge-lumi-style",
    title: "Technology: secure knowledge collaborator (LUMi-style pattern)",
    division: "technology",
    functionArea: "Data, Operations & Technology / Investment capability",
    problemStatement:
      "Staff need secure synthesis across proprietary corporate and investment information; public tools are restricted for sensitive content.",
    whySubmitted:
      "Technology and investment-capability sponsors want an in-house retrieval/collaboration pattern that keeps proprietary data protected while improving insight speed.",
    intendedBenefits: [
      "Faster synthesis of approved internal knowledge",
      "Clear choice between proprietary and external AI tools by data class",
      "Stronger auditability than ad-hoc chat use",
    ],
    industryContext:
      "Future Fund publicly describes LUMi as an in-house AI digital collaboration tool within a knowledge-management programme, emphasising that AI will not make investment decisions. Peer funds similarly build governed enterprise assistants.",
    organisationContext:
      "Tech division enabling capability. Pattern inspired by public Future Fund LUMi statements—not an assertion of internal architecture detail.",
    narrator:
      "Impact Lead treats the platform as an enabling capability: business owners still own each application use; platform owner owns shared controls.",
    evidenceStatus: demo,
    steps: [
      step({
        gateId: "gate-1",
        gateNumber: 1,
        title: "Intake: platform vs application use cases",
        narrative:
          "Triage separates the common platform (identity, retrieval, logging, evaluation) from each business application that will sit on it.",
        syntheticData: {
          submitter: "DOT / Investment Capability sponsors",
          split: "Platform capability + per-use-case applications",
        },
        artifactsProduced: ["art-intake-record", "art-use-case-brief"],
        decision: "Accept platform path; require child use-case intakes",
        deepDive: [
          {
            question: "Problem and why submitted?",
            answer:
              "Problem: fragmented knowledge and unsafe shadow use of external tools. Submitted to provide a secure collaborator that synthesises proprietary information without becoming the investment decision maker.",
          },
        ],
      }),
      step({
        gateId: "gate-3",
        gateNumber: 3,
        title: "Operating model: platform owner vs business owner",
        narrative:
          "Impact Lead clarifies dual ownership: platform team owns shared guardrails; each business owner owns outcomes of their workflow on top.",
        syntheticData: {
          roleDelta: "Platform Product Owner + Business Application Owners + Impact Lead synthesis",
          tradeOff: "Central standards vs local speed—federated with hard shared controls",
        },
        artifactsProduced: ["art-operating-model-delta", "art-stakeholder-raci"],
        decision: "Publish ownership model before scale",
        deepDive: [
          {
            question: "Who guarantees value?",
            answer:
              "Platform owner guarantees service reliability and control inheritance. Each business sponsor guarantees use-case benefits. Impact Lead does not own either—challenges gaps between them.",
          },
        ],
      }),
      step({
        gateId: "gate-4",
        gateNumber: 4,
        title: "Assure & Decide: ISMS, AI management, and platform governance",
        narrative:
          "Cyber, Privacy and Architecture lead assurance. ISO 27001-aligned ISMS covers identity, logging, secure SDLC; ISO 42001 informs enterprise AI policy, evaluation and change control for models. Governance blesses platform go-live; each high-impact application still gates separately.",
        syntheticData: {
          isms27001: "Core — identity, logging, vulnerability, vendor, incident",
          iso42001: "Enterprise AIMS practices for model lifecycle and oversight",
          grc: "Enterprise Risk + Cyber + Privacy + Architecture",
        },
        artifactsProduced: ["art-cyber-ai-review", "art-model-system-card", "art-assurance-plan"],
        decision: "Conditional platform readiness; business apps still gate separately",
        deepDive: [
          {
            question: "Governance blessing?",
            answer:
              "Yes for platform go-live and for each high-impact application. Public Future Fund messaging already stresses human oversight—reinforce that in governance papers.",
          },
        ],
      }),
    ],
  },
  {
    id: "we-tech-incident-triage",
    title: "Technology service management: AI-assisted incident triage",
    division: "technology",
    functionArea: "Technology service management",
    problemStatement:
      "Service desks face alert/incident volume where first-line triage is slow and knowledge articles are underused.",
    whySubmitted:
      "Service Owner wants faster triage and knowledge-grounded suggestions without autonomous high-impact changes.",
    intendedBenefits: [
      "Lower mean-time-to-triage",
      "Higher knowledge-article reuse",
      "Clear escalation to cyber for security-class events",
    ],
    industryContext:
      "Enterprise IT across financial services commonly deploys AI for ITSM triage and knowledge assist—high adoption, moderate risk if change authority is protected.",
    organisationContext: "DOT service management working design.",
    narrator:
      "Impact Lead insists change authority and cyber escalation remain human; AI suggests, humans resolve and close.",
    evidenceStatus: demo,
    steps: [
      step({
        gateId: "gate-1",
        gateNumber: 1,
        title: "Intake: suggestions only",
        narrative: "Non-goals include autonomous production changes and auto-closure of Sev-1 incidents.",
        syntheticData: { nonGoals: "No auto-change, no Sev-1 auto-close" },
        artifactsProduced: ["art-intake-record"],
        decision: "Accept to discovery",
        deepDive: [
          {
            question: "Intended benefits?",
            answer:
              "Faster triage and better first suggestions—Service Owner remains accountable for resolution quality.",
          },
        ],
      }),
      step({
        gateId: "gate-3",
        gateNumber: 3,
        title: "Role impacts on L1/L2 and major-incident managers",
        narrative:
          "L1 becomes verifier of AI suggestions; major-incident managers retain command. Trade-off: deskilling if L1 stops learning diagnostics.",
        syntheticData: {
          tradeOff: "Speed vs diagnostic skill atrophy",
          valueOwner: "Service Owner",
        },
        artifactsProduced: ["art-operating-model-delta", "art-learning-plan"],
        decision: "Require learning modules + sampling audits",
      }),
      step({
        gateId: "gate-4",
        gateNumber: 4,
        title: "Assure & Decide: cyber escalation and governance",
        narrative:
          "Cyber reviews false-negative risk for security incidents. ISMS incident process remains authoritative. Governance approves conditional go with escalation path intact.",
        syntheticData: { isms27001: "Incident response control inheritance mandatory" },
        artifactsProduced: ["art-cyber-ai-review", "art-runbook-support"],
        decision: "Conditional go",
      }),
    ],
  },
  {
    id: "we-tech-engineering-copilot",
    title: "Technology: governed coding and analytics copilots",
    division: "technology",
    functionArea: "AI engineering / DOT delivery",
    problemStatement:
      "Engineers and quants want copilots for code, tests and documentation, but uncontrolled tools create IP, secrecy and supply-chain risk.",
    whySubmitted:
      "Engineering leadership seeks productivity with approved tools, repository controls and secret-scanning—following peer sovereign patterns of broad upskilling under guardrails.",
    intendedBenefits: [
      "Faster boilerplate and test generation",
      "Standardised secure-tooling posture",
      "Reduced shadow use of consumer AI tools",
    ],
    industryContext:
      "NBIM publicly reports organisation-wide AI tooling, ambassador networks and large self-reported efficiency gains, while stressing data foundations and human control. Similar patterns appear across large asset owners’ tech divisions.",
    organisationContext: "Tech division productivity capability with strict code/data boundaries.",
    narrator:
      "Impact Lead separates personal productivity (lower tier) from copilots touching production systems or sensitive investment data (higher tier).",
    evidenceStatus: demo,
    steps: [
      step({
        gateId: "gate-1",
        gateNumber: 1,
        title: "Intake: tier by data and production blast radius",
        narrative:
          "Triage splits IDE assist on non-sensitive repos from copilots that can reach production configs or proprietary models.",
        syntheticData: {
          tierSplit: "Tier 1 productivity vs Tier 2+ production-adjacent",
        },
        artifactsProduced: ["art-intake-record", "art-risk-tier-record"],
        decision: "Accept with split assurance routes",
        deepDive: [
          {
            question: "Why submitted?",
            answer:
              "To capture peer-industry productivity gains without repeating the governance gap ASIC warns about—adoption outrunning controls.",
          },
        ],
      }),
      step({
        gateId: "gate-3",
        gateNumber: 3,
        title: "Workforce and ownership impacts",
        narrative:
          "Engineering managers own code quality. Impact Lead asks whether review standards still catch insecure or hallucinated code at higher throughput.",
        syntheticData: {
          difficultQuestion: "Will PR review quality hold if volume of AI-authored diffs rises?",
          valueOwner: "Engineering / Product leads own defect and security outcomes",
        },
        artifactsProduced: ["art-operating-model-delta", "art-learning-plan"],
        decision: "Raise review sampling and secure-coding modules",
      }),
      step({
        gateId: "gate-4",
        gateNumber: 4,
        title: "Assure & Decide: ISMS, secure SDLC, and tiered approval",
        narrative:
          "Cyber and Architecture require approved tools, secret scanning, and no sensitive data in unapproved models. ISO 27001 secure development controls apply; ISO 42001 informs acceptable-use and monitoring. Governance approves Tier 1 broadly; gates Tier 2+ per repo class.",
        syntheticData: {
          isms27001: "Secure SDLC, secrets, vendor tool assurance",
          iso42001: "Acceptable use, logging, evaluation of coding assistants",
          grc: "Cyber + Architecture + Risk for production-adjacent tiers",
        },
        artifactsProduced: ["art-cyber-ai-review", "art-assurance-plan", "art-readiness-scorecard"],
        decision: "Approve Tier 1 broadly; gate Tier 2+ per repo class",
      }),
    ],
  },
  {
    id: "we-compliance-horizon",
    title: "Compliance: regulatory change horizon scanning",
    division: "operations-risk",
    functionArea: "Compliance / Legal",
    problemStatement:
      "Regulatory and AI-governance publications change faster than manual horizon scanning can reliably cover.",
    whySubmitted:
      "Compliance wants earlier detection of relevant instruments with lawyer-reviewed briefings—not automated legal advice.",
    intendedBenefits: [
      "Earlier awareness of relevant regulatory changes",
      "Consistent briefing structure for business owners",
      "Clear separation of AI draft vs legal advice",
    ],
    industryContext:
      "Financial institutions globally use AI for regulatory change management; ASIC REP 798 underscores governance keeping pace with AI adoption.",
    organisationContext: "Compliance working design; legal advice remains human.",
    narrator:
      "Impact Lead hard stop: AI drafts briefings; counsel owns legal interpretation.",
    evidenceStatus: demo,
    steps: [
      step({
        gateId: "gate-1",
        gateNumber: 1,
        title: "Intake: assist scanning, forbid automated advice",
        narrative: "Non-goal: no AI-generated formal legal opinions or automatic policy changes.",
        syntheticData: { nonGoals: "No automated legal advice or policy issuance" },
        artifactsProduced: ["art-intake-record"],
        decision: "Accept",
        deepDive: [
          {
            question: "Benefits intended?",
            answer:
              "Faster horizon coverage and draft digests—Compliance/Legal own interpretation and business impact calls.",
          },
        ],
      }),
      step({
        gateId: "gate-4",
        gateNumber: 4,
        title: "Assure & Decide: assurance and GRC",
        narrative:
          "Legal privilege and accuracy controls dominate. Map to ISO 42001 documentation/transparency practices; ISMS for access to legal corpora.",
        syntheticData: {
          grc: "Legal + Compliance + Privacy",
          iso42001: "Documentation, human oversight, monitoring of briefing quality",
        },
        artifactsProduced: ["art-legal-assessment", "art-assurance-plan"],
        decision: "Conditional go",
      }),
    ],
  },
];

export const workedExampleCasesById = Object.fromEntries(
  workedExampleCases.map((c) => [c.id, c]),
) as Record<string, WorkedExampleCase>;

/** Backward-compatible primary exports */
export const workedExampleMeta = {
  id: workedExampleCases[0].id,
  title: workedExampleCases[0].title,
  organisationContext: workedExampleCases[0].organisationContext,
  evidenceStatus: workedExampleCases[0].evidenceStatus,
  primaryUseCaseId: workedExampleCases[0].primaryUseCaseId,
  narrator: workedExampleCases[0].narrator,
};

export const workedExampleSteps = workedExampleCases[0].steps;

export const workedExampleCommitteeMemoExcerpt = {
  evidenceStatus: demo,
  recommendation:
    "Approve a bounded research pilot for AI-assisted IC memo preparation—retrieve, summarise, and draft with citations—subject to human approval of thesis, conviction, and allocation; no AI trade submission or source invention; GRC endorsement recorded; ISMS (ISO 27001-aligned) controls inherited; ISO 42001 practices used to structure oversight and monitoring.",
  sections: [
    "Mobilise, problem, submission rationale and intended benefits (Gate 1)",
    "Process deep dive, baseline and human–AI boundaries (Gate 2)",
    "Role changes, value owners, trade-offs and hard questions (Gate 3)",
    "GRC blessing, ISO 27001/42001 mapping, governance decision and conditions (Gate 4)",
    "Pilot readiness and implementation safeguards (Gate 5)",
    "Post-implementation review, enterprise learning and value check (Gate 6)",
  ],
  publicSourceAnchors: ["src-ff-ai-transparency", "src-asic-rep-798", "src-nf-ai-assurance-2024"],
};

export const DIVISION_LABELS: Record<WorkedExampleCase["division"], string> = {
  "investment-business": "Investment business",
  technology: "Technology division",
  "operations-risk": "Operations, risk & compliance",
  "industry-benchmark": "Industry benchmark pattern",
};
