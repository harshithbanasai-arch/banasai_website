const About: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <p className="label-text text-primary mb-2 text-center font-dm-mono">
            Who We Are
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-body-text mb-8 text-center font-sora font-semibold">
            Farming Expertise Meets Physical AI
          </h2>
          <div className="space-y-6 text-lg text-muted-text font-light font-inter">
            <p className="leading-relaxed">
              Banas AI was founded at the intersection of two worlds — deep roots in real-world agriculture and cutting-edge expertise in Physical AI.
            </p>
            <p className="leading-relaxed">
              Our agricultural team consists of farming experts with deep real-world skills and expertise. These are not contracted surveyors — they are people who have lived and worked the land across diverse agricultural regions. They understand soil composition by touch, read weather patterns in the sky, and know crop health by subtle visual cues that no sensor can replicate. When we collect field data, we collect it with this irreplaceable real-world expertise behind every single data point.
            </p>
            <p className="leading-relaxed">
              Our Physical AI and technical team are based in Dublin and Karnataka (Bengaluru), working at the frontier of how machines learn to understand and interact with the physical world. They design our data collection methodology, define the labelling schemas, and ensure every dataset is built with model training in mind. Our professional software engineers build the tools, pipelines, and systems that make our datasets clean, structured, and ready to use the moment they reach you.
            </p>
            <p className="leading-relaxed">
              The result is something rare: a dataset company where farming expertise, AI research, and software engineering all work from the same vision — to deliver ground-truth data that reflects how agriculture and manufacturing actually work in the real world.
            </p>
            <p className="italic text-muted-text font-inter">
              Our work today in data collection and AI tooling is laying the foundation for the next stage of Physical AI development in agriculture and manufacturing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;