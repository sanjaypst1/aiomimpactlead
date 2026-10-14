/** URL segments for the six consolidated playbook gates (1–6). */
export const GATE_ROUTE_BY_NUMBER: Record<number, string> = {
  1: "mobilise-intake",
  2: "discover-design",
  3: "impact-assessment",
  4: "assure-decide",
  5: "pilot-implement",
  6: "review-learn",
};

const SEGMENT_TO_NUMBER = Object.fromEntries(
  Object.entries(GATE_ROUTE_BY_NUMBER).map(([n, seg]) => [seg, Number(n)]),
) as Record<string, number>;

/** Legacy 10-gate slugs → new gate number (for redirects / old links). */
export const LEGACY_SEGMENT_TO_GATE: Record<string, number> = {
  mobilise: 1,
  intake: 1,
  discovery: 2,
  "human-ai-design": 2,
  "impact-assessment": 3,
  readiness: 4,
  governance: 4,
  pilot: 5,
  review: 6,
  "enterprise-learning": 6,
};

export function gatePathForNumber(gateNumber: number): string {
  const segment = GATE_ROUTE_BY_NUMBER[gateNumber];
  if (!segment) {
    throw new Error(`Unknown gate number: ${gateNumber}`);
  }
  return `/playbook/${segment}`;
}

export function gateNumberFromSegment(segment: string): number | undefined {
  return SEGMENT_TO_NUMBER[segment] ?? LEGACY_SEGMENT_TO_GATE[segment];
}

export const PLAYBOOK_GATE_PATHS = Object.values(GATE_ROUTE_BY_NUMBER).map(
  (segment) => `/playbook/${segment}`,
);

export const GATE_COUNT = 6;
export const FIRST_GATE = 1;
export const LAST_GATE = 6;
