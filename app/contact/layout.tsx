import type { Metadata } from "next";
import { languageAlternates } from "components/i18n";

export const metadata: Metadata = {
  title: "Join the Waitlist",
  description:
    "Join the waitlist for Banas Grading, Banas Dehusking or the Banas Farm Manager robot, or get in touch at contact@banas-ai.com.",
  alternates: { canonical: "/contact", languages: languageAlternates("/contact") },
  openGraph: {
    title: "Join the Waitlist | Banas AI",
    description: "Join the waitlist for Banas Grading, Dehusking or the Farm Manager robot.",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
