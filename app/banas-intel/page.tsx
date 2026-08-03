import { permanentRedirect } from "next/navigation";

// The Banas Intelligence product is hosted separately. This route permanently
// forwards all traffic there (HTTP 308). `force-dynamic` makes the redirect run
// per-request instead of being baked into a static page (which produces a 500).
export const dynamic = "force-dynamic";

// For now the live product is the Cloud Run deployment. Switch this back to
// https://intel.banas-ai.com/ once that subdomain is live.
const INTEL_URL = "https://banas-intel-api-1007077428197.asia-south1.run.app/";

export default function BanasIntelPage() {
  permanentRedirect(INTEL_URL);
}
