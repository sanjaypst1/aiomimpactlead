import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ArtifactFilter } from "@/components/interactive/ArtifactFilter";

export const metadata: Metadata = { title: "Artifacts" };

export default function ArtifactsPage() {
  return (
    <>
      <PageHero
        eyebrow="Register"
        title="Artifacts"
        description="37 proposed records, packs, and registers mapped to gates and categories. Filter to find what to produce at each decision point."
      />
      <div className="page-shell">
        <ArtifactFilter />
      </div>
    </>
  );
}
