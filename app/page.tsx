import Header from "components/Header";
import Hero from "components/Hero";
import Section from "components/Section";
import Footer from "components/Footer";
import Accordion from "components/Accordion";
import Download from "components/Download";
import Products from "components/Products";
import { faqItems } from "components/faq";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <Products />
        <section id="about" className="section-padding bg-background">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-body-text mb-6 font-sora font-semibold">
              Built by people who work the land
            </h2>
            <div className="space-y-4 text-lg text-muted-text font-light font-inter">
              <p className="leading-relaxed">
                Banas AI is a family company. We have grown and traded arecanut in Karnataka for
                generations, so we know how graders decide, what a wrong grade costs, and how little
                good information reaches the farmer.
              </p>
              <p className="leading-relaxed">
                Our software team is in Dublin and our field team is in Karnataka. We test everything
                on real farms and processing lines before anyone pays for it.
              </p>
            </div>
          </div>
        </section>
        <Section
          leftHalf={<Accordion />}
          rightHalf={
            <div className="flex flex-col justify-end">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-body-text mb-4 font-sora font-semibold">
                Common questions
              </h2>
              <p className="text-xl font-light text-muted-text font-inter">
                Answers about Banas Intelligence, our physical AI products, the waitlist and our team.
              </p>
            </div>
          }
        />
        <Download />
      </main>
      <Footer />
    </div>
  );
}