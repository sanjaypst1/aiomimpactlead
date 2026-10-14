"use client";

import { useMemo, useState } from "react";
import { useCases } from "@/content/use-cases";
import { resolveArtifactName } from "@/lib/content-helpers";
import { RISK_TIER_LABELS } from "@/lib/labels";
import {
  assessUseCase,
  type AutomationLevel,
  type DataSensitivity,
  type ExternalLlm,
} from "@/lib/simulator";
export function UseCaseSimulator() {
  const areas = useMemo(
    () => [...new Set(useCases.map((u) => u.functionArea))].sort(),
    [],
  );
  const [area, setArea] = useState<string>(areas[0] ?? "General");
  const [sensitivity, setSensitivity] = useState<DataSensitivity>("internal-only");
  const [automation, setAutomation] = useState<AutomationLevel>("assistive");
  const [external, setExternal] = useState<ExternalLlm>("no");
  const [hasSponsor, setHasSponsor] = useState(true);

  const { tier, stakeholders, artifacts, hardStops: stops } = assessUseCase({
    sensitivity,
    automation,
    external,
    hasSponsor,
  });
  const sample = useCases.find((u) => u.functionArea === area);

  return (
    <div className="rounded-sm border border-amber/40 bg-surface p-6">
      <h3 className="font-sans text-lg font-semibold text-navy">
        Use case path simulator
      </h3>
      <p className="mt-2 text-sm text-muted">
        Educational only — deterministic rules for workshop discussion, not organisational
        policy.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <label className="flex flex-col gap-1 text-sm">
          Function area
          <select
            className="rounded-sm border border-line px-3 py-2"
            value={area}
            onChange={(e) => setArea(e.target.value)}
          >
            {areas.map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-1 text-sm">
          Data sensitivity
          <select
            className="rounded-sm border border-line px-3 py-2"
            value={sensitivity}
            onChange={(e) => setSensitivity(e.target.value as DataSensitivity)}
          >
            <option value="internal-only">Internal, non-sensitive</option>
            <option value="licensed">Licensed / confidential business</option>
            <option value="personal-or-sensitive">Personal or highly sensitive</option>
          </select>
        </label>
        <label className="flex flex-col gap-1 text-sm">
          Automation level
          <select
            className="rounded-sm border border-line px-3 py-2"
            value={automation}
            onChange={(e) => setAutomation(e.target.value as AutomationLevel)}
          >
            <option value="assistive">Assistive drafting</option>
            <option value="decision-support">Decision support</option>
            <option value="automated-action">Automated or transactional action</option>
          </select>
        </label>
        <label className="flex flex-col gap-1 text-sm">
          External LLM / vendor
          <select
            className="rounded-sm border border-line px-3 py-2"
            value={external}
            onChange={(e) => setExternal(e.target.value as ExternalLlm)}
          >
            <option value="no">On-prem / approved stack only</option>
            <option value="yes-approved">Approved third-party model</option>
            <option value="yes-unapproved">Unassessed third-party</option>
          </select>
        </label>
        <label className="flex items-center gap-2 text-sm md:col-span-2">
          <input
            type="checkbox"
            checked={hasSponsor}
            onChange={(e) => setHasSponsor(e.target.checked)}
          />
          Named executive sponsor assigned (Gate 1)
        </label>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div>
          <h4 className="font-semibold text-navy">Illustrative risk tier</h4>
          <p className="mt-2 text-lg font-medium text-teal">{RISK_TIER_LABELS[tier]}</p>
          {sample ? (
            <p className="mt-2 text-xs text-muted">
              Reference use case in corpus: {sample.name} (catalogued as{" "}
              {RISK_TIER_LABELS[sample.riskTier]}).
            </p>
          ) : null}
        </div>
        <div>
          <h4 className="font-semibold text-navy">Likely stakeholders</h4>
          <ul className="mt-2 list-disc pl-5 text-sm text-muted">
            {stakeholders.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-2">
          <h4 className="font-semibold text-navy">Primary artifacts to prepare</h4>
          <ul className="mt-2 flex flex-wrap gap-2">
            {artifacts.map((id) => (
              <li
                key={id}
                className="rounded-sm border border-line bg-cream px-2 py-1 text-xs"
              >
                {resolveArtifactName(id)}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {stops.length > 0 ? (
        <div
          className="mt-8 rounded-sm border border-coral/50 bg-coral/10 p-4"
          role="alert"
        >
          <h4 className="font-semibold text-coral">Hard-stop warnings</h4>
          <ul className="mt-3 space-y-3">
            {stops.map((h) => (
              <li key={h.id} className="text-sm">
                <strong>{h.name}:</strong> {h.condition}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="mt-8 text-sm text-green">
          No hard stops triggered with current selections — still subject to full gate review.
        </p>
      )}
    </div>
  );
}
