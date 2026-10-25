import Link from "next/link";
import { WHATSAPP_COMMUNITY_URL } from "./community";

// For now the live product is the Cloud Run deployment; switch to https://intel.banas-ai.com/ when live.
const INTEL_URL = "https://banas-intel-api-1007077428197.asia-south1.run.app/";

const Download: React.FC = () => (
  <section className="section-padding bg-surface">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center">
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-body-text mb-4 font-sora font-semibold">
            Work with us
          </h2>
          <p className="text-xl text-muted-text mb-8 font-light font-inter leading-relaxed">
            Join the waitlist for grading, dehusking or the farm manager robot, start using
            Banas Intelligence free today, or join our growers&apos; community on WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
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
      </div>
    </div>
  </section>
);

export default Download;
