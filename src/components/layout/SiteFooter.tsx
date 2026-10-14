import Link from "next/link";
import { siteContent } from "@/content/site";

const FOOTER_LINKS = [
  { label: "Privacy", href: "/privacy" },
  { label: "Accessibility", href: "/accessibility" },
  { label: "About", href: "/about" },
  { label: "Project", href: "/project" },
] as const;

export function SiteFooter() {
  const excerpt =
    siteContent.disclaimer.length > 280
      ? `${siteContent.disclaimer.slice(0, 277)}…`
      : siteContent.disclaimer;

  return (
    <footer className="mt-auto border-t border-line bg-navy text-cream">
      <div className="page-shell py-10">
        <p className="max-w-3xl text-sm leading-relaxed text-cream/80">{excerpt}</p>
        <nav className="mt-6" aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-cream underline-offset-4 hover:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/evidence"
                className="text-sm font-medium text-cream underline-offset-4 hover:underline"
              >
                Source register
              </Link>
            </li>
          </ul>
        </nav>
        <p className="mt-8 text-xs text-cream/60">
          © 2026 {siteContent.siteName}. Editorial prototype for discussion.
        </p>
      </div>
    </footer>
  );
}
