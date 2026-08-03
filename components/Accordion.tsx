"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

// For now the live product is the Cloud Run deployment; switch to https://intel.banas-ai.com/ when live.
const INTEL_URL = "https://banas-intel-api-1007077428197.asia-south1.run.app/";

interface AccordionItemProps {
  title: string;
  content: React.ReactNode;
  isOpen: boolean;
  toggleOpen: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content, isOpen, toggleOpen }) => {
  return (
    <div className="mb-4">
      <div className="w-full rounded-card overflow-hidden bg-surface border border-border">
        <button className="w-full text-left p-4 flex justify-between items-center" onClick={toggleOpen}>
          <span className="text-lg font-semibold text-body-text font-sora">{title}</span>
          <span className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
            <FaChevronDown className="text-xl text-muted-text" />
          </span>
        </button>
        <div
          className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
            isOpen ? "max-h-[2000px]" : "max-h-0"
          }`}
        >
          <div className="p-4 pt-0">
            <div className="text-muted-text font-light font-inter">{content}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const defaultAccordionItems = [
  {
    title: "What is Banas Intelligence?",
    content: (
      <div className="space-y-3">
        <p>
          <strong>Banas Intelligence</strong> is an agentic system that forecasts the real world and
          turns it into clear, actionable decisions. It reads many real-world sources at once — not
          a single number — and weighs them together to predict what is coming.
        </p>
        <p>
          The first Banas Intelligence system is built for <strong>agriculture intelligence</strong>:
          live now for arecanut, and expanding to more commodities. Explore it live at{" "}
          <a href={INTEL_URL} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            the live Banas Intelligence app
          </a>
          .
        </p>
      </div>
    ),
  },
  {
    title: "What does “considers many things as input” mean?",
    content: (
      <p>
        Most forecasts lean on one signal. Banas Intelligence blends many at once —{" "}
        <strong>weather, water, market arrivals, news, policy, trade flows, price trends, and
        seasonal cycles</strong>. The agentic system reads all of them, weighs what matters right
        now, and produces one forecast and one decision. That is what makes it intelligence, not
        just a price ticker.
      </p>
    ),
  },
  {
    title: "What is Physical AI at Banas?",
    content: (
      <p>
        Physical AI is the hardware-and-data side of Banas. Today we take on{" "}
        <strong>data contracts</strong> — collecting and delivering ground-truth data from the real
        world. On top of that data, our <strong>physical AI models are being trained now</strong>,
        with <strong>physical devices</strong> on the future roadmap to bring it all into the field.
      </p>
    ),
  },
  {
    title: "What commodities does Banas Intelligence cover?",
    content: (
      <p>
        Banas Intelligence is live now for <strong>arecanut</strong>. Agriculture is our first
        domain, and we are expanding to more commodities over time — each one added as its own
        intelligence, trained on the same multi-source approach.
      </p>
    ),
  },
  {
    title: "What kinds of data do you collect?",
    content: (
      <p>
        We collect and deliver ground-truth data from real farms and production floors — soil, crop
        health, machine and process telemetry, and more. Every dataset is gathered by farming
        experts who have worked the land, then cleaned and structured for AI and robotics.
      </p>
    ),
  },
  {
    title: "Where is your team based?",
    content: (
      <p>
        Our field teams are embedded in farming communities across agricultural regions. Our Physical
        AI and engineering teams are based in <strong>Dublin and Karnataka (Bengaluru)</strong>.
      </p>
    ),
  },
  {
    title: "How do I register my interest or get access?",
    content: (
      <p>
        Use the <a href="/contact" className="text-primary hover:underline">contact form</a> to
        register your interest in Banas Intelligence or a data contract, or email us at{" "}
        <a href="mailto:contact@banas-ai.com" className="text-primary hover:underline">
          contact@banas-ai.com
        </a>
        . We will come back to you.
      </p>
    ),
  },
];

interface AccordionProps {
  items?: { title: string; content: React.ReactNode }[];
}

const Accordion: React.FC<AccordionProps> = ({ items = defaultAccordionItems }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-[90%]">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          toggleOpen={() => toggleItem(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
