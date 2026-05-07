// ─── Projects ───────────────────────────────────────────────────
export const getProjects = () =>
  new Promise((resolve) =>
    setTimeout(() =>
      resolve([
        {
          id: 1,
          title: "Bulk Transaction API",
          category: "API",
          description:
            "High-throughput async API at NIUM supporting 1,000 cross-border transactions per request with sub-3s SLA, job scheduling for future-dated processing, and real-time webhook notifications.",
          tech: "Java, Spring Boot, PostgreSQL, SQS, Redis",
          github: "https://github.com/saoodcse",
          demo: null,
        },
        {
          id: 2,
          title: "Cross-Border Payout System",
          category: "Microservice",
          description:
            "Core module of NIUM's international payout engine handling 10,000+ daily transactions with PCI DSS compliance. 5% throughput improvement and 5% MTTR reduction.",
          tech: "Java, Spring Boot, Liquibase, Kubernetes, AWS",
          github: "https://github.com/saoodcse",
          demo: null,
        },
        {
          id: 3,
          title: "Outward Remittance Platform",
          category: "Microservice",
          description:
            "Distributed payments platform at Axis Bank for international fund transfers. 20+ APIs integrating Groww, INDmoney & Vested — 30% adoption rise, 15% fewer transaction failures.",
          tech: "Java, Kotlin, Spring Boot, Kafka, MySQL, AWS",
          github: "https://github.com/saoodcse",
          demo: null,
        },
        {
          id: 4,
          title: "Dormancy Management Plugin",
          category: "Microservice",
          description:
            "Automation microservice at Axis Bank deactivating inactive accounts after 15 days. Saved ₹50 lakh/yr, reduced manual intervention by 80% via SFTP CSV reporting.",
          tech: "Kotlin, Spring Boot, Docker, Kubernetes, AWS",
          github: "https://github.com/saoodcse",
          demo: null,
        },
        {
          id: 5,
          title: "Transaction Processing Plugin",
          category: "API",
          description:
            "Spring Boot plugin bridging 10+ legacy .NET apps with IBM MQ at Axis Bank. Improved throughput by 10%, reduced errors by 20%, saved ₹20 lakh annually.",
          tech: "Java, IBM MQ, Spring Boot, REST APIs, Docker",
          github: "https://github.com/saoodcse",
          demo: null,
        },
        {
          id: 6,
          title: "Portfolio App",
          category: "Full-stack",
          description:
            "Personal developer portfolio with Redux-powered dynamic project loading, resume viewer, contact form, and dark terminal-style UI.",
          tech: "React, FastAPI, MySQL, Redux Toolkit, MUI",
          github: "https://github.com/saoodcse",
          demo: "https://saoodcse.dev",
        },
      ]),
      800
    )
  );

// ─── Skills ─────────────────────────────────────────────────────
export const getSkills = () =>
  new Promise((resolve) =>
    setTimeout(() =>
      resolve([
        {
          category: "Languages",
          color: "#00E5FF",
          icon: "code",
          items: [
            { name: "Java", level: 92 },
            { name: "Kotlin", level: 85 },
            { name: "Python", level: 72 },
            { name: "SQL", level: 85 },
          ],
        },
        {
          category: "Frameworks",
          color: "#FF6D00",
          icon: "layers",
          items: [
            { name: "Spring Boot", level: 92 },
            { name: "FastAPI", level: 68 },
            { name: "JUnit / Mockito", level: 80 },
            { name: "React.js", level: 60 },
          ],
        },
        {
          category: "Databases",
          color: "#00E5FF",
          icon: "storage",
          items: [
            { name: "MySQL", level: 85 },
            { name: "PostgreSQL", level: 82 },
            { name: "Redis", level: 78 },
            { name: "Flyway / Liquibase", level: 75 },
          ],
        },
        {
          category: "Messaging & Queue",
          color: "#FF6D00",
          icon: "hub",
          items: [
            { name: "Apache Kafka", level: 82 },
            { name: "AWS SQS", level: 78 },
            { name: "IBM MQ", level: 72 },
            { name: "RabbitMQ", level: 60 },
          ],
        },
        {
          category: "DevOps & Cloud",
          color: "#00E5FF",
          icon: "cloud",
          items: [
            { name: "Docker", level: 80 },
            { name: "Kubernetes", level: 75 },
            { name: "AWS", level: 78 },
            { name: "CI/CD", level: 72 },
          ],
        },
        {
          category: "Tools",
          color: "#FF6D00",
          icon: "build",
          items: [
            { name: "Git / Bitbucket", level: 90 },
            { name: "Postman", level: 88 },
            { name: "IntelliJ IDEA", level: 90 },
            { name: "Jira / Confluence", level: 80 },
          ],
        },
      ]),
      700
    )
  );

