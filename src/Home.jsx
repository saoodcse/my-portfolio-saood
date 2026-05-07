import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector }            from "react-redux";
import { Link }                                from "react-router-dom";
import {
  Box, Container, Typography, Button, Chip,
  Grid, Skeleton,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import EmailIcon        from "@mui/icons-material/Email";
import ArticleIcon      from "@mui/icons-material/Article";
import GitHubIcon       from "@mui/icons-material/GitHub";
import LinkedInIcon     from "@mui/icons-material/LinkedIn";
import EmailOutlined    from "@mui/icons-material/EmailOutlined";
import LocationOnIcon   from "@mui/icons-material/LocationOn";
import { fetchHomeData } from "./homeSlice";

/* ── Blinking cursor ─────────────────────────────────────────── */
function Cursor() {
  const [on, setOn] = useState(true);
  useEffect(() => {
    const t = setInterval(() => setOn((v) => !v), 530);
    return () => clearInterval(t);
  }, []);
  return (
    <Box component="span" sx={{ color: "primary.main", opacity: on ? 1 : 0, transition: "opacity 0.1s" }}>
      ▌
    </Box>
  );
}

/* ── Skeleton loader for the right panel ─────────────────────── */
function RightSkeleton() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
      <Skeleton variant="rectangular" sx={{ borderRadius: "2px", aspectRatio: "1/1", background: "rgba(0,229,255,0.05)" }} />
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
        {[1,2,3,4].map((i) => (
          <Skeleton key={i} variant="rectangular" sx={{ flex:"1 1 calc(50% - 12px)", height: 72, borderRadius:"2px", background:"rgba(0,229,255,0.05)" }} />
        ))}
      </Box>
      <Skeleton variant="rectangular" height={200} sx={{ borderRadius: "2px", background: "rgba(0,229,255,0.05)" }} />
    </Box>
  );
}

/* ── Skeleton loader for the left panel ─────────────────────── */
function LeftSkeleton() {
  return (
    <Box>
      <Skeleton width={160} height={28} sx={{ mb: 3, borderRadius: "2px", background: "rgba(0,229,255,0.05)" }} />
      <Skeleton width="70%"  height={80} sx={{ mb: 1, background: "rgba(0,229,255,0.05)" }} />
      <Skeleton width="60%"  height={80} sx={{ mb: 2, background: "rgba(0,229,255,0.05)" }} />
      <Skeleton width="90%"  height={16} sx={{ mb: 1, background: "rgba(0,229,255,0.04)" }} />
      <Skeleton width="80%"  height={16} sx={{ mb: 4, background: "rgba(0,229,255,0.04)" }} />
      <Box sx={{ display: "flex", gap: 1.5, mb: 4 }}>
        {[1,2,3].map((i) => <Skeleton key={i} width={120} height={44} sx={{ borderRadius: "2px", background: "rgba(0,229,255,0.05)" }} />)}
      </Box>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.8 }}>
        {Array.from({ length: 12 }).map((_, i) => (
          <Skeleton key={i} width={60 + Math.random() * 40} height={24} sx={{ borderRadius: "12px", background: "rgba(0,229,255,0.05)" }} />
        ))}
      </Box>
    </Box>
  );
}

