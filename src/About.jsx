import React from "react";
import {
  Box,
  Container,
  Typography,
  Chip,
} from "@mui/material";

const BIO_HIGHLIGHTS = [
  { icon: "🏦", label: "Current", value: "ICICI Bank — Senior SDE" },
  { icon: "🌍", label: "Domain", value: "Fintech · Payments · Banking" },
  { icon: "📍", label: "Location", value: "Mumbai, Maharashtra, India" },
  { icon: "🎓", label: "Education", value: "B.Tech CSE — CGPA 8.02" },
  { icon: "📧", label: "Email", value: "saoodalamcse2018@gmail.com" },
  { icon: "🔗", label: "LinkedIn", value: "linkedin.com/in/saoodcse" },
];

const SKILLS_PROGRESS = [
  { name: "Java / Spring Boot", level: 92, color: "#00E5FF" },
  { name: "Kotlin / Spring Boot", level: 85, color: "#7F52FF" },
  { name: "Microservices & Dist. Systems", level: 88, color: "#00E5FF" },
  { name: "AWS / Docker / Kubernetes", level: 78, color: "#FF9900" },
  { name: "Python / FastAPI", level: 72, color: "#3776AB" },
  { name: "MySQL & PostgreSQL", level: 83, color: "#FF6D00" },
];

const TECH_STACK = [
  {
    category: "Languages",
    items: ["Java", "Kotlin", "Python", "SQL"],
    color: "#00E5FF",
  },
  {
    category: "Frameworks",
    items: ["Spring Boot", "FastAPI", "JUnit", "Mockito"],
    color: "#FF6D00",
  },
  {
    category: "Databases",
    items: ["MySQL", "PostgreSQL", "Redis"],
    color: "#00E5FF",
  },
  {
    category: "DevOps",
    items: ["Docker", "Kubernetes", "AWS", "CI/CD"],
    color: "#FF6D00",
  },
];

const SOFT_SKILLS = [
  "System Design",
  "Leadership",
  "Problem Solving",
  "Code Review",
  "Agile",
  "Production Support",
];

function SectionLabel({ children }) {
  return (
    <Typography
      sx={{
        color: "text.secondary",
        fontSize: "0.65rem",
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        mb: 2,
        fontFamily: "'DM Mono', monospace",
        display: "flex",
        alignItems: "center",
        gap: 1,
        "&::before": {
          content: '""',
          width: 16,
          height: 1,
          background: "rgba(0,229,255,0.4)",
          display: "inline-block",
        },
      }}
    >
      {children}
    </Typography>
  );
}

