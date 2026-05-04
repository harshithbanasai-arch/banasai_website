"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

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
    title: "What types of datasets do you provide?",
    content: (
      <p>
        We are specialists in providing high-quality <strong>ecocentric agricultural datasets</strong>. This is our primary focus — collecting and curating data from real-world farming environments including soil composition, crop health, machine telemetry, and process telemetry. All our datasets are field-collected by experts, cleaned, validated, and structured specifically for AI and robotics training pipelines.
      </p>
    ),
  },
  {
    title: "Tell us about the KarnatakaPalm-500 project.",
    content: (
      <div className="space-y-4">
        <p>
          KarnatakaPalm-500 is one of our flagship collection projects, consisting of two specialized tracks designed for advanced AI training:
        </p>
        <div>
          <h4 className="font-semibold text-body-text mb-1">Track A: Coconut scene dataset + harvest demonstrations</h4>
          <ul className="list-disc ml-5 space-y-1">
            <li><strong>Target:</strong> 300 episodes</li>
            <li><strong>Type:</strong> Embodied scene capture — RGB-D + overhead RGB</li>
            <li><strong>Details:</strong> Captures coconut bunches on trees across various ripeness stages, occlusion conditions, viewpoints, and lighting conditions.</li>
            <li><strong>Primary buyers:</strong> Robotics foundation model companies, crop insurance companies, and agri-input multinationals.</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-body-text mb-1">Track B: Arecanut harvest demonstrations</h4>
          <ul className="list-disc ml-5 space-y-1">
            <li><strong>Target:</strong> 200 episodes</li>
            <li><strong>Type:</strong> Egocentric manipulation demonstrations — RGB-D + IMU + language</li>
            <li><strong>Details:</strong> Captures expert hand-harvest motions from approach to separation, accompanied by Kannada language narration.</li>
            <li><strong>Primary buyers:</strong> Companies like Physical Intelligence (π), 1X Technologies, and Skild AI training dexterous manipulation models.</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Where is your team based?",
    content: (
      <p>
        We operate across multiple locations to bridge the gap between AI research and the real world. Our field data teams are embedded in farming communities across diverse agricultural regions, bringing deep expertise to every collection project. Our Physical AI and technical team are based in <strong>Dublin and Karnataka (Bengaluru)</strong>.
      </p>
    ),
  },
  {
    title: "What makes your agricultural data different?",
    content: (
      <p>
        Our data is collected by <strong>farming experts with real-world skills</strong> — people who have lived and worked the land for generations. Unlike contracted surveyors, our team understands the nuances of the environment, seasonal variations, and subtle ground truth cues. This expertise ensures that the data we provide reflects real-world complexities that models need to master.
      </p>
    ),
  },
  {
    title: "Are your datasets specific to regional conditions?",
    content: (
      <p>
        Yes, capturing real-world diversity is our core advantage. Our data reflects specific agricultural regions, crop varieties, soil types, and factory floor environments that global or synthetic datasets simply cannot replicate. This is critical for AI systems designed to operate reliably in physical environments.
      </p>
    ),
  },
  {
    title: "Who are your datasets best suited for?",
    content: (
      <p>
        Our datasets are purpose-built for AI research teams, robotics companies building foundation models, agri-tech startups, and any organization training models that need a deep understanding of physical world interactions and dexterous manipulation.
      </p>
    ),
  },
  {
    title: "How do I get access to your datasets?",
    content: (
      <p>
        Contact us at <a href="mailto:contact.banasai@gmail.com" className="text-primary hover:underline">contact.banasai@gmail.com</a>. We will discuss your specific requirements, share details of available datasets like KarnatakaPalm-500, and scope any custom collection work if needed.
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