/* ── Main Component ──────────────────────────────────────────── */
export default function Home() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((s) => s.home);
  const heroRef = useRef(null);

  useEffect(() => {
    if (!data) dispatch(fetchHomeData());
  }, [dispatch, data]);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(28px)";
    requestAnimationFrame(() => {
      el.style.transition = "opacity 0.9s ease, transform 0.9s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    });
  }, []);

  const SOCIAL_ICONS = data ? [
    { icon: <GitHubIcon sx={{ fontSize: 18 }} />,    href: data.social.github,   label: "GitHub"   },
    { icon: <LinkedInIcon sx={{ fontSize: 18 }} />,  href: data.social.linkedin, label: "LinkedIn" },
    { icon: <EmailOutlined sx={{ fontSize: 18 }} />, href: data.social.email,    label: "Email"    },
  ] : [];


  return (
    <Box sx={{
      minHeight: "calc(100vh - 64px)",
      display: "flex", alignItems: "center",
      position: "relative", overflow: "hidden",
      py: { xs: 2, md: 3 },
    }}>

      {/* ── Dot-grid bg ── */}
      <Box aria-hidden sx={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "radial-gradient(rgba(0,229,255,0.07) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
        maskImage: "radial-gradient(ellipse 85% 85% at 50% 50%, black 20%, transparent 100%)",
      }} />

      {/* ── Glow blobs ── */}
      <Box aria-hidden sx={{
        position: "absolute", top: "-10%", left: "-5%",
        width: 500, height: 500, borderRadius: "50%",
        background: "radial-gradient(circle,rgba(0,229,255,0.07) 0%,transparent 70%)",
        pointerEvents: "none",
      }} />
      <Box aria-hidden sx={{
        position: "absolute", bottom: "-15%", right: "-5%",
        width: 400, height: 400, borderRadius: "50%",
        background: "radial-gradient(circle,rgba(255,109,0,0.06) 0%,transparent 70%)",
        pointerEvents: "none",
      }} />

      <Container maxWidth="lg" ref={heroRef}>
        <Box sx={{
          display: "flex", gap: 5,
          flexDirection: { xs: "column", md: "row" },
          alignItems: "stretch",
        }}>

          {/* ══════ LEFT ══════ */}
          <Box sx={{ flex: 1, minWidth: 0 }}>
            {loading || !data ? <LeftSkeleton /> : (
              <>
                {/* Status + location */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3, flexWrap: "wrap" }}>
                  <Box sx={{
                    display: "inline-flex", alignItems: "center", gap: 0.8,
                    px: 1.5, py: 0.6,
                    border: "1px solid rgba(0,229,255,0.2)", borderRadius: "2px",
                    background: "rgba(0,229,255,0.04)",
                  }}>
                    <Box sx={{
                      width: 6, height: 6, borderRadius: "50%",
                      background: "#00E5FF", boxShadow: "0 0 8px #00E5FF",
                      animation: "pulse 2s infinite",
                      "@keyframes pulse": { "0%,100%": { opacity: 1 }, "50%": { opacity: 0.35 } },
                    }} />
                    <Typography sx={{ color: "primary.main", fontSize: "0.68rem", letterSpacing: "0.12em", fontFamily: "'DM Mono',monospace" }}>
                      {data.status}
                    </Typography>
                  </Box>

                  <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                    <LocationOnIcon sx={{ fontSize: 14, color: "text.secondary" }} />
                    <Typography sx={{ color: "text.secondary", fontSize: "0.72rem", fontFamily: "'DM Mono',monospace" }}>
                      {data.location}
                    </Typography>
                  </Box>
                </Box>

                {/* Name */}
                <Box sx={{ mb: 3 }}>
                  <Typography sx={{
                    color: "text.secondary", fontSize: "0.78rem", letterSpacing: "0.18em",
                    textTransform: "uppercase", mb: 1, fontFamily: "'DM Mono',monospace",
                  }}>
                    {data.role}
                  </Typography>

                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Typography variant="h1" sx={{
                    fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem" },
                    lineHeight: 1, fontWeight: 800, color: "text.primary",
                  }}>
                    {data.name.split(" ")[0]} 

                  </Typography>

                  <Typography variant="h1" sx={{
                    fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem" },
                    lineHeight: 1, fontWeight: 800, mb: 2,
                    background: "linear-gradient(135deg,#00E5FF 0%,#0091EA 60%,#FF6D00 100%)",
                    backgroundClip: "text", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                  }}>
                    {data.name.split(" ")[1]}
                  </Typography>
                  </Box>

                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Box sx={{ width: 48, height: 2, background: "linear-gradient(90deg,#00E5FF,transparent)" }} />
                    <Typography sx={{ color: "text.secondary", fontSize: "0.72rem", letterSpacing: "0.1em", fontFamily: "'DM Mono',monospace" }}>
                      {data.tagline}
                    </Typography>
                  </Box>
                </Box>

                {/* Bio */}
                <Typography sx={{
                  color: "text.secondary", fontSize: "0.9rem", lineHeight: 2,
                  mb: 4, maxWidth: 560,
                  borderLeft: "2px solid rgba(0,229,255,0.2)", pl: 2,
                  fontFamily: "'DM Mono',monospace",
                }}>
                  {data.bio.split("10K+").map((part, i) =>
                    i === 0 ? (
                      <React.Fragment key={i}>
                        {part.split("high-throughput fintech systems").map((sub, j) =>
                          j === 0 ? sub : (
                            <React.Fragment key={j}>
                              <Box component="span" sx={{ color: "primary.main" }}>high-throughput fintech systems</Box>
                              {sub}
                            </React.Fragment>
                          )
                        )}
                      </React.Fragment>
                    ) : (
                      <React.Fragment key={i}>
                        <Box component="span" sx={{ color: "primary.main" }}>10K+</Box>
                        {part}
                      </React.Fragment>
                    )
                  )}
                </Typography>

                {/* CTA buttons */}
                <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap", mb: 4 }}>
                  <Button component={Link} to="/projects" variant="contained"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      background: "linear-gradient(135deg,#00E5FF,#0091EA)", color: "#050A12", fontWeight: 700,
                      "&:hover": { background: "linear-gradient(135deg,#33EAFF,#00B0FF)", transform: "translateY(-2px)", boxShadow: "0 10px 28px rgba(0,229,255,0.3)" },
                      transition: "all 0.25s ease",
                    }}>
                    Projects
                  </Button>

                  <Button component={Link} to="/contact" variant="outlined"
                    startIcon={<EmailIcon sx={{ fontSize: "16px !important" }} />}
                    sx={{
                      borderColor: "rgba(0,229,255,0.3)", color: "text.secondary",
                      "&:hover": { borderColor: "primary.main", color: "primary.main", background: "rgba(0,229,255,0.06)", transform: "translateY(-2px)" },
                      transition: "all 0.25s ease",
                    }}>
                    Contact Me
                  </Button>

                  <Button component={Link} to="/resume-cover" variant="outlined"
                    startIcon={<ArticleIcon sx={{ fontSize: "16px !important" }} />}
                    sx={{
                      borderColor: "rgba(255,109,0,0.3)", color: "text.secondary",
                      "&:hover": { borderColor: "#FF6D00", color: "#FF6D00", background: "rgba(255,109,0,0.06)", transform: "translateY(-2px)" },
                      transition: "all 0.25s ease",
                    }}>
                    Resume
                  </Button>
                </Box>

                {/* Social icons */}
                <Box sx={{ display: "flex", gap: 1.5, alignItems: "center", mb: 4 }}>
                  <Typography sx={{ color: "text.secondary", fontSize: "0.65rem", letterSpacing: "0.1em", fontFamily: "'DM Mono',monospace" }}>
                    FIND ME ON
                  </Typography>
                  {SOCIAL_ICONS.map(({ icon, href, label }) => (
                    <Box key={label} component="a" href={href} target="_blank" rel="noopener noreferrer"
                      title={label}
                      sx={{
                        width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center",
                        border: "1px solid rgba(0,229,255,0.15)", borderRadius: "2px",
                        color: "text.secondary", textDecoration: "none",
                        "&:hover": { color: "primary.main", borderColor: "primary.main", background: "rgba(0,229,255,0.08)", transform: "translateY(-2px)" },
                        transition: "all 0.2s ease",
                      }}>
                      {icon}
                    </Box>
                  ))}
                </Box>

                {/* Skill chips */}
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.8 }}>
                  {data.skills.map((skill) => (
                    <Chip key={skill} label={skill} size="small" sx={{
                      background: "rgba(0,229,255,0.04)", border: "1px solid rgba(0,229,255,0.1)",
                      color: "text.secondary", fontSize: "0.65rem", height: 24,
                      "&:hover": { background: "rgba(0,229,255,0.1)", borderColor: "rgba(0,229,255,0.3)", color: "primary.main" },
                      transition: "all 0.2s ease",
                    }} />
                  ))}
                </Box>
              </>
            )}
          </Box>

          {/* ══════ RIGHT ══════ */}
          <Box sx={{ width: { xs: "100%", md: "420px" }, display: "flex", flexDirection: "column", gap: 2.5 }}>
            {loading || !data ? <RightSkeleton /> : (
              <>
                {/* Photo card */}
                <Box sx={{
                  border: "1px solid rgba(0,229,255,0.2)", borderRadius: "2px",
                  overflow: "hidden", background: "rgba(13,27,42,0.8)",
                  position: "relative",
                }}>
                  {/* Corner brackets */}
                  {[
                    { top: 0, left: 0, borderTop: "2px solid #00E5FF", borderLeft: "2px solid #00E5FF" },
                    { top: 0, right: 0, borderTop: "2px solid #00E5FF", borderRight: "2px solid #00E5FF" },
                    { bottom: 0, left: 0, borderBottom: "2px solid #00E5FF", borderLeft: "2px solid #00E5FF" },
                    { bottom: 0, right: 0, borderBottom: "2px solid #00E5FF", borderRight: "2px solid #00E5FF" },
                  ].map((s, i) => (
                    <Box key={i} sx={{ position: "absolute", width: 16, height: 16, zIndex: 2, ...s }} />
                  ))}

                  <Box sx={{
                    width: "100%", aspectRatio: "1/1",
                    display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                    background: "linear-gradient(135deg,rgba(0,229,255,0.06) 0%,rgba(13,27,42,0.95) 100%)",
                    position: "relative", overflow: "hidden",
                  }}>
                    {/* Decorative rings */}
                    {[120, 180, 240].map((size) => (
                      <Box key={size} sx={{
                        position: "absolute", width: size, height: size, borderRadius: "50%",
                        border: "1px solid rgba(0,229,255,0.07)",
                        top: "50%", left: "50%", transform: "translate(-50%,-50%)",
                      }} />
                    ))}

                    {/* Avatar */}
                    <Box sx={{
                      width: 110, height: 110, borderRadius: "50%",
                      background: "linear-gradient(135deg,rgba(0,229,255,0.15),rgba(0,145,234,0.1))",
                      border: "2px solid rgba(0,229,255,0.3)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      boxShadow: "0 0 32px rgba(0,229,255,0.15)",
                      mb: 2, zIndex: 1, position: "relative",
                      fontSize: "2.4rem", color: "primary.main",
                      fontFamily: "'DM Mono',monospace", fontWeight: 700,
                    }}>
                      {data.initials}
                    </Box>

                    <Typography sx={{ color: "text.primary", fontSize: "1rem", fontWeight: 700, fontFamily: "'DM Mono',monospace", zIndex: 1, position: "relative" }}>
                      {data.name}
                    </Typography>
                    <Typography sx={{ color: "text.secondary", fontSize: "0.72rem", fontFamily: "'DM Mono',monospace", zIndex: 1, position: "relative", mt: 0.4 }}>
                      {data.role}
                    </Typography>

                    {/* Replace photo hint */}
                    <Box sx={{
                      position: "absolute", bottom: 12, left: "50%", transform: "translateX(-50%)",
                      px: 1.5, py: 0.4, background: "rgba(5,10,18,0.85)",
                      border: "1px dashed rgba(0,229,255,0.25)", borderRadius: "2px", whiteSpace: "nowrap",
                    }}>
                      <Typography sx={{ color: "rgba(0,229,255,0.45)", fontSize: "0.6rem", fontFamily: "'DM Mono',monospace" }}>
                        // replace with your photo
                      </Typography>
                    </Box>
                  </Box>

                  {/* Status strip */}
                  <Box sx={{
                    py: 1, px: 2, borderTop: "1px solid rgba(0,229,255,0.1)",
                    display: "flex", alignItems: "center", gap: 1, justifyContent: "center",
                    background: "rgba(5,10,18,0.6)",
                  }}>
                    <Box sx={{ width: 6, height: 6, borderRadius: "50%", background: "#28CA41", boxShadow: "0 0 6px #28CA41" }} />
                    <Typography sx={{ color: "#28CA41", fontSize: "0.65rem", fontFamily: "'DM Mono',monospace" }}>
                      Available for opportunities
                    </Typography>
                  </Box>
                </Box>

                {/* Stats grid */}
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
                  {data.stats.map(({ value, label }) => (
                    <Box key={label} sx={{
                      flex: "1 1 calc(50% - 12px)", minWidth: "140px", p: 2, textAlign: "center",
                      border: "1px solid rgba(0,229,255,0.1)", borderRadius: "2px",
                      background: "rgba(13,27,42,0.6)", backdropFilter: "blur(8px)",
                      "&:hover": { border: "1px solid rgba(0,229,255,0.25)", background: "rgba(0,229,255,0.04)", transform: "translateY(-2px)" },
                      transition: "all 0.25s ease",
                    }}>
                      <Typography sx={{
                        background: "linear-gradient(135deg,#00E5FF,#0091EA)",
                        backgroundClip: "text", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                        fontSize: "1.8rem", fontWeight: 800, lineHeight: 1, fontFamily: "'DM Mono',monospace",
                      }}>
                        {value}
                      </Typography>
                      <Typography sx={{ color: "text.secondary", fontSize: "0.65rem", mt: 0.5, fontFamily: "'DM Mono',monospace" }}>
                        {label}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                {/* Terminal */}
                <Box sx={{
                  p: 2.5, border: "1px solid rgba(0,229,255,0.12)", borderRadius: "2px",
                  background: "rgba(5,10,18,0.9)", fontFamily: "'DM Mono',monospace",
                  boxShadow: "inset 0 0 40px rgba(0,0,0,0.4)",
                }}>
                  {/* Titlebar */}
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2, pb: 1.5, borderBottom: "1px solid rgba(0,229,255,0.08)" }}>
                    {["#FF5F57","#FFBD2E","#28CA41"].map((c) => (
                      <Box key={c} sx={{ width: 10, height: 10, borderRadius: "50%", background: c }} />
                    ))}
                    <Typography sx={{ color: "rgba(0,229,255,0.3)", fontSize: "0.62rem", ml: 1, fontFamily: "'DM Mono',monospace" }}>
                      saood@dev ~ zsh
                    </Typography>
                  </Box>

                  {data.terminal.map(({ cmd, val }) => (
                    <Box key={cmd} sx={{ mb: 0.8, display: "flex", gap: 1, flexWrap: "wrap" }}>
                      <Typography sx={{ color: "#00E5FF", fontSize: "0.72rem" }}>{cmd}</Typography>
                      <Typography sx={{ color: "rgba(0,229,255,0.35)", fontSize: "0.72rem" }}>→</Typography>
                      <Typography sx={{ color: val.includes("✓") ? "#28CA41" : "text.secondary", fontSize: "0.72rem" }}>
                        {val}
                      </Typography>
                    </Box>
                  ))}

                  <Box sx={{ mt: 1.5, display: "flex", alignItems: "center", gap: 0.5 }}>
                    <Typography sx={{ color: "primary.main", fontSize: "0.72rem" }}>$</Typography>
                    <Cursor />
                  </Box>
                </Box>
              </>
            )}
          </Box>

        </Box>
      </Container>
    </Box>
  );
}