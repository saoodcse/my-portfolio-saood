import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box, Container, Typography, Chip, Skeleton, Grid,
} from "@mui/material";
import WorkIcon        from "@mui/icons-material/Work";
import LocationOnIcon  from "@mui/icons-material/LocationOn";
import OpenInNewIcon   from "@mui/icons-material/OpenInNew";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { fetchExperience } from "./experienceSlice";

const TECH_COLOR = {
  languages:    "#00E5FF",
  frameworks:   "#7F52FF",
  databases:    "#FF6D00",
  messaging:    "#FF9900",
  infra:        "#28CA41",
  architecture: "#00E5FF",
};

const TECH_LABEL = {
  languages:    "Languages",
  frameworks:   "Frameworks",
  databases:    "Databases",
  messaging:    "Messaging",
  infra:        "Infra & Cloud",
  architecture: "Architecture",
};

/* ── skeleton card ─────────────────────────────────────────────── */
function ExperienceSkeleton() {
  return (
    <Box sx={{ display: "flex", gap: 3 }}>
      <Box sx={{ display: { xs: "none", sm: "block" }, width: 40, flexShrink: 0 }}>
        <Skeleton variant="circular" width={12} height={12}
          sx={{ mt: 2, background: "rgba(0,229,255,0.08)" }} />
      </Box>
      <Skeleton variant="rectangular" height={220} sx={{
        flex: 1, borderRadius: "2px", background: "rgba(0,229,255,0.05)",
      }} />
    </Box>
  );
}

/* ── impact badge ──────────────────────────────────────────────── */
function ImpactBadge({ label, value }) {
  return (
    <Box sx={{
      px: 2, py: 1, textAlign: "center",
      border: "1px solid rgba(0,229,255,0.15)", borderRadius: "2px",
      background: "rgba(0,229,255,0.04)", minWidth: 80,
    }}>
      <Typography sx={{
        color: "primary.main", fontSize: "1rem", fontWeight: 800,
        fontFamily: "'DM Mono',monospace", lineHeight: 1,
      }}>
        {value}
      </Typography>
      <Typography sx={{
        color: "text.secondary", fontSize: "0.6rem",
        fontFamily: "'DM Mono',monospace", mt: 0.4, letterSpacing: "0.06em",
      }}>
        {label}
      </Typography>
    </Box>
  );
}

