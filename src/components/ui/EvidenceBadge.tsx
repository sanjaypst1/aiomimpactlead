import type { EvidenceStatus } from "@/lib/types";
import { EVIDENCE_STATUS_LABELS } from "@/lib/labels";
import { Badge } from "./Badge";

const statusVariant: Record<
  EvidenceStatus,
  "teal" | "amber" | "muted" | "navy" | "default"
> = {
  "confirmed-public": "teal",
  "proposed-illustrative": "amber",
  "synthetic-example": "muted",
  "international-benchmark": "navy",
  "industry-guidance": "default",
  "inferred-from-source": "default",
};

export function EvidenceBadge({
  status,
  className,
}: {
  status: EvidenceStatus;
  className?: string;
}) {
  // Hide "Proposed / illustrative" from the playbook UI per product direction.
  if (status === "proposed-illustrative") return null;

  return (
    <Badge variant={statusVariant[status]} className={className}>
      {EVIDENCE_STATUS_LABELS[status]}
    </Badge>
  );
}
