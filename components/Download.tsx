import Link from "next/link";
import { WHATSAPP_COMMUNITY_URL } from "./community";
import { type Lang, localPath } from "./i18n";

// For now the live product is the Cloud Run deployment; switch to https://intel.banas-ai.com/ when live.
const INTEL_URL = "https://banas-intel-api-1007077428197.asia-south1.run.app/";

const COPY = {
  en: {
    heading: "Work with us",
    body: "Join the waitlist for grading, dehusking or the farm manager robot, start using Banas Intelligence free today, or join our growers' community on WhatsApp.",
    waitlist: "Join the Waitlist",
    useIntel: "Use Banas Intelligence free",
    community: "Join the WhatsApp community",
  },
  kn: {
    heading: "ನಮ್ಮೊಂದಿಗೆ ಕೈಜೋಡಿಸಿ",
    body: "ಗ್ರೇಡಿಂಗ್, ಸುಲಿಯುವ ಯಂತ್ರ ಅಥವಾ ತೋಟ ನಿರ್ವಹಣೆಯ ರೋಬೋಟ್‌ನ ಕಾಯುವ ಪಟ್ಟಿಗೆ ಸೇರಿ, ಇಂದೇ Banas Intelligence ಉಚಿತವಾಗಿ ಬಳಸಿ, ಅಥವಾ WhatsApp ನಲ್ಲಿ ನಮ್ಮ ಬೆಳೆಗಾರರ ಸಮುದಾಯಕ್ಕೆ ಸೇರಿ.",
    waitlist: "ಕಾಯುವ ಪಟ್ಟಿಗೆ ಸೇರಿ",
    useIntel: "Banas Intelligence ಉಚಿತವಾಗಿ ಬಳಸಿ",
    community: "WhatsApp ಸಮುದಾಯಕ್ಕೆ ಸೇರಿ",
  },
};

const Download: React.FC<{ lang?: Lang }> = ({ lang = "en" }) => {
  const t = COPY[lang];
  return (
    <section className="section-padding bg-surface">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-body-text mb-4 font-sora font-semibold">
              {t.heading}
            </h2>
            <p className="text-xl text-muted-text mb-8 font-light font-inter leading-relaxed">
              {t.body}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href={localPath(lang, "/contact")} className="btn-primary text-center font-inter">
                {t.waitlist}
              </Link>
              <a
                href={INTEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-center font-inter"
              >
                {t.useIntel}
              </a>
              <a
                href={WHATSAPP_COMMUNITY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-center font-inter"
              >
                {t.community}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
