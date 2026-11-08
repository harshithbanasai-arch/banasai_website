import Header from "components/Header";
import Hero from "components/Hero";
import Section from "components/Section";
import Footer from "components/Footer";
import Accordion from "components/Accordion";
import Download from "components/Download";
import Products from "components/Products";
import { faqByLang } from "components/faq";
import type { Lang } from "components/i18n";

const COPY = {
  en: {
    aboutHeading: "Built by people who work the land",
    about: [
      "Banas AI is an end-to-end agri business: software and physical AI working together. Banas Intelligence helps growers and traders decide when to sell, and our machines take on the hand work on farms and processing lines. Our team comes from arecanut farming and trading in Karnataka, so we know how graders decide, what a wrong grade costs, and how little good information reaches the farmer.",
      "Our software team is in Dublin and our field team is in Karnataka. We test everything on real farms and processing lines before anyone pays for it.",
    ],
    faqHeading: "Common questions",
    faqIntro: "Answers about Banas Intelligence, our physical AI products, the waitlist and our team.",
  },
  kn: {
    aboutHeading: "ಮಣ್ಣಿನಲ್ಲಿ ದುಡಿಯುವವರೇ ಕಟ್ಟಿದ ಸಂಸ್ಥೆ",
    about: [
      "Banas AI ಸಾಫ್ಟ್‌ವೇರ್ ಮತ್ತು Physical AI ಎರಡನ್ನೂ ಒಟ್ಟಿಗೆ ತರುವ ಸಂಪೂರ್ಣ ಕೃಷಿ ಉದ್ಯಮ. Banas Intelligence ಬೆಳೆಗಾರರು ಮತ್ತು ವ್ಯಾಪಾರಿಗಳಿಗೆ ಯಾವಾಗ ಮಾರಬೇಕು ಎಂದು ನಿರ್ಧರಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ, ನಮ್ಮ ಯಂತ್ರಗಳು ತೋಟ ಮತ್ತು ಸಂಸ್ಕರಣಾ ಘಟಕಗಳ ಕೈಕೆಲಸವನ್ನು ಹಗುರಗೊಳಿಸುತ್ತವೆ. ನಮ್ಮ ತಂಡ ಕರ್ನಾಟಕದ ಅಡಿಕೆ ಕೃಷಿ ಮತ್ತು ವ್ಯಾಪಾರದಿಂದ ಬಂದಿದೆ. ಹಾಗಾಗಿ ಗ್ರೇಡ್ ಹೇಗೆ ನಿರ್ಧಾರವಾಗುತ್ತದೆ, ತಪ್ಪು ಗ್ರೇಡ್‌ನಿಂದ ಎಷ್ಟು ನಷ್ಟವಾಗುತ್ತದೆ, ಮತ್ತು ಒಳ್ಳೆಯ ಮಾಹಿತಿ ರೈತನಿಗೆ ಎಷ್ಟು ಕಡಿಮೆ ತಲುಪುತ್ತದೆ ಎಂಬುದು ನಮಗೆ ಗೊತ್ತು.",
      "ನಮ್ಮ ಸಾಫ್ಟ್‌ವೇರ್ ತಂಡ ಡಬ್ಲಿನ್‌ನಲ್ಲಿದೆ, ಕ್ಷೇತ್ರ ತಂಡ ಕರ್ನಾಟಕದಲ್ಲಿದೆ. ಯಾರಾದರೂ ಹಣ ಕೊಡುವ ಮೊದಲೇ ನಾವು ಎಲ್ಲವನ್ನೂ ನಿಜವಾದ ತೋಟಗಳು ಮತ್ತು ಸಂಸ್ಕರಣಾ ಘಟಕಗಳಲ್ಲಿ ಪರೀಕ್ಷಿಸುತ್ತೇವೆ.",
    ],
    faqHeading: "ಸಾಮಾನ್ಯ ಪ್ರಶ್ನೆಗಳು",
    faqIntro: "Banas Intelligence, ನಮ್ಮ ಯಂತ್ರಗಳು, ಕಾಯುವ ಪಟ್ಟಿ ಮತ್ತು ನಮ್ಮ ತಂಡದ ಬಗ್ಗೆ ಉತ್ತರಗಳು.",
  },
};

interface HomePageProps {
  lang: Lang;
  // The same page in the other language, for the header switch.
  switchHref: string;
}

// The homepage, shared by / (English) and /kn (Kannada). To add, remove or
// reorder a section, edit the stack below.
export default function HomePage({ lang, switchHref }: HomePageProps) {
  const t = COPY[lang];
  const faq = faqByLang[lang];
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: lang,
    mainEntity: faq.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };

  return (
    <div lang={lang} className="flex flex-col min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header lang={lang} switchHref={switchHref} />
      <main>
        <Hero lang={lang} />
        <Products lang={lang} />
        <section id="about" className="section-padding bg-background">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-body-text mb-6 font-sora font-semibold">
              {t.aboutHeading}
            </h2>
            <div className="space-y-4 text-lg text-muted-text font-light font-inter">
              {t.about.map((paragraph) => (
                <p key={paragraph} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>
        <Section
          leftHalf={
            <Accordion
              items={faq.map(({ question, answer }) => ({ title: question, content: <p>{answer}</p> }))}
            />
          }
          rightHalf={
            <div className="flex flex-col justify-end">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-body-text mb-4 font-sora font-semibold">
                {t.faqHeading}
              </h2>
              <p className="text-xl font-light text-muted-text font-inter">
                {t.faqIntro}
              </p>
            </div>
          }
        />
        <Download lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}