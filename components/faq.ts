import type { Lang } from "./i18n";

type FaqItem = { question: string; answer: string };

// Plain-text FAQ shared by the visible accordion and the FAQPage JSON-LD on the
// homepage, so the two never drift apart. faqKannada must follow the same order.
export const faqItems: FaqItem[] = [
  {
    question: "What is Banas Intelligence?",
    answer:
      "Banas Intelligence is a free forecasting tool for the arecanut community. It reads weather, water, market arrivals, news, policy, trade flows, price trends and seasonal cycles together and turns them into one forecast. It is live now and free to use.",
  },
  {
    question: "Is Banas Intelligence really free?",
    answer:
      "Yes. It is free for farmers, traders and processors. We want to build a community around it and let that community decide which commodities we add next.",
  },
  {
    question: "How do I join the Banas community?",
    answer:
      "Join our free WhatsApp community for arecanut growers. Members get market updates, crop care tips and news on government schemes, and can ask questions and help each other.",
  },
  {
    question: "What physical AI products are you building?",
    answer:
      "An ecosystem of three products: Banas Grading for produce lines (pilots open now), Banas Dehusking for arecanut processors (in development), and Banas Farm Manager, a ground robot for routine farm work (coming later).",
  },
  {
    question: "Who is Banas Grading for?",
    answer:
      "Mushroom growers and fresh produce packers in Ireland and the UK, and arecanut processors and traders in Karnataka, India. We are starting with a small group of pilots.",
  },
  {
    question: "How do I join a waitlist?",
    answer:
      "Use the contact form and choose the product you are interested in. Waitlist members hear first, get first access to pilots and help shape each product before launch.",
  },
  {
    question: "Where is your team based?",
    answer:
      "Our AI and software team is in Dublin, Ireland. Our field and hardware team is in Karnataka (Bengaluru), India.",
  },
];

