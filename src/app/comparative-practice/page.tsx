import type { Metadata } from "next";
import { comparativeExamples } from "@/content/comparative";
import { sourceById } from "@/content/sources";
import { PageHero } from "@/components/ui/PageHero";
import { EvidenceBadge } from "@/components/ui/EvidenceBadge";

export const metadata: Metadata = { title: "Comparative Practice" };

export default function ComparativePracticePage() {
  return (
    <>
      <PageHero
        eyebrow="Benchmarks"
        title="Comparative practice"
        description="International and industry examples inform the proposal. They are not endorsements or confirmed internal practice."
      />
      <div className="page-shell space-y-10">
        {comparativeExamples.map((ex) => (
          <article key={ex.id} className="border-b border-line pb-10">
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="font-sans text-2xl font-semibold text-navy">{ex.name}</h2>
              <EvidenceBadge status={ex.evidenceStatus} />
            </div>
            <p className="mt-3 text-muted">{ex.context}</p>
            <h3 className="mt-6 font-semibold text-teal">Transferable lesson</h3>
            <p className="mt-2 text-muted">{ex.transferableLesson}</p>
            <h3 className="mt-6 font-semibold text-teal">How it informs this proposal</h3>
            <p className="mt-2 text-muted">{ex.howItInformsProposal}</p>
            <h3 className="mt-6 font-semibold text-navy">Limitations</h3>
            <p className="mt-2 text-sm text-muted">{ex.limitations}</p>
            {ex.sourceIds.length > 0 ? (
              <ul className="mt-4 text-sm">
                {ex.sourceIds.map((id) => {
                  const src = sourceById[id];
                  return src ? (
                    <li key={id}>
                      <a href={src.url} className="text-teal hover:underline" rel="noopener noreferrer">
                        {src.title}
                      </a>
                    </li>
                  ) : null;
                })}
              </ul>
            ) : null}
          </article>
        ))}
      </div>
    </>
  );
}
