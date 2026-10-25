import React from "react";
import Link from "next/link";
import { FaBrain, FaCamera, FaCogs, FaRobot, FaArrowRight } from "react-icons/fa";
import { type Lang, localPath } from "./i18n";

// For now the live product is the Cloud Run deployment; switch to https://intel.banas-ai.com/ when live.
const INTEL_URL = "https://banas-intel-api-1007077428197.asia-south1.run.app/";

type ProductCopy = {
  tag: string;
  tagline: string;
  body: string;
  signals?: string[];
  points: string[];
  cta: string;
};

type Product = {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  name: string;
  href: string;
  external?: boolean;
  copy: Record<Lang, ProductCopy>;
};

const products: Product[] = [
  {
    icon: FaBrain,
    name: "Banas Intelligence",
    href: INTEL_URL,
    external: true,
    copy: {
      en: {
        tag: "Free · Live",
        tagline: "Free market intelligence for the arecanut community",
        body: "Forecasts where the arecanut market is heading, using weather, arrivals, news, policy and trade data. Free for farmers, traders and processors.",
        signals: ["Weather", "Water", "Arrivals", "News", "Policy", "Trade", "Trends", "Seasonal"],
        points: [
          "Free to use, live now for arecanut",
          "One forecast from many data sources",
          "More commodities coming, shaped by the community",
        ],
        cta: "Use Banas Intelligence free",
      },
      kn: {
        tag: "ಉಚಿತ · ಲಭ್ಯ",
        tagline: "ಅಡಿಕೆ ಸಮುದಾಯಕ್ಕೆ ಉಚಿತ ಮಾರುಕಟ್ಟೆ ಮಾಹಿತಿ",
        body: "ಹವಾಮಾನ, ಮಾರುಕಟ್ಟೆ ಆವಕ, ಸುದ್ದಿ, ಸರ್ಕಾರದ ನೀತಿ ಮತ್ತು ವ್ಯಾಪಾರದ ಮಾಹಿತಿಯನ್ನು ಬಳಸಿ ಅಡಿಕೆ ಮಾರುಕಟ್ಟೆ ಯಾವ ಕಡೆಗೆ ಸಾಗುತ್ತಿದೆ ಎಂದು ಮುನ್ಸೂಚನೆ ನೀಡುತ್ತದೆ. ರೈತರು, ವ್ಯಾಪಾರಿಗಳು ಮತ್ತು ಸಂಸ್ಕರಣೆದಾರರಿಗೆ ಉಚಿತ.",
        signals: ["ಹವಾಮಾನ", "ನೀರು", "ಆವಕ", "ಸುದ್ದಿ", "ನೀತಿ", "ವ್ಯಾಪಾರ", "ಬೆಲೆಯ ಏರಿಳಿತ", "ಋತುಮಾನ"],
        points: [
          "ಬಳಕೆ ಉಚಿತ, ಈಗ ಅಡಿಕೆಗೆ ಲಭ್ಯ",
          "ಹಲವು ಮಾಹಿತಿ ಮೂಲಗಳಿಂದ ಒಂದೇ ಮುನ್ಸೂಚನೆ",
          "ಸಮುದಾಯದ ಸಲಹೆಯಂತೆ ಮುಂದೆ ಇನ್ನಷ್ಟು ಬೆಳೆಗಳು",
        ],
        cta: "Banas Intelligence ಉಚಿತವಾಗಿ ಬಳಸಿ",
      },
    },
  },
  {
    icon: FaCamera,
    name: "Banas Grading",
    href: "/contact?interest=grading",
    copy: {
      en: {
        tag: "Pilots open",
        tagline: "AI grading for produce lines",
        body: "Grades every item on your line the same way, every shift. Built first for mushroom growers, produce packers and arecanut processors.",
        points: [
          "Every item checked, not a sample",
          "A clear quality record for each lot",
          "Early pilots with a small group of growers and processors",
        ],
        cta: "Join the grading waitlist",
      },
      kn: {
        tag: "ಪೈಲಟ್ ಆರಂಭ",
        tagline: "ಉತ್ಪನ್ನ ಲೈನ್‌ಗಳಿಗೆ AI ಗ್ರೇಡಿಂಗ್",
        body: "ನಿಮ್ಮ ಲೈನ್‌ನಲ್ಲಿ ಬರುವ ಪ್ರತಿಯೊಂದನ್ನೂ ಪ್ರತಿ ಪಾಳಿಯಲ್ಲೂ ಒಂದೇ ರೀತಿ ಗ್ರೇಡ್ ಮಾಡುತ್ತದೆ. ಮೊದಲು ಅಣಬೆ ಬೆಳೆಗಾರರು, ತಾಜಾ ಉತ್ಪನ್ನ ಪ್ಯಾಕರ್‌ಗಳು ಮತ್ತು ಅಡಿಕೆ ಸಂಸ್ಕರಣೆದಾರರಿಗಾಗಿ.",
        points: [
          "ಕೆಲವು ಮಾದರಿಗಳನ್ನಲ್ಲ, ಪ್ರತಿಯೊಂದನ್ನೂ ಪರಿಶೀಲಿಸುತ್ತದೆ",
          "ಪ್ರತಿ ಲಾಟ್‌ಗೂ ಸ್ಪಷ್ಟ ಗುಣಮಟ್ಟದ ದಾಖಲೆ",
          "ಕೆಲವು ಬೆಳೆಗಾರರು ಮತ್ತು ಸಂಸ್ಕರಣೆದಾರರೊಂದಿಗೆ ಆರಂಭಿಕ ಪೈಲಟ್‌ಗಳು",
        ],
        cta: "ಗ್ರೇಡಿಂಗ್ ಕಾಯುವ ಪಟ್ಟಿಗೆ ಸೇರಿ",
      },
    },
  },
  {
    icon: FaCogs,
    name: "Banas Dehusking",
    href: "/contact?interest=dehusking",
    copy: {
      en: {
        tag: "In development",
        tagline: "Clean nuts, without the damage",
        body: "A machine for arecanut processors that takes the husk and fibre off without cracking or scuffing the nut, so more of every batch sells at the top grade.",
        points: [
          "Built with processors in Karnataka",
          "Designed for fresh nuts",
          "Waitlist members see it first",
        ],
        cta: "Join the dehusking waitlist",
      },
      kn: {
        tag: "ತಯಾರಿಯಲ್ಲಿದೆ",
        tagline: "ಕಾಯಿಗೆ ಹಾನಿಯಾಗದೆ ಸ್ವಚ್ಛ ಅಡಿಕೆ",
        body: "ಅಡಿಕೆ ಸಂಸ್ಕರಣೆದಾರರಿಗಾಗಿ ಒಂದು ಯಂತ್ರ. ಕಾಯಿ ಒಡೆಯದಂತೆ, ಗೀರು ಬೀಳದಂತೆ ಸಿಪ್ಪೆ ಮತ್ತು ನಾರನ್ನು ತೆಗೆಯುತ್ತದೆ. ಹೀಗಾಗಿ ಪ್ರತಿ ಬ್ಯಾಚ್‌ನ ಹೆಚ್ಚಿನ ಭಾಗ ಉತ್ತಮ ದರ್ಜೆಯಲ್ಲಿ ಮಾರಾಟವಾಗುತ್ತದೆ.",
        points: [
          "ಕರ್ನಾಟಕದ ಸಂಸ್ಕರಣೆದಾರರೊಂದಿಗೆ ತಯಾರಿಸಲಾಗುತ್ತಿದೆ",
          "ಹಸಿ ಅಡಿಕೆಗಾಗಿ ವಿನ್ಯಾಸ",
          "ಕಾಯುವ ಪಟ್ಟಿಯ ಸದಸ್ಯರು ಮೊದಲು ನೋಡುತ್ತಾರೆ",
        ],
        cta: "ಸುಲಿಯುವ ಯಂತ್ರದ ಕಾಯುವ ಪಟ್ಟಿಗೆ ಸೇರಿ",
      },
    },
  },
  {
    icon: FaRobot,
    name: "Banas Farm Manager",
    href: "/contact?interest=farm-manager",
    copy: {
      en: {
        tag: "Coming later",
        tagline: "A robot that helps run the farm",
        body: "A ground robot that does routine work around the farm and reports what it sees, so growers spend less time on repetitive jobs.",
        points: [
          "Works alongside grading and dehusking",
          "Designed with farming families",
          "Join the watch list for updates",
        ],
        cta: "Join the watch list",
      },
      kn: {
        tag: "ಮುಂದೆ ಬರಲಿದೆ",
        tagline: "ತೋಟ ನಡೆಸಲು ನೆರವಾಗುವ ರೋಬೋಟ್",
        body: "ತೋಟದ ದಿನನಿತ್ಯದ ಕೆಲಸಗಳನ್ನು ಮಾಡಿ, ತಾನು ಕಂಡದ್ದನ್ನು ತಿಳಿಸುವ ರೋಬೋಟ್. ಹೀಗಾಗಿ ಬೆಳೆಗಾರರು ಮತ್ತೆ ಮತ್ತೆ ಮಾಡುವ ಕೆಲಸಗಳಿಗೆ ಕಡಿಮೆ ಸಮಯ ಕೊಡಬಹುದು.",
        points: [
          "ಗ್ರೇಡಿಂಗ್ ಮತ್ತು ಸುಲಿಯುವ ಯಂತ್ರದ ಜೊತೆಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ",
          "ಕೃಷಿ ಕುಟುಂಬಗಳೊಂದಿಗೆ ವಿನ್ಯಾಸ",
          "ಹೊಸ ಸುದ್ದಿಗಾಗಿ ಮಾಹಿತಿ ಪಟ್ಟಿಗೆ ಸೇರಿ",
        ],
        cta: "ಮಾಹಿತಿ ಪಟ್ಟಿಗೆ ಸೇರಿ",
      },
    },
  },
];

