import React from 'react';
import '../styles/About.css';

export function About() {
  return (
    <div className="about">
      <div className="container">
        {/* Hero Section */}
        <section className="about-hero">
          <h1 className="about-title">About Me</h1>
          <p className="about-subtitle">
            Tech Enthusiast passionate about creating meaningful digital experiences
          </p>
        </section>

        {/* Main Content */}
        <section className="about-content">
          <div className="about-grid">
            <div className="about-text">
              <h2>Who I Am</h2>
              <p>
              I’m a technology professional with a background in computer science and a passion for making systems work better together. 
                and digital experiences. My experience spans software development, IT support, and process improvement,
                 giving me a unique mix of technical skills and an understanding of how people use technology day-to-day.
              </p>
              <p>
              I approach each challenge with curiosity, adaptability, 
              and a focus on creating practical, user-friendly solutions.
              </p>
              <p>
                When I'm not coding, you can find me playing games, swimming, or driving around.
              </p>
            </div>

            <div className="about-stats">
              <div className="stat-card card">
                <h3>3+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat-card card">
                <h3>5+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat-card card">
                <h3>3</h3>
                <p>Technologies Mastered</p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="values-section">
          <h2>What I Value</h2>
          <div className="values-grid">
            <div className="value-card card">
              <div className="value-icon">🎯</div>
              <h3>Quality</h3>
              <p>I believe in writing clean, maintainable code that stands the test of time. Every line of code should have a purpose and be well-documented.</p>
            </div>
            <div className="value-card card">
              <div className="value-icon">🚀</div>
              <h3>Innovation</h3>
              <p>I'm always exploring new technologies and approaches to solve problems more efficiently and create better user experiences.</p>
            </div>
            <div className="value-card card">
              <div className="value-icon">🤝</div>
              <h3>Collaboration</h3>
              <p>I thrive in team environments where we can share knowledge, learn from each other, and build something amazing together.</p>
            </div>
            <div className="value-card card">
              <div className="value-icon">📚</div>
              <h3>Learning</h3>
              <p>Technology evolves rapidly, and I'm committed to continuous learning to stay current with the latest tools and best practices.</p>
            </div>
          </div>
        </section>

        {/* Interests Section */}
        <section className="interests-section">
          <h2>Beyond Code</h2>
          <div className="interests-grid">
            <div className="interest-item">
              <h3>🎮 Game Development</h3>
              <p>Creating interactive experiences that bring joy and challenge to players.</p>
            </div>
            <div className="interest-item">
              <h3>📊 Data Visualization</h3>
              <p>Making complex data accessible and beautiful through interactive visualizations.</p>
            </div>
            <div className="interest-item">
              <h3>🌐 Web Technologies</h3>
              <p>Building modern, responsive web applications that work seamlessly across devices.</p>
            </div>
            <div className="interest-item">
              <h3>🔧 Open Source</h3>
              <p>Contributing to the developer community and learning from others' code.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="about-cta">
          <div className="cta-content card">
            <h2>Let's Connect</h2>
            <p>
              I'm always interested in new opportunities, interesting projects, and meeting 
              fellow developers. Whether you want to discuss a potential collaboration, 
              ask about my work, or just say hello, I'd love to hear from you.
            </p>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary">Get In Touch</a>
              <a href="/resume" className="btn btn-secondary">View Resume</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}