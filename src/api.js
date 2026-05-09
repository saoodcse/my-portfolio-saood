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
            { name: "Java",   level: 92 },
            { name: "Python", level: 80},
            { name: "Kotlin", level: 60 },
            { name: "SQL",    level: 85 },
          ],
        },


        {
          category: "AI & LLM",
          color: "#FF6D00",
          icon: "psychology",
          items: [
            { name: "OpenAI API",       level: 62 },
            { name: "LangChain",        level: 55 },
            { name: "Python Agents",    level: 58 },
            { name: "Prompt Engineering", level: 65 },
            { name: "RAG Pipeline",     level: 50 },
            { name: "Hugging Face",     level: 42 },
          ],
        },
        {
          category: "Frameworks",
          color: "#FF6D00",
          icon: "layers",
          items: [
            { name: "Spring Boot", level: 92 },
            { name: "FastAPI",     level: 68 },
            { name: "React.js",    level: 60 },
            { name: "LangChain",   level: 45 },
          ],
        },
        {
          category: "Testing",
          color: "#7F52FF",
          icon: "verified",
          items: [
            { name: "JUnit 5",        level: 85 },
            { name: "Mockito",        level: 82 },
            { name: "AssertJ",        level: 75 },
            { name: "Testcontainers", level: 68 },
            { name: "pytest",         level: 60 },
            { name: "REST Assured",   level: 65 },
          ],
        },
        {
          category: "Databases",
          color: "#00E5FF",
          icon: "storage",
          items: [
            { name: "MySQL",      level: 85 },
            { name: "PostgreSQL", level: 82 },
            { name: "Redis",      level: 78 },
            { name: "MongoDB",    level: 55 },
          ],
        },
        {
          category: "DB Migration",
          color: "#28CA41",
          icon: "swap_vert",
          items: [
            { name: "Flyway",     level: 82 },
            { name: "Liquibase",  level: 78 },
          ],
        },
        {
          category: "Messaging & Queue",
          color: "#FF6D00",
          icon: "hub",
          items: [
            { name: "Apache Kafka", level: 82 },
            { name: "AWS SQS",     level: 78 },
            { name: "IBM MQ",      level: 72 },
            { name: "RabbitMQ",    level: 60 },
          ],
        },
        {
          category: "DevOps & Cloud",
          color: "#00E5FF",
          icon: "cloud",
          items: [
            { name: "Docker",     level: 80 },
            { name: "Kubernetes", level: 75 },
            { name: "AWS",        level: 78 },
            { name: "CI/CD",      level: 72 },
          ],
        },
        {
          category: "Tools",
          color: "#FF6D00",
          icon: "build",
          items: [
            { name: "Git / Bitbucket",  level: 90 },
            { name: "Postman",          level: 88 },
            { name: "IntelliJ IDEA",    level: 90 },
            { name: "Jira / Confluence",level: 80 },
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
          companyUrl: "https://www.icicibank.com",
          type: "Full-time",
          location: "Mumbai, India",
          period: "Apr 2026 – Present",
          duration: "2 months",
          current: true,
          logo: "ICICI",
          domain: "Banking · AI · Digital Transformation",
          description:
            "Architecting AI-driven automation and scalable backend services for India's second-largest private bank, focusing on enhancing customer intelligence and core banking lifecycle management.",
          impact: [
            { label: "SLA Improvement", value: "Significant" },
            { label: "Manual Effort", value: "Reduced" },
            { label: "Latency", value: "Low" },
          ],
          achievements: [
            {
              text: "Engineered an AI-powered 'Customer Email Intelligence System' using OpenAI and Azure AI to classify inbound intents (Account, Cards, Disputes) and auto-generate contextual replies.",
              metric: "SLA Optimized",
            },
            {
              text: "Developed high-concurrency Demand Account and Card Management backend services supporting end-to-end customer lifecycle operations.",
              metric: "Scalable APIs",
            },
            {
              text: "Implemented low-latency RESTful architectures in a zero-downtime environment to handle millions of critical financial transactions.",
              metric: "High Availability",
            },
          ],
          tech: {
            languages: ["Java"],
            frameworks: ["Spring Boot"],
            architecture: ["Microservices", "REST APIs", "Event-Driven"],
            ai: ["OpenAI API", "Azure AI"],
            databases: ["PostgreSQL"],
          },
        },
        {
          id: 2,
          role: "Software Development Engineer I",
          company: "NIUM",
          // ... (Rest of your NIUM data remains the same)
          companyUrl: "https://nium.com",
          type: "Full-time",
          location: "Mumbai, India",
          period: "Aug 2025 – Apr 2026",
          duration: "9 months",
          current: false,
          logo: "NIUM",
          domain: "Cross-Border Payments · Fintech Unicorn",
          description:
            "Built and optimized cross-border payout infrastructure at a global fintech unicorn processing international transactions across 100+ countries.",
          impact: [
            { label: "Txns / Day", value: "10K+" },
            { label: "API SLA", value: "<3s" },
            { label: "Throughput ↑", value: "5%" },
            { label: "MTTR ↓", value: "5%" },
          ],
          achievements: [
            {
              text: "Architected Bulk Transaction API supporting 1,000 txns/req with sub-3s SLA using async acknowledgment and job scheduling",
              metric: "1,000 txns/req",
            },
            {
              text: "Enhanced core Cross-Border Payout System handling 10,000+ daily international transactions",
              metric: "10,000+ txns/day",
            },
            {
              text: "Maintained PCI DSS compliance and global financial regulatory standards end-to-end",
              metric: null,
            },
            {
              text: "Improved overall system throughput by 5% and reduced incident resolution time (MTTR) by 5%",
              metric: "5% ↑ throughput",
            },
            {
              text: "Integrated real-time webhook system for intermediate transaction status communication to clients",
              metric: null,
            },
          ],
          tech: {
            languages: ["Java"],
            frameworks: ["Spring Boot", "Liquibase"],
            databases: ["PostgreSQL", "Redis"],
            messaging: ["AWS SQS"],
            infra: ["Docker", "Kubernetes", "AWS"],
          },
        },
        {
          id: 3,
          role: "Deputy Manager / SDE I",
          company: "Axis Bank",
          // ... (Rest of your Axis data remains the same)
          companyUrl: "https://www.axisbank.com",
          type: "Full-time",
          location: "Mumbai, India",
          period: "Aug 2022 – Jul 2025",
          duration: "3 yrs 2 months",
          current: false,
          logo: "AXIS",
          domain: "Remittance · Payments · Automation",
          description:
            "Led multiple high-impact backend initiatives across outward remittance, dormancy automation, and legacy transaction processing at one of India's largest private banks.",
          impact: [
            { label: "APIs Built", value: "20+" },
            { label: "Adoption ↑", value: "30%" },
            { label: "Annual Saving", value: "₹70L+" },
            { label: "Manual Effort ↓", value: "80%" },
          ],
          achievements: [
            {
              text: "Built 20+ high-performance REST APIs integrating fintech partners Groww, INDmoney & Vested for outward remittance and global stock investments",
              metric: "20+ APIs",
            },
            {
              text: "Drove 30% rise in platform adoption and 15% reduction in transaction failures through API reliability improvements",
              metric: "30% adoption ↑",
            },
            {
              text: "Designed and implemented a dormancy automation plugin that identified inactive employee accounts with no login activity for 15 days by integrating with a Hydrogen relational database. Automated the extraction of inactive user records, generated CSV files in a predefined format, and uploaded them to the STP server for downstream processing and data synchronization — saving ₹50 lakh annually and eliminating 100% of manual effort.",
              metric: "₹50L/yr saved",
            },
            {
              text: "Implemented encryption for ESB APIs and upgraded application Java version from 17 → 19 with zero downtime",
              metric: null,
            },
          ],
          tech: {
            languages: ["Java", "Kotlin"],
            frameworks: ["Spring Boot", "Flyway"],
            databases: ["MySQL", "Redis"],
            messaging: ["Apache Kafka", "IBM MQ"],
            infra: ["Docker", "Kubernetes", "AWS"],
          },
        },
      ]),
      700
    )
  );

