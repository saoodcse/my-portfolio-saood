import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Chip,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DownloadIcon from "@mui/icons-material/Download";

const SKILLS = [
  "Java", "Python", "Spring Boot", "FastAPI",
  "MySQL", "Redis", "Microservices", "REST APIs",
  "Docker", "Kafka",
];

const STATS = [
  { value: "3+", label: "Years Exp." },
  { value: "20+", label: "Projects" },
  { value: "8+", label: "Technologies" },
];

export default function Home() {
  const heroRef = useRef(null);



  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    requestAnimationFrame(() => {
      el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    });
  }, []);

  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 68px)",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        py: { xs: 2, md: 3 } 
      }}
    >
      {/* Grid background decoration */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(0,229,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" ref={heroRef}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={7}>
            {/* Status badge */}
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                mb: 3,
                px: 2,
                py: 0.8,
                border: "1px solid rgba(0, 229, 255, 0.2)",
                borderRadius: "2px",
                background: "rgba(0, 229, 255, 0.04)",
              }}
            >
              <Box
                sx={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#00E5FF",
                  boxShadow: "0 0 8px #00E5FF",
                  animation: "pulse 2s infinite",
                  "@keyframes pulse": {
                    "0%, 100%": { opacity: 1 },
                    "50%": { opacity: 0.4 },
                  },
                }}
              />
              <Typography
                variant="body2"
                sx={{ color: "primary.main", fontSize: "0.72rem", letterSpacing: "0.12em" }}
              >
                AVAILABLE FOR WORK
              </Typography>
            </Box>
        <Box sx={{ mb: 6 }}>
          <Typography variant="h2" sx={{ fontSize: { xs: "2.2rem", md: "3rem" }, mb: 2 }}>
            Saood{" "}
            <Box
              component="span"
              sx={{
                background: "linear-gradient(135deg, #00E5FF, #0091EA)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Alam
            </Box>
          </Typography>

          <Box sx={{ width: 48, height: 2, background: "linear-gradient(90deg, #00E5FF, transparent)" }} />
        </Box>
                      

            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                fontSize: "0.95rem",
                lineHeight: 1.9,
                mb: 4,
                maxWidth: 520,
              }}
            >
              Backend engineer specializing in distributed systems and scalable APIs.
              I architect microservices with Spring Boot and FastAPI — focused on
              clean design, high throughput, and production reliability.
            </Typography>

            <Box sx={{ display: "flex", gap: 2, mb: 5, flexWrap: "wrap" }}>
              <Button
                component={Link}
                to="/projects"
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  background: "linear-gradient(135deg, #00E5FF, #0091EA)",
                  color: "#050A12",
                  fontWeight: 600,
                  "&:hover": {
                    background: "linear-gradient(135deg, #33EAFF, #00B0FF)",
                    transform: "translateY(-1px)",
                    boxShadow: "0 8px 24px rgba(0, 229, 255, 0.3)",
                  },
                  transition: "all 0.25s ease",
                }}
              >
                View Projects
              </Button>
              <Button
                component={Link}
                to="/contact"
                variant="outlined"
                startIcon={<DownloadIcon />}
                sx={{
                  borderColor: "rgba(0, 229, 255, 0.3)",
                  color: "text.secondary",
                  "&:hover": {
                    borderColor: "primary.main",
                    color: "primary.main",
                    background: "rgba(0, 229, 255, 0.06)",
                    transform: "translateY(-1px)",
                  },
                  transition: "all 0.25s ease",
                }}
              >
                Get In Touch
              </Button>

                <Button
                component={Link}
                to="/resume-cover"
                variant="outlined"
                startIcon={<DownloadIcon />}
                sx={{
                  borderColor: "rgba(0, 229, 255, 0.3)",
                  color: "text.secondary",
                  "&:hover": {
                    borderColor: "primary.main",
                    color: "primary.main",
                    background: "rgba(0, 229, 255, 0.06)",
                    transform: "translateY(-1px)",
                  },
                  transition: "all 0.25s ease",
                }}
              >
              Resume & Cover Letter
              </Button>
            </Box>

            

            {/* Skills chips */}
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
              {SKILLS.map((skill) => (
                <Chip
                  key={skill}
                  label={skill}
                  size="small"
                  sx={{
                    background: "rgba(0, 229, 255, 0.05)",
                    border: "1px solid rgba(0, 229, 255, 0.12)",
                    color: "text.secondary",
                    fontSize: "0.68rem",
                    letterSpacing: "0.06em",
                    height: 26,
                    "&:hover": {
                      background: "rgba(0, 229, 255, 0.1)",
                      borderColor: "rgba(0, 229, 255, 0.3)",
                      color: "primary.main",
                    },
                    transition: "all 0.2s ease",
                  }}
                />
              ))}
            </Box>
          </Grid>

          {/* Stats panel */}
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                pl: { md: 4 },
              }}
            >
              {STATS.map(({ value, label }) => (
                <Box
                  key={label}
                  sx={{
                    p: 3,
                    border: "1px solid rgba(0, 229, 255, 0.1)",
                    borderRadius: "2px",
                    background: "rgba(13, 27, 42, 0.6)",
                    backdropFilter: "blur(8px)",
                    display: "flex",
                    alignItems: "center",
                    gap: 3,
                    "&:hover": {
                      border: "1px solid rgba(0, 229, 255, 0.25)",
                      background: "rgba(0, 229, 255, 0.04)",
                      transform: "translateX(4px)",
                    },
                    transition: "all 0.25s ease",
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      background: "linear-gradient(135deg, #00E5FF, #0091EA)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      fontSize: "2.2rem",
                      minWidth: 80,
                    }}
                  >
                    {value}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", fontSize: "0.8rem", letterSpacing: "0.08em" }}
                  >
                    {label}
                  </Typography>
                </Box>
              ))}

              {/* Terminal card */}
              <Box
                sx={{
                  p: 2.5,
                  border: "1px solid rgba(0, 229, 255, 0.1)",
                  borderRadius: "2px",
                  background: "rgba(5, 10, 18, 0.8)",
                  fontFamily: "'DM Mono', monospace",
                }}
              >
                <Box sx={{ display: "flex", gap: 0.8, mb: 2 }}>
                  {["#FF5F57", "#FFBD2E", "#28CA41"].map((c) => (
                    <Box key={c} sx={{ width: 10, height: 10, borderRadius: "50%", background: c }} />
                  ))}
                </Box>
                {[
                  { label: "$ whoami", value: "saood_alam" },
                  { label: "$ role", value: "backend_engineer" },
                  { label: "$ stack", value: "java | python" },
                  { label: "$ status", value: "open_to_work ✓" },
                ].map(({ label, value }) => (
                  <Box key={label} sx={{ mb: 0.5 }}>
                    <Typography
                      component="span"
                      sx={{ color: "primary.main", fontSize: "0.72rem" }}
                    >
                      {label}{" "}
                    </Typography>
                    <Typography
                      component="span"
                      sx={{ color: "text.secondary", fontSize: "0.72rem" }}
                    >
                      → {value}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}