import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import {
  Box,
  Container,
  Typography,
  Button,
  Chip,
} from "@mui/material";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import EmailIcon from "@mui/icons-material/Email";
import ArticleIcon from "@mui/icons-material/Article";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const SKILLS = [
  "Java",
  "Kotlin",
  "Python",
  "Spring Boot",
  "Microservices",
  "REST APIs",
  "Kafka",
  "Redis",
  "Docker",
  "Kubernetes",
  "AWS",
  "PostgreSQL",
];

const STATS = [
  { value: "3.6+", label: "Years Experience" },
  { value: "20+", label: "APIs Built" },
  { value: "10K+", label: "Txns / Day" },
  { value: "3", label: "Companies" },
];

const TERMINAL_LINES = [
  { cmd: "$ whoami", val: "saood_alam" },
  { cmd: "$ company", val: "ICICI Bank (current)" },
  { cmd: "$ prev", val: "NIUM · Axis Bank" },
  { cmd: "$ stack", val: "java | kotlin | python" },
  { cmd: "$ domain", val: "fintech | payments" },
  { cmd: "$ location", val: "Mumbai, India" },
  { cmd: "$ status", val: "open_to_work ✓" },
];

function Cursor() {
  const [on, setOn] = useState(true);

  useEffect(() => {
    const t = setInterval(() => {
      setOn((v) => !v);
    }, 530);

    return () => clearInterval(t);
  }, []);

  return (
    <Box
      component="span"
      sx={{
        color: "primary.main",
        opacity: on ? 1 : 0,
        transition: "opacity 0.1s",
      }}
    >
      ▌
    </Box>
  );
}

