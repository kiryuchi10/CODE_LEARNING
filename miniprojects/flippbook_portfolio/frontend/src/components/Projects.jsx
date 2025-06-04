import React from 'react';
import './Projects.css';

const projects = [
  {
    title: "Smart Sensor Dashboard",
    description: "Real-time monitoring app using React + FastAPI.",
    videoUrl: "https://www.youtube.com/embed/Oo8nFMw2Wmg",
    stack: ["React", "FastAPI", "MySQL", "Chart.js"],
    github: "https://github.com/yourrepo/smart-sensor",
    demo: "https://smart-sensor.netlify.app"
  },
  {
    title: "Pixel Art Generator",
    description: "Upload an image and convert it to 8-bit pixel art.",
    videoUrl: "https://www.youtube.com/embed/TJ0BfS4gJkY",
    stack: ["React", "FastAPI", "Pillow"],
    github: "https://github.com/yourrepo/pixel-art",
    demo: ""
  }
];

function Projects() {
  return (
    <div className="projects-container">
      <h2>🛠 Software Projects</h2>
      {projects.map((p, idx) => (
        <div key={idx} className="project-card">
          <div className="video-wrapper">
            <iframe
              width="360"
              height="203"
              src={p.videoUrl}
              title={p.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="project-info">
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <p><strong>Stack:</strong> {p.stack.join(', ')}</p>
            <div className="project-links">
              <a href={p.github} target="_blank" rel="noreferrer">🔗 GitHub</a>
              {p.demo && <a href={p.demo} target="_blank" rel="noreferrer">🌐 Live Demo</a>}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
