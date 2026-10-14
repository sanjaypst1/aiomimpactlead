import { describe, expect, it } from "vitest";
import {
  GATE_ROUTE_BY_NUMBER,
  gateNumberFromSegment,
  gatePathForNumber,
  PLAYBOOK_GATE_PATHS,
} from "@/lib/gate-routes";

describe("gatePathForNumber", () => {
  it("covers gates 1 through 6", () => {
    for (let n = 1; n <= 6; n += 1) {
      const path = gatePathForNumber(n);
      expect(path).toMatch(/^\/playbook\/[a-z0-9-]+$/);
      expect(GATE_ROUTE_BY_NUMBER[n]).toBeTruthy();
    }
    expect(Object.keys(GATE_ROUTE_BY_NUMBER)).toHaveLength(6);
  });

  it("round-trips segment to gate number", () => {
    for (let n = 1; n <= 6; n += 1) {
      const segment = GATE_ROUTE_BY_NUMBER[n];
      expect(gateNumberFromSegment(segment)).toBe(n);
    }
  });

  it("maps legacy ten-gate slugs to consolidated gates", () => {
    expect(gateNumberFromSegment("mobilise")).toBe(1);
    expect(gateNumberFromSegment("intake")).toBe(1);
    expect(gateNumberFromSegment("discovery")).toBe(2);
    expect(gateNumberFromSegment("human-ai-design")).toBe(2);
    expect(gateNumberFromSegment("readiness")).toBe(4);
    expect(gateNumberFromSegment("governance")).toBe(4);
    expect(gateNumberFromSegment("enterprise-learning")).toBe(6);
  });

  it("PLAYBOOK_GATE_PATHS lists all gate URLs", () => {
    expect(PLAYBOOK_GATE_PATHS).toHaveLength(6);
    expect(new Set(PLAYBOOK_GATE_PATHS).size).toBe(6);
  });

  it("throws for unknown gate numbers", () => {
    expect(() => gatePathForNumber(99)).toThrow(/Unknown gate number/);
  });
});
