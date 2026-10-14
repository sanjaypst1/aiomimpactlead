import clsx from "clsx";
import type { ReactNode } from "react";

export function Prose({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={clsx("prose-playbook max-w-3xl space-y-4", className)}>
      {children}
    </div>
  );
}
