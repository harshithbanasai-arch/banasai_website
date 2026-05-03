import Header from "components/Header";
import Image from "next/image";
import Hero from "components/Hero";
import Features from "components/Features";
import Section from "components/Section";
import Footer from "components/Footer";
import Customers from "components/Customers";
import Accordion from "components/Accordion";
import Reviews from "components/Reviews";
import Download from "components/Download";
import About from "components/About";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <Section
          leftHalf={
            <>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-body-text mb-4 font-sora font-semibold">
                The expertise gap most AI data companies miss
              </h2>
              <div className="space-y-4 text-lg text-muted-text font-light font-inter">
                <p className="leading-relaxed">
                  Most data vendors treat agriculture and manufacturing as categories on a form. We treat them as domains we have lived in for generations.
                </p>
                <p className="leading-relaxed">
                  Our agricultural roots run deep — our team consists of farming experts with deep real-world skills and expertise across diverse agricultural regions. We know which soil conditions matter by season, how crop stress looks in the field before it shows up in a sensor reading, and how farming practice varies across regions in ways that dramatically affect what an AI model needs to learn.
                </p>
                <p className="leading-relaxed">
                  Our Physical AI team in Dublin brings the technical rigour — understanding not just how to collect data, but how models consume it, what failure modes look like, and how to structure datasets that generalise well to real-world deployment. Our professional software engineers build the pipelines and tooling that make everything production-ready. Together, we bridge the gap between the field and the model.
                </p>
              </div>
            </>
          }
          rightHalf={
            <div className="w-full h-full flex items-center justify-center">
              <div className="relative w-full aspect-square md:w-[450px] overflow-hidden rounded-card shadow-lg border border-border">
                <Image 
                  src="/products/pi_image_1.png" 
                  alt="Physical AI and drone technology in agricultural fields"
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
                Find answers to frequently asked questions about our datasets, services, and team.
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