import type { Metadata } from "next";
import {
  workedExampleCases,
  workedExampleCommitteeMemoExcerpt,
  workedExampleMeta,
} from "@/content/worked-example";
import { PageHero } from "@/components/ui/PageHero";
import { Prose } from "@/components/ui/Prose";
import { WorkedExampleWalkthrough } from "@/components/interactive/WorkedExampleWalkthrough";

export const metadata: Metadata = { title: "Worked Examples" };

export default function WorkedExamplePage() {
  return (
    <>
      <PageHero
        eyebrow="Case studies"
        title="Worked examples across investment and technology"
        description={`${workedExampleCases.length} deep case studies showing how the Impact Lead answers problem, benefits, process change, role shifts, value ownership, GRC blessing, ISO 27001 / ISO 42001 mapping, trade-offs and hard questions—placed at the right gates.`}
      />
      <div className="page-shell space-y-12 pb-16">
        <Prose>
          <p>{workedExampleMeta.narrator}</p>
          <p>
            Start with the Investment Committee memo case for the full six-gate trail, then switch
            to Responsible Investment screening, private-markets diligence, operations breaks,
            LUMi-style knowledge platforms, ITSM triage, engineering copilots, and compliance
            horizon scanning.
          </p>
        </Prose>
        <WorkedExampleWalkthrough />
        <section aria-labelledby="memo-excerpt">
          <h2 id="memo-excerpt" className="font-sans text-xl font-semibold text-navy">
            Primary case — governance memo excerpt
          </h2>
          <blockquote className="prose-playbook mt-4 border-l-4 border-teal pl-4 text-muted">
            {workedExampleCommitteeMemoExcerpt.recommendation}
          </blockquote>
          <ul className="mt-4 list-disc pl-5 text-sm text-muted">
            {workedExampleCommitteeMemoExcerpt.sections.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
