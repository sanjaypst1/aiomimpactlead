import clsx from "clsx";
import type { ReactNode } from "react";

export function Card({
  children,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "li";
}) {
  return (
    <Tag
      className={clsx(
        "rounded-sm border border-line bg-surface-elevated p-5 shadow-sm/5",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
