import clsx from "clsx";
import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "inverse";

const variantClass: Record<Variant, string> = {
  primary:
    "bg-navy text-cream border-navy hover:bg-navy-deep focus-visible:ring-teal",
  secondary:
    "bg-surface-elevated text-navy border-line hover:border-teal/50 hover:text-teal",
  ghost: "bg-transparent text-teal border-transparent hover:bg-teal/8",
  inverse:
    "bg-cream text-navy border-cream hover:bg-surface-elevated focus-visible:ring-teal",
};

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
} & Omit<ComponentProps<typeof Link>, "href" | "className" | "children">;

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  ...rest
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={clsx(
        "inline-flex items-center justify-center gap-2 rounded-sm border px-4 py-2.5 text-sm font-semibold transition-colors",
        variantClass[variant],
        className,
      )}
      {...rest}
    >
      {children}
    </Link>
  );
}