export default function Home() {
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;

    if (!el) return;

    el.style.opacity = "0";
    el.style.transform = "translateY(28px)";

    requestAnimationFrame(() => {
      el.style.transition =
        "opacity 0.9s ease, transform 0.9s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    });
  }, []);

  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 64px)",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        py: { xs: 8, md: 4 },
      }}
    >
      {/* Background */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          backgroundImage:
            "radial-gradient(rgba(0,229,255,0.07) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage:
            "radial-gradient(ellipse 85% 85% at 50% 50%, black 20%, transparent 100%)",
        }}
      />

      {/* Glow */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          top: "-10%",
          left: "-5%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,229,255,0.07) 0%, transparent 70%)",
        }}
      />

      <Box
        aria-hidden
        sx={{
          position: "absolute",
          bottom: "-15%",
          right: "-5%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,109,0,0.06) 0%, transparent 70%)",
        }}
      />

      <Container maxWidth="lg" ref={heroRef}>
        {/* MAIN FLEX */}
        <Box
          sx={{
            display: "flex",
            gap: 5,
            flexDirection: {
              xs: "column",
              md: "row",
            },
            alignItems: "stretch",
          }}
        >
          {/* LEFT SIDE */}
          <Box
            sx={{
              flex: 1,
              minWidth: 0,
            }}
          >
            {/* Status */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                mb: 3,
                flexWrap: "wrap",
              }}
            >
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 0.8,
                  px: 1.5,
                  py: 0.6,
                  border:
                    "1px solid rgba(0,229,255,0.2)",
                  borderRadius: "2px",
                  background:
                    "rgba(0,229,255,0.04)",
                }}
              >
                <Box
                  sx={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "#00E5FF",
                    boxShadow: "0 0 8px #00E5FF",
                  }}
                />

                <Typography
                  sx={{
                    color: "primary.main",
                    fontSize: "0.68rem",
                    letterSpacing: "0.12em",
                    fontFamily: "'DM Mono',monospace",
                  }}
                >
                  OPEN TO WORK
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                }}
              >
                <LocationOnIcon
                  sx={{
                    fontSize: 14,
                    color: "text.secondary",
                  }}
                />

                <Typography
                  sx={{
                    color: "text.secondary",
                    fontSize: "0.72rem",
                    fontFamily: "'DM Mono',monospace",
                  }}
                >
                  Mumbai, India
                </Typography>
              </Box>
            </Box>

            {/* Name */}
            <Box sx={{ mb: 3 }}>
              <Typography
                sx={{
                  color: "text.secondary",
                  fontSize: "0.78rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  mb: 1,
                  fontFamily: "'DM Mono',monospace",
                }}
              >
                Senior Software Engineer
              </Typography>

              <Typography
                variant="h1"
                sx={{
                  fontSize: {
                    xs: "3rem",
                    sm: "4rem",
                    md: "5rem",
                  },
                  lineHeight: 1,
                  fontWeight: 800,
                  color: "text.primary",
                }}
              >
                Saood
              </Typography>

              <Typography
                variant="h1"
                sx={{
                  fontSize: {
                    xs: "3rem",
                    sm: "4rem",
                    md: "5rem",
                  },
                  lineHeight: 1,
                  fontWeight: 800,
                  mb: 2,
                  background:
                    "linear-gradient(135deg,#00E5FF 0%,#0091EA 60%,#FF6D00 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Alam
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <Box
                  sx={{
                    width: 48,
                    height: 2,
                    background:
                      "linear-gradient(90deg,#00E5FF,transparent)",
                  }}
                />

                <Typography
                  sx={{
                    color: "text.secondary",
                    fontSize: "0.72rem",
                    letterSpacing: "0.1em",
                    fontFamily: "'DM Mono',monospace",
                  }}
                >
                  Java · Kotlin · Python · Fintech
                </Typography>
              </Box>
            </Box>

            {/* Bio */}
            <Typography
              sx={{
                color: "text.secondary",
                fontSize: "0.92rem",
                lineHeight: 2,
                mb: 4,
                maxWidth: 560,
                borderLeft:
                  "2px solid rgba(0,229,255,0.2)",
                pl: 2,
                fontFamily: "'DM Mono',monospace",
              }}
            >
              Senior SDE with 3.6+ years building{" "}
              <Box
                component="span"
                sx={{ color: "primary.main" }}
              >
                high-throughput fintech systems
              </Box>{" "}
              at ICICI Bank, NIUM & Axis Bank.
              Architected cross-border payout
              infrastructure handling{" "}
              <Box
                component="span"
                sx={{ color: "primary.main" }}
              >
                10K+ daily transactions
              </Box>{" "}
              with sub-3s SLA.
            </Typography>

            {/* Buttons */}
            <Box
              sx={{
                display: "flex",
                gap: 1.5,
                flexWrap: "wrap",
                mb: 4,
              }}
            >
              <Button
                component={Link}
                to="/projects"
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  background:
                    "linear-gradient(135deg,#00E5FF,#0091EA)",
                  color: "#050A12",
                  fontWeight: 700,
                }}
              >
                View Projects
              </Button>

              <Button
                component={Link}
                to="/contact"
                variant="outlined"
                startIcon={<EmailIcon />}
                sx={{
                  borderColor:
                    "rgba(0,229,255,0.3)",
                  color: "text.secondary",
                }}
              >
                Contact Me
              </Button>

              <Button
                component={Link}
                to="/resume-cover"
                variant="outlined"
                startIcon={<ArticleIcon />}
                sx={{
                  borderColor:
                    "rgba(255,109,0,0.3)",
                  color: "text.secondary",
                }}
              >
                Resume
              </Button>
            </Box>

            {/* Social */}
            <Box
              sx={{
                display: "flex",
                gap: 1.5,
                alignItems: "center",
                mb: 4,
              }}
            >
              <Typography
                sx={{
                  color: "text.secondary",
                  fontSize: "0.65rem",
                  letterSpacing: "0.1em",
                  fontFamily: "'DM Mono',monospace",
                }}
              >
                FIND ME ON
              </Typography>

              {[
                {
                  icon: (
                    <GitHubIcon
                      sx={{ fontSize: 18 }}
                    />
                  ),
                  href: "https://github.com/saoodcse",
                },
                {
                  icon: (
                    <LinkedInIcon
                      sx={{ fontSize: 18 }}
                    />
                  ),
                  href: "https://linkedin.com/in/saoodcse",
                },
                {
                  icon: (
                    <EmailIcon
                      sx={{ fontSize: 18 }}
                    />
                  ),
                  href: "mailto:saoodalamcse2018@gmail.com",
                },
              ].map((item, index) => (
                <Box
                  key={index}
                  component="a"
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    width: 36,
                    height: 36,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border:
                      "1px solid rgba(0,229,255,0.15)",
                    borderRadius: "2px",
                    color: "text.secondary",
                    textDecoration: "none",
                  }}
                >
                  {item.icon}
                </Box>
              ))}
            </Box>

            {/* Skills */}
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 0.8,
              }}
            >
              {SKILLS.map((skill) => (
                <Chip
                  key={skill}
                  label={skill}
                  size="small"
                  sx={{
                    background:
                      "rgba(0,229,255,0.04)",
                    border:
                      "1px solid rgba(0,229,255,0.1)",
                    color: "text.secondary",
                    fontSize: "0.65rem",
                    height: 24,
                  }}
                />
              ))}
            </Box>
          </Box>

          {/* RIGHT SIDE */}
          <Box
            sx={{
              width: {
                xs: "100%",
                md: "420px",
              },
              display: "flex",
              flexDirection: "column",
              gap: 2.5,
            }}
          >
            {/* PHOTO CARD */}
            <Box
              sx={{
                border:
                  "1px solid rgba(0,229,255,0.2)",
                borderRadius: "2px",
                overflow: "hidden",
                background:
                  "rgba(13,27,42,0.8)",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  aspectRatio: "1/1",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  background:
                    "linear-gradient(135deg, rgba(0,229,255,0.06) 0%, rgba(13,27,42,0.95) 100%)",
                }}
              >
                <Box
                  sx={{
                    width: 110,
                    height: 110,
                    borderRadius: "50%",
                    background:
                      "linear-gradient(135deg, rgba(0,229,255,0.15), rgba(0,145,234,0.1))",
                    border:
                      "2px solid rgba(0,229,255,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "2.8rem",
                    color: "primary.main",
                    fontWeight: 700,
                    mb: 2,
                    fontFamily:
                      "'DM Mono',monospace",
                  }}
                >
                  SA
                </Box>

                <Typography
                  sx={{
                    color: "text.primary",
                    fontSize: "1rem",
                    fontWeight: 700,
                    fontFamily:
                      "'DM Mono',monospace",
                  }}
                >
                  Saood Alam
                </Typography>

                <Typography
                  sx={{
                    color: "text.secondary",
                    fontSize: "0.72rem",
                    mt: 0.4,
                    fontFamily:
                      "'DM Mono',monospace",
                  }}
                >
                  Senior Software Engineer
                </Typography>
              </Box>
            </Box>

            {/* STATS */}
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 1.5,
              }}
            >
              {STATS.map(({ value, label }) => (
                <Box
                  key={label}
                  sx={{
                    flex: "1 1 calc(50% - 12px)",
                    minWidth: "140px",
                    p: 2,
                    textAlign: "center",
                    border:
                      "1px solid rgba(0,229,255,0.1)",
                    borderRadius: "2px",
                    background:
                      "rgba(13,27,42,0.6)",
                  }}
                >
                  <Typography
                    sx={{
                      background:
                        "linear-gradient(135deg,#00E5FF,#0091EA)",
                      backgroundClip: "text",
                      WebkitBackgroundClip:
                        "text",
                      WebkitTextFillColor:
                        "transparent",
                      fontSize: "1.8rem",
                      fontWeight: 800,
                      lineHeight: 1,
                      fontFamily:
                        "'DM Mono',monospace",
                    }}
                  >
                    {value}
                  </Typography>

                  <Typography
                    sx={{
                      color: "text.secondary",
                      fontSize: "0.65rem",
                      mt: 0.5,
                      fontFamily:
                        "'DM Mono',monospace",
                    }}
                  >
                    {label}
                  </Typography>
                </Box>
              ))}
            </Box>

            {/* TERMINAL */}
            <Box
              sx={{
                p: 2.5,
                border:
                  "1px solid rgba(0,229,255,0.12)",
                borderRadius: "2px",
                background:
                  "rgba(5,10,18,0.9)",
                fontFamily:
                  "'DM Mono',monospace",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: 1,
                  mb: 2,
                }}
              >
                {[
                  "#FF5F57",
                  "#FFBD2E",
                  "#28CA41",
                ].map((c) => (
                  <Box
                    key={c}
                    sx={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      background: c,
                    }}
                  />
                ))}
              </Box>

              {TERMINAL_LINES.map(
                ({ cmd, val }) => (
                  <Box
                    key={cmd}
                    sx={{
                      mb: 0.8,
                      display: "flex",
                      gap: 1,
                      flexWrap: "wrap",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#00E5FF",
                        fontSize: "0.72rem",
                      }}
                    >
                      {cmd}
                    </Typography>

                    <Typography
                      sx={{
                        color:
                          "rgba(0,229,255,0.35)",
                        fontSize: "0.72rem",
                      }}
                    >
                      →
                    </Typography>

                    <Typography
                      sx={{
                        color: val.includes("✓")
                          ? "#28CA41"
                          : "text.secondary",
                        fontSize: "0.72rem",
                      }}
                    >
                      {val}
                    </Typography>
                  </Box>
                )
              )}

              <Box
                sx={{
                  mt: 1.5,
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                }}
              >
                <Typography
                  sx={{
                    color: "primary.main",
                    fontSize: "0.72rem",
                  }}
                >
                  $
                </Typography>

                <Cursor />
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}