// ─── Experience ──────────────────────────────────────────────────
export const getExperience = () =>
  new Promise((resolve) =>
    setTimeout(() =>
      resolve([
        {
          id: 1,
          role: "Senior Software Engineer",
          company: "ICICI Bank",
          type: "Full-time",
          location: "Mumbai, India",
          period: "Apr 2026 – Present",
          duration: "2 months",
          description:
            "Contributing to backend services and microservices-based applications for core banking systems at India's second-largest private bank.",
          achievements: [
            "Working on Java microservices for core banking operations",
            "Contributing to high-availability financial backend systems",
          ],
          tech: ["Java", "Spring Boot", "Microservices", "Banking APIs"],
          logo: "ICICI",
          current: true,
        },
        {
          id: 2,
          role: "Software Development Engineer I",
          company: "NIUM",
          type: "Full-time",
          location: "Mumbai, India",
          period: "Aug 2025 – Apr 2026",
          duration: "9 months",
          description:
            "Built and optimized cross-border payout infrastructure for a global fintech unicorn.",
          achievements: [
            "Architected Bulk Transaction API — 1,000 txns/req, sub-3s SLA",
            "Enhanced core payout system handling 10,000+ daily international transactions",
            "Ensured PCI DSS & global financial regulatory compliance",
            "5% improvement in throughput & 5% reduction in incident resolution time (MTTR)",
            "Integrated real-time webhook system for transaction status communication",
          ],
          tech: ["Java", "Spring Boot", "PostgreSQL", "Liquibase", "SQS", "Redis", "Docker", "Kubernetes", "AWS"],
          logo: "NIUM",
          current: false,
        },
        {
          id: 3,
          role: "Deputy Manager / SDE I",
          company: "Axis Bank",
          type: "Full-time",
          location: "Mumbai, India",
          period: "Aug 2022 – Jul 2025",
          duration: "3 years 2 months",
          description:
            "Led multiple backend initiatives across remittance, dormancy management, and transaction processing for one of India's largest private banks.",
          achievements: [
            "Built 20+ high-performance APIs — integrated Groww, INDmoney & Vested",
            "30% rise in platform adoption, 15% reduction in transaction failures",
            "Dormancy plugin saved ₹50 lakh/yr, reduced manual effort by 80%",
            "Transaction plugin bridged 10+ legacy .NET apps with IBM MQ",
            "10% throughput boost, 20% error reduction, ₹20 lakh annual savings",
            "Upgraded Java version from 17 → 19 with zero downtime",
          ],
          tech: ["Java", "Kotlin", "Spring Boot", "MySQL", "Flyway", "Kafka", "Redis", "IBM MQ", "Docker", "Kubernetes", "AWS"],
          logo: "AXIS",
          current: false,
        },
      ]),
      700
    )
  );

// ─── Blog / Articles ─────────────────────────────────────────────
export const getBlogs = () =>
  new Promise((resolve) =>
    setTimeout(() =>
      resolve([
        {
          id: 1,
          title: "Building High-Throughput APIs with Spring Boot",
          summary:
            "Deep dive into async processing, connection pooling, and SLA management for fintech-grade APIs.",
          tags: ["Spring Boot", "Java", "Performance"],
          date: "Mar 2025",
          readTime: "8 min",
          url: "#",
        },
        {
          id: 2,
          title: "Kafka vs SQS: Choosing the Right Queue for Payments",
          summary:
            "Comparing Apache Kafka and AWS SQS for high-volume financial event streaming with real production insights.",
          tags: ["Kafka", "AWS", "Architecture"],
          date: "Jan 2025",
          readTime: "6 min",
          url: "#",
        },
        {
          id: 3,
          title: "Microservices Patterns for Fintech Platforms",
          summary:
            "Saga pattern, outbox pattern, and idempotency keys — lessons from building cross-border payment systems.",
          tags: ["Microservices", "Fintech", "System Design"],
          date: "Nov 2024",
          readTime: "10 min",
          url: "#",
        },
        {
          id: 4,
          title: "Database Migration Strategies: Flyway vs Liquibase",
          summary:
            "Practical guide to schema versioning in production financial systems with zero-downtime migrations.",
          tags: ["Database", "PostgreSQL", "MySQL"],
          date: "Sep 2024",
          readTime: "5 min",
          url: "#",
        },
      ]),
      600
    )
  );

// ─── GitHub / Open Source ────────────────────────────────────────
export const getGithubStats = () =>
  new Promise((resolve) =>
    setTimeout(() =>
      resolve({
        username: "saoodcse",
        profileUrl: "https://github.com/saoodcse",
        stats: {
          publicRepos: 18,
          followers: 24,
          following: 31,
          totalStars: 42,
          totalCommits: "500+",
          contributions2024: 387,
        },
        topRepos: [
          {
            id: 1,
            name: "spring-boot-bulk-api",
            description: "Template for high-throughput bulk REST APIs with async processing and webhook support.",
            stars: 14,
            forks: 5,
            language: "Java",
            url: "https://github.com/saoodcse",
          },
          {
            id: 2,
            name: "fastapi-auth-service",
            description: "JWT-based authentication microservice with refresh token rotation and RBAC.",
            stars: 11,
            forks: 3,
            language: "Python",
            url: "https://github.com/saoodcse",
          },
          {
            id: 3,
            name: "kafka-payment-events",
            description: "Event-driven payment notification system using Apache Kafka and Spring Boot.",
            stars: 9,
            forks: 2,
            language: "Java",
            url: "https://github.com/saoodcse",
          },
          {
            id: 4,
            name: "kotlin-microservice-template",
            description: "Production-ready Kotlin + Spring Boot microservice boilerplate with Docker & K8s configs.",
            stars: 8,
            forks: 4,
            language: "Kotlin",
            url: "https://github.com/saoodcse",
          },
        ],
      }),
      800
    )
  );

