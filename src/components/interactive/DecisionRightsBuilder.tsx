"use client";

import { useState } from "react";
import { roles, impactLeadRoleId } from "@/content/roles";
import { EvidenceBadge } from "@/components/ui/EvidenceBadge";

const SAMPLE_DECISIONS = [
  {
    id: "d1",
    label: "Accept intake and assign Impact Lead",
    aiRole: "Draft triage summary from signal log",
    humanOwner: "AI Program Director",
  },
  {
    id: "d2",
    label: "Assign risk tier for use case",
    aiRole: "None — tiering is human-led",
    humanOwner: "Enterprise Risk (with Impact Lead facilitation)",
  },
  {
    id: "d3",
    label: "Release pilot funding",
    aiRole: "None",
    humanOwner: "Business Executive Sponsor + gate forum",
  },
  {
    id: "d4",
    label: "Approve committee memo for investment decision",
    aiRole: "Copilot drafts sections with citations",
    humanOwner: "Research head / process owner sign-off",
  },
  {
    id: "d5",
    label: "Scale to production operating model",
    aiRole: "Monitoring alerts only",
    humanOwner: "Scale Decision Board",
  },
] as const;

export function DecisionRightsBuilder() {
  const impactLead = roles.find((r) => r.id === impactLeadRoleId);
  const [selected, setSelected] = useState<string>(SAMPLE_DECISIONS[0].id);

  const decision = SAMPLE_DECISIONS.find((d) => d.id === selected)!;

  return (
    <div className="rounded-sm border border-line bg-surface p-6">
      <h3 className="font-sans text-lg font-semibold text-navy">
        Decision rights builder (sample)
      </h3>
      <p className="mt-2 text-sm text-muted">
        Clarify where AI assists versus where accountable humans decide — aligned to{" "}
        {impactLead?.name ?? "Impact Lead"} facilitation patterns.
      </p>

      <label className="mt-4 flex flex-col gap-1 text-sm">
        Decision moment
        <select
          className="rounded-sm border border-line px-3 py-2"
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
        >
          {SAMPLE_DECISIONS.map((d) => (
            <option key={d.id} value={d.id}>
              {d.label}
            </option>
          ))}
        </select>
      </label>

      <dl className="mt-6 space-y-4">
        <div className="rounded-sm bg-cream p-4">
          <dt className="text-xs font-semibold uppercase text-muted">AI role</dt>
          <dd className="mt-1 text-ink">{decision.aiRole}</dd>
        </div>
        <div className="rounded-sm bg-navy/5 p-4">
          <dt className="text-xs font-semibold uppercase text-muted">Human owner</dt>
          <dd className="mt-1 font-medium text-navy">{decision.humanOwner}</dd>
        </div>
      </dl>
      <div className="mt-4">
        <EvidenceBadge status="proposed-illustrative" />
      </div>
    </div>
  );
}
