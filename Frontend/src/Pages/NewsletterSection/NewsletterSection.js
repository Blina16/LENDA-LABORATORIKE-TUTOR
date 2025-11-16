import React from "react";
import { Music2, Linkedin, Instagram } from "lucide-react";

export default function NewsletterSection() {
  return (
    <div className="newsletter-section">
      <div className="newsletter-card">
        <h2>Stay in the loop</h2>
        <p>Get course updates, tutor tips, and special offers straight to your inbox.</p>
        <div className="newsletter-form">
          <div className="input-group">
            <span className="input-icon">📧</span>
            <input type="email" placeholder="you@example.com" className="newsletter-input" />
          </div>
          <button className="newsletter-btn">Subscribe</button>
        </div>
        <div className="trust-row">
          <span>No spam</span>
          <span>Unsubscribe anytime</span>
          <span>GDPR-friendly</span>
        </div>
        <div className="social-row">
          <a
            className="social-link tiktok"
            href="https://www.tiktok.com/@tutor4kids"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            title="TikTok"
          >
            <Music2 size={18} />
          </a>
          <a
            className="social-link linkedin"
            href="https://www.linkedin.com/company/tutor4kids"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            className="social-link instagram"
            href="https://www.instagram.com/tutor4kids"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            title="Instagram"
          >
            <Instagram size={18} />
          </a>
        </div>
        <p className="newsletter-credit">@ Laboratori 1 Blina Krasniqi</p>
      </div>
    </div>
  );
}
