"use client";

import { useMemo, useState } from "react";
import {
  DIVISION_LABELS,
  workedExampleCases,
} from "@/content/worked-example";
import { resolveArtifactName } from "@/lib/content-helpers";
import { gatePathForNumber } from "@/lib/gate-routes";
import Link from "next/link";

export function WorkedExampleWalkthrough({
  initialCaseId,
}: {
  initialCaseId?: string;
}) {
  const initialIndex = Math.max(
    0,
    workedExampleCases.findIndex((c) => c.id === initialCaseId),
  );
  const [caseIndex, setCaseIndex] = useState(initialIndex === -1 ? 0 : initialIndex);
  const [stepIndex, setStepIndex] = useState(0);

  const selected = workedExampleCases[caseIndex] ?? workedExampleCases[0];
  const steps = selected.steps;
  const step = steps[stepIndex];
  const total = steps.length;

  const grouped = useMemo(() => {
    const map = new Map<string, typeof workedExampleCases>();
    for (const c of workedExampleCases) {
      const list = map.get(c.division) ?? [];
      list.push(c);
      map.set(c.division, list);
    }
    return map;
  }, []);

  if (!selected || !step) return null;

  return (
    <div className="space-y-8">
      <div className="rounded-sm border border-line bg-surface-elevated p-5">
        <p className="text-sm font-semibold text-navy">Choose a case study</p>
        <p className="mt-1 text-sm text-muted">
          Investment business, technology, and operations patterns used across sovereign
          investors and peer asset managers.
        </p>
        <div className="mt-4 space-y-4">
          {[...grouped.entries()].map(([division, cases]) => (
            <div key={division}>
              <p className="text-xs font-semibold uppercase tracking-wide text-teal">
                {DIVISION_LABELS[division as keyof typeof DIVISION_LABELS]}
              </p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {cases.map((c) => {
                  const idx = workedExampleCases.findIndex((x) => x.id === c.id);
                  const active = idx === caseIndex;
                  return (
                    <li key={c.id}>
                      <button
                        type="button"
                        className={
                          active
                            ? "rounded-sm bg-navy px-3 py-2 text-left text-sm font-medium text-cream"
                            : "rounded-sm border border-line px-3 py-2 text-left text-sm font-medium text-ink hover:bg-cream"
                        }
                        onClick={() => {
                          setCaseIndex(idx);
                          setStepIndex(0);
                        }}
                      >
                        {c.title}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <section className="rounded-sm border border-line bg-cream/60 p-6" aria-labelledby="case-brief">
        <h2 id="case-brief" className="font-sans text-xl font-semibold text-navy">
          Case brief
        </h2>
        <dl className="mt-4 grid gap-4 text-sm md:grid-cols-2">
          <div>
            <dt className="font-semibold text-navy">Problem statement</dt>
            <dd className="mt-1 text-muted">{selected.problemStatement}</dd>
          </div>
          <div>
            <dt className="font-semibold text-navy">Why submitted</dt>
            <dd className="mt-1 text-muted">{selected.whySubmitted}</dd>
          </div>
          <div className="md:col-span-2">
            <dt className="font-semibold text-navy">Intended tangible benefits</dt>
            <dd className="mt-1">
              <ul className="list-disc space-y-1 pl-5 text-muted">
                {selected.intendedBenefits.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </dd>
          </div>
          {selected.industryContext ? (
            <div className="md:col-span-2">
              <dt className="font-semibold text-navy">Industry context</dt>
              <dd className="mt-1 text-muted">{selected.industryContext}</dd>
            </div>
          ) : null}
        </dl>
      </section>

      <div className="rounded-sm border border-line bg-surface-elevated p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-teal">{selected.title}</p>
            <p className="text-xs text-muted">{selected.functionArea}</p>
          </div>
          <p className="text-sm text-muted">
            Gate step {stepIndex + 1} of {total}
          </p>
        </div>

        <h3 className="mt-4 font-sans text-xl font-semibold text-navy">
          Gate {step.gateNumber}: {step.title}
        </h3>
        <p className="prose-playbook mt-3 text-muted">{step.narrative}</p>

        {step.deepDive && step.deepDive.length > 0 ? (
          <div className="mt-6 space-y-4">
            <p className="text-sm font-semibold text-navy">Impact Lead deep dive at this gate</p>
            {step.deepDive.map((item) => (
              <article
                key={item.question}
                className="rounded-sm border border-line bg-cream px-4 py-3"
              >
                <h4 className="text-sm font-semibold text-navy">{item.question}</h4>
                <p className="mt-2 text-sm text-muted">{item.answer}</p>
              </article>
            ))}
          </div>
        ) : null}

        <dl className="mt-6 grid gap-3 text-sm sm:grid-cols-2">
          {Object.entries(step.syntheticData).map(([key, value]) => (
            <div key={key} className="rounded-sm bg-cream px-3 py-2">
              <dt className="text-xs uppercase text-muted">
                {key.replace(/([A-Z])/g, " $1")}
              </dt>
              <dd className="font-medium text-ink">{value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-6">
          <p className="text-sm font-semibold text-navy">Artifacts produced</p>
          <ul className="mt-2 flex flex-wrap gap-2">
            {step.artifactsProduced.map((id) => (
              <li key={id} className="rounded-sm border border-line px-2 py-1 text-xs">
                {resolveArtifactName(id)}
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-4 text-sm">
          <strong>Decision:</strong> {step.decision}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
          <button
            type="button"
            className="rounded-sm border border-line px-4 py-2 text-sm font-medium disabled:opacity-40"
            disabled={stepIndex === 0}
            onClick={() => setStepIndex((i) => Math.max(0, i - 1))}
          >
            Previous gate
          </button>
          <Link
            href={gatePathForNumber(step.gateNumber)}
            className="text-sm font-medium text-teal hover:underline"
          >
            Open Gate {step.gateNumber} detail
          </Link>
          <button
            type="button"
            className="rounded-sm bg-navy px-4 py-2 text-sm font-medium text-cream disabled:opacity-40"
            disabled={stepIndex >= total - 1}
            onClick={() => setStepIndex((i) => Math.min(total - 1, i + 1))}
          >
            Next gate
          </button>
        </div>
      </div>
    </div>
  );
}
