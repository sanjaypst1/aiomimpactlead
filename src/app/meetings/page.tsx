import type { Metadata } from "next";
import { meetings } from "@/content/meetings";
import { PageHero } from "@/components/ui/PageHero";
import { EvidenceBadge } from "@/components/ui/EvidenceBadge";

export const metadata: Metadata = { title: "Meetings" };

export default function MeetingsPage() {
  return (
    <>
      <PageHero
        eyebrow="Cadence"
        title="Meetings"
        description="Sixteen proposed forums with triggers, agendas, and expected decisions."
      />
      <div className="page-shell">
        <ul className="space-y-8">
          {meetings.map((m) => (
            <li key={m.id} className="border-b border-line pb-8">
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="font-sans text-xl font-semibold text-navy">{m.name}</h2>
                {m.evidenceStatus ? <EvidenceBadge status={m.evidenceStatus} /> : null}
              </div>
              <p className="mt-2 text-sm text-muted">
                {m.lifecycleStage} · {m.duration} · Chair: {m.chair}
              </p>
              <p className="mt-3 text-muted">{m.purpose}</p>
              <p className="mt-2 text-sm">
                <strong>Trigger:</strong> {m.trigger}
              </p>
              <h3 className="mt-4 text-sm font-semibold text-navy">Agenda</h3>
              <ol className="mt-2 list-decimal pl-5 text-sm text-muted">
                {m.agenda.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
