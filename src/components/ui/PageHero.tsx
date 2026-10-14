import type { EvidenceStatus } from "@/lib/types";
import type { ReactNode } from "react";
import { EvidenceBadge } from "./EvidenceBadge";

export function PageHero({
  eyebrow,
  title,
  description,
  evidenceStatus,
  actions,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  evidenceStatus?: EvidenceStatus;
  actions?: ReactNode;
}) {
  return (
    <header className="border-b border-line bg-surface pb-10 pt-8 md:pb-14 md:pt-12">
      <div className="page-shell py-0">
        {eyebrow ? (
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-teal">
            {eyebrow}
          </p>
        ) : null}
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="max-w-3xl">
            <h1 className="font-sans text-3xl font-semibold tracking-tight text-navy md:text-4xl">
              {title}
            </h1>
            {description ? (
              <p className="prose-playbook mt-4 text-lg text-muted">{description}</p>
            ) : null}
            {evidenceStatus ? (
              <div className="mt-4">
                <EvidenceBadge status={evidenceStatus} />
              </div>
            ) : null}
          </div>
          {actions ? <div className="flex shrink-0 flex-wrap gap-3">{actions}</div> : null}
        </div>
      </div>
    </header>
  );
}
