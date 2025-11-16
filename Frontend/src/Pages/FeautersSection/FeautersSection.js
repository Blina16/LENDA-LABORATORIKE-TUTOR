import React from "react";

export default function FeaturesSection({ features }) {
  return (
    <section className="features-section">
      <div className="section-header">
        <h2 className="section-title">Why Choose Us?</h2>
        <p className="section-subtitle">
          Everything you need to make learning efficient, engaging, and personal.
        </p>
      </div>
      <div className="features-grid">
        {features.map((feature) => (
          <div key={feature.id} className="feature-card">
            <div className="feature-icon-wrapper">
              <div className="feature-icon">{feature.icon}</div>
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
