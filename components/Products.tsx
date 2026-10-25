import React from "react";
import Link from "next/link";
import { FaBrain, FaCamera, FaCogs, FaRobot, FaArrowRight } from "react-icons/fa";

// For now the live product is the Cloud Run deployment; switch to https://intel.banas-ai.com/ when live.
const INTEL_URL = "https://banas-intel-api-1007077428197.asia-south1.run.app/";

type Product = {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  tag: string;
  name: string;
  tagline: string;
  body: string;
  signals?: string[];
  points: string[];
  href: string;
  external?: boolean;
  cta: string;
};

const products: Product[] = [
  {
    icon: FaBrain,
    tag: "Free · Live",
    name: "Banas Intelligence",
    tagline: "Free market intelligence for the arecanut community",
    body: "Forecasts where the arecanut market is heading, using weather, arrivals, news, policy and trade data. Free for farmers, traders and processors.",
    signals: [
      "Weather",
      "Water",
      "Arrivals",
      "News",
      "Policy",
      "Trade",
      "Trends",
      "Seasonal",
    ],
    points: [
      "Free to use, live now for arecanut",
      "One forecast from many data sources",
      "More commodities coming, shaped by the community",
    ],
    href: INTEL_URL,
    external: true,
    cta: "Use Banas Intelligence free",
  },
  {
    icon: FaCamera,
    tag: "Pilots open",
    name: "Banas Grading",
    tagline: "AI grading for produce lines",
    body: "Grades every item on your line the same way, every shift. Built first for mushroom growers, produce packers and arecanut processors.",
    points: [
      "Every item checked, not a sample",
      "A clear quality record for each lot",
      "Early pilots with a small group of growers and processors",
    ],
    href: "/contact?interest=grading",
    cta: "Join the grading waitlist",
  },
  {
    icon: FaCogs,
    tag: "In development",
    name: "Banas Dehusking",
    tagline: "Clean nuts, without the damage",
    body: "A machine for arecanut processors that takes the husk and fibre off without cracking or scuffing the nut, so more of every batch sells at the top grade.",
    points: [
      "Built with processors in Karnataka",
      "Designed for fresh nuts",
      "Waitlist members see it first",
    ],
    href: "/contact?interest=dehusking",
    cta: "Join the dehusking waitlist",
  },
  {
    icon: FaRobot,
    tag: "Coming later",
    name: "Banas Farm Manager",
    tagline: "A robot that helps run the farm",
    body: "A ground robot that does routine work around the farm and reports what it sees, so growers spend less time on repetitive jobs.",
    points: [
      "Works alongside grading and dehusking",
      "Designed with farming families",
      "Join the watch list for updates",
    ],
    href: "/contact?interest=farm-manager",
    cta: "Join the watch list",
  },
];

const Products: React.FC = () => {
  return (
    <section id="ecosystem" className="section-padding bg-surface">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-body-text mb-4 font-sora font-semibold">
              What we build
            </h2>
            <p className="mt-6 text-xl text-muted-text font-light font-inter max-w-3xl mx-auto leading-relaxed">
              Banas Intelligence is free and live today. Grading, dehusking and the farm manager
              robot follow, one at a time. Join the waitlist for the ones you want.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
            {products.map(({ icon: Icon, tag, name, tagline, body, signals, points, href, external, cta }) => (
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
                      Sources it reads
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
                    href={href}
                    className="mt-auto inline-flex items-center gap-2 text-primary font-medium font-inter hover:gap-3 transition-all duration-200 w-fit"
                  >
                    {cta}
                    <FaArrowRight size={13} />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
