import Review from "./Review";

interface ReviewData {
  rating: number;
  title: string;
  content: string;
  author: string;
  designation: string;
}

interface ReviewsProps {
  reviews?: ReviewData[];
}

const defaultReviews: ReviewData[] = [
  {
    rating: 5,
    title: "Finding structured agricultural datasets from Indian field conditions was nearly impossible. Banas AI delivered clean, well-labelled data that went straight into our training pipeline.",
    content: "",
    author: "AI Research Lead",
    designation: "Agri-tech Startup, India",
  },
  {
    rating: 5,
    title: "We contracted them for a custom soil sensing dataset across three regions. They understood our model's requirements from day one and delivered on time and to spec.",
    content: "",
    author: "ML Engineer",
    designation: "Robotics Company",
  },
  {
    rating: 5,
    title: "Most data vendors don't understand what physical AI actually needs. The Banas AI team does — they think about the model, not just the spreadsheet.",
    content: "",
    author: "CTO",
    designation: "Manufacturing Automation Firm",
  },
  {
    rating: 5,
    title: "Indian manufacturing data at this quality level simply didn't exist before. This is the kind of ground-truth dataset that makes a measurable difference in model performance.",
    content: "",
    author: "Data Scientist",
    designation: "Industrial AI Team",
  },
];

const Reviews: React.FC<ReviewsProps> = ({ reviews = defaultReviews }) => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-4 text-body-text font-sora font-semibold">
          What partners say about working with us
        </h2>
        <p className="text-xl text-center text-muted-text font-light mb-12 max-w-3xl mx-auto italic font-inter">
          &ldquo;What separates Banas AI is the combination — people who know Indian farming at a cellular level, and an AI team that knows exactly what a model needs to learn from it.&rdquo;
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
          {reviews.map((review, index) => (
            <Review key={index} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;