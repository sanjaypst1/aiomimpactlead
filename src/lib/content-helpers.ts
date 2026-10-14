import { artifacts, artifactById } from "@/content/artifacts";
import { gates } from "@/content/gates";
import { roles, roleById } from "@/content/roles";
import type { LifecycleGate } from "@/lib/types";

export function getGateByNumber(number: number): LifecycleGate | undefined {
  return gates.find((g) => g.number === number);
}

export function getGateById(id: string): LifecycleGate | undefined {
  return gates.find((g) => g.id === id);
}

export function resolveArtifactName(id: string): string {
  return artifactById[id]?.name ?? id;
}

export function resolveRoleName(id: string): string {
  return roleById[id]?.name ?? id.replace(/^role-/, "").replace(/-/g, " ");
}

export function resolveArtifactNames(ids: readonly string[]): string[] {
  return ids.map(resolveArtifactName);
}

export { artifacts, gates, roles };
