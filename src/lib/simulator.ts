import { hardStops } from "@/content/decisions";
import type { HardStop, RiskTier } from "@/lib/types";

export type DataSensitivity = "internal-only" | "licensed" | "personal-or-sensitive";
export type AutomationLevel = "assistive" | "decision-support" | "automated-action";
export type ExternalLlm = "no" | "yes-approved" | "yes-unapproved";

export type UseCaseAssessmentInput = {
  sensitivity: DataSensitivity;
  automation: AutomationLevel;
  external: ExternalLlm;
  hasSponsor: boolean;
};

/** Deterministic risk tier for workshop discussion — not organisational policy. */
export function assessUseCaseRiskTier(input: Pick<UseCaseAssessmentInput, "sensitivity" | "automation" | "external">): RiskTier {
  const { sensitivity, automation, external } = input;
  let score = 1;
  if (sensitivity === "licensed") score += 1;
  if (sensitivity === "personal-or-sensitive") score += 2;
  if (automation === "decision-support") score += 1;
  if (automation === "automated-action") score += 2;
  if (external === "yes-approved") score += 1;
  if (external === "yes-unapproved") score += 2;
  if (score <= 2) return "tier-1";
  if (score <= 4) return "tier-2";
  if (score <= 6) return "tier-3";
  return "tier-4";
}

export const STAKEHOLDER_MAP: Record<RiskTier, string[]> = {
  "tier-1": ["Process Owner", "Impact Lead"],
  "tier-2": ["Business Executive Sponsor", "Impact Lead", "Data Owner"],
  "tier-3": [
    "Enterprise Risk",
    "Legal & Privacy",
    "AI Engineering Lead",
    "Impact Lead",
  ],
  "tier-4": [
    "Executive governance forum",
    "Enterprise Risk",
    "Legal & Privacy",
    "Internal Audit observer",
  ],
};

export const ARTIFACT_SET: Record<RiskTier, string[]> = {
  "tier-1": ["art-use-case-brief", "art-impact-hypothesis"],
  "tier-2": [
    "art-use-case-brief",
    "art-risk-tier-record",
    "art-human-oversight-design",
    "art-readiness-scorecard",
  ],
  "tier-3": [
    "art-model-system-card",
    "art-ai-assurance-plan",
    "art-test-eval-protocol",
    "art-evidence-index",
  ],
  "tier-4": [
    "art-ai-assurance-plan",
    "art-committee-memo",
    "art-gate-decision-record",
    "art-third-party-assessment",
  ],
};

export function triggeredHardStops(input: UseCaseAssessmentInput): HardStop[] {
  const { sensitivity, automation, external, hasSponsor } = input;
  const ids = new Set<string>();
  if (!hasSponsor) ids.add("hs-no-sponsor");
  if (sensitivity === "personal-or-sensitive" && external !== "no") {
    ids.add("hs-unapproved-data");
  }
  if (external === "yes-unapproved") ids.add("hs-vendor-black-box");
  if (automation === "automated-action") ids.add("hs-no-human-oversight");
  if (automation !== "assistive" && !hasSponsor) ids.add("hs-tier-mismatch");
  return hardStops.filter((h) => ids.has(h.id));
}

export function assessUseCase(input: UseCaseAssessmentInput) {
  const tier = assessUseCaseRiskTier(input);
  return {
    tier,
    stakeholders: STAKEHOLDER_MAP[tier],
    artifacts: ARTIFACT_SET[tier],
    hardStops: triggeredHardStops(input),
  };
}
