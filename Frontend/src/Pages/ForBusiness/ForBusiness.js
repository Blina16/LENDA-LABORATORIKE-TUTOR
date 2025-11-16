import React from "react";
import "./ForBusiness.css";

export default function ForBusiness() {
  const Section = ({ title, subtitle, children }) => (
    <section className="section">
      <div className="section-container">
        {(title || subtitle) && (
          <div className="section-header">
            {title && <h2 className="section-title">{title}</h2>}
            {subtitle && <p className="section-subtitle">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );

  return (
    <div>
      {/* Hero */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-badge">Solutions for schools & organizations</div>

          <h1 className="hero-title">
            Upskill your learners with tailored tutoring
          </h1>

          <p className="hero-text">
            Partner with us to provide high-quality 1-on-1 and small-group
            tutoring for schools, universities, and companies. Flexible programs,
            measurable outcomes.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="btn-primary">
              Talk to our team
            </a>

            <a href="#plans" className="btn-outline">
              View plans
            </a>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <Section
        title="Why partner with us?"
        subtitle="A complete tutoring solution aligned to academic and professional outcomes"
      >
        <div className="grid">
          {[
            { title: "Expert tutors", desc: "Carefully vetted tutors across 50+ subjects and skills." },
            { title: "Flexible delivery", desc: "1-on-1, small group, or cohort-based programs." },
            { title: "Reporting & analytics", desc: "Attendance, progress, and outcomes dashboards." },
            { title: "Curriculum alignment", desc: "Content aligned with course objectives and exams." },
            { title: "Secure & compliant", desc: "Privacy-first and GDPR-friendly infrastructure." },
            { title: "Dedicated support", desc: "Onboarding, scheduling, and coordination services." },
          ].map((f) => (
            <div key={f.title} className="card">
              <div className="card-badge">Feature</div>
              <h3 className="card-title">{f.title}</h3>
              <p className="card-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Plans */}
      <Section title="Plans that scale" subtitle="Choose a plan or request a custom program">
        <div id="plans" className="grid">
          {[
            { name: "Starter", price: "€499/mo", items: ["Up to 20 learners", "Email support", "Monthly report"] },
            { name: "Growth", price: "€1,499/mo", items: ["Up to 100 learners", "Priority support", "Bi-weekly report"] },
            { name: "Enterprise", price: "Custom", items: ["Unlimited learners", "SLA & onboarding", "Dedicated manager"] },
          ].map((p) => (
            <div key={p.name} className="card">
              <div className="plan-header">
                <h3>{p.name}</h3>
                <span className="plan-price">{p.price}</span>
              </div>

              <ul className="plan-list">
                {p.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>

              <div className="plan-footer">
                <a href="#contact" className="btn-primary small">Contact sales</a>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section title="Contact our team" subtitle="Tell us about your organization and goals">
        <div id="contact" className="contact-card">
          <form onSubmit={(e) => e.preventDefault()} className="contact-form">
            <div className="two-col">
              <input placeholder="Organization name" className="input" />
              <input placeholder="Contact email" type="email" className="input" />
            </div>

            <div className="two-col">
              <input placeholder="Team size" className="input" />
              <input placeholder="Country/Region" className="input" />
            </div>

            <textarea
              placeholder="Goals and requirements"
              rows={4}
              className="textarea"
            />

            <div className="submit-container">
              <button type="submit" className="btn-primary">Send request</button>
            </div>
          </form>
        </div>
      </Section>
    </div>
  );
}
