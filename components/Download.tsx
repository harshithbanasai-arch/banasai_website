import Image from "next/image";
import Link from "next/link";
import { WHATSAPP_COMMUNITY_URL } from "./community";

// For now the live product is the Cloud Run deployment; switch to https://intel.banas-ai.com/ when live.
const INTEL_URL = "https://banas-intel-api-1007077428197.asia-south1.run.app/";

const Download: React.FC = () => (
  <section className="section-padding bg-surface">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-body-text mb-4 font-sora font-semibold">
            Ready to work with Banas AI?
          </h2>
          <p className="text-xl text-muted-text mb-8 font-light font-inter leading-relaxed">
            Join the waitlist for grading, dehusking or the farm manager robot, start using
            Banas Intelligence free today, or join our growers&apos; community on WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/contact" className="btn-primary text-center font-inter">
              Join the Waitlist
            </Link>
            <a
              href={INTEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-center font-inter"
            >
              Use Banas Intelligence free
            </a>
            <a
              href={WHATSAPP_COMMUNITY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-center font-inter"
            >
              Join the WhatsApp community
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="relative w-full aspect-square md:w-[400px] overflow-hidden rounded-card shadow-lg border border-border">
            <Image
              src="https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&q=80&w=800"
              alt="Fresh produce in a field"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Download;
