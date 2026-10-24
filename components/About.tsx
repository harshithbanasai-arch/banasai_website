const About: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <p className="label-text text-primary mb-2 text-center font-dm-mono">
            Who We Are
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-body-text mb-8 text-center font-sora font-semibold">
            Farming Roots Meet Physical AI
          </h2>
          <div className="space-y-6 text-lg text-muted-text font-light font-inter">
            <p className="leading-relaxed">
              Banas AI is a family company with deep roots in agriculture and a team that builds AI for the physical world.
            </p>
            <p className="leading-relaxed">
              Our family has grown and traded produce in Karnataka for generations. We know how graders decide, what a wrong grade costs, and how much of that work still depends on people checking by eye.
            </p>
            <p className="leading-relaxed">
              Our AI and software team is based in Dublin, and our field and hardware team is in Karnataka (Bengaluru). Together we are building an ecosystem of physical AI products, starting with grading and dehusking, with a farm manager robot to follow.
            </p>
            <p className="italic text-muted-text font-inter">
              The same team runs Banas Intelligence, our free forecasting tool for the arecanut
              community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;