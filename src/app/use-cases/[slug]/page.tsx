import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { useCaseById, useCases } from "@/content/use-cases";
import { PageHero } from "@/components/ui/PageHero";
import { Prose } from "@/components/ui/Prose";
import { EvidenceBadge } from "@/components/ui/EvidenceBadge";
import {
  IMPACT_DIMENSION_LABELS,
  READINESS_DOMAIN_LABELS,
  RISK_TIER_LABELS,
} from "@/lib/labels";
import { resolveArtifactName } from "@/lib/content-helpers";
import { gatePathForNumber } from "@/lib/gate-routes";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return useCases.map((uc) => ({ slug: uc.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const uc = useCaseById[slug];
  if (!uc) return { title: "Use case not found" };
  return { title: uc.name };
}

export default async function UseCaseDetailPage({ params }: Props) {
  const { slug } = await params;
  const uc = useCaseById[slug];
  if (!uc) notFound();

  return (
    <>
      <PageHero
        eyebrow={uc.functionArea}
        title={uc.name}
        description={uc.problemStatement}
        evidenceStatus={uc.evidenceStatus}
      />
      <div className="page-shell space-y-8">
        <Prose>
          <h2>Solution</h2>
          <p>{uc.proposedSolution}</p>
        </Prose>
        <dl className="grid gap-4 sm:grid-cols-2">
          <div>
            <dt className="text-sm font-semibold text-navy">Risk tier</dt>
            <dd className="text-muted">{RISK_TIER_LABELS[uc.riskTier]}</dd>
          </div>
          <div>
            <dt className="text-sm font-semibold text-navy">Human oversight</dt>
            <dd className="text-muted">{uc.humanOversightModel}</dd>
          </div>
        </dl>
        <section>
          <h2 className="font-sans text-lg font-semibold text-navy">Impact dimensions</h2>
          <ul className="mt-2 flex flex-wrap gap-2">
            {uc.impactDimensions.map((d) => (
              <li key={d} className="rounded-sm border border-line px-2 py-1 text-xs">
                {IMPACT_DIMENSION_LABELS[d]}
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="font-sans text-lg font-semibold text-navy">Readiness domains</h2>
          <ul className="mt-2 list-disc pl-5 text-sm text-muted">
            {uc.readinessDomains.map((d) => (
              <li key={d}>{READINESS_DOMAIN_LABELS[d]}</li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="font-sans text-lg font-semibold text-navy">Primary artifacts</h2>
          <ul className="mt-2 list-disc pl-5 text-sm text-muted">
            {uc.primaryArtifacts.map((id) => (
              <li key={id}>{resolveArtifactName(id)}</li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="font-sans text-lg font-semibold text-navy">Gate path</h2>
          <ol className="mt-2 flex flex-wrap gap-2">
            {uc.gatePath.map((n) => (
              <li key={n}>
                <Link
                  href={gatePathForNumber(n)}
                  className="rounded-sm bg-teal/10 px-2 py-1 text-sm text-teal hover:underline"
                >
                  Gate {n}
                </Link>
              </li>
            ))}
          </ol>
        </section>
        <p className="text-sm text-muted">{uc.assuranceNotes}</p>
        <EvidenceBadge status={uc.evidenceStatus} />
        <Link href="/use-cases" className="text-teal hover:underline">
          ← All use cases
        </Link>
      </div>
    </>
  );
}
