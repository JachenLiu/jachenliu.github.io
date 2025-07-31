import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

export function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="accent-text">Jachen Liu</span>
          </h1>
          <p className="hero-subtitle">
            Software Engineer & Full-Stack Developer
          </p>
          <p className="hero-description">
            I build innovative web applications and digital experiences with a focus on 
            user experience, performance, and clean code. Currently working on exciting 
            projects in game development and web technologies.
          </p>
          <div className="hero-actions">
            <Link to="/projects" className="btn btn-primary">
              View My Work
            </Link>
            <Link to="/about" className="btn btn-secondary">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Frontend</h3>
              <div className="skill-tags">
                <span className="skill-tag">React</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">HTML/CSS</span>
                <span className="skill-tag">Vue.js</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Backend</h3>
              <div className="skill-tags">
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">Java</span>
                <span className="skill-tag">C#</span>
                <span className="skill-tag">SQL</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Tools & Platforms</h3>
              <div className="skill-tags">
                <span className="skill-tag">Git</span>
                <span className="skill-tag">Docker</span>
                <span className="skill-tag">AWS</span>
                <span className="skill-tag">Unity</span>
                <span className="skill-tag">Figma</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            <div className="project-card card">
              <div className="project-image">
                <div className="project-placeholder">
                  <span>🎮</span>
                </div>
              </div>
              <div className="project-content">
                <h3>Bullet Bang</h3>
                <p>A multiplayer card game built with Unity and Photon Fusion, featuring real-time gameplay and custom card mechanics.</p>
                <div className="project-tech">
                  <span className="tech-tag">Unity</span>
                  <span className="tech-tag">C#</span>
                  <span className="tech-tag">Photon</span>
                </div>
              </div>
            </div>

            <div className="project-card card">
              <div className="project-image">
                <div className="project-placeholder">
                  <span>🌳</span>
                </div>
              </div>
              <div className="project-content">
                <h3>Trees Density Visualization</h3>
                <p>Interactive data visualization showing tree density across different regions with Three.js and D3.js.</p>
                <div className="project-tech">
                  <span className="tech-tag">Three.js</span>
                  <span className="tech-tag">D3.js</span>
                  <span className="tech-tag">JavaScript</span>
                </div>
              </div>
            </div>

            <div className="project-card card">
              <div className="project-image">
                <div className="project-placeholder">
                  <span>👥</span>
                </div>
              </div>
              <div className="project-content">
                <h3>Team Builder</h3>
                <p>Java application for creating balanced teams based on skills and preferences with algorithmic optimization.</p>
                <div className="project-tech">
                  <span className="tech-tag">Java</span>
                  <span className="tech-tag">CSV</span>
                  <span className="tech-tag">Algorithms</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-4">
            <Link to="/projects" className="btn btn-secondary">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Experience Preview */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Experience</h2>
          <div className="experience-timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content card">
                <h3>Software Engineer</h3>
                <p className="timeline-company">Current Role</p>
                <p>Full-stack development with focus on React, Node.js, and cloud technologies. Building scalable web applications and contributing to team architecture decisions.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content card">
                <h3>Game Development</h3>
                <p className="timeline-company">Unity & C#</p>
                <p>Developed multiplayer games using Unity and Photon Fusion, implementing real-time networking and custom game mechanics.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <div className="cta-card card">
            <h2>Let's Work Together</h2>
            <p>I'm always interested in new opportunities and exciting projects. Whether you have a question or want to collaborate, I'd love to hear from you.</p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary">
                Get In Touch
              </Link>
              <Link to="/resume" className="btn btn-secondary">
                View Resume
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}