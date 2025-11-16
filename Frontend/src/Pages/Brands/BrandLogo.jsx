import React from "react";

export default function BrandLogo({ title }) {
  const initials = title
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();

  return (
    <svg width="28" height="28" viewBox="0 0 40 40" aria-hidden>
      <defs>
        <linearGradient id="gradBrand" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="var(--primary)" />
          <stop offset="100%" stopColor="var(--accent)" />
        </linearGradient>
      </defs>
      <circle cx="20" cy="20" r="18" fill="url(#gradBrand)" />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="#fff"
        fontSize="14"
        fontWeight="700"
        fontFamily="Inter, sans-serif"
      >
        {initials}
      </text>
    </svg>
  );
}
