import React from "react";
import Link from "next/link";
import { FaBrain, FaMicrochip, FaArrowRight } from "react-icons/fa";

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
    tag: "Live",
    name: "Banas Intelligence",
    tagline: "Intelligence that considers many things as input",
    body: "An agentic system that reads the whole real-world picture — not one number — and forecasts what is coming, then turns it into a clear decision. The first system is built for agriculture intelligence: live now for arecanut, and expanding to more commodities.",
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
      "Prediction & forecasting powered by an agentic system",
      "Many real-world sources blended into one forecast and one decision",
      "First system live for agriculture — arecanut now, more commodities coming",
    ],
    href: INTEL_URL,
    external: true,
    cta: "Explore Banas Intelligence",
  },
  {
    icon: FaMicrochip,
    tag: "Core",
    name: "Physical AI",
    tagline: "Ground-truth data, trained models, and the devices to come",
    body: "We take on data contracts, collect ground truth from the real world, and deliver it. On top of that data, our physical AI models are being trained today — with physical devices in the future pipeline to bring it all into the field.",
    points: [
      "Data contracts — taken on, collected, and delivered",
      "Physical AI models being trained now",
      "Physical devices on the future roadmap",
    ],
    href: "/#datasets",
    cta: "Explore our data",
  },
];

const Products: React.FC = () => {
  return (
    <section id="products" className="section-padding bg-surface">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="label-text text-primary mb-3 font-dm-mono">What We Build</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-body-text mb-4 font-sora font-semibold">
              Banas Intelligence and Physical AI
            </h2>
            <p className="mt-6 text-xl text-muted-text font-light font-inter max-w-3xl mx-auto leading-relaxed">
              One company, two pillars. Banas Intelligence forecasts the real world with an agentic
              system. Physical AI grounds it in ground-truth data, models being trained today, and
              the devices of tomorrow.
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
