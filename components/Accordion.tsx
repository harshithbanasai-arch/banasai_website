"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { faqItems } from "components/faq";

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

const defaultAccordionItems = faqItems.map(({ question, answer }) => ({
  title: question,
  content: <p>{answer}</p>,
}));

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