// ─── Services ───────────────────────────────────────────────────
export const getServices = () =>
  new Promise((resolve) =>
    setTimeout(() =>
      resolve([
        {
          id: 1,
          title: "REST API Development",
          icon: "api",
          description:
            "Design and build production-grade REST APIs using Java Spring Boot or Python FastAPI with full documentation.",
          features: [
            "Endpoint design & OpenAPI docs",
            "Authentication & Authorization (JWT, OAuth2)",
            "Rate limiting & error handling",
            "Unit + integration testing",
          ],
          price: "₹15,000 / project",
          highlight: false,
        },
        {
          id: 2,
          title: "Microservices Architecture",
          icon: "hub",
          description:
            "Architect and implement scalable microservices with event-driven communication, service discovery, and fault tolerance.",
          features: [
            "Service decomposition & API gateway",
            "Kafka / SQS event streaming",
            "Docker + Kubernetes deployment",
            "Monitoring & observability setup",
          ],
          price: "₹35,000 / project",
          highlight: true,
        },
        {
          id: 3,
          title: "Backend Consulting",
          icon: "support",
          description:
            "System design review, code audits, performance bottleneck analysis, and architecture guidance.",
          features: [
            "1-on-1 architecture review session",
            "Code quality & security audit",
            "Database schema optimization",
            "Written report with recommendations",
          ],
          price: "₹2,500 / hour",
          highlight: false,
        },
        {
          id: 4,
          title: "Code Review",
          icon: "reviews",
          description:
            "Thorough review of your Java / Python / Kotlin backend codebase with actionable, prioritized feedback.",
          features: [
            "Design pattern adherence",
            "Performance & memory analysis",
            "Security vulnerability check",
            "Best practices report",
          ],
          price: "₹5,000 / repo",
          highlight: false,
        },
      ]),
      600
    )
  );

// ─── Certifications & Education ──────────────────────────────────
export const getCertifications = () =>
  new Promise((resolve) =>
    setTimeout(() =>
      resolve({
        education: [
          {
            id: 1,
            degree: "B.Tech — Computer Science Engineering",
            institution: "Vidya Vihar Institute of Technology, Purnea / Aryabhatta Knowledge University",
            period: "Aug 2018 – Aug 2022",
            grade: "CGPA: 8.02 / 10",
            coursework: ["Data Structures & Algorithms", "Databases", "OS", "Computer Networks", "Machine Learning"],
          },
        ],
        certifications: [
          {
            id: 1,
            name: "AWS Certified Cloud Practitioner",
            issuer: "Amazon Web Services",
            year: "2024",
            badge: "AWS",
            color: "#FF9900",
            url: "#",
          },
          {
            id: 2,
            name: "Build RESTful APIs using Kotlin with Spring Boot",
            issuer: "Udemy / Coursera",
            year: "2023",
            badge: "KOTLIN",
            color: "#7F52FF",
            url: "#",
          },
          {
            id: 3,
            name: "Spring Framework Specialization",
            issuer: "Coursera",
            year: "2023",
            badge: "SPRING",
            color: "#6DB33F",
            url: "#",
          },
          {
            id: 4,
            name: "Full Stack Development",
            issuer: "E&ICT Academy, IIT Kanpur",
            year: "2022",
            badge: "IIT",
            color: "#00E5FF",
            url: "#",
          },
          {
            id: 5,
            name: "Relational Database Management System",
            issuer: "E&ICT Academy, IIT Kanpur",
            year: "2022",
            badge: "RDBMS",
            color: "#FF6D00",
            url: "#",
          },
          {
            id: 6,
            name: "Python Programming",
            issuer: "C-DAC ACTS",
            year: "2022",
            badge: "PYTHON",
            color: "#3776AB",
            url: "#",
          },
          {
            id: 7,
            name: "JavaScript",
            issuer: "Coursera",
            year: "2023",
            badge: "JS",
            color: "#F7DF1E",
            url: "#",
          },
        ],
      }),
      700
    )
  );

// ─── Contact ─────────────────────────────────────────────────────
export const submitContact = (formData) =>
  new Promise((resolve) =>
    setTimeout(() => resolve({ success: true, data: formData }), 700)
  );