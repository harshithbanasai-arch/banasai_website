import Header from "components/Header";
import Image from "next/image";
import Hero from "components/Hero";
import Features from "components/Features";
import Section from "components/Section";
import Footer from "components/Footer";
import Customers from "components/Customers";
import Accordion from "components/Accordion";
import Download from "components/Download";
import About from "components/About";
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
        <Features />
        <Section
          leftHalf={
            <>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-body-text mb-4 font-sora font-semibold">
                Built by people who work the land
              </h2>
              <div className="space-y-4 text-lg text-muted-text font-light font-inter">
                <p className="leading-relaxed">
                  Farm and processing machines usually come from engineers who have never worked a harvest. Our family has grown and sold produce for generations, so we start from the real job and the real cost.
                </p>
                <p className="leading-relaxed">
                  Our team in Dublin builds the AI and software. Our team in Karnataka builds and tests on real farms and lines. Nothing ships until it works there.
                </p>
              </div>
            </>
          }
          rightHalf={
            <div className="w-full h-full flex items-center justify-center">
              <div className="relative w-full aspect-square md:w-[450px] overflow-hidden rounded-card shadow-lg border border-border">
                <Image 
                  src="/products/pi_image_1.png" 
                  alt="Banas AI field technology"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          }
        />
        <Customers />
        <About />
        <Section
          leftHalf={<Accordion />}
          rightHalf={
            <div className="flex flex-col justify-end">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-body-text mb-4 font-sora font-semibold">
                Common Questions
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