import type { MetadataRoute } from "next";
import { useCases } from "@/content/use-cases";
import { PLAYBOOK_GATE_PATHS } from "@/lib/gate-routes";

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

const STATIC = [
  "",
  "/role",
  "/operating-model",
  "/playbook",
  "/walkthrough",
  "/big-picture",
  "/stakeholders",
  "/meetings",
  "/artifacts",
  "/decision-framework",
  "/use-cases",
  "/worked-example",
  "/comparative-practice",
  "/frameworks",
  "/mobilisation-plan",
  "/metrics",
  "/evidence",
  "/about",
  "/project",
  "/privacy",
  "/accessibility",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticEntries = STATIC.map((path) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const gateEntries = PLAYBOOK_GATE_PATHS.map((path) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const useCaseEntries = useCases.map((uc) => ({
    url: `${BASE}/use-cases/${uc.id}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...staticEntries, ...gateEntries, ...useCaseEntries];
}
