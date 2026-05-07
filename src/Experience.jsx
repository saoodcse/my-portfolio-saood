import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Container, Typography, Chip, Skeleton } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import { fetchExperience } from "./experienceSlice";

const SectionHeader = ({ tag, title, accent }) => (
  <Box sx={{ mb: 8 }}>
    <Typography
      sx={{
        color: "primary.main",
        fontSize: "0.72rem",
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        mb: 1,
        fontFamily: "'DM Mono',monospace",
      }}
    >
      {tag}
    </Typography>

    <Typography
      variant="h2"
      sx={{
        fontSize: { xs: "2.2rem", md: "3rem" },
        color: "text.primary",
        mb: 2,
      }}
    >
      {title}{" "}
      <Box
        component="span"
        sx={{
          background: "linear-gradient(135deg,#00E5FF,#0091EA)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {accent}
      </Box>
    </Typography>

    <Box
      sx={{
        width: 48,
        height: 2,
        background: "linear-gradient(90deg,#00E5FF,transparent)",
      }}
    />
  </Box>
);

export default function Experience() {
  const dispatch = useDispatch();
  const { data: exp, loading } = useSelector((s) => s.experience);

  useEffect(() => {
    if (!exp.length) dispatch(fetchExperience());
  }, [dispatch, exp.length]);

  return (
    <Box sx={{ py: { xs: 2, md: 3 } }}>
      <Container maxWidth="lg">
        <SectionHeader  title="Work" accent="History" />

        {loading ? (
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            {[1, 2, 3].map((i) => (
              <Skeleton
                key={i}
                variant="rectangular"
                height={200}
                sx={{ borderRadius: "2px", background: "rgba(0,229,255,0.05)" }}
              />
            ))}
          </Box>
        ) : (
          <Box sx={{ position: "relative" }}>
            {/* Vertical line */}
            <Box
              sx={{
                position: "absolute",
                left: { xs: 16, md: 24 },
                top: 0,
                bottom: 0,
                width: 1,
                background: "linear-gradient(180deg,#00E5FF44,transparent)",
                display: { xs: "none", md: "block" },
              }}
            />

            {/* FLEX container instead of Grid */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {exp.map(
                ({
                  id,
                  role,
                  company,
                  location,
                  period,
                  duration,
                  description,
                  achievements,
                  tech,
                  current,
                }) => (
                  <Box
                    key={id}
                    sx={{
                      display: "flex",
                      gap: 4,
                      flexDirection: { xs: "column", md: "row" }, // responsive flex
                    }}
                  >
                    {/* Timeline dot */}
                    <Box
                      sx={{
                        display: { xs: "none", md: "flex" },
                        flexDirection: "column",
                        alignItems: "center",
                        flexShrink: 0,
                        width: 48,
                      }}
                    >
                      <Box
                        sx={{
                          width: 12,
                          height: 12,
                          borderRadius: "50%",
                          mt: 1.5,
                          background: current ? "#5c9096" : "rgba(0,229,255,0.3)",
                          boxShadow: current ? "0 0 12px #00E5FF" : "none",
                        }}
                      />
                    </Box>

                    {/* Card */}
                    <Box
                      sx={{
                        flex: 1,
                        p: { xs: 2.5, md: 3.5 },
                        border: `1px solid ${
                          current
                            ? "rgba(0, 229, 255, 0)"
                            : "rgba(0,229,255,0.08)"
                        }`,
                        borderRadius: "2px",
                        background: current
                          ? "rgba(0,229,255,0.03)"
                          : "rgba(13,27,42,0.5)",
                        backdropFilter: "blur(8px)",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          border: "1px solid rgba(0,229,255,0.25)",
                          transform: "translateX(4px)",
                        },
                      }}
                    >
                      {/* Header */}
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          flexWrap: "wrap",
                          gap: 1,
                          mb: 1.5,
                        }}
                      >
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                          <Box
                            sx={{
                              width: 32,
                              height: 32,
                              borderRadius: "2px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              background: "rgba(0,229,255,0.08)",
                              border: "1px solid rgba(0,229,255,0.2)",
                            }}
                          >
                            <WorkIcon sx={{ fontSize: 16, color: "primary.main" }} />
                          </Box>

                          <Box>
                            <Typography
                              sx={{
                                color: "text.primary",
                                fontSize: "0.95rem",
                                fontWeight: 600,
                                fontFamily: "'DM Mono',monospace",
                              }}
                            >
                              {role}
                            </Typography>
                            <Typography
                              sx={{
                                color: "#FF6D00",
                                fontSize: "0.78rem",
                                fontFamily: "'DM Mono',monospace",
                              }}
                            >
                              {company} · {location}
                            </Typography>
                          </Box>
                        </Box>

                        <Box sx={{ textAlign: "right" }}>
                          <Typography
                            sx={{
                              color: "primary.main",
                              fontSize: "0.72rem",
                              fontFamily: "'DM Mono',monospace",
                            }}
                          >
                            {period}
                          </Typography>
                          <Typography
                            sx={{
                              color: "text.secondary",
                              fontSize: "0.68rem",
                              fontFamily: "'DM Mono',monospace",
                            }}
                          >
                            {duration}
                          </Typography>
                        </Box>
                      </Box>

                      {/* Description */}
                      <Typography
                        sx={{
                          color: "text.secondary",
                          fontSize: "0.82rem",
                          lineHeight: 1.8,
                          mb: 2,
                          fontFamily: "'DM Mono',monospace",
                        }}
                      >
                        {description}
                      </Typography>

                      {/* Achievements */}
                      <Box sx={{ mb: 2.5 }}>
                        {achievements.map((a, i) => (
                          <Box
                            key={i}
                            sx={{ display: "flex", gap: 1, mb: 0.8 }}
                          >
                            <Box
                              sx={{
                                width: 4,
                                height: 4,
                                borderRadius: "50%",
                                background: "#00E5FF",
                                mt: 0.8,
                              }}
                            />
                            <Typography
                              sx={{
                                color: "text.secondary",
                                fontSize: "0.78rem",
                                fontFamily: "'DM Mono',monospace",
                              }}
                            >
                              {a}
                            </Typography>
                          </Box>
                        ))}
                      </Box>

                      {/* Tech */}
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.8 }}>
                        {tech.map((t) => (
                          <Chip
                            key={t}
                            label={t}
                            size="small"
                            sx={{
                              background: "rgba(0,229,255,0.04)",
                              border: "1px solid rgba(0,229,255,0.15)",
                              color: "primary.main",
                              fontSize: "0.63rem",
                              height: 22,
                            }}
                          />
                        ))}
                      </Box>
                    </Box>
                  </Box>
                )
              )}
            </Box>
          </Box>
        )}
      </Container>
    </Box>
  );
}