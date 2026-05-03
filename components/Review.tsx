import { FaStar } from "react-icons/fa";

interface ReviewProps {
  rating: number;
  title: string;
  content: string;
  author: string;
  designation: string;
}

const Review: React.FC<ReviewProps> = ({
  rating = 5,
  title = "Default Title",
  content = "Default content for the review.",
  author = "John Doe",
  designation = "Customer",
}) => {
  return (
    <div className="card p-6 bg-surface">
      <div className="flex items-center mb-3">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} className={`w-4 h-4 mr-1 ${i < rating ? "text-green-accent" : "text-border"}`} />
        ))}
      </div>
      <p className="text-body-text mb-4 font-light font-inter leading-relaxed">{title}</p>
      <div className="flex items-center">
        <div>
          <p className="text-body-text font-medium font-sora">{author}</p>
          <p className="text-sm text-muted-text font-light font-inter">{designation}</p>
        </div>
      </div>
    </div>
  );
};

export default Review;