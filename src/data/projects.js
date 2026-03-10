export const projects = [
  {
    title: 'Project Management API',
    role: 'Solo backend developer',
    stack: ['FastAPI (async)', 'PostgreSQL', 'SQLAlchemy ORM', 'JWT auth'],
    highlights: [
      'Designed a multi-tenant project/task model with clear ownership and role-based access (admin, manager, contributor).',
      'Introduced pagination and indexed foreign keys; reduced a critical dashboard query from ~280ms to ~45ms (measured with EXPLAIN ANALYZE on Render PostgreSQL).',
      'Structured the app into routers, services, and schemas to keep business logic isolated from HTTP and DB layers.'
    ],
    desc:
      'Full-featured project management backend with JWT authentication, task assignment, and role-based access. Built with FastAPI (async), Render PostgreSQL, and SQLAlchemy ORM.',
    link: 'https://project-management-system-ln1h.onrender.com/swagger/',
    github: 'https://github.com/irishprajapati/Project-Management-System'
  },
  {
    title: 'Library Management API',
    role: 'Solo backend developer',
    stack: ['FastAPI (async)', 'PostgreSQL', 'SQLAlchemy ORM', 'JWT auth'],
    highlights: [
      'Modeled borrowing rules (due dates, renewals, penalties) with invariants enforced at both DB and service layer.',
      'Wrapped borrow/return workflows in explicit transactions to keep inventory and user state consistent.',
      'Documented all endpoints with OpenAPI and example payloads to make the API easy to consume.'
    ],
    desc:
      'Library backend with JWT auth, borrowing logic, and role-based access. Built with FastAPI (async), PostgreSQL, and SQLAlchemy ORM.',
    link: 'https://libraryapi-creatio-1.onrender.com',
    github: 'https://github.com/Erishprajapati/LibraryAPI-Creatio'
  },
  {
    title: 'E-Commerce API',
    role: 'Solo backend developer',
    stack: ['FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Uvicorn'],
    highlights: [
      'Implemented cart and order flows with idempotent operations to avoid double charges and duplicate orders.',
      'Used database transactions to keep stock levels and orders in sync under concurrent writes.',
      'Defined strict Pydantic models to validate requests and prevent invalid states from reaching the database.'
    ],
    desc:
      'Scalable backend supporting product catalog, cart, orders, and payment simulation. Features async endpoints, database transactions, and admin endpoints.',
    link: 'https://ecommerce-5ti5.onrender.com/docs',
    github: 'https://github.com/irishprajapati/Ecommerce'
  },
  {
    title: 'Hospital Management System',
    role: 'Backend developer',
    stack: ['FastAPI (async)', 'PostgreSQL', 'SQLAlchemy', 'JWT auth'],
    highlights: [
      'Designed relational models for doctors, patients, appointments, and medical records with clear ownership rules.',
      'Implemented token-based auth and simple audit trails for high-risk operations like updating records.',
      'Relied on foreign key constraints and validation logic to keep patient, appointment, and record data consistent.'
    ],
    desc:
      'Backend handling doctors, patients, appointments, and medical records. Built with async FastAPI, SQLAlchemy, and token-based auth.',
    link:
      'https://hospital-management-system1-o63yod5j9-erishprajatis-projects.vercel.app/api/v1/login_view',
    github: 'https://github.com/Erishprajapati/hospital-management-system1'
  },
  {
    title: 'Peak Times',
    role: 'Backend & data modeling',
    stack: ['Django', 'PostgreSQL', 'Jinja templates'],
    highlights: [
      'Modeled locations, time slots, and crowd levels with relational constraints for reliable reporting.',
      'Built admin tooling so non-technical users can safely update crowd data.',
      'Kept views thin and encapsulated logic in services, making it easier to expose the same data via APIs later.'
    ],
    desc:
      'Web application to explore crowd density at different places in the district. Built with Django, PostgreSQL, and Jinja templates.',
    link: null,
    github: 'https://github.com/irishprajapati/Peak-Times'
  }
];

