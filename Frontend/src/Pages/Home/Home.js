import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import HeroSection from "./HeroSection";
import CategoriesSection from "./CategoriesSection";
import BrandsSection from "./BrandsSection";
import FeaturesSection from "./FeaturesSection";
import ReviewsSection from "./ReviewsSection";
import NewsletterSection from "./NewsletterSection";

export default function Home() {
  const navigate = useNavigate();

  const categories = [
    { id: 1, title: "K–12 Students", subtitle: "Homework help & test prep", icon: "📘" },
    { id: 2, title: "College & Univ.", subtitle: "Coursework & research help", icon: "🎓" },
    { id: 3, title: "Test Prep", subtitle: "SAT, ACT, GRE & more", icon: "📝" },
    { id: 4, title: "Languages", subtitle: "Speak fluently with native tutors", icon: "🗣️" },
    { id: 5, title: "Career Skills", subtitle: "Upskill & prep for interviews", icon: "💼" },
  ];

  const brands = [
    { name: 'Helsinki EDU', logoUrl: '/logos/helsinki-edu.svg' },
    { name: 'NordicTech', logoUrl: '/logos/nordictech.svg' },
    { name: 'EduLabs', logoUrl: '/logos/edulabs.svg' },
    { name: 'BrightFuture', logoUrl: '/logos/brightfuture.svg' },
    { name: 'SkillForge', logoUrl: '/logos/skillforge.svg' },
    { name: 'CampusPlus', logoUrl: '/logos/campusplus.svg' },
  ];

  const features = [
    {
      id: 1,
      title: "1-on-1 Live Tutoring",
      desc: "Personalized lessons with expert tutors to fit your goals and schedule.",
      icon: "💬",
    },
    {
      id: 2,
      title: "Instant Help",
      desc: "Get answers on-demand from tutors available 24/7 for quick guidance.",
      icon: "⚡",
    },
    {
      id: 3,
      title: "Progress Tracking",
      desc: "Stay on top of your learning journey with detailed reports and insights.",
      icon: "📊",
    },
    {
      id: 4,
      title: "Flexible Pricing",
      desc: "Choose from affordable plans or pay-per-session options.",
      icon: "💰",
    },
  ];

  const reviews = [
    {
      id: 1,
      name: "Sarah M.",
      text: "This platform completely changed how I study! My grades improved and I actually enjoy learning now.",
      rating: 5,
    },
    {
      id: 2,
      name: "Daniel K.",
      text: "The tutors are amazing — patient, knowledgeable, and super flexible with scheduling.",
      rating: 4,
    },
    {
      id: 3,
      name: "Lina P.",
      text: "Love the personalized approach! The progress tracking keeps me motivated every week.",
      rating: 5,
    },
  ];

  return (
    <div className="home-container">
      <HeroSection navigate={navigate} />
      <CategoriesSection categories={categories} />
      <BrandsSection brands={brands} />
      <FeaturesSection features={features} />
      <ReviewsSection reviews={reviews} />
      <NewsletterSection />
    </div>
  );
}
