"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { artifacts } from "@/content/artifacts";
import { gates } from "@/content/gates";
import { ARTIFACT_CATEGORY_LABELS } from "@/lib/labels";
import type { ArtifactCategory } from "@/lib/types";
import { EvidenceBadge } from "@/components/ui/EvidenceBadge";

const categories = Object.keys(ARTIFACT_CATEGORY_LABELS) as ArtifactCategory[];

export function ArtifactFilter() {
  const [category, setCategory] = useState<ArtifactCategory | "all">("all");
  const [gateId, setGateId] = useState<string>("all");

  const filtered = useMemo(() => {
    return artifacts.filter((a) => {
      if (category !== "all" && a.category !== category) return false;
      if (gateId !== "all" && !a.gateIds.includes(gateId)) return false;
      return true;
    });
  }, [category, gateId]);

  return (
    <div>
      <div className="flex flex-col gap-4 rounded-sm border border-line bg-surface p-4 md:flex-row">
        <label className="flex flex-1 flex-col gap-1 text-sm">
          <span className="font-medium">Category</span>
          <select
            className="rounded-sm border border-line bg-surface-elevated px-3 py-2"
            value={category}
            onChange={(e) =>
              setCategory(e.target.value as ArtifactCategory | "all")
            }
          >
            <option value="all">All categories</option>
            {categories.map((c) => (
              <option key={c} value={c}>
                {ARTIFACT_CATEGORY_LABELS[c]}
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-1 flex-col gap-1 text-sm">
          <span className="font-medium">Gate</span>
          <select
            className="rounded-sm border border-line bg-surface-elevated px-3 py-2"
            value={gateId}
            onChange={(e) => setGateId(e.target.value)}
          >
            <option value="all">All gates</option>
            {gates.map((g) => (
              <option key={g.id} value={g.id}>
                Gate {g.number}: {g.name}
              </option>
            ))}
          </select>
        </label>
      </div>

      <p className="mt-4 text-sm text-muted">
        Showing {filtered.length} of {artifacts.length} artifacts
      </p>

      <ul className="mt-6 divide-y divide-line border-y border-line">
        {filtered.map((art) => (
          <li key={art.id} className="py-5">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <h3 className="font-sans text-lg font-semibold text-navy">{art.name}</h3>
              {art.evidenceStatus ? (
                <EvidenceBadge status={art.evidenceStatus} />
              ) : null}
            </div>
            <p className="mt-2 text-sm text-muted">{art.purpose}</p>
            <p className="mt-2 text-xs text-muted">
              {ARTIFACT_CATEGORY_LABELS[art.category]} · Gates{" "}
              {art.gateIds
                .map((id) => gates.find((g) => g.id === id)?.number)
                .filter((n) => n !== undefined)
                .join(", ")}
            </p>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-sm">
        <Link href="/decision-framework" className="text-teal hover:underline">
          See how artifacts support decisions →
        </Link>
      </p>
    </div>
  );
}
