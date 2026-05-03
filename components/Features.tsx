import React from "react";
import FeatureCard from "./FeatureCard";
import { FaLeaf, FaIndustry, FaFlask, FaHandshake, FaMicrochip, FaMapMarkerAlt } from "react-icons/fa";

const Features = () => {
  const features = [
    {
      icon: FaLeaf,
      title: "Ecocentric & Agricultural Datasets",
      description:
        "Structured datasets collected from real farming environments — soil composition, crop health, pH levels, irrigation patterns, and seasonal variation. Cleaned, labelled, and ready for model training.",
    },
    {
      icon: FaIndustry,
      title: "Manufacturing Process Data",
      description:
        "Operational data from production floors — machine states, defect patterns, process telemetry, and quality control metrics. Designed for industrial AI and automation training pipelines.",
    },
    {
      icon: FaFlask,
      title: "pH & Soil AI Detection",
      description:
        "We built a mobile AI tool for instant pH detection in soil and water, currently used in agricultural settings. Our datasets include real sensor readings collected using this tool — ground-truth data, not estimates.",
    },
    {
      icon: FaHandshake,
      title: "Custom Data Contracting",
      description:
        "Need data collected for a specific crop, region, process type, or sensor configuration? We take on custom contracting projects — scoping, collecting in the field, and delivering clean structured output.",
    },
    {
      icon: FaMicrochip,
      title: "Physical AI Expertise",
      description:
        "Our Dublin-based AI team understands how physical systems behave and what models need to learn from real-world data. Every dataset we produce is designed with the training pipeline in mind, not just data storage.",
    },
    {
      icon: FaMapMarkerAlt,
      title: "Region-Specific Coverage",
      description:
        "Our datasets reflect real-world conditions — regional crop varieties, local manufacturing setups, seasonal variation, and field-level ground truth that global or synthetic datasets simply cannot replicate.",
    },
  ];

  return (
    <section id="datasets" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="label-text text-primary mb-3 font-dm-mono">What We Offer</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-body-text mb-4 font-sora font-semibold">
              Data and AI expertise, purpose-built for the real world
            </h2>
            <p className="mt-6 text-xl text-muted-text font-light font-inter max-w-3xl mx-auto leading-relaxed">
              We collect, curate, and deliver physical world datasets — and build AI tools — for teams training the next generation of AI and robotics systems.
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