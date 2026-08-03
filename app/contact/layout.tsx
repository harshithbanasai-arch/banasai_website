import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Register Interest",
  description:
    "Register your interest in Banas Intelligence or a ground-truth data contract. Email contact@banas-ai.com or send a message — we'll get back to you.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact & Register Interest | Banas AI",
    description: "Register your interest in Banas Intelligence or a data contract.",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
