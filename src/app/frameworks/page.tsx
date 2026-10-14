import type { Metadata } from "next";
import { frameworks } from "@/content/frameworks";
import { sourceById } from "@/content/sources";
import { PageHero } from "@/components/ui/PageHero";
import { EvidenceBadge } from "@/components/ui/EvidenceBadge";

export const metadata: Metadata = { title: "Frameworks" };

export default function FrameworksPage() {
  return (
    <>
      <PageHero
        eyebrow="Assurance mapping"
        title="Frameworks & sources"
        description="Public assurance and risk frameworks mapped to playbook artifacts and gates."
      />
      <div className="page-shell space-y-8">
        {frameworks.map((fw) => (
          <article key={fw.id} className="border-b border-line pb-8">
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="font-sans text-xl font-semibold text-navy">{fw.name}</h2>
              <EvidenceBadge status={fw.evidenceStatus} />
            </div>
            <p className="mt-1 text-sm text-muted">{fw.publisher}</p>
            <p className="mt-3 text-muted">{fw.summary}</p>
            <p className="mt-4 text-sm">
              <strong>Application:</strong> {fw.applicationAreas.join("; ")}
            </p>
            <ul className="mt-3 text-sm">
              {fw.sourceIds.map((id) => {
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
          </article>
        ))}
      </div>
    </>
  );
}
