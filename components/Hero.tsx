import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero-bg text-center py-[80px] md:py-[120px] mx-4 sm:mx-8 md:mx-16 lg:mx-24">
      <p className="label-text text-primary mb-4 font-dm-mono tracking-widest uppercase">
        Physical AI Data for Agriculture & Manufacturing
      </p>
      <h1 className="font-sora text-5xl tracking-tight sm:text-6xl md:text-7xl lg:text-8xl text-body-text mb-6 font-bold">
        BANAS AI
      </h1>
      <h2 className="font-sora text-2xl tracking-tight sm:text-3xl md:text-4xl lg:text-5xl text-muted-text mb-8 font-semibold max-w-4xl mx-auto">
        Ground-Truth Data from the Real World
      </h2>
      <p className="text-xl text-muted-text mb-12 font-light font-inter max-w-4xl mx-auto leading-relaxed">
        Built by farming experts with real-world skills and expertise, Physical AI researchers, and professional software engineers — Banas AI delivers datasets that reflect how agriculture and manufacturing actually work.
      </p>
      <div className="flex justify-center space-x-6 flex-wrap gap-4">
        <Link
          href="/#datasets"
          className="btn-primary text-base font-inter"
        >
          Explore Our Datasets
        </Link>
        <Link
          href="/contact"
          className="btn-secondary text-base font-inter"
        >
          Talk to Our Team
        </Link>
      </div>
    </section>
  );
}