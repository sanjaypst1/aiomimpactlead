import { describe, expect, it } from "vitest";
import { gates } from "@/content/gates";
import { hardStops } from "@/content/decisions";
import { meetings } from "@/content/meetings";
import { sources } from "@/content/sources";
import { useCases } from "@/content/use-cases";
import { workedExampleCases } from "@/content/worked-example";
import { bigPictureGates } from "@/content/gate-big-picture";

const EXPECTED_GATE_NAMES = [
  "Mobilise & Intake",
  "Discover & Design",
  "Impact Assessment",
  "Assure & Decide",
  "Pilot & Implement",
  "Review & Learn",
];

describe("content integrity", () => {
  it("defines exactly six lifecycle gates (1–6)", () => {
    expect(gates).toHaveLength(6);
    expect(gates.map((g) => g.number)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("gate names match the consolidated playbook catalogue", () => {
    expect(gates.map((g) => g.name)).toEqual(EXPECTED_GATE_NAMES);
  });

  it("defines sixteen meeting types", () => {
    expect(meetings).toHaveLength(16);
  });

  it("includes at least fifteen use cases", () => {
    expect(useCases.length).toBeGreaterThanOrEqual(15);
  });

  it("sources register is non-empty", () => {
    expect(sources.length).toBeGreaterThan(0);
    for (const s of sources) {
      expect(s.title.trim().length).toBeGreaterThan(0);
      expect(s.evidenceStatus).toBeTruthy();
    }
  });

  it("hard stops are defined for gate governance", () => {
    expect(hardStops.length).toBeGreaterThan(0);
    const ids = new Set(hardStops.map((h) => h.id));
    expect(ids.has("hs-no-sponsor")).toBe(true);
    expect(ids.has("hs-unapproved-data")).toBe(true);
    expect(ids.has("hs-vendor-black-box")).toBe(true);
  });

  it("big picture covers all six gates", () => {
    expect(bigPictureGates).toHaveLength(6);
    expect(bigPictureGates.map((g) => g.gateNumber)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("primary worked example walks all six gates", () => {
    const primary = workedExampleCases[0];
    expect(primary.steps).toHaveLength(6);
    expect(primary.steps.map((s) => s.gateNumber)).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
