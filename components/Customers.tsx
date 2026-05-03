import React from "react";
import Link from "next/link";
import { FaSeedling, FaBrain, FaCogs } from "react-icons/fa";

const benefits = [
  {
    Icon: FaSeedling,
    title: "Generational Agricultural Roots",
    body: "Our field data is collected and validated by farming families with deep, multi-generational experience across Indian agricultural regions — not by contracted surveyors.",
  },
  {
    Icon: FaBrain,
    title: "Physical AI Research Expertise",
    body: "Our Dublin-based AI researchers ensure every dataset is structured for how physical AI models actually learn — not just how data is typically stored or sold.",
  },
  {
    Icon: FaCogs,
    title: "End-to-End Engineering",
    body: "Professional software engineers build and maintain our data pipelines and delivery systems — so you receive clean, structured, production-ready datasets every time.",
  },
];

const Customers: React.FC = () => {
  return (
    <div className="w-full py-[80px] bg-primary">
      <div className="w-full px-4 md:px-8 lg:px-16">
        <div className="flex flex-col items-center justify-center max-w-7xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white font-sora">
            Trusted by AI and robotics teams building real-world systems
          </h2>
          <p className="text-xl text-gray-300 font-light mb-8 max-w-2xl font-inter">
            Reach out to discuss your dataset requirements, custom contracting, or access to existing datasets.
          </p>
          <Link
            href="/contact"
            className="bg-white text-primary px-6 py-3 rounded-button font-medium hover:bg-gray-100 transition-colors duration-200 mb-12 font-inter"
          >
            Contact Us
          </Link>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {benefits.map(({ Icon, title, body }, index) => (
              <div key={index} className="flex flex-col items-center text-center p-4">
                <div className="w-12 h-12 rounded-full bg-green-accent/20 flex items-center justify-center mb-4">
                  <Icon className="text-2xl text-green-accent" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 font-sora">{title}</h3>
                <p className="text-sm text-gray-300 font-light font-inter">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;