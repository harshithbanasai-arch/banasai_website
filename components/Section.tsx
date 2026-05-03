interface SectionProps {
  leftHalf: React.ReactNode;
  rightHalf: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ leftHalf, rightHalf }) => {
  return (
    <section className="section-padding bg-surface">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
          <div className="w-full md:w-1/2">{leftHalf}</div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">{rightHalf}</div>
        </div>
      </div>
    </section>
  );
};

export default Section;