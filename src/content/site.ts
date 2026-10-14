import type { SiteContent } from "@/lib/types";

export const siteContent = {
  siteName: "AI Operating Model Impact Playbook",
  tagline:
    "Evidence-led lifecycle gates, roles, and artifacts to deliver measurable AI impact for sovereign wealth and public-interest investors.",
  disclaimer:
    "This independent professional playbook is not affiliated with or endorsed by Future Fund or any referenced organisation. Future Fund information is drawn only from publicly available sources. Structures, committees, responsibilities and use cases shown here are working designs for workshop use and must be validated against internal arrangements before application. Sanjay Singh Rawat is presented as the playbook author; this site does not state or imply current employment at Future Fund, appointment to the role, or authority to speak on behalf of Future Fund. Comparative examples are transferable practices, not copied designs. Worked examples use labelled demonstration data. Not legal, investment, or regulatory advice.",
  aboutSanjay:
    "Sanjay developed this playbook to help investment and public-sector organisations translate AI ambition into accountable delivery. The content synthesises public sources (including Australian AI assurance and financial-services guidance), international asset-owner benchmarks, and practical impact-leadership patterns. Use it to stress-test sponsorship, assurance, and benefits realisation before scaling AI in high-trust environments.",
  evidenceStatus: "proposed-illustrative",
  nav: [
    { label: "Overview", href: "/", description: "Purpose, scope, and how to use the playbook" },
    { label: "My Role", href: "/role", description: "Impact Lead accountabilities and boundaries" },
    {
      label: "Operating Model",
      href: "/operating-model",
      description: "Where the Impact Lead sits in the wider AI operating model",
    },
    {
      label: "Walkthrough",
      href: "/walkthrough",
      description: "Panel walkthrough: role placement, delivery challenge, JD and interview beats",
    },
    { label: "Playbook", href: "/playbook", description: "Six gates from mobilisation to enterprise learning" },
    {
      label: "Big Picture",
      href: "/big-picture",
      description: "End-to-end gate map, trade-offs, GRC loop and Workstream Lead roll-up",
    },
    { label: "Artifacts", href: "/artifacts", description: "Records, packs, and registers across the lifecycle" },
    { label: "Use Cases", href: "/use-cases", description: "Function-level scenarios across business and technology" },
    {
      label: "Worked Example",
      href: "/worked-example",
      description: "Deep case studies across investment and technology divisions",
    },
    { label: "Evidence", href: "/evidence", description: "Sources, claims, and evidence conventions" },
  ],
  hero: {
    headline: "Turning AI use cases into accountable, ready and scalable ways of working.",
    subhead:
      "A practical playbook for how the AI Operating Model Impact Lead complements Future Fund’s wider AI Operating Model—connecting intake, human–AI workflow design, operating-model impact, assurance, governance decisions, and enterprise learning.",
    ctaPrimary: "Explore the playbook",
    ctaSecondary: "See where the role sits",
  },
} as const satisfies SiteContent;
