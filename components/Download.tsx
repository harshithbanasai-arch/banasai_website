import Image from "next/image";

const Download: React.FC = () => (
  <section className="section-padding bg-surface">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-body-text mb-4 font-sora font-semibold">
            Ready to access physical world datasets?
          </h2>
          <p className="text-xl text-muted-text mb-8 font-light font-inter leading-relaxed">
            Reach out to discuss your needs. We will share available datasets, pricing, and custom contracting options — no commitment required.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="mailto:contact.banasai@gmail.com"
              className="btn-primary text-center font-inter"
            >
              Email Us
              <span className="block text-sm font-light opacity-80 mt-1">contact.banasai@gmail.com</span>
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="relative w-full aspect-square md:w-[400px] overflow-hidden rounded-card shadow-lg border border-border">
            <Image 
              src="https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&q=80&w=800" 
              alt="Physical AI and agricultural technology"
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
