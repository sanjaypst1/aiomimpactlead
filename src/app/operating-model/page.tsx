import type { Metadata } from "next";
import { roles } from "@/content/roles";
import { rolePlacement } from "@/content/interview-walkthrough";
import { PageHero } from "@/components/ui/PageHero";
import { OperatingModelSvg } from "@/components/visual/OperatingModelSvg";
import { RoleBoundaryExplorer } from "@/components/interactive/RoleBoundaryExplorer";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = { title: "Operating Model" };

export default function OperatingModelPage() {
  return (
    <>
      <PageHero
        eyebrow="Roles & handoffs"
        title="Operating model"
        description="Impact Lead sits in the COO Office (Data, Operations & Tech Strategy) as part of the horizontal AI Operating Model workstream—connecting sponsors, delivery, assurance and change without absorbing their decision rights."
        actions={<ButtonLink href="/walkthrough">Interview walkthrough</ButtonLink>}
      />
      <div className="page-shell space-y-12">
        <section
          aria-labelledby="placement"
          className="rounded-sm border border-line bg-cream/50 p-5 text-sm"
        >
          <h2 id="placement" className="font-sans text-lg font-semibold text-navy">
            Team &amp; function placement
          </h2>
          <p className="mt-2 text-muted">
            <strong className="text-ink">{rolePlacement.roleTitle}</strong> reports to{" "}
            {rolePlacement.reportingLine}, within {rolePlacement.office} / {rolePlacement.pillar}.
            AI Program verticals: {rolePlacement.verticalWorkstreams.join(", ")}. Horizontal:{" "}
            {rolePlacement.horizontalWorkstream}.
          </p>
        </section>
        <OperatingModelSvg />
        <section aria-labelledby="role-directory">
          <h2 id="role-directory" className="font-sans text-2xl font-semibold text-navy">
            Role directory
          </h2>
          <ul className="mt-6 divide-y divide-line border-y border-line">
            {roles.map((r) => (
              <li key={r.id} className="py-5">
                <h3 className="font-semibold text-navy">{r.name}</h3>
                <p className="mt-2 text-sm text-muted">{r.purpose}</p>
              </li>
            ))}
          </ul>
        </section>
        <RoleBoundaryExplorer />
      </div>
    </>
  );
}
