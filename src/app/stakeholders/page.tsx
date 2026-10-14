import type { Metadata } from "next";
import { roles } from "@/content/roles";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = { title: "Stakeholders" };

export default function StakeholdersPage() {
  return (
    <>
      <PageHero
        eyebrow="RACI partners"
        title="Stakeholders"
        description="Roles participating across gates, meetings, and artifacts. Use with stakeholder RACI maps in workshops."
      />
      <div className="page-shell">
        <ul className="divide-y divide-line border-y border-line">
          {roles.map((r) => (
            <li key={r.id} className="py-6">
              <h2 className="font-sans text-xl font-semibold text-navy">{r.name}</h2>
              <p className="mt-2 text-muted">{r.purpose}</p>
              <p className="mt-4 text-sm">
                <strong className="text-ink">With Impact Lead:</strong>{" "}
                <span className="text-muted">{r.relationshipWithImpactLead}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
