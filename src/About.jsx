import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box, Container, Typography, Chip, Skeleton,
} from "@mui/material";
import { fetchAboutData } from "./aboutSlice";

/* ── helpers ─────────────────────────────────────────────────── */
function SectionLabel({ children }) {
  return (
    <Typography sx={{
      color: "text.secondary", fontSize: "0.65rem", letterSpacing: "0.18em",
      textTransform: "uppercase", mb: 2,
      fontFamily: "'DM Mono',monospace",
      display: "flex", alignItems: "center", gap: 1,
      "&::before": {
        content: '""', width: 16, height: 1,
        background: "rgba(0,229,255,0.4)", display: "inline-block",
      },
    }}>
      {children}
    </Typography>
  );
}

function BioPara({ text, highlights = [] }) {
  if (!highlights.length) {
    return (
      <Typography sx={{
        color: "text.secondary", lineHeight: 2, mb: 2,
        fontSize: "0.88rem", fontFamily: "'DM Mono',monospace",
      }}>
        {text}
      </Typography>
    );
  }

  let remaining = text;
  const parts = [];
  highlights.forEach((h) => {
    const idx = remaining.indexOf(h);
    if (idx === -1) return;
    if (idx > 0) parts.push({ str: remaining.slice(0, idx), hl: false });
    parts.push({ str: h, hl: true });
    remaining = remaining.slice(idx + h.length);
  });
  if (remaining) parts.push({ str: remaining, hl: false });

  return (
    <Typography sx={{
      color: "text.secondary", lineHeight: 2, mb: 2,
      fontSize: "0.88rem", fontFamily: "'DM Mono',monospace",
    }}>
      {parts.map((p, i) =>
        p.hl
          ? <Box key={i} component="span" sx={{ color: "primary.main" }}>{p.str}</Box>
          : p.str
      )}
    </Typography>
  );
}

function SkeletonBlock({ height = 120 }) {
  return (
    <Skeleton variant="rectangular" height={height}
      sx={{ borderRadius: "2px", background: "rgba(0,229,255,0.05)", mb: 1.5 }} />
  );
}

