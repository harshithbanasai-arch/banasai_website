import React from "react";

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="card p-6 hover:shadow-lg transition-shadow duration-200 bg-surface">
      <div className="icon-circle mb-4">
        {Icon && <Icon size={22} className="icon" />}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-body-text font-sora">{title}</h3>
      <p className="text-muted-text font-light font-inter leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;