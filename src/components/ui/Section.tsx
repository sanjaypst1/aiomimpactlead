import clsx from "clsx";
import type { ReactNode } from "react";

export function Section({
  id,
  title,
  lede,
  children,
  className,
  tone = "cream",
}: {
  id?: string;
  title?: string;
  lede?: string;
  children: ReactNode;
  className?: string;
  tone?: "cream" | "navy" | "surface";
}) {
  const toneClass = {
    cream: "bg-cream",
    navy: "bg-navy text-cream [&_h2]:text-cream [&_p]:text-cream/85",
    surface: "bg-surface border-y border-line",
  }[tone];

  return (
    <section
      id={id}
      className={clsx("py-12 md:py-16", toneClass, className)}
      aria-labelledby={title ? `${id ?? "section"}-heading` : undefined}
    >
      <div className="page-shell py-0">
        {title ? (
          <header className="mb-8 max-w-3xl">
            <h2
              id={`${id ?? "section"}-heading`}
              className="font-sans text-2xl font-semibold tracking-tight text-navy md:text-3xl"
            >
              {title}
            </h2>
            {lede ? (
              <p className="mt-3 text-base text-muted md:text-lg">{lede}</p>
            ) : null}
          </header>
        ) : null}
        {children}
      </div>
    </section>
  );
}
