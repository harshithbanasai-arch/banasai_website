import Link from "next/link";
import { AiOutlineX, AiOutlineLinkedin, AiOutlineWhatsApp } from "react-icons/ai";
import { WHATSAPP_COMMUNITY_URL } from "./community";
import { type Lang, localPath } from "./i18n";

const COPY = {
  en: {
    tagline: "Banas Intelligence & Physical AI",
    location: "Rooted in farming. Operating between Dublin and Karnataka (Bengaluru).",
    home: "Home",
    ecosystem: "Ecosystem",
    community: "Community",
    contact: "Contact",
    rights: "All rights reserved.",
  },
  kn: {
    tagline: "Banas Intelligence ಮತ್ತು Physical AI",
    location: "ಕೃಷಿಯಲ್ಲಿ ಬೇರೂರಿದ ಸಂಸ್ಥೆ. ಡಬ್ಲಿನ್ ಮತ್ತು ಕರ್ನಾಟಕದಿಂದ (ಬೆಂಗಳೂರು) ಕೆಲಸ ಮಾಡುತ್ತೇವೆ.",
    home: "ಮುಖಪುಟ",
    ecosystem: "ಉತ್ಪನ್ನಗಳು",
    community: "ಸಮುದಾಯ",
    contact: "ಸಂಪರ್ಕ",
    rights: "ಎಲ್ಲ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.",
  },
};

const Footer = ({ lang = "en" }: { lang?: Lang }) => {
  const t = COPY[lang];
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-border text-muted-text py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <p className="text-lg font-semibold text-body-text font-sora">Banas AI</p>
            <p className="text-sm mt-1 font-inter">{t.tagline}</p>
            <p className="text-xs mt-2 text-muted-text font-inter">
              {t.location}
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-4 md:mb-0 font-inter">
            <Link href={localPath(lang, "/")} className="hover:text-primary transition-colors text-sm">
              {t.home}
            </Link>
            <Link href={localPath(lang, "/#ecosystem")} className="hover:text-primary transition-colors text-sm">
              {t.ecosystem}
            </Link>
            <a href="https://banas-intel-api-1007077428197.asia-south1.run.app/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors text-sm">
              Banas Intelligence
            </a>
            <a href={WHATSAPP_COMMUNITY_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors text-sm">
              {t.community}
            </a>
            <Link href={localPath(lang, "/contact")} className="hover:text-primary transition-colors text-sm">
              {t.contact}
            </Link>
            <a href="mailto:contact@banas-ai.com" className="hover:text-primary transition-colors text-sm">
              contact@banas-ai.com
            </a>
          </div>
          <div className="flex space-x-4">
            <a href={WHATSAPP_COMMUNITY_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp community" className="hover:text-primary transition-colors">
              <AiOutlineWhatsApp className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/company/banasai/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-primary transition-colors">
              <AiOutlineLinkedin className="w-5 h-5" />
            </a>
            <a href="https://x.com/banas_ai" target="_blank" rel="noopener noreferrer" aria-label="X (formerly Twitter)" className="hover:text-primary transition-colors">
              <AiOutlineX className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-border text-center text-sm font-inter">
          <p>&copy; {currentYear} Banas AI. {t.rights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;