import type { Metadata } from "next";
import Link from "next/link";
import { gates } from "@/content/gates";
import { gatePathForNumber } from "@/lib/gate-routes";
import { PageHero } from "@/components/ui/PageHero";
import { ButtonLink } from "@/components/ui/Button";
import { LifecycleNavigator } from "@/components/interactive/LifecycleNavigator";

export const metadata: Metadata = { title: "Playbook — six gates" };

export default function PlaybookPage() {
  return (
    <>
      <PageHero
        eyebrow="Delivery lifecycle"
        title="Six-gate AI operating-model playbook"
        description="Mobilise & intake → discover & design → impact assessment → assure & decide → pilot & implement → review & learn. Consolidated from an earlier ten-gate draft for practical use."
        actions={
          <>
            <ButtonLink href="/walkthrough">Interview walkthrough</ButtonLink>
            <ButtonLink href="/big-picture" variant="secondary">
              Big-picture map
            </ButtonLink>
          </>
        }
      />
      <div className="page-shell space-y-12 pb-16">
        <p className="max-w-3xl text-sm text-muted">
          Prefer the{" "}
          <Link href="/walkthrough" className="font-medium text-teal hover:underline">
            interview walkthrough
          </Link>{" "}
          for panel delivery, or the{" "}
          <Link href="/big-picture" className="font-medium text-teal hover:underline">
            big-picture map
          </Link>{" "}
          for full in/out detail.
        </p>

        <LifecycleNavigator />

        <ol className="divide-y divide-line border-y border-line">
          {gates.map((g) => (
            <li key={g.id} className="grid gap-3 py-6 md:grid-cols-[4rem_1fr_auto]">
              <span className="font-sans text-2xl font-semibold text-teal">{g.number}</span>
              <div>
                <h2 className="font-sans text-xl font-semibold text-navy">
                  <Link href={gatePathForNumber(g.number)} className="hover:underline">
                    {g.name}
                  </Link>
                </h2>
                <p className="mt-2 text-sm text-muted">{g.objective}</p>
                <p className="mt-2 text-xs text-muted">Duration: {g.durationRange}</p>
              </div>
              <ButtonLink href={gatePathForNumber(g.number)} variant="ghost">
                Open →
              </ButtonLink>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
