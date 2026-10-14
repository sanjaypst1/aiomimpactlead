import Link from "next/link";
import type { Metadata } from "next";
import { useCases } from "@/content/use-cases";
import { PageHero } from "@/components/ui/PageHero";
import { EvidenceBadge } from "@/components/ui/EvidenceBadge";
import { RISK_TIER_LABELS, IMPACT_DIMENSION_LABELS } from "@/lib/labels";
import { UseCaseSimulator } from "@/components/interactive/UseCaseSimulator";

export const metadata: Metadata = { title: "Use Cases" };

export default function UseCasesPage() {
  return (
    <>
      <PageHero
        eyebrow="Scenarios"
        title="Illustrative use cases"
        description="Nineteen function-level scenarios for workshop discussion. Each includes risk tier, readiness domains, and gate path references."
      />
      <div className="page-shell space-y-12">
        <UseCaseSimulator />
        <ul className="divide-y divide-line border-y border-line">
          {useCases.map((uc) => (
            <li key={uc.id} className="py-6">
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="font-sans text-xl font-semibold text-navy">
                  <Link href={`/use-cases/${uc.id}`} className="hover:underline">
                    {uc.name}
                  </Link>
                </h2>
                <EvidenceBadge status={uc.evidenceStatus} />
              </div>
              <p className="mt-2 text-sm text-muted">{uc.functionArea}</p>
              <p className="mt-3 text-sm text-muted">{uc.problemStatement}</p>
              <p className="mt-2 text-xs text-muted">
                {RISK_TIER_LABELS[uc.riskTier]} ·{" "}
                {uc.impactDimensions.map((d) => IMPACT_DIMENSION_LABELS[d]).join(", ")}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
