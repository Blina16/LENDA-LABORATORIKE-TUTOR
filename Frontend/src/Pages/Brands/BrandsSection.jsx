import React from "react";
import BrandLogo from "./BrandLogo";
import "./brands.css";

export default function BrandsSection({ brands }) {
  return (
    <section className="brands-section">
      <div className="section-header">
        <h2 className="section-title">Brands we worked with</h2>
        <p className="section-subtitle">Trusted by schools, companies, and organizations</p>
      </div>

      <div className="brands-slider">
        <div className="brands-track">
          {brands.map((b) => (
            <div key={b.name + "-1"} className="brand-badge" aria-label={b.name} title={b.name}>
              {b.logoUrl ? (
                <img
                  src={b.logoUrl}
                  alt={b.name}
                  className="brand-logo-img"
                  onError={(e) => (e.currentTarget.style.display = "none")}
                />
              ) : (
                <span className="brand-logo">
                  <BrandLogo title={b.name} />
                </span>
              )}
              <span className="brand-name">{b.name}</span>
            </div>
          ))}

          {/* duplicate for infinite scroll */}
          {brands.map((b) => (
            <div key={b.name + "-2"} className="brand-badge" aria-label={b.name} title={b.name}>
              {b.logoUrl ? (
                <img
                  src={b.logoUrl}
                  alt={b.name}
                  className="brand-logo-img"
                  onError={(e) => (e.currentTarget.style.display = "none")}
                />
              ) : (
                <span className="brand-logo">
                  <BrandLogo title={b.name} />
                </span>
              )}
              <span className="brand-name">{b.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
