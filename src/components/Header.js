// Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="header" id="home">
      <div className="header-container">
        <div className="header-top">
          <div className="header-title-section">
            <h1>Irish Prajapati</h1>
            <h2>Backend Developer</h2>
            <p className="header-subtitle">
              I design and build APIs, data models, and backend systems with Python, FastAPI, and
              PostgreSQL.
            </p>
            <div className="header-cta">
              <a
                href="https://github.com/irishprajapati/Project-Management-System"
                target="_blank"
                rel="noopener noreferrer"
                className="primary-button"
              >
                View flagship API project
              </a>
              <a
                href="https://github.com/irishprajapati"
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-button"
              >
                View GitHub profile
              </a>
            </div>
          </div>
          <div className="profile-image-container">
            <img
              src="/profile.jpg"
              alt="Portrait of backend developer Irish Prajapati"
              className="profile-image"
              loading="lazy"
            />
          </div>
        </div>
        <div className="header-description">
          <p>
            I focus on building backends that are boring in production – predictable APIs, clear
            data models, and code that is easy to change when requirements move.
          </p>
          <p>
            Most of my projects start from a real workflow (managing projects, borrowing books,
            handling orders) and then move into modeling the domain, the data, and the boundaries
            between services.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;