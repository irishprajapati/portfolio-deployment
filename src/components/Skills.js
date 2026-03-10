// Skills.js
import React from 'react';
import { skills } from '../data/skills';

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <h2 className="section-title">Tech Stack</h2>
        <p className="skills-intro">
          The tools I reach for most when building backend systems. These are the technologies I
          use in the projects above, not a random list of logos.
        </p>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill.name} className="skill-badge">
              <img
                src={`https://cdn.simpleicons.org/${skill.icon}`}
                alt={skill.name}
                className="skill-icon"
                loading="lazy"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;