const faqKannada: FaqItem[] = [
  {
    question: "Banas Intelligence ಎಂದರೇನು?",
    answer:
      "Banas Intelligence ಅಡಿಕೆ ಸಮುದಾಯಕ್ಕಾಗಿ ಇರುವ ಉಚಿತ ಮುನ್ಸೂಚನೆ ಸೇವೆ. ಹವಾಮಾನ, ನೀರು, ಮಾರುಕಟ್ಟೆ ಆವಕ, ಸುದ್ದಿ, ಸರ್ಕಾರದ ನೀತಿ, ವ್ಯಾಪಾರ, ಬೆಲೆಯ ಏರಿಳಿತ ಮತ್ತು ಋತುಮಾನವನ್ನು ಒಟ್ಟಿಗೆ ಗಮನಿಸಿ ಒಂದೇ ಮುನ್ಸೂಚನೆ ನೀಡುತ್ತದೆ. ಇದು ಈಗ ಲಭ್ಯವಿದೆ ಮತ್ತು ಬಳಕೆ ಉಚಿತ.",
  },
  {
    question: "Banas Intelligence ನಿಜವಾಗಿಯೂ ಉಚಿತವೇ?",
    answer:
      "ಹೌದು. ರೈತರು, ವ್ಯಾಪಾರಿಗಳು ಮತ್ತು ಸಂಸ್ಕರಣೆದಾರರಿಗೆ ಇದು ಉಚಿತ. ಇದರ ಸುತ್ತ ಒಂದು ಸಮುದಾಯವನ್ನು ಕಟ್ಟುವುದು ನಮ್ಮ ಉದ್ದೇಶ. ಮುಂದೆ ಯಾವ ಬೆಳೆಗಳನ್ನು ಸೇರಿಸಬೇಕು ಎಂಬುದನ್ನು ಆ ಸಮುದಾಯವೇ ನಿರ್ಧರಿಸುತ್ತದೆ.",
  },
  {
    question: "Banas ಸಮುದಾಯಕ್ಕೆ ಹೇಗೆ ಸೇರುವುದು?",
    answer:
      "ಅಡಿಕೆ ಬೆಳೆಗಾರರ ನಮ್ಮ ಉಚಿತ WhatsApp ಸಮುದಾಯಕ್ಕೆ ಸೇರಿ. ಸದಸ್ಯರಿಗೆ ಮಾರುಕಟ್ಟೆ ಮಾಹಿತಿ, ಬೆಳೆ ಆರೈಕೆಯ ಸಲಹೆಗಳು ಮತ್ತು ಸರ್ಕಾರಿ ಯೋಜನೆಗಳ ಸುದ್ದಿ ಸಿಗುತ್ತದೆ. ಅಲ್ಲಿ ಪ್ರಶ್ನೆ ಕೇಳಬಹುದು ಮತ್ತು ಒಬ್ಬರಿಗೊಬ್ಬರು ಸಹಾಯ ಮಾಡಬಹುದು.",
  },
  {
    question: "ನೀವು ಯಾವ ಯಂತ್ರಗಳನ್ನು ತಯಾರಿಸುತ್ತಿದ್ದೀರಿ?",
    answer:
      "ಮೂರು ಉತ್ಪನ್ನಗಳು: ಉತ್ಪನ್ನ ಲೈನ್‌ಗಳಿಗೆ Banas Grading (ಪೈಲಟ್‌ಗಳು ಆರಂಭವಾಗಿವೆ), ಅಡಿಕೆ ಸಂಸ್ಕರಣೆದಾರರಿಗೆ Banas Dehusking (ತಯಾರಿಯಲ್ಲಿದೆ), ಮತ್ತು ತೋಟದ ದಿನನಿತ್ಯದ ಕೆಲಸಕ್ಕೆ Banas Farm Manager ರೋಬೋಟ್ (ಮುಂದೆ ಬರಲಿದೆ).",
  },
  {
    question: "Banas Grading ಯಾರಿಗಾಗಿ?",
    answer:
      "ಐರ್ಲೆಂಡ್ ಮತ್ತು ಯುಕೆಯ ಅಣಬೆ ಬೆಳೆಗಾರರು ಮತ್ತು ತಾಜಾ ಉತ್ಪನ್ನ ಪ್ಯಾಕರ್‌ಗಳು, ಹಾಗೂ ಕರ್ನಾಟಕದ ಅಡಿಕೆ ಸಂಸ್ಕರಣೆದಾರರು ಮತ್ತು ವ್ಯಾಪಾರಿಗಳಿಗಾಗಿ. ಕೆಲವು ಆಯ್ದ ಪೈಲಟ್‌ಗಳೊಂದಿಗೆ ಆರಂಭಿಸುತ್ತಿದ್ದೇವೆ.",
  },
  {
    question: "ಕಾಯುವ ಪಟ್ಟಿಗೆ ಹೇಗೆ ಸೇರುವುದು?",
    answer:
      "ಸಂಪರ್ಕ ಫಾರ್ಮ್‌ನಲ್ಲಿ ನಿಮಗೆ ಆಸಕ್ತಿ ಇರುವ ಉತ್ಪನ್ನವನ್ನು ಆರಿಸಿ. ಕಾಯುವ ಪಟ್ಟಿಯ ಸದಸ್ಯರಿಗೆ ಸುದ್ದಿ ಮೊದಲು ತಿಳಿಯುತ್ತದೆ, ಪೈಲಟ್‌ಗಳಲ್ಲಿ ಮೊದಲ ಅವಕಾಶ ಸಿಗುತ್ತದೆ, ಮತ್ತು ಬಿಡುಗಡೆಗೆ ಮೊದಲು ಪ್ರತಿ ಉತ್ಪನ್ನವನ್ನು ರೂಪಿಸುವಲ್ಲಿ ಅವರೂ ಭಾಗಿಯಾಗುತ್ತಾರೆ.",
  },
  {
    question: "ನಿಮ್ಮ ತಂಡ ಎಲ್ಲಿದೆ?",
    answer:
      "ನಮ್ಮ AI ಮತ್ತು ಸಾಫ್ಟ್‌ವೇರ್ ತಂಡ ಐರ್ಲೆಂಡ್‌ನ ಡಬ್ಲಿನ್‌ನಲ್ಲಿದೆ. ಕ್ಷೇತ್ರ ಮತ್ತು ಹಾರ್ಡ್‌ವೇರ್ ತಂಡ ಕರ್ನಾಟಕದಲ್ಲಿ (ಬೆಂಗಳೂರು) ಇದೆ.",
  },
];

export const faqByLang: Record<Lang, FaqItem[]> = { en: faqItems, kn: faqKannada };
