// Home.jsx
import React from 'react';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import SubscribeWidget from '../components/SubscribeWidget';
import projectsData from '../data/projects';
import './Home.css';

function Home() {
  const featuredProjects = projectsData.filter(p => p.featured);

  return (
    <main className="home-page">
      <Hero />

      <section className="featured-section">
        <div className="section-container">
          <div className="section-header">
            <div>
              <span className="section-kicker">SELECTED WORK</span>
              <h2>Featured Projects</h2>
            </div>
          </div>

          <div className="projects-grid">
            {featuredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <div className="section-container">
        <SubscribeWidget />
      </div>
    </main>
  );
}

export default Home;