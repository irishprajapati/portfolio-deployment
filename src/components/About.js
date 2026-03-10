import React from 'react';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <h2 className="section-title">How I work</h2>
        <p className="about-lead">
          I like owning problems end to end – from clarifying requirements to shipping a reliable
          backend and keeping it healthy in production.
        </p>
        <div className="about-grid">
          <div className="about-card">
            <h3>Engineering principles</h3>
            <ul>
              <li>Prefer simple, explicit designs over clever abstractions.</li>
              <li>Keep business logic out of controllers – use services and clear boundaries.</li>
              <li>Lean on the database for integrity with constraints and proper indexing.</li>
            </ul>
          </div>
          <div className="about-card">
            <h3>How I build backends</h3>
            <ul>
              <li>Start from the domain and data model, then design APIs around real use cases.</li>
              <li>Add tests around critical flows like auth, permissions, and money-like operations.</li>
              <li>Instrument with logs and metrics early so failures are observable, not surprising.</li>
            </ul>
          </div>
          <div className="about-card">
            <h3>What I’m looking for</h3>
            <ul>
              <li>
                Backend roles where Python, FastAPI, and PostgreSQL or Java and Spring Boot are part
                of the core stack.
              </li>
              <li>Teams that value code reviews, small iterations, and learning in public.</li>
              <li>Opportunities to help design APIs and data models, not just implement tickets.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

