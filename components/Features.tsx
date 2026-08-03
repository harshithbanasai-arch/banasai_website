import React from "react";
import FeatureCard from "./FeatureCard";
import { FaBrain, FaLeaf, FaIndustry, FaHandshake, FaMicrochip, FaMapMarkerAlt } from "react-icons/fa";

const Features = () => {
  const features = [
    {
      icon: FaBrain,
      title: "Banas Intelligence",
      description:
        "All the different information — weather, water, market arrivals, news, policy, trade flows, price trends, and seasonal cycles — is integrated into one intelligence layer, turning raw data sources into forecasts and decisions.",
    },
    {
      icon: FaLeaf,
      title: "Agricultural Datasets",
      description:
        "Ground-truth data from real farms — soil, crop health, irrigation, and seasonal variation — collected by people who have worked the land, and structured for AI training.",
    },
    {
      icon: FaIndustry,
      title: "Manufacturing Data",
      description:
        "Operational data from production floors — machine states, defect patterns, and process telemetry — built for industrial AI and automation.",
    },
    {
      icon: FaHandshake,
      title: "Custom Data Contracts",
      description:
        "Tell us the crop, region, process, or sensor setup you need. We scope it, collect it in the field, and deliver clean, structured data.",
    },
    {
      icon: FaMicrochip,
      title: "Physical AI Expertise",
      description:
        "Models trained for the physical world, grounded in real ground truth — with physical devices on the roadmap to bring it all into the field.",
    },
    {
      icon: FaMapMarkerAlt,
      title: "Region-Specific Coverage",
      description:
        "Real regional conditions — local crop varieties, soils, seasons, and field-level ground truth — that global or synthetic datasets simply cannot replicate.",
    },
  ];

  return (
    <section id="datasets" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="label-text text-primary mb-3 font-dm-mono">What We Offer</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-body-text mb-4 font-sora font-semibold">
              Intelligence built on ground-truth data
            </h2>
            <p className="mt-6 text-xl text-muted-text font-light font-inter max-w-3xl mx-auto leading-relaxed">
              We turn real-world data into intelligence — Banas Intelligence integrates every signal into one forecasting layer — and we collect, curate, and deliver that ground-truth data for teams building the next generation of AI and robotics.
            </p>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
