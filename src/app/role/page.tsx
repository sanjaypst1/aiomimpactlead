import type { Metadata } from "next";
import { impactLeadRoleId, roles } from "@/content/roles";
import { PageHero } from "@/components/ui/PageHero";
import { Prose } from "@/components/ui/Prose";
import { RoleBoundaryExplorer } from "@/components/interactive/RoleBoundaryExplorer";
import { EvidenceBadge } from "@/components/ui/EvidenceBadge";

export const metadata: Metadata = { title: "My Role" };

export default function RolePage() {
  const role = roles.find((r) => r.id === impactLeadRoleId)!;

  return (
    <>
      <PageHero
        eyebrow="Impact Lead"
        title={role.name}
        description={role.purpose}
        evidenceStatus={role.evidenceStatus}
      />
      <div className="page-shell space-y-12">
        <section aria-labelledby="accountabilities">
          <h2 id="accountabilities" className="font-sans text-xl font-semibold text-navy">
            Accountabilities
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">
            {role.accountabilities.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </section>
        <section aria-labelledby="decisions">
          <h2 id="decisions" className="font-sans text-xl font-semibold text-navy">
            Key decisions facilitated
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">
            {role.keyDecisions.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </section>
        <RoleBoundaryExplorer />
        <Prose>
          <p>
            Core artifacts you will touch most often include intake records, impact hypotheses,
            readiness scorecards, and gate decision records—all labelled with evidence status.
          </p>
          {role.evidenceStatus ? <EvidenceBadge status={role.evidenceStatus} /> : null}
        </Prose>
      </div>
    </>
  );
}
