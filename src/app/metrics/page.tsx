import type { Metadata } from "next";
import { mobilisationSuccessMetrics } from "@/content/mobilisation";
import { PageHero } from "@/components/ui/PageHero";
import { EvidenceBadge } from "@/components/ui/EvidenceBadge";
import { ReadinessHeatMap } from "@/components/interactive/ReadinessHeatMap";

export const metadata: Metadata = { title: "Metrics" };

export default function MetricsPage() {
  return (
    <>
      <PageHero
        eyebrow="Benefits & mobilisation"
        title="Metrics"
        description="Success metrics for the first 90 days plus a demo readiness grid for workshop use."
      />
      <div className="page-shell space-y-12">
        <ReadinessHeatMap />
        <section aria-labelledby="success-metrics">
          <h2 id="success-metrics" className="font-sans text-2xl font-semibold text-navy">
            Mobilisation success metrics
          </h2>
          <ul className="mt-6 space-y-6">
            {mobilisationSuccessMetrics.map((m) => (
              <li key={m.id} className="border-b border-line pb-6">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-semibold text-navy">{m.name}</h3>
                  <EvidenceBadge status={m.evidenceStatus} />
                </div>
                <p className="mt-2 text-sm text-muted">{m.definition}</p>
                <dl className="mt-3 grid gap-2 text-sm sm:grid-cols-3">
                  {m.baseline ? (
                    <div>
                      <dt className="font-medium">Baseline</dt>
                      <dd className="text-muted">{m.baseline}</dd>
                    </div>
                  ) : null}
                  {m.target ? (
                    <div>
                      <dt className="font-medium">Target</dt>
                      <dd className="text-muted">{m.target}</dd>
                    </div>
                  ) : null}
                  <div>
                    <dt className="font-medium">Cadence</dt>
                    <dd className="text-muted">{m.cadence}</dd>
                  </div>
                  <div>
                    <dt className="font-medium">Owner</dt>
                    <dd className="text-muted">{m.owner}</dd>
                  </div>
                </dl>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