// // ─── Experience ──────────────────────────────────────────────────
// export const getExperience = () =>
//   new Promise((resolve) =>
//     setTimeout(() =>
//       resolve([
//         {
//           id: 1,
//           role: "Senior Software Engineer",
//           company: "ICICI Bank",
//           type: "Full-time",
//           location: "Mumbai, India",
//           period: "Apr 2026 – Present",
//           duration: "2 months",
//           description:
//             "Contributing to backend services and microservices-based applications for core banking systems at India's second-largest private bank.",
//           achievements: [
//             "Working on Java microservices for core banking operations",
//             "Contributing to high-availability financial backend systems",
//           ],
//           tech: ["Java", "Spring Boot", "Microservices", "Banking APIs"],
//           logo: "ICICI",
//           current: true,
//         },
//         {
//           id: 2,
//           role: "Software Development Engineer I",
//           company: "NIUM",
//           type: "Full-time",
//           location: "Mumbai, India",
//           period: "Aug 2025 – Apr 2026",
//           duration: "9 months",
//           description:
//             "Built and optimized cross-border payout infrastructure for a global fintech unicorn.",
//           achievements: [
//             "Architected Bulk Transaction API — 1,000 txns/req, sub-3s SLA",
//             "Enhanced core payout system handling 10,000+ daily international transactions",
//             "Ensured PCI DSS & global financial regulatory compliance",
//             "5% improvement in throughput & 5% reduction in incident resolution time (MTTR)",
//             "Integrated real-time webhook system for transaction status communication",
//           ],
//           tech: ["Java", "Spring Boot", "PostgreSQL", "Liquibase", "SQS", "Redis", "Docker", "Kubernetes", "AWS"],
//           logo: "NIUM",
//           current: false,
//         },
//         {
//           id: 3,
//           role: "Deputy Manager / SDE I",
//           company: "Axis Bank",
//           type: "Full-time",
//           location: "Mumbai, India",
//           period: "Aug 2022 – Jul 2025",
//           duration: "3 years 2 months",
//           description:
//             "Led multiple backend initiatives across remittance, dormancy management, and transaction processing for one of India's largest private banks.",
//           achievements: [
//             "Built 20+ high-performance APIs — integrated Groww, INDmoney & Vested",
//             "30% rise in platform adoption, 15% reduction in transaction failures",
//             "Dormancy plugin saved ₹50 lakh/yr, reduced manual effort by 80%",
//             "Transaction plugin bridged 10+ legacy .NET apps with IBM MQ",
//             "10% throughput boost, 20% error reduction, ₹20 lakh annual savings",
//             "Upgraded Java version from 17 → 19 with zero downtime",
//           ],
//           tech: ["Java", "Kotlin", "Spring Boot", "MySQL", "Flyway", "Kafka", "Redis", "IBM MQ", "Docker", "Kubernetes", "AWS"],
//           logo: "AXIS",
//           current: false,
//         },
//       ]),
//       700
//     )
//   );

