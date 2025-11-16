import React from "react";

export default function CategoriesSection({ categories }) {
  return (
    <section className="categories-section">
      <div className="section-header">
        <h2 className="section-title">Browse by Category</h2>
        <p className="section-subtitle">Find the perfect tutor for your learning needs</p>
      </div>
      <div className="boxes-container">
        {categories.map((cat) => (
          <div key={cat.id} className="box">
            <div className="box-icon">{cat.icon}</div>
            <div className="box-text">
              <h3>{cat.title}</h3>
              <p>{cat.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
