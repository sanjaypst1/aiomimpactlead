import type { Metadata } from "next";
import { siteContent } from "@/content/site";
import { PageHero } from "@/components/ui/PageHero";
import { Prose } from "@/components/ui/Prose";
import { EvidenceBadge } from "@/components/ui/EvidenceBadge";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="Author" title="About this playbook" />
      <div className="page-shell space-y-8">
        <Prose>
          <p>{siteContent.aboutSanjay}</p>
        </Prose>
        <section aria-labelledby="disclaimer-full">
          <h2 id="disclaimer-full" className="font-sans text-xl font-semibold text-navy">
            Disclaimer
          </h2>
          <p className="prose-playbook mt-4 text-muted">{siteContent.disclaimer}</p>
          <EvidenceBadge status={siteContent.evidenceStatus} className="mt-4" />
        </section>
      </div>
    </>
  );
}