/**
 * Advanced Developer Content Service
 * Returns a collection of high-value technical articles with validated URLs.
 */
export const getBlogs = () =>
  new Promise((resolve) =>
    setTimeout(() =>
      resolve([
        {
          id: 1,
          title: "Production-Ready Spring Boot: Beyond 'Hello World'",
          summary: "Mastering the 'ilities': Scalability, Reliability, and Maintainability through advanced DTO patterns and global exception handling.",
          tags: ["Spring Boot", "Java", "Backend"],
          date: "May 2026",
          readTime: "8 min",
          url: "https://www.baeldung.com/rest-with-spring-series",
        },
        {
          id: 2,
          title: "FastAPI vs. Spring Boot: Performance Benchmarks",
          summary: "A deep dive into Pydantic v2 vs. Jackson, and how async Python holds up against the JVM in high-concurrency environments.",
          tags: ["FastAPI", "Spring Boot", "Benchmarks"],
          date: "Apr 2026",
          readTime: "12 min",
          url: "https://www.techempower.com/benchmarks/",
        },
        {
          id: 3,
          title: "Zero-Trust Security with JWT & OAuth2",
          summary: "Implementing robust security in microservices: handling token revocation, rotating keys, and securing the API Gateway.",
          tags: ["Security", "JWT", "Microservices"],
          date: "Mar 2026",
          readTime: "10 min",
          url: "https://auth0.com/blog/zero-trust-architecture-and-identity/",
        },
        {
          id: 4,
          title: "LLM Orchestration with FastAPI and LangChain",
          summary: "Building scalable AI agents. How to manage streaming responses and context windows in a production Python backend.",
          tags: ["AI", "FastAPI", "LangChain"],
          date: "Feb 2026",
          readTime: "15 min",
          url: "https://python.langchain.com/docs/use_cases/apis",
        },
        {
          id: 5,
          title: "Event-Driven FinTech: Kafka Mastery",
          summary: "Solving the 'exactly-once' delivery problem in financial transactions using Kafka Streams and Idempotency keys.",
          tags: ["Kafka", "Fintech", "Distributed Systems"],
          date: "Jan 2026",
          readTime: "9 min",
          url: "https://www.confluent.io/blog/exactly-once-semantics-are-possible-heres-how-apache-kafka-does-it/",
        },
        {
          id: 6,
          title: "Observability: Tracing Microservices in Production",
          summary: "Using OpenTelemetry and Prometheus to find the needle in the haystack when your distributed system goes silent.",
          tags: ["DevOps", "SRE", "OpenTelemetry"],
          date: "Dec 2025",
          readTime: "11 min",
          url: "https://opentelemetry.io/docs/concepts/observability/",
        },
        {
          id: 7,
          title: "The Saga Pattern for Distributed Transactions",
          summary: "How to maintain data consistency across microservices without the overhead of 2PC (Two-Phase Commit).",
          tags: ["System Design", "Microservices", "Architecture"],
          date: "Nov 2025",
          readTime: "13 min",
          url: "https://microservices.io/patterns/data/saga.html",
        },
        {
          id: 8,
          title: "Kubernetes-Native Development: Docker to K8s",
          summary: "Optimizing your container lifecycle: Multi-stage builds, Helm charts, and managing secrets securely.",
          tags: ["Docker", "Kubernetes", "Cloud Native"],
          date: "Oct 2025",
          readTime: "7 min",
          url: "https://kubernetes.io/docs/concepts/workloads/pods/",
        },
        {
          id: 9,
          title: "Vector Databases: The Backbone of Modern AI",
          summary: "Why traditional SQL isn't enough for AI. A look at Retrieval Augmented Generation (RAG) and semantic search.",
          tags: ["AI", "Vector DB", "RAG"],
          date: "Sep 2025",
          readTime: "10 min",
          url: "https://www.pinecone.io/learn/vector-database/",
        },
        {
          id: 10,
          title: "gRPC vs REST: Choosing the Right Protocol",
          summary: "When to use Protocol Buffers over JSON. Benchmarking latency and payload size in internal service communication.",
          tags: ["Microservices", "gRPC", "API Design"],
          date: "Aug 2025",
          readTime: "8 min",
          url: "https://grpc.io/blog/grpc-vs-rest/",
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
          publicRepos: 8,
          followers: 0,
          following: 0,
          totalStars: 2,
          totalCommits: "50+",
          contributions2024: 0,
        },
        topRepos: [
          {
            id: 1,
            name: "spring-boot-bulk-api",
            description: "Template for high-throughput bulk REST APIs with async processing and webhook support.",
            stars: 0,
            forks: 0,
            language: "Java",
            url: "https://github.com/saoodcse",
          },
          {
            id: 2,
            name: "fastapi-auth-service",
            description: "JWT-based authentication microservice with refresh token rotation and RBAC.",
            stars: 0,
            forks: 0,
            language: "Python",
            url: "https://github.com/saoodcse",
          },
          {
            id: 3,
            name: "kafka-payment-events",
            description: "Event-driven payment notification system using Apache Kafka and Spring Boot.",
            stars: 0,
            forks: 0,
            language: "Java",
            url: "https://github.com/saoodcse",
          },
          {
            id: 4,
            name: "kotlin-microservice-template",
            description: "Production-ready Kotlin + Spring Boot microservice boilerplate with Docker & K8s configs.",
            stars: 0,
            forks: 0,
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

export const getHomeData = () =>
  new Promise((resolve) =>
    setTimeout(() =>
      resolve({
        name:     "Saood Alam",
        initials: "SA",
        role:     "Senior Software Engineer",
        tagline:  "Java · Python · AI/LLM · Fintech",
        location: "Mumbai, India",
        status:   "OPEN TO WORK",
        bio:      "Senior Software Engineer with 3.6+ years building scalable, low-latency distributed systems in fintech and banking. Specializing in Java, Python, Spring Boot, and AI/LLM integrations for high-performance backend and intelligent automation solutions",
        social: {
          github:   "https://github.com/saoodcse",
          linkedin: "https://www.linkedin.com/in/saoodcse/",
          email:    "mailto:saoodalamcse2018@gmail.com",
        },
        stats: [
          { value: "3.8+", label: "Years Experience" },
          { value: "20+",  label: "APIs Built"        },
          { value: "50L+", label: "INR Saved/Year"    },
          { value: "3",    label: "Companies"         },
        ],
        skills: [
          "Java", "Python", "Spring Boot",
          "FastAPI", "LangChain", "OpenAI API", "NLP",
          "Vector DB", "Microservices", "Kafka", "Redis",
          "Docker", "Kubernetes", "AWS", "PostgreSQL",
          "JUnit", "Mockito", "REST Assured", "TestContainers",
        ],
        terminal: [
          { cmd: "$ whoami",   val: "saood_alam"                           },
          { cmd: "$ role",     val: "Senior Software Engineer"             },
          { cmd: "$ stack",    val: "java | python | fastapi" },
          { cmd: "$ ai",       val: "llm | langchain | openai | vector-db" },
          { cmd: "$ domain",   val: "fintech | payments | ai-backend"      },
          { cmd: "$ location", val: "Mumbai, India"                        },
          { cmd: "$ status",   val: "open_to_work ✓"                       },
        ],
      }),
      750
    )
  );




  export const getAboutData = () =>
  new Promise((resolve) =>
    setTimeout(() =>
      resolve({
        name:     "Saood Alam",
        initials: "SA",
        handle:   "@saoodcse",
        role:     "Senior Software Engineer",
        status:   "Available for opportunities",

        bio: [
          {
            text: "Senior SDE with 3.6+ years of deep backend expertise in",
            highlights: [],
          },
          {
            text: "fintech and banking domains — currently at ICICI Bank building scalable, secure financial systems.",
            highlights: ["fintech and banking domains", "ICICI Bank"],
          },
          {
            text: "Previously at NIUM I architected a Bulk Transaction API processing 1,000 txns/req with sub-3s SLA, maintaining PCI DSS-compliant infrastructure for 10,000+ daily cross-border transactions.",
            highlights: ["NIUM", "1,000 txns/req", "sub-3s SLA", "10,000+ daily cross-border transactions"],
          },
          {
            text: "At Axis Bank I built 20+ high-performance APIs integrating Groww, INDmoney & Vested — driving 30% adoption growth and saving ₹70+ lakh annually through automation.",
            highlights: ["Axis Bank", "20+ high-performance APIs", "30% adoption growth", "₹70+ lakh"],
          },
          {
            text: "Currently exploring AI/LLM-based backend solutions and Python-driven intelligent systems alongside core Java/Kotlin work.",
            highlights: ["AI/LLM-based backend solutions", "Python-driven intelligent systems"],
          },
        ],

        quickInfo: [
          { icon: "🏦", label: "Current",    value: "ICICI Bank — Senior SDE"        },
          { icon: "🌍", label: "Domain",     value: "Fintech · Payments · Banking · AI" },
          { icon: "📍", label: "Location",   value: "Mumbai, Maharashtra, India"     },
          { icon: "🎓", label: "Education",  value: "B.Tech CSE — CGPA 8.02"        },
          { icon: "🤖", label: "Exploring",  value: "AI / LLM / Python Agents"      },
          { icon: "📧", label: "Email",      value: "saoodalamcse2018@gmail.com"     },
          { icon: "🔗", label: "LinkedIn",   value: "linkedin.com/in/saoodcse"       },
          { icon: "💻", label: "GitHub",     value: "github.com/saoodcse"            },
        ],

        softSkills: [
          "System Design", "Technical Leadership", "Problem Solving",
          "Code Review", "Agile / Scrum", "Production Support",
          "Cross-team Collaboration", "Documentation",
        ],

        skillsProgress: [
          { name: "Java / Spring Boot",             level: 92, color: "#00E5FF" },
          { name: "Kotlin / Spring Boot",            level: 85, color: "#7F52FF" },
          { name: "Microservices & Dist. Systems",   level: 88, color: "#00E5FF" },
          { name: "Python / FastAPI",                level: 72, color: "#3776AB" },
          { name: "AI / LLM Integration",           level: 58, color: "#FF6D00" },
          { name: "AWS / Docker / Kubernetes",       level: 78, color: "#FF9900" },
          { name: "MySQL & PostgreSQL",              level: 83, color: "#00E5FF" },
        ],

        techStack: [
          {
            category: "Languages",
            color: "#00E5FF",
            items: ["Java", "Kotlin", "Python", "SQL"],
          },
          {
            category: "Frameworks",
            color: "#FF6D00",
            items: ["Spring Boot", "FastAPI", "LangChain"],
          },
          {
            category: "Testing",
            color: "#7F52FF",
            items: ["JUnit 5", "Mockito", "AssertJ", "Testcontainers", "pytest"],
          },
          {
            category: "AI & LLM",
            color: "#FF6D00",
            items: ["OpenAI API", "LangChain", "Python Agents", "LLM Fine-tuning"],
          },
          {
            category: "Databases",
            color: "#00E5FF",
            items: ["MySQL", "PostgreSQL", "Redis", "Flyway", "Liquibase"],
          },

            {
            category: "Database Migration",
            color: "#00E5FF",
            items: ["Flyway", "Liquibase"],
          },
          {
            category: "Messaging & Queue",
            color: "#FF6D00",
            items: ["Apache Kafka", "AWS SQS", "IBM MQ", "RabbitMQ"],
          },
          {
            category: "DevOps & Cloud",
            color: "#00E5FF",
            items: ["Docker", "Kubernetes", "AWS", "CI/CD", "Git", "Bitbucket"],
          },
          {
            category: "Architecture",
            color: "#FF6D00",
            items: ["Microservices", "Event-Driven", "REST APIs", "CQRS", "Saga Pattern"],
          },
        ],
      }),
      800
    )
  );

// ─── Contact ─────────────────────────────────────────────────────
export const submitContact  = (formData) =>
  new Promise((resolve) =>
    setTimeout(() => resolve({ success: true, data: formData }), 700)
  );