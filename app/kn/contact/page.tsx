import type { Metadata } from "next";
import ContactPage from "components/ContactPage";
import { languageAlternates } from "components/i18n";

export const metadata: Metadata = {
  title: "ಕಾಯುವ ಪಟ್ಟಿಗೆ ಸೇರಿ",
  description:
    "Banas Grading, Banas Dehusking ಅಥವಾ Banas Farm Manager ರೋಬೋಟ್‌ನ ಕಾಯುವ ಪಟ್ಟಿಗೆ ಸೇರಿ, ಅಥವಾ contact@banas-ai.com ಮೂಲಕ ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ.",
  alternates: { canonical: "/kn/contact", languages: languageAlternates("/contact") },
  openGraph: {
    locale: "kn_IN",
    title: "ಕಾಯುವ ಪಟ್ಟಿಗೆ ಸೇರಿ | Banas AI",
    description: "Banas Grading, Dehusking ಅಥವಾ Farm Manager ರೋಬೋಟ್‌ನ ಕಾಯುವ ಪಟ್ಟಿಗೆ ಸೇರಿ.",
  },
};

export default function Page() {
  return <ContactPage lang="kn" />;
}
