import type { Metric, MobilisationPhase } from "@/lib/types";

export const mobilisationPhases = [
  {
    days: "0–30",
    objectives: [
      "Stand up illustrative governance cadence without blocking urgent triage",
      "Publish source-backed assurance minimums for tier 2+",
      "Nominate Impact Leads and gate owners (proposed RACI)",
    ],
    activities: [
      "Launch AI Signal Log and Intake Record templates",
      "Run first Signal Review and Intake Triage meetings",
      "Map frameworks (national assurance, ASIC themes, NIST) to artifact list",
      "Identify three pilot candidates with executive sponsors",
      "Establish evidence status labelling convention site-wide",
    ],
    deliverables: [
      "Mobilisation charter (proposed)",
      "Meeting calendar for 16 cadence forums",
      "Tiering rubric v0.1",
      "Training brief for sponsors and process owners",
    ],
    metrics: [
      "100% new AI signals logged within 5 business days",
      "≥3 intakes with assigned Impact Lead",
      "Sponsor assigned for ≥2 tiered use cases",
    ],
    evidenceStatus: "proposed-illustrative",
  },
  {
    days: "31–60",
    objectives: [
      "Complete Gate 0–3 for priority use cases",
      "Pilot assurance plan and evidence index on one tier 2 case",
      "Clarify role boundaries (must-not-absorb) in workshops",
    ],
    activities: [
      "Facilitate Impact Workshops for top candidates",
      "Run Readiness Council and Risk & Legal Panel as needed",
      "Draft AI Assurance Plan aligned to DTA pilot patterns",
      "Baseline benefits metrics for approved pilots",
      "Socialise hard stops with Enterprise Risk and Internal Audit",
    ],
    deliverables: [
      "Approved Gate Decision Records for Gates 1–3 (where met)",
      "Assurance Plan + Evidence Pack Index for lead pilot",
      "Updated stakeholder RACI maps",
      "Communications plan for first pilot cohort",
    ],
    metrics: [
      "Median intake-to-Gate-3 decision ≤ 25 business days for tier 1–2",
      "Zero tier 2+ cases pass Gate 3 without tier record",
      "Readiness scorecard completed for 100% of funded pilots",
    ],
    evidenceStatus: "proposed-illustrative",
  },
  {
    days: "61–90",
    objectives: [
      "Execute one controlled pilot with evidence capture",
      "Prepare scale-or-stop decision pack for Gate 7",
      "Institutionalise portfolio visibility and retrospective rhythm",
    ],
    activities: [
      "Pilot Kickoff and fortnightly Pilot Steering",
      "Execute Test & Evaluation Protocol; log issues",
      "Run Evidence Review before Gate 6 exit",
      "Draft Operating Model Delta Brief for scale candidates",
      "Portfolio Retrospective: lessons, kill list, funding rebalance",
    ],
    deliverables: [
      "Pilot evidence pack (synthetic or live, labelled)",
      "Committee memorandum template exercised once",
      "Benefits Realisation Tracker populated",
      "90-day mobilisation report to executive forum",
    ],
    metrics: [
      "Pilot completes with ≥80% success criteria met or documented exception",
      "Assurance findings closed or accepted with risk treatment before Gate 6 exit",
      "Portfolio dashboard v1 published to governance forum",
    ],
    evidenceStatus: "proposed-illustrative",
  },
] as const satisfies readonly MobilisationPhase[];

export const mobilisationSuccessMetrics = [
  {
    id: "met-cycle-time",
    name: "Intake-to-pilot decision cycle time",
    definition:
      "Business days from Intake Record acceptance to Gate 5 pilot funding decision for tier 1–2 use cases.",
    baseline: "Establish in first 30 days (expected 35–45 days initially)",
    target: "≤25 business days by day 90 for tier 1–2",
    cadence: "Monthly",
    owner: "AI Program Director (with Impact Lead data)",
    evidenceStatus: "proposed-illustrative",
  },
  {
    id: "met-assurance-coverage",
    name: "Assurance plan coverage",
    definition: "Percentage of funded tier 2+ use cases with approved AI Assurance Plan before build spend.",
    baseline: "0% at day 0",
    target: "100% by day 60 for active tier 2+",
    cadence: "Monthly",
    owner: "Enterprise Risk",
    evidenceStatus: "proposed-illustrative",
  },
  {
    id: "met-benefits-trace",
    name: "Benefits traceability",
    definition:
      "Share of active use cases with Impact Hypothesis linked to baseline metrics and benefits owner.",
    baseline: "Establish at first Gate 2 approvals",
    target: "≥90% of funded cases by day 90",
    cadence: "Quarterly",
    owner: "Business Executive Sponsor",
    evidenceStatus: "proposed-illustrative",
  },
  {
    id: "met-adoption-quality",
    name: "Pilot adoption quality index",
    definition:
      "Composite of active usage, override rate, and user confidence survey for pilot cohorts.",
    baseline: "Captured at pilot week 2",
    target: "Improve ≥15 points vs baseline by pilot end",
    cadence: "Per pilot",
    owner: "Change Lead",
    evidenceStatus: "proposed-illustrative",
  },
  {
    id: "met-incident-response",
    name: "AI incident mean time to contain",
    definition: "Hours from detection to containment for AI-tagged incidents (pilot or production).",
    baseline: "Establish after first tabletop",
    target: "≤8 hours for severity 2+",
    cadence: "Quarterly",
    owner: "Cyber Security",
    evidenceStatus: "proposed-illustrative",
  },
  {
    id: "met-portfolio-health",
    name: "Portfolio health score",
    definition:
      "Weighted index: gate compliance, open assurance findings, benefits variance, and sponsor engagement.",
    baseline: "Dashboard live by day 45",
    target: "≥75/100 by day 90",
    cadence: "Monthly",
    owner: "Impact Lead (facilitation); AI Program Director (accountable)",
    evidenceStatus: "proposed-illustrative",
  },
] as const satisfies readonly Metric[];
