import type { Metadata } from "next";
import HomePage from "components/HomePage";
import { languageAlternates, localPath } from "components/i18n";

export const metadata: Metadata = {
  alternates: { canonical: "/", languages: languageAlternates("/") },
};

export default function Page() {
  return <HomePage lang="en" switchHref={localPath("kn", "/")} />;
}
