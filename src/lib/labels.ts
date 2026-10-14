import type {
  ArtifactCategory,
  EvidenceStatus,
  ImpactDimension,
  ReadinessDomain,
  RiskTier,
} from "@/lib/types";

export const EVIDENCE_STATUS_LABELS: Record<EvidenceStatus, string> = {
  "confirmed-public": "Confirmed (public source)",
  "proposed-illustrative": "",
  "synthetic-example": "Worked example",
  "international-benchmark": "International benchmark",
  "industry-guidance": "Industry guidance",
  "inferred-from-source": "Inferred from source",
};

export const DECISION_LENS_LABELS: Record<string, string> = {
  "strategic-alignment": "Strategic alignment",
  "impact-and-benefits": "Impact & benefits",
  "risk-and-assurance": "Risk & assurance",
  "readiness-and-feasibility": "Readiness & feasibility",
  "operating-model-and-change": "Operating model & change",
  "stakeholder-trust": "Stakeholder trust",
};

export const RISK_TIER_LABELS: Record<RiskTier, string> = {
  "tier-1": "Tier 1 — low materiality",
  "tier-2": "Tier 2 — moderate",
  "tier-3": "Tier 3 — elevated",
  "tier-4": "Tier 4 — critical",
};

export const READINESS_DOMAIN_LABELS: Record<ReadinessDomain, string> = {
  "strategy-alignment": "Strategy alignment",
  "data-model": "Data & model",
  "technology-platform": "Technology platform",
  "governance-assurance": "Governance & assurance",
  "people-change": "People & change",
  "operating-model": "Operating model",
  "vendor-third-party": "Vendor & third party",
  "benefits-measurement": "Benefits measurement",
};

export const ARTIFACT_CATEGORY_LABELS: Record<ArtifactCategory, string> = {
  intake: "Intake",
  impact: "Impact",
  assurance: "Assurance",
  change: "Change",
  governance: "Governance",
  operations: "Operations",
  portfolio: "Portfolio",
};

export const IMPACT_DIMENSION_LABELS: Record<ImpactDimension, string> = {
  productivity: "Productivity",
  "decision-quality": "Decision quality",
  "risk-resilience": "Risk resilience",
  "customer-stakeholder": "Customer & stakeholder",
  "people-capability": "People & capability",
  "cost-efficiency": "Cost efficiency",
  "compliance-trust": "Compliance & trust",
};

export function formatLensId(lens: string): string {
  return DECISION_LENS_LABELS[lens] ?? lens.replace(/-/g, " ");
}
