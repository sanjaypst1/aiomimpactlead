import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Prose } from "@/components/ui/Prose";

export const metadata: Metadata = { title: "Accessibility" };

export default function AccessibilityPage() {
  return (
    <>
      <PageHero
        title="Accessibility"
        description="Commitments and known gaps for this prototype."
      />
      <div className="page-shell">
        <Prose>
          <p>
            The layout uses semantic landmarks (header, main, footer), a skip link to main
            content, visible focus styles, and accessible names on key SVG figures. Mobile
            navigation supports Escape to close and basic focus cycling within the drawer.
          </p>
          <p>
            Scroll-triggered animations respect <code>prefers-reduced-motion</code>. Colour
            contrast targets WCAG 2.2 AA for body text on cream surfaces; please report any
            contrast issues you encounter.
          </p>
          <p>
            Ongoing improvements: full WCAG audit, keyboard testing on all interactive widgets,
            and print styles for committee packs.
          </p>
        </Prose>
      </div>
    </>
  );
}
