import type { Metadata } from "next";
import { siteContent } from "@/content/site";
import { PageHero } from "@/components/ui/PageHero";
import { Prose } from "@/components/ui/Prose";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = { title: "Project" };

export default function ProjectPage() {
  return (
    <>
      <PageHero
        eyebrow="Delivery"
        title="Project overview"
        description="An editorial Next.js prototype packaging lifecycle content for workshop facilitation and governance design discussions."
      />
      <div className="page-shell space-y-6">
        <Prose>
          <p>{siteContent.tagline}</p>
          <p>
            Content modules live under structured TypeScript sources (gates, roles, artifacts,
            meetings, use cases) with Zod types for consistency. Interactive components are
            deterministic for workshop discussion.
          </p>
        </Prose>
        <div className="flex flex-wrap gap-4">
          <ButtonLink href="/playbook">Open playbook</ButtonLink>
          <ButtonLink href="/evidence" variant="secondary">
            Source register
          </ButtonLink>
        </div>
      </div>
    </>
  );
}
