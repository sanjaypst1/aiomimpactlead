import type { Metadata } from "next";
import { sources } from "@/content/sources";
import { PageHero } from "@/components/ui/PageHero";
import { EvidenceBadge } from "@/components/ui/EvidenceBadge";
import { EVIDENCE_STATUS_LABELS } from "@/lib/labels";

export const metadata: Metadata = { title: "Evidence" };

export default function EvidencePage() {
  return (
    <>
      <PageHero
        eyebrow="Source register"
        title="Evidence & sources"
        description="Public citations and source register used across the playbook. Validate organisational structures internally before application."
      />
      <div className="page-shell">
        <p className="mb-8 text-sm text-muted">
          Status labels used site-wide:{" "}
          {Object.entries(EVIDENCE_STATUS_LABELS)
            .map(([, label]) => label)
            .filter(Boolean)
            .join(" · ")}
        </p>
        <ul className="divide-y divide-line border-y border-line">
          {sources.map((src) => (
            <li key={src.id} className="py-6">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h2 className="font-sans text-lg font-semibold text-navy">
                    <a href={src.url} className="hover:underline" rel="noopener noreferrer">
                      {src.title}
                    </a>
                  </h2>
                  <p className="mt-1 text-sm text-muted">
                    {src.publisher} · {src.date} · Accessed {src.accessDate}
                  </p>
                </div>
                <EvidenceBadge status={src.evidenceStatus} />
              </div>
              <p className="mt-3 text-sm text-muted">{src.relevance}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
