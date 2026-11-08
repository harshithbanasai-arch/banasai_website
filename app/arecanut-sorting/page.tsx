import type { Metadata } from "next";
import Link from "next/link";
import Header from "components/Header";
import Footer from "components/Footer";
import { sortingFaq } from "components/sortingFaq";

const SITE_URL = "https://www.banas-ai.com";
const PATH = "/arecanut-sorting";
const INTEL_URL = "https://banas-intel-api-1007077428197.asia-south1.run.app/";

export const metadata: Metadata = {
  title: { absolute: "Arecanut sorting after dehusking | Banas Grading" },
  description:
    "Banas Grading helps arecanut processors sort fresh nuts after dehusking, so each grade is cleaner and buyers trust the lot. Join the pilot waitlist.",
  alternates: { canonical: PATH },
  openGraph: {
    title: "Arecanut sorting after dehusking | Banas Grading",
    description:
      "Sort fresh arecanut straight after dehusking, with fewer hands and more even grades. Pilots open for processing units.",
    url: PATH,
  },
};

const benefits = [
  { title: "Fewer hands on sorting.", text: "Your team spends time on the work that needs people." },
  { title: "Even grades.", text: "The same standard from the first bag of the day to the last." },
  { title: "Better lots for buyers.", text: "Cleaner grades are easier to sell and easier to trust." },
  { title: "Keeps up in peak season.", text: "Built for the harvest rush, when labour is shortest." },
];

export default function ArecanutSortingPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Arecanut sorting after dehusking",
      url: `${SITE_URL}${PATH}`,
      inLanguage: "en",
      about: "Sorting fresh arecanut into grades after dehusking",
      publisher: { "@type": "Organization", name: "Banas AI", url: SITE_URL },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: sortingFaq.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
  ];

  return (
    <div lang="en" className="flex flex-col min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header switchHref="/kn" />
      <main>
        <section className="hero-bg section-padding">
          <div className="container mx-auto px-4 max-w-3xl">
            <p className="label-text mb-4">Banas Grading</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-body-text font-sora font-semibold mb-6">
              Arecanut sorting after dehusking
            </h1>
            <p className="text-lg text-muted-text font-light font-inter leading-relaxed mb-8">
              Banas Grading sorts fresh arecanut straight after dehusking, so processors send each lot to drying
              already separated by grade. It takes the slowest, most tiring hand job off your line and gives buyers
              a more even product.
            </p>
            <Link href="/contact?interest=grading" className="btn-primary">
              Join the pilot waitlist
            </Link>
          </div>
        </section>

        <section className="section-padding bg-surface">
          <div className="container mx-auto px-4 max-w-3xl space-y-10 font-inter">
            <div>
              <h2 className="text-2xl sm:text-3xl text-body-text font-sora font-semibold mb-4">
                Why sort right after dehusking
              </h2>
              <p className="text-muted-text font-light leading-relaxed mb-4">
                Most processors still sort by hand, often more than once: after dehusking, after drying and again
                before sale. Every pass takes labour that is hard to find in the harvest months, and two people
                rarely sort the same way. Mixed lots get the lower price.
              </p>
              <p className="text-muted-text font-light leading-relaxed">
                Sorting at the start means good nuts are dried and stored with good nuts, and damaged or off-grade
                nuts are kept apart from day one.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl text-body-text font-sora font-semibold mb-4">
                What it does for your unit
              </h2>
              <ul className="space-y-3">
                {benefits.map(({ title, text }) => (
                  <li key={title} className="flex gap-3 text-muted-text font-light leading-relaxed">
                    <span className="text-green-accent mt-[2px]">&#9679;</span>
                    <span>
                      <strong className="font-semibold text-body-text">{title}</strong> {text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl text-body-text font-sora font-semibold mb-4">Who it is for</h2>
              <p className="text-muted-text font-light leading-relaxed">
                Arecanut processing units and traders who dehusk fresh areca, starting in Karnataka. We are running
                the first pilots with a small number of units. If you run a dehusking line and want to be part of a
                pilot, join the waitlist and we will call you.
              </p>
            </div>

            <div className="card p-8 text-center">
              <h2 className="text-xl text-body-text font-sora font-semibold mb-2">Demo video</h2>
              <p className="text-muted-text font-light">Demo video coming soon.</p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl text-body-text font-sora font-semibold mb-4">
                Part of the Banas ecosystem
              </h2>
              <p className="text-muted-text font-light leading-relaxed mb-6">
                Banas Grading sits alongside Banas Dehusking (in development) and Banas Intelligence, our free
                arecanut market forecast for the community.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact?interest=grading" className="btn-primary">
                  Join the pilot waitlist
                </Link>
                <a href={INTEL_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                  Use Banas Intelligence free
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container mx-auto px-4 max-w-3xl font-inter">
            <h2 className="text-2xl sm:text-3xl text-body-text font-sora font-semibold mb-6">
              Questions processors ask
            </h2>
            <dl className="space-y-6">
              {sortingFaq.map(({ question, answer }) => (
                <div key={question}>
                  <dt className="font-semibold text-body-text mb-1">{question}</dt>
                  <dd className="text-muted-text font-light leading-relaxed">{answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
