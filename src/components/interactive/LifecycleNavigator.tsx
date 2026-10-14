"use client";

import Link from "next/link";
import { useState } from "react";
import { gates } from "@/content/gates";
import { ButtonLink } from "@/components/ui/Button";
import { EvidenceBadge } from "@/components/ui/EvidenceBadge";
import { gatePathForNumber } from "@/lib/gate-routes";

export function LifecycleNavigator() {
  const [selected, setSelected] = useState(1);
  const gate = gates.find((g) => g.number === selected) ?? gates[0];

  return (
    <div className="rounded-sm border border-line bg-surface-elevated p-6">
      <label className="flex flex-col gap-2">
        <span className="text-sm font-semibold text-navy">Select lifecycle gate</span>
        <select
          className="rounded-sm border border-line bg-cream px-3 py-2.5 font-sans"
          value={selected}
          onChange={(e) => setSelected(Number(e.target.value))}
        >
          {gates.map((g) => (
            <option key={g.id} value={g.number}>
              Gate {g.number}: {g.name}
            </option>
          ))}
        </select>
      </label>

      {gate ? (
        <div className="mt-6 border-t border-line pt-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-sans text-sm font-bold text-teal">Gate {gate.number}</span>
            <EvidenceBadge status={gate.evidenceStatus} />
          </div>
          <h3 className="mt-2 font-sans text-xl font-semibold text-navy">{gate.name}</h3>
          <p className="prose-playbook mt-3 text-muted">{gate.objective}</p>
          <p className="mt-3 text-sm text-muted">
            <strong>Duration:</strong> {gate.durationRange}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href={gatePathForNumber(gate.number)}>Open gate detail</ButtonLink>
            <Link href="/playbook" className="text-sm font-medium text-teal hover:underline">
              Playbook overview
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}
