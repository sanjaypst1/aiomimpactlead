import Link from "next/link";
import { meetings } from "@/content/meetings";
import { EvidenceBadge } from "@/components/ui/EvidenceBadge";
import { PageHero } from "@/components/ui/PageHero";
import { Prose } from "@/components/ui/Prose";
import { ButtonLink } from "@/components/ui/Button";
import {
  getGateByNumber,
  resolveArtifactName,
  resolveRoleName,
} from "@/lib/content-helpers";
import { gatePathForNumber } from "@/lib/gate-routes";
import { notFound } from "next/navigation";

function meetingName(id: string): string {
  return meetings.find((m) => m.id === id)?.name ?? id;
}

function ListBlock({ title, items }: { title: string; items: readonly string[] }) {
  if (items.length === 0) return null;
  return (
    <div>
      <h3 className="font-sans text-lg font-semibold text-navy">{title}</h3>
      <ul className="mt-2 list-disc space-y-1 pl-5 text-muted">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export function GateDetail({ gateNumber }: { gateNumber: number }) {
  const gate = getGateByNumber(gateNumber);
  if (!gate) notFound();

  const prev = gateNumber > 1 ? gatePathForNumber(gateNumber - 1) : null;
  const next = gateNumber < 6 ? gatePathForNumber(gateNumber + 1) : null;

  return (
    <>
      <PageHero
        eyebrow={`Gate ${gate.number}`}
        title={gate.name}
        description={gate.objective}
        evidenceStatus={gate.evidenceStatus}
        actions={
          <>
            <ButtonLink href="/playbook" variant="secondary">
              All gates
            </ButtonLink>
            {next ? (
              <ButtonLink href={next} variant="primary">
                Next gate
              </ButtonLink>
            ) : null}
          </>
        }
      />
      <div className="page-shell">
        <Prose className="mb-10">
          <p>
            <strong>Typical duration:</strong> {gate.durationRange}
          </p>
        </Prose>

        <div className="grid gap-10 lg:grid-cols-2">
          <ListBlock title="Entry criteria" items={gate.entryCriteria} />
          <ListBlock title="Exit criteria" items={gate.exitCriteria} />
          <ListBlock title="Impact Lead activities" items={gate.impactLeadActivities} />
          <ListBlock title="Decision basis" items={gate.decisionBasis} />
          <ListBlock title="Possible decisions" items={gate.possibleDecisions} />
          <ListBlock title="Risks if skipped" items={gate.risksIfSkipped} />
          <ListBlock title="Inputs" items={gate.inputs} />
          <ListBlock title="Handoffs" items={gate.handoffs} />
        </div>

        <section className="mt-12" aria-labelledby="gate-artifacts">
          <h2 id="gate-artifacts" className="font-sans text-xl font-semibold text-navy">
            Artifacts
          </h2>
          <ul className="mt-3 space-y-2">
            {gate.artifacts.map((id) => (
              <li key={id}>
                <Link href="/artifacts" className="text-teal hover:underline">
                  {resolveArtifactName(id)}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10" aria-labelledby="gate-meetings">
          <h2 id="gate-meetings" className="font-sans text-xl font-semibold text-navy">
            Meetings
          </h2>
          <ul className="mt-3 space-y-2 text-muted">
            {gate.meetings.map((id) => (
              <li key={id}>
                <Link href="/meetings" className="text-teal hover:underline">
                  {meetingName(id)}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10" aria-labelledby="gate-roles">
          <h2 id="gate-roles" className="font-sans text-xl font-semibold text-navy">
            Other role contributions
          </h2>
          <ul className="mt-4 space-y-4">
            {gate.otherRoleActivities.map((block) => (
              <li key={block.roleId} className="border-l-2 border-teal/40 pl-4">
                <p className="font-semibold text-navy">{resolveRoleName(block.roleId)}</p>
                <ul className="mt-1 list-disc pl-5 text-muted">
                  {block.activities.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10 rounded-sm border border-line bg-surface p-6">
          <h2 className="font-sans text-lg font-semibold text-navy">Governance roles</h2>
          <dl className="mt-3 grid gap-3 text-sm md:grid-cols-3">
            <div>
              <dt className="font-semibold text-ink">Owners</dt>
              <dd className="text-muted">{gate.owners.join(", ")}</dd>
            </div>
            <div>
              <dt className="font-semibold text-ink">Reviewers</dt>
              <dd className="text-muted">{gate.reviewers.join(", ")}</dd>
            </div>
            <div>
              <dt className="font-semibold text-ink">Approvers</dt>
              <dd className="text-muted">{gate.approvers.join(", ")}</dd>
            </div>
          </dl>
          <div className="mt-4">
            <EvidenceBadge status={gate.evidenceStatus} />
          </div>
        </section>

        <nav
          className="mt-12 flex flex-wrap justify-between gap-4 border-t border-line pt-8"
          aria-label="Gate pagination"
        >
          {prev ? (
            <ButtonLink href={prev} variant="secondary">
              ← Gate {gateNumber - 1}
            </ButtonLink>
          ) : (
            <span />
          )}
          {next ? (
            <ButtonLink href={next} variant="primary">
              Gate {gateNumber + 1} →
            </ButtonLink>
          ) : null}
        </nav>
      </div>
    </>
  );
}
