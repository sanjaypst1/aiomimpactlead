import type { Metadata } from "next";
import { mobilisationPhases } from "@/content/mobilisation";
import { PageHero } from "@/components/ui/PageHero";
import { EvidenceBadge } from "@/components/ui/EvidenceBadge";

export const metadata: Metadata = { title: "Mobilisation Plan" };

export default function MobilisationPlanPage() {
  return (
    <>
      <PageHero
        eyebrow="First 90 days"
        title="Mobilisation plan"
        description="Illustrative 30/60/90-day objectives to stand up gates, assurance minimums, and portfolio visibility."
      />
      <div className="page-shell space-y-10">
        {mobilisationPhases.map((phase) => (
          <section key={phase.days} className="border-l-4 border-teal pl-6">
            <h2 className="font-sans text-2xl font-semibold text-navy">Days {phase.days}</h2>
            <EvidenceBadge status={phase.evidenceStatus} className="mt-2" />
            <h3 className="mt-4 font-semibold text-ink">Objectives</h3>
            <ul className="mt-2 list-disc pl-5 text-muted">
              {phase.objectives.map((o) => (
                <li key={o}>{o}</li>
              ))}
            </ul>
            <h3 className="mt-4 font-semibold text-ink">Activities</h3>
            <ul className="mt-2 list-disc pl-5 text-sm text-muted">
              {phase.activities.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
            <h3 className="mt-4 font-semibold text-ink">Deliverables</h3>
            <ul className="mt-2 list-disc pl-5 text-sm text-muted">
              {phase.deliverables.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </>
  );
}
