// src/components/Hero.jsx
import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <span className="hero-badge">AVAILABLE FOR CONTRACT & ROLES</span>
        <h1>Engineering Digital Solutions with Precision</h1>
        <p>Full-Stack Developer focusing on performant UI architecture and web applications.</p>
      </div>
    </section>
  );
}

// ⚠️ Make sure this default export line exists!
export default Hero;