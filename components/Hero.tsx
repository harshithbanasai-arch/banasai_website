import Link from "next/link";
import { WHATSAPP_COMMUNITY_URL } from "./community";
import { type Lang, localPath } from "./i18n";

// For now the live product is the Cloud Run deployment; switch to https://intel.banas-ai.com/ when live.
const INTEL_URL = "https://banas-intel-api-1007077428197.asia-south1.run.app/";

const COPY = {
  en: {
    badgeLabel: "Now Live",
    badge: "Banas Intelligence is free to use",
    subtitle: "Market forecasts for arecanut growers, and machines for the hardest farm work",
    intro:
      "is our free arecanut market forecast. We are also building machines for farms and processing lines, starting with grading, then dehusking, then a farm manager robot.",
    useIntel: "Use Banas Intelligence free",
    community: "Join our WhatsApp community",
    waitlist: "Join the Waitlist",
  },
  kn: {
    badgeLabel: "ಈಗ ಲಭ್ಯ",
    badge: "Banas Intelligence ಬಳಕೆ ಉಚಿತ",
    subtitle: "ಅಡಿಕೆ ಬೆಳೆಗಾರರಿಗೆ ಮಾರುಕಟ್ಟೆ ಮುನ್ಸೂಚನೆ, ಮತ್ತು ಕೃಷಿಯ ಕಠಿಣ ಕೆಲಸಗಳಿಗೆ ಯಂತ್ರಗಳು",
    intro:
      "ನಮ್ಮ ಉಚಿತ ಅಡಿಕೆ ಮಾರುಕಟ್ಟೆ ಮುನ್ಸೂಚನೆ ಸೇವೆ. ತೋಟಗಳು ಮತ್ತು ಸಂಸ್ಕರಣಾ ಘಟಕಗಳಿಗಾಗಿ ನಾವು ಯಂತ್ರಗಳನ್ನೂ ತಯಾರಿಸುತ್ತಿದ್ದೇವೆ: ಮೊದಲು ಗ್ರೇಡಿಂಗ್, ನಂತರ ಅಡಿಕೆ ಸುಲಿಯುವ ಯಂತ್ರ, ನಂತರ ತೋಟ ನಿರ್ವಹಣೆಯ ರೋಬೋಟ್.",
    useIntel: "Banas Intelligence ಉಚಿತವಾಗಿ ಬಳಸಿ",
    community: "ನಮ್ಮ WhatsApp ಸಮುದಾಯಕ್ಕೆ ಸೇರಿ",
    waitlist: "ಕಾಯುವ ಪಟ್ಟಿಗೆ ಸೇರಿ",
  },
};

export default function Hero({ lang = "en" }: { lang?: Lang }) {
  const t = COPY[lang];

  return (
    <section className="hero-bg text-center py-[80px] md:py-[120px] mx-4 sm:mx-8 md:mx-16 lg:mx-24">
      <a
        href={INTEL_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full bg-green-light border border-green-accent/30 hover:border-green-accent transition-colors"
      >
        <span className="label-text text-xs text-green-secondary font-dm-mono">{t.badgeLabel}</span>
        <span className="text-sm text-body-text font-inter">{t.badge}</span>
      </a>
      <h1 className="font-sora text-5xl tracking-tight sm:text-6xl md:text-7xl lg:text-8xl text-body-text mb-6 font-bold">
        BANAS AI
      </h1>
      <h2 className="font-sora text-2xl tracking-tight sm:text-3xl md:text-4xl lg:text-5xl text-muted-text mb-8 font-semibold max-w-4xl mx-auto leading-snug">
        {t.subtitle}
      </h2>
      <p className="text-xl text-muted-text mb-12 font-light font-inter max-w-4xl mx-auto leading-relaxed">
        <strong className="text-body-text font-medium">Banas Intelligence</strong> {t.intro}
      </p>
      <div className="flex justify-center space-x-6 flex-wrap gap-4">
        <a
          href={INTEL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-base font-inter"
        >
          {t.useIntel}
        </a>
        <a
          href={WHATSAPP_COMMUNITY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary text-base font-inter"
        >
          {t.community}
        </a>
        <Link href={localPath(lang, "/contact")} className="btn-secondary text-base font-inter">
          {t.waitlist}
        </Link>
      </div>
    </section>
  );
}
