import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Divider,
  LinearProgress,
} from "@mui/material";

const TECH_STACK = [
  { category: "Backend Frameworks", items: ["Spring Boot", "FastAPI", "Django REST"], color: "#00E5FF" },
  { category: "Databases", items: ["MySQL", "PostgreSQL", "Redis", "MongoDB"], color: "#FF6D00" },
  { category: "Architecture", items: ["Microservices", "REST APIs", "Event-Driven", "CQRS"], color: "#00E5FF" },
  { category: "DevOps & Tools", items: ["Docker", "Kafka", "RabbitMQ", "Git"], color: "#FF6D00" },
];

const SKILLS_PROGRESS = [
  { name: "Java / Spring Boot", level: 90 },
  { name: "Python / FastAPI", level: 85 },
  { name: "MySQL & Database Design", level: 82 },
  { name: "Microservices Architecture", level: 78 },
  { name: "Docker & Containerization", level: 70 },
];

const EXPERIENCE = [
  {
    role: "Backend Developer",
    company: "Tech Startup",
    period: "2022 – Present",
    desc: "Built scalable REST APIs using Spring Boot and FastAPI. Designed MySQL schemas for high-traffic systems.",
  },
  {
    role: "Junior Java Developer",
    company: "Software House",
    period: "2021 – 2022",
    desc: "Maintained legacy monolith and led gradual migration to microservices architecture.",
  },
];

export default function About() {
  return (
    <Box sx={{ py: { xs: 2, md: 3 } }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2.2rem", md: "3rem" },
              color: "text.primary",
              mb: 2,
            }}
          >
            Backend{" "}
            <Box
              component="span"
              sx={{
                background: "linear-gradient(135deg, #00E5FF, #0091EA)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Architect
            </Box>
          </Typography>
          <Box
            sx={{
              width: 48,
              height: 2,
              background: "linear-gradient(90deg, #00E5FF, transparent)",
            }}
          />
        </Box>

        <Grid container spacing={6}>
          {/* Left - Bio */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="body1"
              sx={{ color: "text.secondary", mb: 3, lineHeight: 1.9, fontSize: "0.92rem" }}
            >
              I'm a backend-focused engineer with a passion for building systems
              that scale. My expertise lies in crafting clean, performant APIs
              and designing distributed architectures that handle real-world load.
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "text.secondary", mb: 4, lineHeight: 1.9, fontSize: "0.92rem" }}
            >
              I primarily work with{" "}
              <Box component="span" sx={{ color: "primary.main" }}>Spring Boot</Box>{" "}
              for enterprise Java services and{" "}
              <Box component="span" sx={{ color: "primary.main" }}>FastAPI</Box>{" "}
              for high-performance Python APIs. I design{" "}
              <Box component="span" sx={{ color: "primary.main" }}>MySQL</Box>{" "}
              schemas for complex data models and architect{" "}
              <Box component="span" sx={{ color: "primary.main" }}>Microservices</Box>{" "}
              systems with clean service boundaries and fault tolerance.
            </Typography>

            {/* Skills Progress */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
              {SKILLS_PROGRESS.map(({ name, level }) => (
                <Box key={name}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mb: 0.8,
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary", fontSize: "0.75rem", letterSpacing: "0.06em" }}
                    >
                      {name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "primary.main", fontSize: "0.72rem" }}
                    >
                      {level}%
                    </Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={level}
                    sx={{
                      height: 2,
                      borderRadius: 1,
                      background: "rgba(0, 229, 255, 0.08)",
                      "& .MuiLinearProgress-bar": {
                        background: "linear-gradient(90deg, #00E5FF, #0091EA)",
                        borderRadius: 1,
                      },
                    }}
                  />
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Right - Tech & Experience */}
          <Grid item xs={12} md={6}>
            {/* Tech Stack Grid */}
            <Box sx={{ mb: 5 }}>
              <Typography
                variant="body2"
                sx={{
                  color: "text.secondary",
                  fontSize: "0.72rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  mb: 2.5,
                }}
              >
                Tech Stack
              </Typography>
              <Grid container spacing={2}>
                {TECH_STACK.map(({ category, items, color }) => (
                  <Grid item xs={12} sm={6} key={category}>
                    <Box
                      sx={{
                        p: 2.5,
                        border: "1px solid rgba(0, 229, 255, 0.08)",
                        borderRadius: "2px",
                        background: "rgba(13, 27, 42, 0.5)",
                        height: "100%",
                        "&:hover": {
                          border: "1px solid rgba(0, 229, 255, 0.2)",
                          background: "rgba(0, 229, 255, 0.03)",
                        },
                        transition: "all 0.25s ease",
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          color,
                          fontSize: "0.68rem",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          mb: 1.5,
                        }}
                      >
                        {category}
                      </Typography>
                      {items.map((item) => (
                        <Typography
                          key={item}
                          variant="body2"
                          sx={{
                            color: "text.secondary",
                            fontSize: "0.8rem",
                            mb: 0.4,
                            "&::before": {
                              content: '"→ "',
                              color: color + "66",
                            },
                          }}
                        >
                          {item}
                        </Typography>
                      ))}
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>

            <Divider sx={{ borderColor: "rgba(0, 229, 255, 0.08)", mb: 3 }} />

            {/* Experience */}
            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                fontSize: "0.72rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                mb: 2.5,
              }}
            >
              Experience
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
              {EXPERIENCE.map(({ role, company, period, desc }) => (
                <Box
                  key={role}
                  sx={{
                    pl: 2,
                    borderLeft: "2px solid rgba(0, 229, 255, 0.2)",
                    "&:hover": {
                      borderLeftColor: "primary.main",
                    },
                    transition: "border-color 0.2s ease",
                  }}
                >
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between", mb: 0.3, flexWrap: "wrap", gap: 0.5 }}
                  >
                    <Typography
                      variant="body1"
                      sx={{ color: "text.primary", fontWeight: 500, fontSize: "0.88rem" }}
                    >
                      {role}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "primary.main", fontSize: "0.7rem", letterSpacing: "0.08em" }}
                    >
                      {period}
                    </Typography>
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{ color: "#FF6D00", fontSize: "0.75rem", mb: 0.8 }}
                  >
                    {company}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", fontSize: "0.8rem", lineHeight: 1.7 }}
                  >
                    {desc}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}