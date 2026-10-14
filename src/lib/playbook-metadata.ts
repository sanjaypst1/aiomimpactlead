import type { Metadata } from "next";
import { getGateByNumber } from "@/lib/content-helpers";

export function gatePageMetadata(gateNumber: number): Metadata {
  const gate = getGateByNumber(gateNumber);
  if (!gate) {
    return { title: "Gate not found" };
  }
  return { title: `Gate ${gate.number}: ${gate.name}` };
}
