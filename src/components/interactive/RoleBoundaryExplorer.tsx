"use client";

import { useMemo, useState } from "react";
import { impactLeadRoleId, roles } from "@/content/roles";
import { EvidenceBadge } from "@/components/ui/EvidenceBadge";
import type { EvidenceStatus } from "@/lib/types";

export function RoleBoundaryExplorer() {
  const impactLead = roles.find((r) => r.id === impactLeadRoleId)!;
  const comparators = roles.filter((r) => r.id !== impactLeadRoleId);
  const [selectedId, setSelectedId] = useState<string>(comparators[0]?.id ?? "");

  const selected = useMemo(
    () => comparators.find((r) => r.id === selectedId) ?? comparators[0],
    [comparators, selectedId],
  );

  if (!selected) return null;

  const status: EvidenceStatus =
    selected.evidenceStatus ?? impactLead.evidenceStatus ?? "proposed-illustrative";

  return (
    <div className="rounded-sm border border-line bg-surface p-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h3 className="font-sans text-lg font-semibold text-navy">
            Impact Lead vs other roles
          </h3>
          <p className="mt-1 text-sm text-muted">
            Compare accountabilities and explicit must-not-absorb boundaries.
          </p>
        </div>
        <label className="flex flex-col gap-1 text-sm">
          <span className="font-medium text-ink">Compare with</span>
          <select
            className="rounded-sm border border-line bg-surface-elevated px-3 py-2"
            value={selectedId}
            onChange={(e) => setSelectedId(e.target.value)}
          >
            {comparators.map((r) => (
              <option key={r.id} value={r.id}>
                {r.name}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <article aria-labelledby="impact-lead-col">
          <h4 id="impact-lead-col" className="font-semibold text-teal">
            {impactLead.name}
          </h4>
          <p className="mt-2 text-sm text-muted">{impactLead.purpose}</p>
          <h5 className="mt-4 text-xs font-semibold uppercase tracking-wide text-navy">
            Must not absorb
          </h5>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted">
            {impactLead.mustNotAbsorb.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article aria-labelledby="compare-col">
          <h4 id="compare-col" className="font-semibold text-blue">
            {selected.name}
          </h4>
          <p className="mt-2 text-sm text-muted">{selected.purpose}</p>
          <h5 className="mt-4 text-xs font-semibold uppercase tracking-wide text-navy">
            Relationship with Impact Lead
          </h5>
          <p className="mt-2 text-sm text-muted">{selected.relationshipWithImpactLead}</p>
          <h5 className="mt-4 text-xs font-semibold uppercase tracking-wide text-navy">
            Must not absorb
          </h5>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted">
            {selected.mustNotAbsorb.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>
      <div className="mt-4">
        <EvidenceBadge status={status} />
      </div>
    </div>
  );
}
