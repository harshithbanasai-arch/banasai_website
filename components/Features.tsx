import React from "react";
import FeatureCard from "./FeatureCard";
import { FaUsers, FaCamera, FaCogs, FaRobot, FaSeedling, FaBell } from "react-icons/fa";

const Features = () => {
  const features = [
    {
      icon: FaUsers,
      title: "Free for the Community",
      description:
        "Banas Intelligence is free for farmers, traders and processors. Use it, tell us what to add, and help decide which commodity comes next.",
    },
    {
      icon: FaCamera,
      title: "Grading First",
      description:
        "Our first physical AI product brings consistent, recorded grading to produce lines. Pilots are open to a small group of growers and processors.",
    },
    {
      icon: FaCogs,
      title: "Dehusking Next",
      description:
        "A dehusking machine for arecanut processors, built with processors in Karnataka. Waitlist members see it first.",
    },
    {
      icon: FaRobot,
      title: "A Farm Manager Robot",
      description:
        "Further out: a ground robot for routine farm work. Join the watch list to follow its progress.",
    },
    {
      icon: FaSeedling,
      title: "Built with Farmers",
      description:
        "We are a farming family. Every product is tested on real farms and real lines before it is sold.",
    },
    {
      icon: FaBell,
      title: "Early Access",
      description:
        "Waitlist members hear first, get first access to pilots, and help shape each product before launch.",
    },
  ];

  return (
    <section id="ecosystem" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="label-text text-primary mb-3 font-dm-mono">What We Offer</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-body-text mb-4 font-sora font-semibold">
              The Banas ecosystem
            </h2>
            <p className="mt-6 text-xl text-muted-text font-light font-inter max-w-3xl mx-auto leading-relaxed">
              Free market intelligence today, and physical AI that takes on the hardest manual work on farms and processing lines, one product at a time.
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