export default function About() {
  return (
    <Box sx={{ py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">

        {/* HEADER */}
        <Box sx={{ mb: 8 }}>
          <Typography
            sx={{
              color: "primary.main",
              fontSize: "0.72rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              mb: 1,
              fontFamily: "'DM Mono', monospace",
            }}
          >
            // 02. about
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2.4rem", md: "3.2rem" },
              color: "text.primary",
              mb: 1,
              lineHeight: 1.1,
            }}
          >
            The Developer{" "}
            <Box
              component="span"
              sx={{
                background:
                  "linear-gradient(135deg,#00E5FF,#0091EA)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Behind the Code
            </Box>
          </Typography>
        </Box>

        {/* ROW 1 */}
        <Box
          sx={{
            display: "flex",
            gap: 4,
            mb: 8,
            flexDirection: { xs: "column", md: "row" },
            alignItems: "stretch",
          }}
        >

          {/* LEFT BIO */}
          <Box
            sx={{
              flex: 1,
              p: 3,
              border: "1px solid rgba(0,229,255,0.1)",
              background: "rgba(13,27,42,0.6)",
              borderRadius: "2px",
            }}
          >
            <SectionLabel>Bio</SectionLabel>

            <Typography
              sx={{
                color: "text.secondary",
                lineHeight: 2,
                mb: 2,
                fontFamily: "'DM Mono', monospace",
              }}
            >
              I'm a{" "}
              <Box component="span" sx={{ color: "primary.main" }}>
                Senior Software Engineer
              </Box>{" "}
              with strong backend expertise in fintech and banking systems.
            </Typography>

            <Typography
              sx={{
                color: "text.secondary",
                lineHeight: 2,
                mb: 2,
                fontFamily: "'DM Mono', monospace",
              }}
            >
              Currently working at{" "}
              <Box component="span" sx={{ color: "#00E5FF" }}>
                ICICI Bank
              </Box>{" "}
              building scalable and secure financial systems.
            </Typography>

            <Typography
              sx={{
                color: "text.secondary",
                lineHeight: 2,
                fontFamily: "'DM Mono', monospace",
              }}
            >
              Experienced in microservices, event-driven architecture,
              distributed systems, APIs, Kafka, Docker, Kubernetes,
              AWS, and high-performance backend engineering.
            </Typography>

            <Box sx={{ mt: 4 }}>
              <SectionLabel>Soft Skills</SectionLabel>

              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 1,
                }}
              >
                {SOFT_SKILLS.map((skill) => (
                  <Chip
                    key={skill}
                    label={skill}
                    size="small"
                    sx={{
                      background: "rgba(255,109,0,0.08)",
                      border: "1px solid rgba(255,109,0,0.18)",
                      color: "#FF6D00",
                    }}
                  />
                ))}
              </Box>
            </Box>
          </Box>

          {/* RIGHT PHOTO */}
          <Box
            sx={{
              width: { xs: "100%", md: "340px" },
              border: "1px solid rgba(0,229,255,0.15)",
              background: "rgba(13,27,42,0.7)",
              borderRadius: "2px",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                height: "100%",
                minHeight: 420,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                background:
                  "linear-gradient(160deg, rgba(0,229,255,0.06), rgba(5,10,18,0.95))",
              }}
            >
              <Box
                sx={{
                  width: 110,
                  height: 110,
                  borderRadius: "50%",
                  background:
                    "linear-gradient(135deg, rgba(0,229,255,0.18), rgba(0,145,234,0.1))",
                  border: "2px solid rgba(0,229,255,0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "2rem",
                  color: "primary.main",
                  fontWeight: 700,
                  fontFamily: "'DM Mono', monospace",
                  mb: 2,
                }}
              >
                SA
              </Box>

              <Typography
                sx={{
                  color: "text.primary",
                  fontSize: "1rem",
                  fontWeight: 700,
                  fontFamily: "'DM Mono', monospace",
                }}
              >
                Saood Alam
              </Typography>

              <Typography
                sx={{
                  color: "primary.main",
                  fontSize: "0.7rem",
                  mt: 1,
                  fontFamily: "'DM Mono', monospace",
                }}
              >
                @saoodcse
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* ROW 2 */}
        <Box
          sx={{
            display: "flex",
            gap: 4,
            mb: 8,
            flexDirection: { xs: "column", md: "row" },
            alignItems: "stretch",
          }}
        >

          {/* QUICK INFO */}
          <Box
            sx={{
              flex: 1,
              p: 3,
              border: "1px solid rgba(0,229,255,0.1)",
              background: "rgba(13,27,42,0.6)",
              borderRadius: "2px",
            }}
          >
            <SectionLabel>Quick Info</SectionLabel>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              {BIO_HIGHLIGHTS.map(({ icon, label, value }) => (
                <Box
                  key={label}
                  sx={{
                    display: "flex",
                    gap: 1.5,
                    pb: 1.5,
                    borderBottom:
                      "1px solid rgba(0,229,255,0.05)",
                  }}
                >
                  <Typography>{icon}</Typography>

                  <Box>
                    <Typography
                      sx={{
                        color: "text.secondary",
                        fontSize: "0.65rem",
                        textTransform: "uppercase",
                        mb: 0.3,
                        fontFamily: "'DM Mono', monospace",
                      }}
                    >
                      {label}
                    </Typography>

                    <Typography
                      sx={{
                        color: "text.primary",
                        fontSize: "0.8rem",
                        fontFamily: "'DM Mono', monospace",
                      }}
                    >
                      {value}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>

          {/* PROFICIENCY */}
          <Box
            sx={{
              flex: 1,
              p: 3,
              border: "1px solid rgba(0,229,255,0.1)",
              background: "rgba(13,27,42,0.6)",
              borderRadius: "2px",
            }}
          >
            <SectionLabel>Proficiency</SectionLabel>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 3,
              }}
            >
              {SKILLS_PROGRESS.map(({ name, level, color }) => (
                <Box key={name}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mb: 1,
                    }}
                  >
                    <Typography
                      sx={{
                        color: "text.secondary",
                        fontSize: "0.75rem",
                        fontFamily: "'DM Mono', monospace",
                      }}
                    >
                      {name}
                    </Typography>

                    <Typography
                      sx={{
                        color,
                        fontSize: "0.72rem",
                        fontFamily: "'DM Mono', monospace",
                      }}
                    >
                      {level}%
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      height: 5,
                      borderRadius: 10,
                      background: "rgba(0,229,255,0.06)",
                      overflow: "hidden",
                    }}
                  >
                    <Box
                      sx={{
                        width: `${level}%`,
                        height: "100%",
                        background: `linear-gradient(90deg, ${color}, ${color}88)`,
                      }}
                    />
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        {/* TECH STACK */}
        <Box>
          <SectionLabel>Tech Stack</SectionLabel>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            {TECH_STACK.map(({ category, items, color }) => (
              <Box
                key={category}
                sx={{
                  flex: {
                    xs: "1 1 100%",
                    sm: "1 1 calc(50% - 8px)",
                  },
                  p: 2,
                  border: "1px solid rgba(0,229,255,0.08)",
                  background: "rgba(13,27,42,0.5)",
                  borderRadius: "2px",
                }}
              >
                <Typography
                  sx={{
                    color,
                    fontSize: "0.7rem",
                    textTransform: "uppercase",
                    mb: 1.5,
                    fontFamily: "'DM Mono', monospace",
                  }}
                >
                  {category}
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 0.8,
                  }}
                >
                  {items.map((item) => (
                    <Chip
                      key={item}
                      label={item}
                      size="small"
                      sx={{
                        background: `${color}0D`,
                        border: `1px solid ${color}25`,
                        color: "text.secondary",
                        fontSize: "0.63rem",
                      }}
                    />
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

      </Container>
    </Box>
  );
}