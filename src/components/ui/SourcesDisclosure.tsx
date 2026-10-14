"use client";

import { gateModelRationale } from "@/content/gate-model-rationale";

/** Collapsed by default — only expand when someone asks why six gates. */
export function SourcesDisclosure() {
  return (
    <details className="rounded-sm border border-line bg-cream/40 p-4 text-sm">
      <summary className="cursor-pointer font-semibold text-navy hover:text-teal">
        Sources &amp; design notes (optional — click only if asked)
      </summary>
      <div className="mt-4 space-y-4 text-muted">
        <p>
          If someone asks why Sanjay structured the playbook as six gates: it is a practical
          consolidation for this role, not a published Future Fund or regulator stage count.
        </p>
        <p>
          <strong className="text-ink">Note: </strong>
          {gateModelRationale.notACompanyStandard}
        </p>
        <h3 className="font-semibold text-navy">What inspired the design</h3>
        <ul className="divide-y divide-line border-y border-line">
          {gateModelRationale.inspirations.map((src) => (
            <li key={src.name} className="py-3">
              <a
                href={src.url}
                className="font-medium text-navy hover:underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                {src.name}
              </a>
              <p className="mt-1">{src.whatItProvides}</p>
              <p className="mt-1 text-ink">
                <strong>How used here:</strong> {src.howUsed}
              </p>
            </li>
          ))}
        </ul>
        <h3 className="font-semibold text-navy">Consolidation map</h3>
        <ol className="list-decimal space-y-2 pl-5">
          {gateModelRationale.consolidationMap.map((row) => (
            <li key={row.newGate}>
              <strong className="text-ink">
                Gate {row.newGate}: {row.name}
              </strong>
              — absorbed {row.absorbed}. {row.reason}
            </li>
          ))}
        </ol>
      </div>
    </details>
  );
}
