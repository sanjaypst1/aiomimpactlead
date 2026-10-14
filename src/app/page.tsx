import Link from "next/link";
import { siteContent } from "@/content/site";
import { decisionCriteria } from "@/content/decisions";
import { comparativeExamples } from "@/content/comparative";
import { impactLeadRoleId, roles } from "@/content/roles";
import { ARTIFACT_CATEGORY_LABELS, formatLensId } from "@/lib/labels";
import { gates } from "@/content/gates";
import { gatePathForNumber } from "@/lib/gate-routes";
import { ButtonLink } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { EvidenceBadge } from "@/components/ui/EvidenceBadge";
import { LifecycleNavigator } from "@/components/interactive/LifecycleNavigator";
import { RoleBoundaryExplorer } from "@/components/interactive/RoleBoundaryExplorer";
import { ScrollReveal } from "@/components/visual/ScrollReveal";

const impactLead = roles.find((r) => r.id === impactLeadRoleId)!;

export default function HomePage() {
  const disclaimerShort =
    siteContent.disclaimer.length > 220
      ? `${siteContent.disclaimer.slice(0, 217)}…`
      : siteContent.disclaimer;

  return (
    <>
      <div className="disclaimer-banner">
        <div className="page-shell py-3 text-sm">
          <strong className="text-ink">Notice:</strong> {disclaimerShort}{" "}
          <Link href="/about" className="font-medium text-teal hover:underline">
            Read full disclaimer
          </Link>
        </div>
      </div>

      <section className="border-b border-line bg-navy text-cream">
        <div className="page-shell py-16 md:py-24">
          <EvidenceBadge status={siteContent.evidenceStatus} />
          <h1 className="mt-4 max-w-3xl font-sans text-4xl font-semibold tracking-tight md:text-5xl">
            {siteContent.hero.headline}
          </h1>
          <p className="prose-playbook mt-6 max-w-2xl text-lg text-cream/85">
            {siteContent.hero.subhead}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href="/playbook" variant="inverse">
              {siteContent.hero.ctaPrimary}
            </ButtonLink>
            <ButtonLink href="/operating-model" variant="secondary">
              {siteContent.hero.ctaSecondary}
            </ButtonLink>
          </div>
        </div>
      </section>

      <Section
        id="role"
        title="Impact Lead in one view"
        lede="Orchestration without absorbing delivery, risk sign-off, or legal determinations."
      >
        <ScrollReveal>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="prose-playbook">
              <p>{impactLead.purpose}</p>
              <ul className="mt-4 list-disc pl-5 text-muted">
                {impactLead.accountabilities.slice(0, 4).map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
              <p className="mt-6">
                <ButtonLink href="/role" variant="ghost">
                  Full role profile →
                </ButtonLink>
              </p>
            </div>
            <RoleBoundaryExplorer />
          </div>
        </ScrollReveal>
      </Section>

      <Section
        id="outcomes"
        title="Six decision outcomes"
        lede="Every gate decision is stress-tested against these lenses."
        tone="surface"
      >
        <ol className="grid gap-6 md:grid-cols-2">
          {decisionCriteria.map((c) => (
            <li key={c.id} className="border-l-2 border-teal pl-4">
              <h3 className="font-sans font-semibold text-navy">{formatLensId(c.lens)}</h3>
              <p className="mt-2 text-sm text-muted">{c.question}</p>
              <EvidenceBadge status={c.evidenceStatus} className="mt-3" />
            </li>
          ))}
        </ol>
      </Section>

      <Section
        id="playbook"
        title="Six-gate playbook"
        lede="From mobilisation to enterprise learning—consolidated for practical use."
      >
        <div className="grid gap-10 lg:grid-cols-2">
          <LifecycleNavigator />
          <div>
            <ol className="space-y-2 text-sm">
              {gates.map((g) => (
                <li key={g.id}>
                  <Link
                    href={gatePathForNumber(g.number)}
                    className="group flex gap-3 rounded-sm py-1 hover:bg-cream"
                  >
                    <span className="w-8 shrink-0 font-bold text-teal">{g.number}</span>
                    <span className="text-navy group-hover:underline">{g.name}</span>
                  </Link>
                </li>
              ))}
            </ol>
            <p className="mt-6">
              <ButtonLink href="/walkthrough" variant="secondary">
                Open interview walkthrough
              </ButtonLink>
            </p>
          </div>
        </div>
      </Section>

      <Section
        id="artifacts"
        title="Artifact value chain"
        lede="Records and packs grouped by purpose—not a flat document dump."
        tone="surface"
      >
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {(
            Object.entries(ARTIFACT_CATEGORY_LABELS) as [keyof typeof ARTIFACT_CATEGORY_LABELS, string][]
          ).map(([key, label]) => (
            <li key={key} className="border border-line bg-surface-elevated p-4">
              <h3 className="font-semibold text-navy">{label}</h3>
              <p className="mt-2 text-sm text-muted">
                Gate-linked templates supporting {label.toLowerCase()} decisions.
              </p>
            </li>
          ))}
        </ul>
        <p className="mt-8">
          <ButtonLink href="/artifacts" variant="secondary">
            Browse artifact register
          </ButtonLink>
        </p>
      </Section>

      <Section
        id="complement"
        title="Complement—do not duplicate"
        lede="Explicit boundaries so the Impact Lead does not become a shadow PMO, risk officer, or engineer."
      >
        <ul className="max-w-3xl list-disc space-y-2 pl-5 text-muted">
          {impactLead.mustNotAbsorb.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="mt-6 text-sm">
          <Link href="/operating-model" className="text-teal hover:underline">
            See operating model network →
          </Link>
        </p>
      </Section>

      <Section id="example" title="Worked examples" tone="surface">
        <ScrollReveal>
          <p className="prose-playbook max-w-3xl text-muted">
            Deep case studies across investment research, responsible investment, private
            markets, operations, and technology (knowledge platforms, ITSM, engineering
            copilots)—showing problem, benefits, process change, role shifts, GRC blessing,
            ISO 27001 / ISO 42001 mapping, trade-offs and hard questions at the right gates.
          </p>
          <div className="mt-6">
            <ButtonLink href="/worked-example">Open case studies</ButtonLink>
          </div>
        </ScrollReveal>
      </Section>

      <Section id="evidence" title="Comparative evidence" lede="Benchmarks inform the proposal; they are not endorsements.">
        <ul className="divide-y divide-line border-y border-line">
          {comparativeExamples.slice(0, 3).map((ex) => (
            <li key={ex.id} className="py-5">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="font-sans text-lg font-semibold text-navy">{ex.name}</h3>
                <EvidenceBadge status={ex.evidenceStatus} />
              </div>
              <p className="mt-2 text-sm text-muted">{ex.transferableLesson}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6">
          <ButtonLink href="/comparative-practice" variant="secondary">
            More comparative practice
          </ButtonLink>
        </p>
      </Section>

      <Section
        id="cta"
        title="AI scales when responsibilities, evidence and ways of working scale with it."
        tone="navy"
      >
        <p className="max-w-2xl text-cream/85">
          Use the playbook in workshops: clarify role boundaries, walk a use case through the
          ten gates, and map artifacts to accountable owners—without absorbing specialist
          mandates.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <ButtonLink href="/playbook" variant="inverse">
            Open the complete playbook
          </ButtonLink>
          <ButtonLink href="/worked-example" variant="secondary">
            Run the worked example
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