/* ── main ──────────────────────────────────────────────────────── */
export default function Experience() {
  const dispatch = useDispatch();
  const { data: exp, loading } = useSelector((s) => s.experience);

  useEffect(() => {
    if (!exp.length) dispatch(fetchExperience());
  }, [dispatch, exp.length]);

  return (
    <Box sx={{ py: { xs: 2, md: 3 } }}>
      <Container maxWidth="lg">

        {/* ── header ── */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h2" sx={{
            fontSize: { xs: "2.2rem", md: "3rem" }, color: "text.primary", mb: 2,
          }}>
            Work{" "}
            <Box component="span" sx={{
              background: "linear-gradient(135deg,#00E5FF,#0091EA)",
              backgroundClip: "text", WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              History
            </Box>
          </Typography>
          <Box sx={{ width: 48, height: 2, background: "linear-gradient(90deg,#00E5FF,transparent)" }} />
        </Box>

        {/* ── timeline ── */}
        <Box sx={{ position: "relative" }}>

          {/* vertical line */}
          <Box sx={{
            position: "absolute", left: 20, top: 8, bottom: 8, width: 1,
            background: "linear-gradient(180deg,#00E5FF55,transparent)",
            display: { xs: "none", sm: "block" },
          }} />

          <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {loading
              ? Array.from({ length: 3 }).map((_, i) => <ExperienceSkeleton key={i} />)
              : exp.map(({
                  id, role, company, companyUrl, type, location,
                  period, duration, current, domain, description,
                  impact, achievements, tech,
                }) => (
                <Box key={id} sx={{ display: "flex", gap: 3 }}>

                  {/* timeline dot */}
                  <Box sx={{
                    display: { xs: "none", sm: "flex" },
                    flexDirection: "column", alignItems: "center",
                    flexShrink: 0, width: 40,
                  }}>
                    <Box sx={{
                      width: 12, height: 12, borderRadius: "50%", mt: 2.2,
                      background: current ? "#00E5FF" : "rgba(0,229,255,0.2)",
                      boxShadow: current ? "0 0 12px #00E5FF" : "none",
                      border: `2px solid ${current ? "#00E5FF" : "rgba(0,229,255,0.3)"}`,
                      flexShrink: 0,
                    }} />
                  </Box>

                  {/* ── experience card ── */}
                  <Box sx={{
                    flex: 1,
                    border: `1px solid ${current ? "rgba(0,229,255,0.08)" : "rgba(0,229,255,0.08)"}`,
                    borderRadius: "2px",
                    background: current ? "rgba(13,27,42,0.55)" : "rgba(13,27,42,0.55)",
                    backdropFilter: "blur(8px)",
                    overflow: "hidden",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      border: "1px solid rgba(0,229,255,0.28)",
                      transform: "translateX(4px)",
                      boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                    },
                  }}>

                    {/* ── card top bar ── */}
                    <Box sx={{
                      px: 3, py: 2,
                      borderBottom: "1px solid rgba(0,229,255,0.06)",
                      background: "rgba(0,0,0,0.15)",
                      display: "flex", justifyContent: "space-between",
                      alignItems: "center", flexWrap: "wrap", gap: 1,
                    }}>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <WorkIcon sx={{ fontSize: 14, color: "primary.main" }} />
                        <Typography sx={{
                          color: "primary.main", fontSize: "0.65rem",
                          letterSpacing: "0.12em", textTransform: "uppercase",
                          fontFamily: "'DM Mono',monospace",
                        }}>
                          {type} · {domain}
                        </Typography>
                      </Box>

                      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                          <LocationOnIcon sx={{ fontSize: 12, color: "text.secondary" }} />
                          <Typography sx={{
                            color: "text.secondary", fontSize: "0.65rem",
                            fontFamily: "'DM Mono',monospace",
                          }}>
                            {location}
                          </Typography>
                        </Box>

                        {current && (
                          <Chip label="● Current" size="small" sx={{
                            height: 18, fontSize: "0.58rem",
                            fontFamily: "'DM Mono',monospace",
                            background: "rgba(40,202,65,0.12)",
                            border: "1px solid rgba(40,202,65,0.3)",
                            color: "#28CA41",
                            "& .MuiChip-label": { px: 0.8 },
                          }} />
                        )}
                      </Box>
                    </Box>

                    {/* ── card body ── */}
                    <Box sx={{ p: 3 }}>

                      {/* role + company + period */}
                      <Box sx={{
                        display: "flex", justifyContent: "space-between",
                        alignItems: "flex-start", flexWrap: "wrap", gap: 1, mb: 1.5,
                      }}>
                        <Box>
                          <Typography sx={{
                            color: "text.primary", fontSize: "1.05rem",
                            fontWeight: 700, fontFamily: "'DM Mono',monospace", mb: 0.3,
                          }}>
                            {role}
                          </Typography>

                          <Box sx={{ display: "flex", alignItems: "center", gap: 0.8 }}>
                            <Typography sx={{
                              color: "#FF6D00", fontSize: "0.82rem",
                              fontFamily: "'DM Mono',monospace",
                            }}>
                              {company}
                            </Typography>
                            <Box
                              component="a"
                              href={companyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              sx={{ display: "flex", color: "rgba(0,229,255,0.3)", "&:hover": { color: "primary.main" } }}
                            >
                              <OpenInNewIcon sx={{ fontSize: 12 }} />
                            </Box>
                          </Box>
                        </Box>

                        <Box sx={{ textAlign: "right" }}>
                          <Typography sx={{
                            color: "primary.main", fontSize: "0.72rem",
                            fontFamily: "'DM Mono',monospace", letterSpacing: "0.04em",
                          }}>
                            {period}
                          </Typography>
                          <Typography sx={{
                            color: "text.secondary", fontSize: "0.65rem",
                            fontFamily: "'DM Mono',monospace",
                          }}>
                            {duration}
                          </Typography>
                        </Box>
                      </Box>

                      {/* description */}
                      <Typography sx={{
                        color: "text.secondary", fontSize: "0.82rem",
                        lineHeight: 1.85, mb: 2.5,
                        fontFamily: "'DM Mono',monospace",
                        borderLeft: "2px solid rgba(0,229,255,0.15)", pl: 1.5,
                      }}>
                        {description}
                      </Typography>

                      {/* impact metrics row */}
                      {impact && impact.length > 0 && (
                        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5, mb: 3 }}>
                          {impact.map(({ label, value }) => (
                            <ImpactBadge key={label} label={label} value={value} />
                          ))}
                        </Box>
                      )}

                      {/* achievements */}
                      <Box sx={{ mb: 3 }}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 0.8, mb: 1.2 }}>
                          <EmojiEventsIcon sx={{ fontSize: 13, color: "#FF9900" }} />
                          <Typography sx={{
                            color: "text.secondary", fontSize: "0.62rem",
                            letterSpacing: "0.14em", textTransform: "uppercase",
                            fontFamily: "'DM Mono',monospace",
                          }}>
                            Key Achievements
                          </Typography>
                        </Box>

                        <Box sx={{ display: "flex", flexDirection: "column", gap: 0.8 }}>
                          {achievements.map(({ text, metric }, i) => (
                            <Box key={i} sx={{ display: "flex", gap: 1.2, alignItems: "flex-start" }}>
                              <Box sx={{
                                width: 4, height: 4, borderRadius: "50%",
                                background: "#00E5FF", mt: 0.8, flexShrink: 0,
                              }} />
                              <Typography sx={{
                                color: "text.secondary", fontSize: "0.78rem",
                                lineHeight: 1.7, fontFamily: "'DM Mono',monospace", flex: 1,
                              }}>
                                {metric ? (
                                  <>
                                    {text.split(metric)[0]}
                                    <Box component="span" sx={{ color: "primary.main", fontWeight: 600 }}>
                                      {metric}
                                    </Box>
                                    {text.split(metric)[1]}
                                  </>
                                ) : text}
                              </Typography>
                            </Box>
                          ))}
                        </Box>
                      </Box>

                      {/* tech chips — grouped by category */}
                      <Box sx={{
                        pt: 2, borderTop: "1px solid rgba(0,229,255,0.06)",
                        display: "flex", flexWrap: "wrap", gap: 2,
                      }}>
                        {Object.entries(tech).map(([key, chips]) => (
                          chips.length > 0 && (
                            <Box key={key}>
                              <Typography sx={{
                                color: TECH_COLOR[key] ?? "text.secondary",
                                fontSize: "0.58rem", letterSpacing: "0.1em",
                                textTransform: "uppercase",
                                fontFamily: "'DM Mono',monospace", mb: 0.6,
                              }}>
                                {TECH_LABEL[key] ?? key}
                              </Typography>
                              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.6 }}>
                                {chips.map((t) => (
                                  <Chip key={t} label={t} size="small" sx={{
                                    background: `${TECH_COLOR[key] ?? "#00E5FF"}0D`,
                                    border: `1px solid ${TECH_COLOR[key] ?? "#00E5FF"}25`,
                                    color: "text.secondary", fontSize: "0.62rem", height: 20,
                                    "& .MuiChip-label": { px: 0.8 },
                                  }} />
                                ))}
                              </Box>
                            </Box>
                          )
                        ))}
                      </Box>
                    </Box>
                  </Box>
                </Box>
              ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}