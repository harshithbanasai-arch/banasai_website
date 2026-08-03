import Link from "next/link";

// For now the live product is the Cloud Run deployment; switch to https://intel.banas-ai.com/ when live.
const INTEL_URL = "https://banas-intel-api-1007077428197.asia-south1.run.app/";

export default function Hero() {
  return (
    <section className="hero-bg text-center py-[80px] md:py-[120px] mx-4 sm:mx-8 md:mx-16 lg:mx-24">
      <a
        href={INTEL_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full bg-green-light border border-green-accent/30 hover:border-green-accent transition-colors"
      >
        <span className="label-text text-xs text-green-secondary font-dm-mono">Now Live</span>
        <span className="text-sm text-body-text font-inter">
          Banas Intelligence is live — explore it
        </span>
      </a>
      <p className="label-text text-primary mb-4 font-dm-mono tracking-widest uppercase">
        Banas Intelligence &amp; Physical AI
      </p>
      <h1 className="font-sora text-5xl tracking-tight sm:text-6xl md:text-7xl lg:text-8xl text-body-text mb-6 font-bold">
        BANAS AI
      </h1>
      <h2 className="font-sora text-2xl tracking-tight sm:text-3xl md:text-4xl lg:text-5xl text-muted-text mb-8 font-semibold max-w-4xl mx-auto">
        Real-world intelligence that predicts, forecasts, and acts
      </h2>
      <p className="text-xl text-muted-text mb-12 font-light font-inter max-w-4xl mx-auto leading-relaxed">
        Banas AI builds two things.{" "}
        <strong className="text-body-text font-medium">Banas Intelligence</strong> — an agentic
        system that reads many real-world sources at once and forecasts what is coming, starting
        with agriculture. And <strong className="text-body-text font-medium">Physical AI</strong> —
        ground-truth data, trained models, and the physical devices that bring it all together.
      </p>
      <div className="flex justify-center space-x-6 flex-wrap gap-4">
        <a
          href={INTEL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-base font-inter"
        >
          Explore Banas Intelligence
        </a>
        <Link href="/contact" className="btn-secondary text-base font-inter">
          Register Your Interest
        </Link>
      </div>
    </section>
  );
}
