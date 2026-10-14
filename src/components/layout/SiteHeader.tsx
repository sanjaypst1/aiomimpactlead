"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { siteContent } from "@/content/site";

const PRIMARY_NAV = [
  { label: "Overview", href: "/" },
  { label: "My Role", href: "/role" },
  { label: "Operating Model", href: "/operating-model" },
  { label: "Walkthrough", href: "/walkthrough" },
  { label: "Playbook", href: "/playbook" },
  { label: "Big Picture", href: "/big-picture" },
  { label: "Artifacts", href: "/artifacts" },
  { label: "Use Cases", href: "/use-cases" },
  { label: "Worked Example", href: "/worked-example" },
  { label: "Evidence", href: "/evidence" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const labelId = useId();

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    closeBtnRef.current?.focus();
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
        return;
      }
      if (e.key !== "Tab" || !dialogRef.current) return;
      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, close]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-surface/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-8">
        <Link
          href="/"
          className="font-sans text-sm font-semibold leading-tight text-navy md:text-base"
        >
          <span className="block">{siteContent.siteName}</span>
          <span className="hidden text-xs font-normal text-muted sm:block">
            Impact Lead playbook
          </span>
        </Link>

        <nav className="hidden lg:block" aria-label="Primary">
          <ul className="flex flex-wrap items-center gap-1">
            {PRIMARY_NAV.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={clsx(
                      "rounded-sm px-2.5 py-1.5 text-sm font-medium transition-colors",
                      active
                        ? "bg-navy text-cream"
                        : "text-ink hover:bg-line/50 hover:text-teal",
                    )}
                    aria-current={active ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          type="button"
          className="inline-flex items-center rounded-sm border border-line bg-surface-elevated px-3 py-2 text-sm font-semibold text-navy lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(true)}
        >
          Menu
        </button>
      </div>

      {open ? (
        <div
          className="fixed inset-0 z-[60] flex justify-end bg-navy-deep/40 lg:hidden"
          role="presentation"
          onClick={close}
        >
          <div
            id="mobile-nav"
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={labelId}
            className="flex h-full w-[min(100%,20rem)] flex-col border-l border-line bg-surface shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-line px-4 py-3">
              <p id={labelId} className="font-semibold text-navy">
                Navigation
              </p>
              <button
                ref={closeBtnRef}
                type="button"
                className="rounded-sm border border-line px-2 py-1 text-sm font-medium"
                onClick={close}
              >
                Close
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto p-4" aria-label="Primary mobile">
              <ul className="space-y-1">
                {PRIMARY_NAV.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block rounded-sm px-3 py-2.5 text-base font-medium text-ink hover:bg-cream"
                      onClick={close}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  );
}
