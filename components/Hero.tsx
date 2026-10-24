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
          Banas Intelligence is live and free
        </span>
      </a>
      <p className="label-text text-primary mb-4 font-dm-mono tracking-widest uppercase">
        Banas Intelligence &amp; Physical AI
      </p>
      <h1 className="font-sora text-5xl tracking-tight sm:text-6xl md:text-7xl lg:text-8xl text-body-text mb-6 font-bold">
        BANAS AI
      </h1>
      <h2 className="font-sora text-2xl tracking-tight sm:text-3xl md:text-4xl lg:text-5xl text-muted-text mb-8 font-semibold max-w-4xl mx-auto">
        Free market intelligence, and physical AI for the farm and the line
      </h2>
      <p className="text-xl text-muted-text mb-12 font-light font-inter max-w-4xl mx-auto leading-relaxed">
        <strong className="text-body-text font-medium">Banas Intelligence</strong> forecasts the
        arecanut market from many real-world sources, free for the whole community. Our{" "}
        <strong className="text-body-text font-medium">physical AI</strong> ecosystem starts with
        grading, then dehusking, then a farm manager robot.
      </p>
      <div className="flex justify-center space-x-6 flex-wrap gap-4">
        <a
          href={INTEL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-base font-inter"
        >
          Use Banas Intelligence free
        </a>
        <Link href="/contact" className="btn-secondary text-base font-inter">
          Join the Waitlist
        </Link>
      </div>
    </section>
  );
}
