import Link from "next/link";
import Image from "next/image";
import { WHATSAPP_COMMUNITY_URL } from "./community";
import { type Lang, localPath } from "./i18n";

const COPY = {
  en: {
    home: "Home",
    about: "About",
    ecosystem: "Ecosystem",
    blog: "Blog",
    community: "Community",
    contact: "Contact",
    cta: "Register Interest",
    switchLabel: "ಕನ್ನಡ",
    switchAria: "ಕನ್ನಡದಲ್ಲಿ ಓದಿ",
  },
  kn: {
    home: "ಮುಖಪುಟ",
    about: "ನಮ್ಮ ಬಗ್ಗೆ",
    ecosystem: "ಉತ್ಪನ್ನಗಳು",
    blog: "ಬ್ಲಾಗ್",
    community: "ಸಮುದಾಯ",
    contact: "ಸಂಪರ್ಕ",
    cta: "ಆಸಕ್ತಿ ನೋಂದಾಯಿಸಿ",
    switchLabel: "English",
    switchAria: "Read in English",
  },
};

const navLink =
  "text-sm text-body-text px-4 py-2 rounded-button hover:bg-background transition-colors font-inter";

interface HeaderProps {
  lang?: Lang;
  // The same page in the other language. Defaults to the other homepage.
  switchHref?: string;
}

export default function Header({ lang = "en", switchHref }: HeaderProps) {
  const t = COPY[lang];
  const otherHome = lang === "en" ? localPath("kn", "/") : "/";

  return (
    <header className="bg-white border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex flex-wrap justify-between items-center gap-y-3">
        <div className="flex items-center">
          <Link href={localPath(lang, "/")} aria-label="Banas AI home">
            <Image
              src="/banas_logo.jpg"
              alt="Banas AI"
              width={180}
              height={60}
              priority
              className="h-14 w-auto object-contain"
            />
          </Link>
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-y-2">
          <ul className="flex flex-wrap justify-center space-x-1 mr-4">
            <li>
              <Link href={localPath(lang, "/")} className={navLink}>
                {t.home}
              </Link>
            </li>
            <li>
              <Link href={localPath(lang, "/#about")} className={navLink}>
                {t.about}
              </Link>
            </li>
            <li>
              <Link href={localPath(lang, "/#ecosystem")} className={navLink}>
                {t.ecosystem}
              </Link>
            </li>
            <li>
              <Link href="/blog" className={navLink}>
                {t.blog}
              </Link>
            </li>
            <li>
              <a
                href="https://banas-intel-api-1007077428197.asia-south1.run.app/"
                target="_blank"
                rel="noopener noreferrer"
                className={navLink}
              >
                Banas Intelligence
              </a>
            </li>
            <li>
              <a
                href={WHATSAPP_COMMUNITY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={navLink}
              >
                {t.community}
              </a>
            </li>
            <li>
              <Link href={localPath(lang, "/contact")} className={navLink}>
                {t.contact}
              </Link>
            </li>
            <li>
              <Link
                href={switchHref ?? otherHome}
                hrefLang={lang === "en" ? "kn" : "en"}
                lang={lang === "en" ? "kn" : "en"}
                aria-label={t.switchAria}
                className={`${navLink} font-medium text-primary`}
              >
                {t.switchLabel}
              </Link>
            </li>
          </ul>
          <Link href={localPath(lang, "/contact")} className="btn-primary text-sm px-5 py-2.5">
            {t.cta}
          </Link>
        </nav>
      </div>
    </header>
  );
}
