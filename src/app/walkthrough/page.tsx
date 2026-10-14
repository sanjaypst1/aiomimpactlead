import type { Metadata } from "next";
import Link from "next/link";
import {
  deliveryChallenge,
  gateInterviewBeats,
  jdDeliverables,
  rolePlacement,
  walkthroughMeta,
} from "@/content/interview-walkthrough";
import { bigPictureGates } from "@/content/gate-big-picture";
import { gates } from "@/content/gates";
import { gatePathForNumber } from "@/lib/gate-routes";
import { PageHero } from "@/components/ui/PageHero";
import { ButtonLink } from "@/components/ui/Button";
import { SourcesDisclosure } from "@/components/ui/SourcesDisclosure";

export const metadata: Metadata = {
  title: "Walkthrough — Impact Lead interview playbook",
};

const lensLabel = {
  behavioural: "Behavioural",
  technical: "Technical / functional",
  culture: "Culture fit",
} as const;

export default function WalkthroughPage() {
  return (
    <>
      <PageHero
        eyebrow="Panel walkthrough"
        title={walkthroughMeta.title}
        description={walkthroughMeta.subtitle}
        actions={
          <>
            <ButtonLink href="#gate-1">{walkthroughMeta.primaryCta}</ButtonLink>
            <ButtonLink href="/worked-example" variant="secondary">
              Case studies
            </ButtonLink>
            <ButtonLink href="/big-picture" variant="ghost">
              Big-picture map
            </ButtonLink>
          </>
        }
      />

      <div className="page-shell space-y-14 pb-20">
        {/* Where the role sits */}
        <section
          aria-labelledby="where-sits"
          className="rounded-sm border border-line bg-navy p-6 text-cream md:p-8"
        >
          <h2 id="where-sits" className="font-sans text-2xl font-semibold">
            Where this role sits
          </h2>
          <dl className="mt-6 grid gap-4 text-sm md:grid-cols-2">
            <div>
              <dt className="text-teal">Organisation</dt>
              <dd className="mt-1 font-medium">{rolePlacement.organisation}</dd>
            </div>
            <div>
              <dt className="text-teal">Office / pillar</dt>
              <dd className="mt-1 font-medium">
                {rolePlacement.office} — {rolePlacement.pillar}
              </dd>
            </div>
            <div>
              <dt className="text-teal">Horizontal workstream</dt>
              <dd className="mt-1 font-medium">{rolePlacement.horizontalWorkstream}</dd>
            </div>
            <div>
              <dt className="text-teal">Reports to</dt>
              <dd className="mt-1 font-medium">{rolePlacement.reportingLine}</dd>
            </div>
            <div className="md:col-span-2">
              <dt className="text-teal">Vertical AI Program workstreams (partners)</dt>
              <dd className="mt-2 flex flex-wrap gap-2">
                {rolePlacement.verticalWorkstreams.map((v) => (
                  <span
                    key={v}
                    className="rounded-sm border border-cream/30 px-2.5 py-1 text-xs"
                  >
                    {v}
                  </span>
                ))}
              </dd>
            </div>
          </dl>
          <p className="mt-6 max-w-3xl text-sm text-cream/85">{rolePlacement.teamCharacter}</p>
          <p className="mt-3 max-w-3xl text-sm text-cream/85">{rolePlacement.mandate}</p>
        </section>

        {/* Delivery challenge 04 */}
        <section aria-labelledby="delivery-challenge">
          <h2 id="delivery-challenge" className="font-sans text-2xl font-semibold text-navy">
            {deliveryChallenge.title}
          </h2>
          <p className="mt-3 max-w-3xl text-muted">
            <strong className="text-ink">Context: </strong>
            {deliveryChallenge.context}
          </p>
          <p className="mt-3 max-w-3xl text-muted">
            <strong className="text-ink">What good looks like: </strong>
            {deliveryChallenge.whatGoodLooksLike}
          </p>
          <h3 className="mt-6 font-sans text-lg font-semibold text-navy">Example themes</h3>
          <ul className="mt-3 grid gap-3 md:grid-cols-2">
            {deliveryChallenge.exampleThemes.map((t) => (
              <li key={t.theme} className="rounded-sm border border-line bg-surface p-4 text-sm">
                <p className="font-semibold text-navy">{t.theme}</p>
                <p className="mt-2 text-muted">
                  Primary gates:{" "}
                  {t.primaryGates.map((n) => (
                    <Link
                      key={n}
                      href={`#gate-${n}`}
                      className="mr-2 font-medium text-teal hover:underline"
                    >
                      {n}
                    </Link>
                  ))}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* JD deliverables */}
        <section aria-labelledby="jd-outcomes">
          <h2 id="jd-outcomes" className="font-sans text-2xl font-semibold text-navy">
            Job brief — tasks, outcomes &amp; artifacts in the gates
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-muted">
            From the AI Operating Model Impact Lead engagement brief. Each task appears in the
            gate walkthrough below.
          </p>
          <ol className="mt-6 space-y-4">
            {jdDeliverables.map((d, i) => (
              <li
                key={d.id}
                className="rounded-sm border border-line bg-surface-elevated p-5 text-sm"
              >
                <p className="font-semibold text-teal">
                  {i + 1}. {d.task}
                </p>
                <p className="mt-2 text-muted">{d.outcome}</p>
                <p className="mt-3 text-ink">
                  <strong>Gates: </strong>
                  {d.primaryGates.join(", ")}
                </p>
                <p className="mt-2 text-muted">
                  <strong className="text-ink">Artifacts: </strong>
                  {d.artifacts.join(" · ")}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* Six-gate flow strip */}
        <section aria-labelledby="flow">
          <h2 id="flow" className="font-sans text-2xl font-semibold text-navy">
            Six-gate walkthrough path
          </h2>
          <ol className="mt-4 grid gap-2 sm:grid-cols-3 lg:grid-cols-6">
            {gates.map((g) => (
              <li key={g.id}>
                <a
                  href={`#gate-${g.number}`}
                  className="flex h-full flex-col rounded-sm border border-navy/15 bg-navy px-3 py-3 text-cream hover:bg-navy-deep"
                >
                  <span className="text-xs text-teal">Gate {g.number}</span>
                  <span className="mt-1 text-sm font-semibold leading-snug">{g.name}</span>
                </a>
              </li>
            ))}
          </ol>
        </section>

        {/* Per-gate beats */}
        <section aria-labelledby="gates-detail" className="space-y-10">
          <h2 id="gates-detail" className="sr-only">
            Gate-by-gate walkthrough
          </h2>
          {gateInterviewBeats.map((beat) => {
            const gate = gates.find((g) => g.number === beat.gateNumber)!;
            const picture = bigPictureGates.find((g) => g.gateNumber === beat.gateNumber);
            return (
              <article
                key={beat.gateNumber}
                id={`gate-${beat.gateNumber}`}
                className="scroll-mt-24 rounded-sm border border-line bg-surface-elevated p-6 md:p-8"
              >
                <header className="border-b border-line pb-4">
                  <p className="text-sm font-semibold uppercase tracking-wide text-teal">
                    Gate {beat.gateNumber}
                  </p>
                  <h3 className="mt-1 font-sans text-2xl font-semibold text-navy">{gate.name}</h3>
                  <p className="mt-2 text-muted">{gate.objective}</p>
                  <p className="mt-3">
                    <Link
                      href={gatePathForNumber(beat.gateNumber)}
                      className="text-sm font-medium text-teal hover:underline"
                    >
                      Full gate page →
                    </Link>
                  </p>
                </header>

                <p className="prose-playbook mt-6 text-muted">{beat.walkthroughNarrative}</p>

                <div className="mt-6 grid gap-6 lg:grid-cols-2">
                  <div>
                    <h4 className="text-sm font-semibold text-navy">JD focus in this gate</h4>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted">
                      {beat.jdFocus.map((j) => (
                        <li key={j}>{j}</li>
                      ))}
                    </ul>
                    <h4 className="mt-4 text-sm font-semibold text-navy">
                      Delivery themes addressed
                    </h4>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted">
                      {beat.deliveryThemesAddressed.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  </div>
                  {picture ? (
                    <div>
                      <h4 className="text-sm font-semibold text-navy">In → out</h4>
                      <p className="mt-2 text-xs font-semibold uppercase text-muted">Inputs</p>
                      <ul className="mt-1 flex flex-wrap gap-1.5">
                        {picture.inputs.slice(0, 4).map((i) => (
                          <li
                            key={i}
                            className="rounded-sm border border-line px-2 py-0.5 text-xs"
                          >
                            {i}
                          </li>
                        ))}
                      </ul>
                      <p className="mt-3 text-xs font-semibold uppercase text-muted">Outputs</p>
                      <ul className="mt-1 flex flex-wrap gap-1.5">
                        {picture.outputs.slice(0, 4).map((i) => (
                          <li
                            key={i}
                            className="rounded-sm border border-line px-2 py-0.5 text-xs"
                          >
                            {i}
                          </li>
                        ))}
                      </ul>
                      <p className="mt-4 text-sm text-muted">
                        <strong className="text-ink">Roll-up to Workstream Lead: </strong>
                        {picture.rollUpToWorkstreamLead}
                      </p>
                    </div>
                  ) : null}
                </div>

                <div className="mt-8">
                  <h4 className="text-sm font-semibold text-navy">
                    Interview questions answered organically here
                  </h4>
                  <p className="mt-1 text-xs text-muted">
                    From the interview preparation guide (behavioural, technical, culture). Speak
                    to the gate artifacts—not a separate Q&amp;A dump.
                  </p>
                  <ul className="mt-4 space-y-4">
                    {beat.questionsAnsweredOrganically.map((q) => (
                      <li
                        key={q.question}
                        className="rounded-sm border border-line bg-cream/50 px-4 py-3"
                      >
                        <p className="text-xs font-semibold uppercase tracking-wide text-teal">
                          {lensLabel[q.lens]}
                        </p>
                        <p className="mt-1 text-sm font-medium text-navy">{q.question}</p>
                        <p className="mt-2 text-sm text-muted">
                          <strong className="text-ink">How you show it: </strong>
                          {q.howGateAnswersIt}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>

                {picture ? (
                  <div className="mt-6 grid gap-4 md:grid-cols-2">
                    <div className="rounded-sm border border-amber/30 p-3 text-sm">
                      <p className="font-semibold text-navy">Trade-offs to voice</p>
                      <ul className="mt-2 list-disc pl-5 text-muted">
                        {picture.tradeOffs.slice(0, 2).map((t) => (
                          <li key={t}>{t}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-sm border border-coral/30 p-3 text-sm">
                      <p className="font-semibold text-navy">Show-stoppers</p>
                      <ul className="mt-2 list-disc pl-5 text-muted">
                        {picture.showStoppers.slice(0, 2).map((t) => (
                          <li key={t}>{t}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : null}
              </article>
            );
          })}
        </section>

        <section
          aria-labelledby="close"
          className="rounded-sm border border-teal/40 bg-cream/50 p-6"
        >
          <h2 id="close" className="font-sans text-xl font-semibold text-navy">
            Close the walkthrough
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-muted">
            End on the Workstream Lead roll-up: dispositions, named owners, conditions, enterprise
            themes for Evolve DOT Capabilities, and clear boundaries—advisory facilitation, not
            taking ownership away from business units.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <ButtonLink href="/worked-example">Show a case study</ButtonLink>
            <ButtonLink href="/big-picture" variant="secondary">
              Full in/out map
            </ButtonLink>
          </div>
        </section>

        <SourcesDisclosure />
      </div>
    </>
  );
}
