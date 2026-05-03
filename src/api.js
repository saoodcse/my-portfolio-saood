export const getProjects = () =>
  new Promise((resolve) =>
    setTimeout(
      () =>
        resolve([
          {
            id: 1,
            title: "Portfolio App",
            description:
              "Full-stack personal portfolio with dynamic project loading and contact form integration.",
            tech: "React, FastAPI, MySQL",
          },
          {
            id: 2,
            title: "Inventory Microservice",
            description:
              "Scalable inventory management system built with Spring Boot and Kafka event streaming.",
            tech: "Spring Boot, Kafka, PostgreSQL",
          },
          {
            id: 3,
            title: "Auth Service",
            description:
              "JWT-based authentication microservice with refresh token rotation and role-based access.",
            tech: "FastAPI, Redis, MySQL",
          },
          {
            id: 4,
            title: "Task Scheduler API",
            description:
              "Cron-based distributed task scheduler with retry logic and webhook notifications.",
            tech: "Python, Celery, RabbitMQ",
          },
          {
            id: 5,
            title: "E-Commerce Backend",
            description:
              "RESTful commerce API handling orders, payments, and product catalog with caching.",
            tech: "Spring Boot, MySQL, Redis",
          },
          {
            id: 6,
            title: "Log Aggregator",
            description:
              "Centralized log collection and analysis pipeline with real-time alerting dashboard.",
            tech: "Python, Elasticsearch, FastAPI",
          },
        ]),
      900
    )
  );

export const submitContact = (formData) =>
  new Promise((resolve) =>
    setTimeout(() => resolve({ success: true, data: formData }), 600)
  );