import type { Metadata } from "next";
import HomePage from "components/HomePage";
import { languageAlternates } from "components/i18n";

const title = "Banas AI: ಅಡಿಕೆ ಬೆಳೆಗಾರರಿಗೆ ಉಚಿತ ಮಾರುಕಟ್ಟೆ ಮುನ್ಸೂಚನೆ";
const description =
  "Banas Intelligence ಅಡಿಕೆ ಬೆಳೆಗಾರರಿಗೆ ಉಚಿತ ಮಾರುಕಟ್ಟೆ ಮುನ್ಸೂಚನೆ ನೀಡುತ್ತದೆ. ನಮ್ಮ WhatsApp ಸಮುದಾಯಕ್ಕೆ ಸೇರಿ, ಮತ್ತು ಗ್ರೇಡಿಂಗ್, ಸುಲಿಯುವ ಯಂತ್ರ ಹಾಗೂ ತೋಟದ ರೋಬೋಟ್‌ನ ಕಾಯುವ ಪಟ್ಟಿಗೆ ಸೇರಿ.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/kn", languages: languageAlternates("/") },
  openGraph: {
    type: "website",
    locale: "kn_IN",
    url: "/kn",
    siteName: "Banas AI",
    title,
    description,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Banas AI" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/og-image.png"] },
};

export default function KannadaHomePage() {
  return <HomePage lang="kn" switchHref="/" />;
}
