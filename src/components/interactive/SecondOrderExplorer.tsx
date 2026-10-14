"use client";

import { useState } from "react";
import { reassessmentTriggers } from "@/content/decisions";
import { gates } from "@/content/gates";
import { EvidenceBadge } from "@/components/ui/EvidenceBadge";

type Panel = {
  id: string;
  title: string;
  firstOrder: string;
  secondOrder: string[];
  status: (typeof reassessmentTriggers)[number]["evidenceStatus"];
};

const panels: Panel[] = [
  ...reassessmentTriggers.map((t) => ({
    id: t.id,
    title: t.trigger,
    firstOrder: t.response,
    secondOrder: [
      "Portfolio re-prioritisation and communication to sponsors",
      "Updates to hard-stop library and training for process owners",
      "Potential re-baselining of benefits metrics",
    ],
    status: t.evidenceStatus,
  })),
  ...gates.slice(6, 9).map((g) => ({
    id: `gate-${g.number}-skip`,
    title: `Skipping Gate ${g.number} (${g.name})`,
    firstOrder: g.risksIfSkipped[0] ?? "Accelerated delivery",
    secondOrder: g.risksIfSkipped.slice(1),
    status: g.evidenceStatus,
  })),
];

export function SecondOrderExplorer() {
  const [openId, setOpenId] = useState<string | null>(panels[0]?.id ?? null);

  return (
    <div className="divide-y divide-line rounded-sm border border-line bg-surface">
      {panels.map((panel) => {
        const open = openId === panel.id;
        return (
          <div key={panel.id}>
            <h3>
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-sans font-semibold text-navy hover:bg-cream/80"
                aria-expanded={open}
                onClick={() => setOpenId(open ? null : panel.id)}
              >
                {panel.title}
                <span aria-hidden className="text-teal">
                  {open ? "−" : "+"}
                </span>
              </button>
            </h3>
            {open ? (
              <div className="space-y-4 px-5 pb-5">
                <div>
                  <p className="text-xs font-semibold uppercase text-muted">
                    First-order response
                  </p>
                  <p className="mt-1 text-sm text-muted">{panel.firstOrder}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase text-muted">
                    Second-order impacts
                  </p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted">
                    {panel.secondOrder.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <EvidenceBadge status={panel.status} />
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
