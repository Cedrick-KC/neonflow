// Projects.jsx
import React from 'react';
import ProjectCard from '../components/ProjectCard';
import projectsData from '../data/projects';
import './Projects.css';

function Projects() {
  return (
    <div className="projects-page section-container">
      <header className="page-header">
        <span className="section-kicker">PORTFOLIO</span>
        <h1>Engineering Projects</h1>
        <p>A comprehensive showcase of web platforms, interactive tools, and technical experiments.</p>
      </header>

      <div className="projects-grid">
        {projectsData.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;