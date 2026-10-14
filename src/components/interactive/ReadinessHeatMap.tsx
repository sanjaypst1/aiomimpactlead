"use client";

import { READINESS_DOMAIN_LABELS } from "@/lib/labels";
import type { ReadinessDomain } from "@/lib/types";

type Level = "low" | "medium" | "high";

const domains = Object.keys(READINESS_DOMAIN_LABELS) as ReadinessDomain[];

/** Demo static scores — workshop grid, not live data. */
const DEMO: Record<ReadinessDomain, Level> = {
  "strategy-alignment": "high",
  "data-model": "medium",
  "technology-platform": "medium",
  "governance-assurance": "low",
  "people-change": "medium",
  "operating-model": "low",
  "vendor-third-party": "medium",
  "benefits-measurement": "low",
};

const levelClass: Record<Level, string> = {
  low: "bg-coral/25 text-coral border-coral/40",
  medium: "bg-amber/20 text-amber border-amber/40",
  high: "bg-green/20 text-green border-green/40",
};

export function ReadinessHeatMap() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[28rem] border-collapse text-sm">
        <caption className="mb-3 text-left text-sm text-muted">
          Demo readiness heat map (workshop scores for a tier-2 pilot candidate)
        </caption>
        <thead>
          <tr className="border-b border-line text-left text-xs uppercase tracking-wide text-muted">
            <th scope="col" className="py-2 pr-4">
              Domain
            </th>
            <th scope="col" className="py-2">
              Readiness
            </th>
          </tr>
        </thead>
        <tbody>
          {domains.map((d) => (
            <tr key={d} className="border-b border-line/70">
              <th scope="row" className="py-3 pr-4 font-medium text-navy">
                {READINESS_DOMAIN_LABELS[d]}
              </th>
              <td className="py-3">
                <span
                  className={`inline-block rounded-sm border px-2 py-0.5 text-xs font-semibold capitalize ${levelClass[DEMO[d]]}`}
                >
                  {DEMO[d]}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
