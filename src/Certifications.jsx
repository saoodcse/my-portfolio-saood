import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Container, Typography, Chip, Skeleton } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import VerifiedIcon from "@mui/icons-material/Verified";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { fetchCerts } from "./certsSlice";

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

export default function Certifications() {
  const dispatch = useDispatch();
  const { data: certs, loading } = useSelector((s) => s.certs);

  useEffect(() => {
    if (!certs) dispatch(fetchCerts());
  }, [dispatch, certs]);

  return (
    <Box sx={{ py: { xs: 2, md: 3 } }}>
      <Container maxWidth="lg">
        <SectionHeader
          title="Education &"
          accent="Certifications"
        />

        {loading || !certs ? (
          <Skeleton
            variant="rectangular"
            height={300}
            sx={{
              borderRadius: "2px",
              background: "rgba(0,229,255,0.05)",
            }}
          />
        ) : (
          <>
            {/* Education */}
            <Typography
              sx={{
                color: "text.secondary",
                fontSize: "0.72rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                mb: 3,
                fontFamily: "'DM Mono',monospace",
              }}
            >
              Education
            </Typography>

            {certs.education.map(
              ({
                id,
                degree,
                institution,
                period,
                grade,
                coursework,
              }) => (
                <Box
                  key={id}
                  sx={{
                    p: 3.5,
                    mb: 5,
                    border: "1px solid rgba(0,229,255,0.15)",
                    borderRadius: "2px",
                    background: "rgba(13,27,42,0.6)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 2,
                      mb: 2,
                    }}
                  >
                    <Box
                      sx={{
                        width: 44,
                        height: 44,
                        borderRadius: "2px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "rgba(0,229,255,0.08)",
                        border: "1px solid rgba(0,229,255,0.2)",
                        flexShrink: 0,
                      }}
                    >
                      <SchoolIcon
                        sx={{ fontSize: 22, color: "primary.main" }}
                      />
                    </Box>

                    <Box sx={{ minWidth: 0 }}>
                      <Typography
                        sx={{
                          color: "text.primary",
                          fontSize: "0.95rem",
                          fontWeight: 600,
                          mb: 0.3,
                          fontFamily: "'DM Mono',monospace",
                        }}
                      >
                        {degree}
                      </Typography>

                      <Typography
                        sx={{
                          color: "#FF6D00",
                          fontSize: "0.78rem",
                          mb: 0.3,
                          fontFamily: "'DM Mono',monospace",
                        }}
                      >
                        {institution}
                      </Typography>

                      <Box
                        sx={{
                          display: "flex",
                          gap: 2,
                          flexWrap: "wrap",
                        }}
                      >
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
                            fontSize: "0.72rem",
                            fontFamily: "'DM Mono',monospace",
                          }}
                        >
                          {grade}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 0.8,
                      pl: { xs: 0, sm: 7 },
                    }}
                  >
                    {coursework.map((c) => (
                      <Chip
                        key={c}
                        label={c}
                        size="small"
                        sx={{
                          background: "rgba(0,229,255,0.04)",
                          border: "1px solid rgba(0,229,255,0.12)",
                          color: "text.secondary",
                          fontSize: "0.63rem",
                          height: 22,
                          "& .MuiChip-label": { px: 1 },
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              )
            )}

            {/* Certifications */}
            <Typography
              sx={{
                color: "text.secondary",
                fontSize: "0.72rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                mb: 3,
                fontFamily: "'DM Mono',monospace",
              }}
            >
              Certifications
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 3,
              }}
            >
              {certs.certifications.map(
                ({ id, name, issuer, year, badge, color, url }) => (
                  <Box
                    key={id}
                    sx={{
                      flex: {
                        xs: "1 1 100%",
                        sm: "1 1 calc(50% - 24px)",
                        md: "1 1 calc(33.333% - 24px)",
                      },
                      minWidth: 0,
                    }}
                  >
                    <Box
                      component="a"
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        p: 2.5,
                        textDecoration: "none",
                        border: "1px solid rgba(0,229,255,0.08)",
                        borderRadius: "2px",
                        background: "rgba(13,27,42,0.5)",
                        transition: "all 0.25s ease",
                        height: "100%",
                        boxSizing: "border-box",

                        "&:hover": {
                          border: "1px solid rgba(0,229,255,0.25)",
                          transform: "translateX(4px)",
                          background: "rgba(13,27,42,0.8)",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          width: 44,
                          height: 44,
                          borderRadius: "2px",
                          flexShrink: 0,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background: `${color}18`,
                          border: `1px solid ${color}44`,
                        }}
                      >
                        <Typography
                          sx={{
                            color,
                            fontSize: "0.6rem",
                            fontWeight: 700,
                            fontFamily: "'DM Mono',monospace",
                            letterSpacing: "0.04em",
                          }}
                        >
                          {badge}
                        </Typography>
                      </Box>

                      <Box sx={{ flex: 1, minWidth: 0 }}>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "flex-start",
                          }}
                        >
                          <Typography
                            sx={{
                              color: "text.primary",
                              fontSize: "0.78rem",
                              fontWeight: 600,
                              lineHeight: 1.4,
                              mb: 0.3,
                              fontFamily: "'DM Mono',monospace",
                              pr: 1,
                            }}
                          >
                            {name}
                          </Typography>

                          <OpenInNewIcon
                            sx={{
                              fontSize: 12,
                              color: "rgba(0,229,255,0.3)",
                              flexShrink: 0,
                            }}
                          />
                        </Box>

                        <Typography
                          sx={{
                            color: "text.secondary",
                            fontSize: "0.68rem",
                            fontFamily: "'DM Mono',monospace",
                          }}
                        >
                          {issuer}
                        </Typography>

                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 0.5,
                            mt: 0.3,
                          }}
                        >
                          <VerifiedIcon
                            sx={{
                              fontSize: 12,
                              color,
                            }}
                          />

                          <Typography
                            sx={{
                              color,
                              fontSize: "0.65rem",
                              fontFamily: "'DM Mono',monospace",
                            }}
                          >
                            {year}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                )
              )}
            </Box>
          </>
        )}
      </Container>
    </Box>
  );
}