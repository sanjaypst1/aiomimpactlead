import { GateDetail } from "@/components/playbook/GateDetail";
import { gatePageMetadata } from "@/lib/playbook-metadata";

export const metadata = gatePageMetadata(6);

export default function GatePage() {
  return <GateDetail gateNumber={6} />;
}
