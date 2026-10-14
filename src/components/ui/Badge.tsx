import clsx from "clsx";
import type { ReactNode } from "react";

type BadgeVariant = "default" | "navy" | "teal" | "amber" | "muted";

const variantClass: Record<BadgeVariant, string> = {
  default: "bg-surface-elevated text-ink border-line",
  navy: "bg-navy text-cream border-navy",
  teal: "bg-teal/10 text-teal border-teal/30",
  amber: "bg-amber/15 text-amber border-amber/35",
  muted: "bg-line/40 text-muted border-line",
};

export function Badge({
  children,
  variant = "default",
  className,
}: {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-sm border px-2 py-0.5 text-xs font-medium tracking-wide",
        variantClass[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
