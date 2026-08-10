// About.jsx
import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-page section-container">
      <header className="page-header">
        <span className="section-kicker">BACKGROUND</span>
        <h1>About Vanguard Studio</h1>
        <p>Driven by engineering accuracy, performant UI execution, and full-stack software development.</p>
      </header>

      <div className="about-grid">
        <div className="about-card">
          <h3>Core Competencies</h3>
          <ul>
            <li>Frontend Engineering (React, Vite, State Management)</li>
            <li>Interactive UI/UX & Responsive Layout Design</li>
            <li>API Middleware & Backend Integration</li>
            <li>Scientific Simulation & Data Visualization</li>
          </ul>
        </div>

        <div className="about-card">
          <h3>Technical Philosophy</h3>
          <p>Writing scalable, type-safe, and light-bundle code that delivers clear user experiences and maximum performance metrics.</p>
        </div>
      </div>
    </div>
  );
}

export default About;