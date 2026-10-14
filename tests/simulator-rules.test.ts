import { describe, expect, it } from "vitest";
import {
  assessUseCase,
  assessUseCaseRiskTier,
  triggeredHardStops,
} from "@/lib/simulator";

describe("assessUseCaseRiskTier", () => {
  it("returns tier-1 for low-sensitivity assistive internal use", () => {
    expect(
      assessUseCaseRiskTier({
        sensitivity: "internal-only",
        automation: "assistive",
        external: "no",
      }),
    ).toBe("tier-1");
  });

  it("escalates tier with sensitivity, automation, and external model factors", () => {
    expect(
      assessUseCaseRiskTier({
        sensitivity: "personal-or-sensitive",
        automation: "automated-action",
        external: "yes-unapproved",
      }),
    ).toBe("tier-4");
  });

  it("maps mid-range combinations to tier-2 and tier-3", () => {
    expect(
      assessUseCaseRiskTier({
        sensitivity: "licensed",
        automation: "decision-support",
        external: "no",
      }),
    ).toBe("tier-2");

    expect(
      assessUseCaseRiskTier({
        sensitivity: "licensed",
        automation: "decision-support",
        external: "yes-unapproved",
      }),
    ).toBe("tier-3");
  });
});

describe("triggeredHardStops", () => {
  it("flags missing sponsor", () => {
    const stops = triggeredHardStops({
      sensitivity: "internal-only",
      automation: "assistive",
      external: "no",
      hasSponsor: false,
    });
    expect(stops.some((s) => s.id === "hs-no-sponsor")).toBe(true);
  });

  it("flags sensitive data with external LLM", () => {
    const stops = triggeredHardStops({
      sensitivity: "personal-or-sensitive",
      automation: "assistive",
      external: "yes-approved",
      hasSponsor: true,
    });
    expect(stops.some((s) => s.id === "hs-unapproved-data")).toBe(true);
  });

  it("flags automated action without human oversight pattern", () => {
    const stops = triggeredHardStops({
      sensitivity: "internal-only",
      automation: "automated-action",
      external: "no",
      hasSponsor: true,
    });
    expect(stops.some((s) => s.id === "hs-no-human-oversight")).toBe(true);
  });
});

describe("assessUseCase", () => {
  it("returns tier, stakeholders, artifacts, and hard stops together", () => {
    const result = assessUseCase({
      sensitivity: "internal-only",
      automation: "assistive",
      external: "no",
      hasSponsor: true,
    });
    expect(result.tier).toBe("tier-1");
    expect(result.stakeholders.length).toBeGreaterThan(0);
    expect(result.artifacts.length).toBeGreaterThan(0);
    expect(result.hardStops).toEqual([]);
  });
});