/* ── Main ────────────────────────────────────────────────────── */
export default function About() {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((s) => s.about);

  useEffect(() => {
    if (!data) dispatch(fetchAboutData());
  }, [dispatch, data]);

  return (
    <Box sx={{ py: { xs: 2, md: 3 } }}>
      <Container maxWidth="lg">

        {/* ── PAGE HEADER ── */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h2" sx={{
            fontSize: { xs: "2.4rem", md: "3.2rem" },
            color: "text.primary", mb: 1, lineHeight: 1.1,
          }}>
            The Developer{" "}
            <Box component="span" sx={{
              background: "linear-gradient(135deg,#00E5FF,#0091EA)",
              backgroundClip: "text", WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              Behind the Code
            </Box>
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Box sx={{ width: 48, height: 2, background: "linear-gradient(90deg,#00E5FF,transparent)" }} />
            <Typography sx={{
              color: "text.secondary", fontSize: "0.72rem",
              fontFamily: "'DM Mono',monospace",
            }}>
              Java · Python · AI · Fintech
            </Typography>
          </Box>
        </Box>

        {/* ══ ROW 1 — PHOTO · BIO · QUICK INFO ══ */}
        <Box sx={{
          display: "flex", gap: 3, mb: 5,
          flexDirection: { xs: "column", md: "row" },
          alignItems: "stretch",
        }}>

          {/* PHOTO */}
          <Box sx={{
            width: { xs: "100%", md: 240 }, flexShrink: 0,
            border: "1px solid rgba(0,229,255,0.18)", borderRadius: "2px",
            background: "rgba(13,27,42,0.8)", overflow: "hidden",
            position: "relative",
            // ── mobile: photo as CSS background ──
            backgroundImage: { xs: `url(/photo/profilephoto.jpeg)`, md: "none" },
            backgroundSize: "cover",
            backgroundPosition: "center top",
            minHeight: { xs: 420, md: "auto" },
          }}>
            {/* corner brackets */}
            {[
              { top: 0,    left: 0,  borderTop: "2px solid #00E5FF", borderLeft: "2px solid #00E5FF"   },
              { top: 0,    right: 0, borderTop: "2px solid #00E5FF", borderRight: "2px solid #00E5FF"  },
              { bottom: 0, left: 0,  borderBottom: "2px solid #00E5FF", borderLeft: "2px solid #00E5FF"  },
              { bottom: 0, right: 0, borderBottom: "2px solid #00E5FF", borderRight: "2px solid #00E5FF" },
            ].map((s, i) => (
              <Box key={i} sx={{ position: "absolute", width: 14, height: 14, zIndex: 2, ...s }} />
            ))}

            {/* photo — hidden on mobile (bg), visible on desktop */}
            <Box
              component="img"
              src="/photo/profilephoto.jpeg"
              alt="Saood Alam"
              onError={(e) => { e.target.style.display = "none"; }}
              sx={{
                width: "100%",
                height: "100%",
                minHeight: 300,
                objectFit: "cover",
                objectPosition: "top center",
                display: { xs: "none", md: "block" },   // ← hidden on mobile
              }}
            />

            {/* overlay — name + handle on top of photo */}
            <Box sx={{
              position: "absolute",
              bottom: 36,
              left: 0, right: 0,
              display: "flex", flexDirection: "column", alignItems: "center",
              background: "linear-gradient(0deg, rgba(5,10,18,0.85) 0%, transparent 100%)",
              pt: 6, pb: 1.5, zIndex: 2,
            }}>
              <Typography sx={{
                color: "text.primary", fontSize: "0.88rem", fontWeight: 700,
                fontFamily: "'DM Mono',monospace",
              }}>
                {loading || !data ? "Saood Alam" : data.name}
              </Typography>

              <Typography sx={{
                color: "primary.main", fontSize: "0.65rem",
                fontFamily: "'DM Mono',monospace", mt: 0.3,
              }}>
                {loading || !data ? "@saoodcse" : data.handle}
              </Typography>

              <Box sx={{
                mt: 1.2, px: 1.5, py: 0.4,
                background: "rgba(255,109,0,0.15)",
                border: "1px solid rgba(255,109,0,0.3)", borderRadius: "2px",
              }}>
                <Typography sx={{ color: "#FF6D00", fontSize: "0.6rem", fontFamily: "'DM Mono',monospace" }}>
                  🤖 Exploring AI + LLM
                </Typography>
              </Box>
            </Box>

            {/* status strip */}
            <Box sx={{
              py: 0.8, px: 2,
              borderTop: "1px solid rgba(0,229,255,0.1)",
              display: "flex", alignItems: "center", gap: 1, justifyContent: "center",
              background: "rgba(5,10,18,0.85)",
              position: "relative", zIndex: 2,
            }}>
              <Box sx={{
                width: 6, height: 6, borderRadius: "50%",
                background: "#28CA41", boxShadow: "0 0 6px #28CA41",
              }} />
              <Typography sx={{ color: "#28CA41", fontSize: "0.62rem", fontFamily: "'DM Mono',monospace" }}>
                {loading || !data ? "Available" : data.status}
              </Typography>
            </Box>
          </Box>

          {/* BIO */}
          <Box sx={{
            flex: 1, p: 3,
            border: "1px solid rgba(0,229,255,0.1)", borderRadius: "2px",
            background: "rgba(13,27,42,0.6)", backdropFilter: "blur(8px)",
          }}>
            <SectionLabel>Bio</SectionLabel>

            {loading || !data ? (
              Array.from({ length: 5 }).map((_, i) => <SkeletonBlock key={i} height={20} />)
            ) : (
              data.bio.map((item, i) => (
                <BioPara key={i} text={item.text} highlights={item.highlights} />
              ))
            )}

            {/* Soft skills */}
            <Box sx={{ mt: 3 }}>
              <SectionLabel>Soft Skills</SectionLabel>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.8 }}>
                {(loading || !data ? [] : data.softSkills).map((sk) => (
                  <Chip key={sk} label={sk} size="small" sx={{
                    background: "rgba(255,109,0,0.07)",
                    border: "1px solid rgba(255,109,0,0.2)",
                    color: "#FF6D00", fontSize: "0.63rem", height: 22,
                    "& .MuiChip-label": { px: 1 },
                  }} />
                ))}
              </Box>
            </Box>
          </Box>

          {/* QUICK INFO */}
          <Box sx={{
            width: { xs: "100%", md: 250 }, flexShrink: 0, p: 3,
            border: "1px solid rgba(0,229,255,0.1)", borderRadius: "2px",
            background: "rgba(13,27,42,0.6)", backdropFilter: "blur(8px)",
          }}>
            <SectionLabel>Quick Info</SectionLabel>

            {loading || !data ? (
              Array.from({ length: 7 }).map((_, i) => <SkeletonBlock key={i} height={42} />)
            ) : (
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.8 }}>
                {data.quickInfo.map(({ icon, label, value }) => (
                  <Box key={label} sx={{
                    display: "flex", gap: 1.5, pb: 1.5,
                    borderBottom: "1px solid rgba(0,229,255,0.05)",
                    "&:last-child": { borderBottom: "none", pb: 0 },
                  }}>
                    <Typography sx={{ fontSize: "0.9rem", flexShrink: 0 }}>{icon}</Typography>
                    <Box>
                      <Typography sx={{
                        color: "text.secondary", fontSize: "0.6rem",
                        letterSpacing: "0.1em", textTransform: "uppercase",
                        fontFamily: "'DM Mono',monospace", mb: 0.2,
                      }}>
                        {label}
                      </Typography>
                      <Typography sx={{
                        color: "text.primary", fontSize: "0.75rem",
                        fontFamily: "'DM Mono',monospace", lineHeight: 1.4,
                      }}>
                        {value}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            )}
          </Box>
        </Box>

        {/* ══ ROW 2 — PROFICIENCY · TECH STACK ══ */}
        <Box sx={{
          display: "flex", gap: 3,
          flexDirection: { xs: "column", md: "row" },
          alignItems: "stretch",
        }}>

          {/* PROFICIENCY */}
          <Box sx={{
            flex: "0 0 360px", p: 3,
            border: "1px solid rgba(0,229,255,0.1)", borderRadius: "2px",
            background: "rgba(13,27,42,0.6)", backdropFilter: "blur(8px)",
          }}>
            <SectionLabel>Proficiency</SectionLabel>

            {loading || !data ? (
              Array.from({ length: 7 }).map((_, i) => <SkeletonBlock key={i} height={38} />)
            ) : (
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
                {data.skillsProgress.map(({ name, level, color }) => (
                  <Box key={name}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", mb: 0.7 }}>
                      <Typography sx={{
                        color: "text.secondary", fontSize: "0.75rem",
                        fontFamily: "'DM Mono',monospace",
                      }}>
                        {name}
                      </Typography>
                      <Typography sx={{ color, fontSize: "0.7rem", fontFamily: "'DM Mono',monospace" }}>
                        {level}%
                      </Typography>
                    </Box>
                    <Box sx={{
                      height: 4, borderRadius: 4,
                      background: "rgba(0,229,255,0.06)", overflow: "hidden",
                    }}>
                      <Box sx={{
                        width: `${level}%`, height: "100%", borderRadius: 4,
                        background: `linear-gradient(90deg,${color},${color}77)`,
                        transition: "width 1s ease",
                      }} />
                    </Box>
                  </Box>
                ))}
              </Box>
            )}
          </Box>

          {/* TECH STACK */}
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <SectionLabel>Tech Stack</SectionLabel>

            {loading || !data ? (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
                {Array.from({ length: 8 }).map((_, i) => (
                  <Skeleton key={i} variant="rectangular" height={110}
                    sx={{
                      flex: "1 1 calc(50% - 8px)", borderRadius: "2px",
                      background: "rgba(0,229,255,0.05)",
                    }} />
                ))}
              </Box>
            ) : (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
                {data.techStack.map(({ category, items, color }) => (
                  <Box key={category} sx={{
                    flex: { xs: "1 1 100%", sm: "1 1 calc(50% - 8px)" },
                    p: 2.5,
                    border: "1px solid rgba(0,229,255,0.08)", borderRadius: "2px",
                    background: "rgba(13,27,42,0.5)",
                    transition: "all 0.25s ease",
                    "&:hover": {
                      border: `1px solid ${color}44`,
                      background: `${color}08`,
                      transform: "translateY(-2px)",
                    },
                  }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1.5 }}>
                      <Box sx={{ width: 3, height: 14, borderRadius: 2, background: color, flexShrink: 0 }} />
                      <Typography sx={{
                        color, fontSize: "0.65rem", letterSpacing: "0.1em",
                        textTransform: "uppercase", fontFamily: "'DM Mono',monospace",
                      }}>
                        {category}
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.6 }}>
                      {items.map((item) => (
                        <Chip key={item} label={item} size="small" sx={{
                          background: `${color}0D`,
                          border: `1px solid ${color}25`,
                          color: "text.secondary", fontSize: "0.62rem", height: 20,
                          "& .MuiChip-label": { px: 0.8 },
                        }} />
                      ))}
                    </Box>
                  </Box>
                ))}
              </Box>
            )}
          </Box>
        </Box>

      </Container>
    </Box>
  );
}