import React from 'react';
import '../styles/Projects.css';

export function Projects() {
  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="project-item">
        <h3>Details on the trees in Boston, made in Python using public city data, geopandas, and folium</h3>
        <a href="/trees_density.html" target="_blank">
          Read more
        </a>
      </div>

      <div className="project-item">
      <h3>Simple card webapp to shuffle and draw cards</h3>
      <a href="/cards" target="_blank">
          Read more
        </a>
      </div>

      <div className="project-item">
      <h3>Sandbox with a box</h3>
      <a href="/sandbox" target="_blank">
          Read more
        </a>
      </div>
    </div>
  );
}