const COPY = {
  en: {
    heading: "What we build",
    intro:
      "Banas Intelligence is free and live today. Grading, dehusking and the farm manager robot follow, one at a time. Join the waitlist for the ones you want.",
    sources: "Sources it reads",
  },
  kn: {
    heading: "ನಾವು ತಯಾರಿಸುವುದು",
    intro:
      "Banas Intelligence ಇಂದೇ ಉಚಿತವಾಗಿ ಲಭ್ಯವಿದೆ. ಗ್ರೇಡಿಂಗ್, ಸುಲಿಯುವ ಯಂತ್ರ ಮತ್ತು ತೋಟ ನಿರ್ವಹಣೆಯ ರೋಬೋಟ್ ಒಂದರ ನಂತರ ಒಂದು ಬರಲಿವೆ. ನಿಮಗೆ ಬೇಕಾದುದರ ಕಾಯುವ ಪಟ್ಟಿಗೆ ಸೇರಿ.",
    sources: "ಇದು ಗಮನಿಸುವ ಮಾಹಿತಿ",
  },
};

const Products: React.FC<{ lang?: Lang }> = ({ lang = "en" }) => {
  const t = COPY[lang];

  return (
    <section id="ecosystem" className="section-padding bg-surface">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-body-text mb-4 font-sora font-semibold">
              {t.heading}
            </h2>
            <p className="mt-6 text-xl text-muted-text font-light font-inter max-w-3xl mx-auto leading-relaxed">
              {t.intro}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
            {products.map(({ icon: Icon, name, href, external, copy }) => {
              const { tag, tagline, body, signals, points, cta } = copy[lang];
              return (
                <div key={name} className="card p-8 flex flex-col bg-background">
                  <div className="flex items-center justify-between mb-5">
                    <div className="icon-circle">
                      <Icon size={22} className="icon" />
                    </div>
                    <span className="label-text text-xs px-3 py-1 rounded-full bg-green-light text-green-secondary font-dm-mono">
                      {tag}
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold text-body-text font-sora mb-1">{name}</h3>
                  <p className="text-primary font-medium font-inter mb-4">{tagline}</p>
                  <p className="text-muted-text font-light font-inter leading-relaxed mb-6">{body}</p>

                  {signals && (
                    <div className="mb-6">
                      <p className="label-text text-xs text-muted-text font-dm-mono mb-2">
                        {t.sources}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {signals.map((signal) => (
                          <span
                            key={signal}
                            className="text-xs px-2.5 py-1 rounded-full bg-green-light text-green-secondary font-dm-mono"
                          >
                            {signal}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <ul className="space-y-2 mb-8">
                    {points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 text-muted-text font-light font-inter text-sm leading-relaxed"
                      >
                        <span className="text-green-accent mt-[2px]">&#9679;</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {external ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-flex items-center gap-2 text-primary font-medium font-inter hover:gap-3 transition-all duration-200 w-fit"
                    >
                      {cta}
                      <FaArrowRight size={13} />
                    </a>
                  ) : (
                    <Link
                      href={localPath(lang, href)}
                      className="mt-auto inline-flex items-center gap-2 text-primary font-medium font-inter hover:gap-3 transition-all duration-200 w-fit"
                    >
                      {cta}
                      <FaArrowRight size={13} />
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
