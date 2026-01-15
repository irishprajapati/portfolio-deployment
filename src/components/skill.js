// Skills.js
import React from 'react';

const Skills = () => {
  const skillData = [
    { name: "Python", icon: "python", color: "#3776ab" },
    { name: "FastAPI", icon: "fastapi", color: "#0f9d58" },
    { name: "Django", icon: "django", color: "#0c4b33" },
    { name: "PostgreSQL", icon: "postgresql", color: "#336791" },
    { name: "SQLAlchemy", icon: "sqlalchemy", color: "#ff6b6b" },
    { name: "REST APIs", icon: "api", color: "#9b59b6" },
    { name: "JWT", icon: "jsonwebtokens", color: "#e67e22" },
    { name: "Git", icon: "git", color: "#f34f29" },
    { name: "GitHub", icon: "github", color: "#181717" },
    { name: "Docker", icon: "docker", color: "#2496ED" },
    { name: "JavaScript", icon: "javascript", color: "#F7DF1E" },
    { name: "Postman", icon: "postman", color: "#ff6c37" },
    { name: "cURL", icon: "curl", color: "#073551" },
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <h2 className="section-title">Tech Stack</h2>
        <div className="skills-grid">
          {skillData.map((skill) => (
            <div key={skill.name} className="skill-badge">
              <img
                src={`https://cdn.simpleicons.org/${skill.icon}`}
                alt={skill.name}
                className="skill-icon"
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