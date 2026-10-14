import type { Metadata } from "next";
import { decisionCriteria, hardStops } from "@/content/decisions";
import { PageHero } from "@/components/ui/PageHero";
import { formatLensId } from "@/lib/labels";
import { EvidenceBadge } from "@/components/ui/EvidenceBadge";
import { DecisionRightsBuilder } from "@/components/interactive/DecisionRightsBuilder";
import { SecondOrderExplorer } from "@/components/interactive/SecondOrderExplorer";

export const metadata: Metadata = { title: "Decision Framework" };

export default function DecisionFrameworkPage() {
  return (
    <>
      <PageHero
        eyebrow="Governance"
        title="Decision framework"
        description="Six lenses, hard stops, and reassessment triggers for accountable AI impact decisions."
      />
      <div className="page-shell space-y-12">
        <section aria-labelledby="lenses">
          <h2 id="lenses" className="font-sans text-2xl font-semibold text-navy">
            Decision lenses
          </h2>
          <ul className="mt-6 space-y-6">
            {decisionCriteria.map((c) => (
              <li key={c.id} className="border-l-2 border-blue pl-4">
                <h3 className="font-semibold text-navy">{formatLensId(c.lens)}</h3>
                <p className="mt-2 text-muted">{c.question}</p>
                <ul className="mt-2 list-disc pl-5 text-sm text-muted">
                  {c.signals.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
                <EvidenceBadge status={c.evidenceStatus} className="mt-3" />
              </li>
            ))}
          </ul>
        </section>
        <DecisionRightsBuilder />
        <section aria-labelledby="hard-stops">
          <h2 id="hard-stops" className="font-sans text-2xl font-semibold text-navy">
            Hard stops
          </h2>
          <ul className="mt-6 divide-y divide-line border-y border-line">
            {hardStops.map((h) => (
              <li key={h.id} className="py-5">
                <h3 className="font-semibold text-coral">{h.name}</h3>
                <p className="mt-2 text-sm text-muted">{h.condition}</p>
                <p className="mt-2 text-xs text-muted">Escalation: {h.escalation}</p>
              </li>
            ))}
          </ul>
        </section>
        <section aria-labelledby="second-order">
          <h2 id="second-order" className="font-sans text-2xl font-semibold text-navy">
            Second-order impacts
          </h2>
          <div className="mt-6">
            <SecondOrderExplorer />
          </div>
        </section>
      </div>
    </>
  );
}
