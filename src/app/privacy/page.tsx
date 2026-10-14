import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Prose } from "@/components/ui/Prose";

export const metadata: Metadata = { title: "Privacy" };

export default function PrivacyPage() {
  return (
    <>
      <PageHero title="Privacy" description="How this prototype site handles data." />
      <div className="page-shell">
        <Prose>
          <p>
            This is a static editorial site. It does not require sign-in, does not collect
            form submissions to a backend, and does not set analytics cookies in this prototype
            build. If you deploy it with third-party analytics or hosting logs, apply your
            organisation&apos;s privacy policy to those services.
          </p>
          <p>
            External links open publisher websites (Future Fund, government frameworks, etc.).
            Review their privacy notices independently.
          </p>
        </Prose>
      </div>
    </>
  );
}
