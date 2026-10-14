import type { Metadata } from "next";
import Link from "next/link";
import { bigPictureGates, bigPictureMeta } from "@/content/gate-big-picture";
import { gatePathForNumber } from "@/lib/gate-routes";
import { PageHero } from "@/components/ui/PageHero";
import { ButtonLink } from "@/components/ui/Button";
import { SourcesDisclosure } from "@/components/ui/SourcesDisclosure";

export const metadata: Metadata = { title: "Big picture — six-gate map" };

function ChipList({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-2 flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-sm border border-line bg-surface px-2.5 py-1 text-xs text-ink"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function BigPicturePage() {
  return (
    <>
      <PageHero
        eyebrow="End-to-end map"
        title={bigPictureMeta.title}
        description={bigPictureMeta.subtitle}
        actions={
          <>
            <ButtonLink href="/walkthrough">Interview walkthrough</ButtonLink>
            <ButtonLink href="/playbook" variant="secondary">
              Gate details
            </ButtonLink>
          </>
        }
      />

      <div className="page-shell space-y-16 pb-20">
        <section aria-labelledby="flow-strip">
          <h2 id="flow-strip" className="font-sans text-2xl font-semibold text-navy">
            Six-gate flow
          </h2>
          <ol className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {bigPictureGates.map((g) => (
              <li key={g.gateNumber}>
                <Link
                  href={gatePathForNumber(g.gateNumber)}
                  className="flex h-full flex-col rounded-sm border border-navy/20 bg-navy p-4 text-cream transition hover:bg-navy-deep"
                >
                  <span className="text-xs font-semibold uppercase tracking-wide text-teal">
                    Gate {g.gateNumber}
                  </span>
                  <span className="mt-2 font-sans text-sm font-semibold leading-snug">
                    {g.name}
                  </span>
                  <span className="mt-2 text-xs text-cream/75">{g.oneLiner}</span>
                </Link>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="gate-cards" className="space-y-10">
          <h2 id="gate-cards" className="font-sans text-2xl font-semibold text-navy">
            What happens in each gate
          </h2>
          {bigPictureGates.map((g) => (
            <article
              key={g.gateNumber}
              id={`gate-${g.gateNumber}`}
              className="rounded-sm border border-line bg-surface-elevated p-6 md:p-8"
            >
              <header className="border-b border-line pb-4">
                <p className="text-sm font-semibold uppercase tracking-wide text-teal">
                  Gate {g.gateNumber}
                </p>
                <h3 className="mt-1 font-sans text-2xl font-semibold text-navy">{g.name}</h3>
                <p className="mt-2 text-muted">{g.oneLiner}</p>
                <p className="mt-3">
                  <Link
                    href={gatePathForNumber(g.gateNumber)}
                    className="text-sm font-medium text-teal hover:underline"
                  >
                    Open full gate page →
                  </Link>
                </p>
              </header>

              <div className="mt-6 grid gap-8 lg:grid-cols-2">
                <div>
                  <h4 className="text-sm font-semibold text-navy">What goes in</h4>
                  <ChipList items={g.inputs} />
                  <h4 className="mt-5 text-sm font-semibold text-navy">What comes out</h4>
                  <ChipList items={g.outputs} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-navy">Impact Lead activities</h4>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted">
                    {g.impactLeadActivities.map((a) => (
                      <li key={a}>{a}</li>
                    ))}
                  </ul>
                  <h4 className="mt-5 text-sm font-semibold text-navy">
                    Decisions the Impact Lead makes / recommends
                  </h4>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted">
                    {g.impactLeadDecisions.map((a) => (
                      <li key={a}>{a}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 grid gap-8 lg:grid-cols-2">
                <div className="rounded-sm border border-amber/30 bg-cream/40 p-4">
                  <h4 className="text-sm font-semibold text-navy">Potential trade-offs</h4>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted">
                    {g.tradeOffs.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-sm border border-coral/30 bg-cream/40 p-4">
                  <h4 className="text-sm font-semibold text-navy">Potential show-stoppers</h4>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted">
                    {g.showStoppers.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-sm font-semibold text-navy">
                  Partners kept in the loop (governance, risk, compliance &amp; others)
                </h4>
                <ul className="mt-3 divide-y divide-line border-y border-line">
                  {g.partnersInLoop.map((p) => (
                    <li key={p.team} className="grid gap-1 py-3 text-sm md:grid-cols-3">
                      <span className="font-medium text-ink">{p.team}</span>
                      <span className="text-muted md:col-span-2">{p.howKeptInLoop}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 rounded-sm bg-navy px-4 py-3 text-sm text-cream">
                <strong className="text-teal">Roll-up to Workstream Lead: </strong>
                {g.rollUpToWorkstreamLead}
              </div>
            </article>
          ))}
        </section>

        <section
          aria-labelledby="end-rollup"
          className="rounded-sm border border-teal/40 bg-navy p-6 text-cream md:p-10"
        >
          <h2 id="end-rollup" className="font-sans text-2xl font-semibold">
            {bigPictureMeta.endStateRollUp.title}
          </h2>
          <p className="mt-3 max-w-3xl text-cream/85">
            {bigPictureMeta.endStateRollUp.summary}
          </p>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-teal">
                Outcomes &amp; takeaways returned
              </h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-cream/85">
                {bigPictureMeta.endStateRollUp.outcomes.map((o) => (
                  <li key={o}>{o}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-teal">
                Package the Impact Lead hands upward
              </h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-cream/85">
                {bigPictureMeta.endStateRollUp.artefactsReturned.map((o) => (
                  <li key={o}>{o}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <SourcesDisclosure />
      </div>
    </>
  );
}
