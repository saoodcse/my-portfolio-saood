import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector }            from "react-redux";
import { Link }                                from "react-router-dom";
import {
  Box, Container, Typography, Button, Chip, Skeleton,
} from "@mui/material";
import ArrowForwardIcon  from "@mui/icons-material/ArrowForward";
import PersonIcon from '@mui/icons-material/Person';
import { motion } from "framer-motion";
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import EmailIcon         from "@mui/icons-material/Email";
import ArticleIcon       from "@mui/icons-material/Article";
import GitHubIcon        from "@mui/icons-material/GitHub";
import LinkedInIcon      from "@mui/icons-material/LinkedIn";
import EmailOutlined     from "@mui/icons-material/EmailOutlined";
import LocationOnIcon    from "@mui/icons-material/LocationOn";
import TypingText        from "./utils/TypingText";
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

/* ── Skeletons ───────────────────────────────────────────────── */
function RightSkeleton() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
      <Skeleton variant="rectangular" sx={{ borderRadius: "2px", aspectRatio: "3/4", background: "rgba(0,229,255,0.05)" }} />
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
        {[1,2,3,4].map((i) => (
          <Skeleton key={i} variant="rectangular" sx={{ flex: "1 1 calc(50% - 12px)", height: 72, borderRadius: "2px", background: "rgba(0,229,255,0.05)" }} />
        ))}
      </Box>
    </Box>
  );
}

function LeftSkeleton() {
  return (
    <Box>
      <Skeleton width={160} height={28} sx={{ mb: 3, borderRadius: "2px", background: "rgba(0,229,255,0.05)" }} />
      <Skeleton width="70%" height={80} sx={{ mb: 1, background: "rgba(0,229,255,0.05)" }} />
      <Skeleton width="60%" height={80} sx={{ mb: 2, background: "rgba(0,229,255,0.05)" }} />
      <Skeleton width="90%" height={16} sx={{ mb: 1, background: "rgba(0,229,255,0.04)" }} />
      <Skeleton width="80%" height={16} sx={{ mb: 4, background: "rgba(0,229,255,0.04)" }} />
      <Box sx={{ display: "flex", gap: 1.5, mb: 4 }}>
        {[1,2,3].map((i) => (
          <Skeleton key={i} width={120} height={44} sx={{ borderRadius: "2px", background: "rgba(0,229,255,0.05)" }} />
        ))}
      </Box>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.8 }}>
        {[80,60,70,90,65,75,80,60,70,55,85,65].map((w, i) => (
          <Skeleton key={i} width={w} height={24} sx={{ borderRadius: "12px", background: "rgba(0,229,255,0.05)" }} />
        ))}
      </Box>
    </Box>
  );
}

/* ── Main ────────────────────────────────────────────────────── */
export default function Home() {
  const [nameTyped, setNameTyped] = useState(false);
  const [showPopup, setShowPopup] = useState(false);           // ← CHANGE 1: popup state
  const dispatch                  = useDispatch();
  const { data, loading }         = useSelector((s) => s.home);
  const heroRef                   = useRef(null);

  useEffect(() => {
    if (!data) dispatch(fetchHomeData());
  }, [dispatch, data]);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    el.style.opacity   = "0";
    el.style.transform = "translateY(28px)";
    requestAnimationFrame(() => {
      el.style.transition = "opacity 0.9s ease, transform 0.9s ease";
      el.style.opacity    = "1";
      el.style.transform  = "translateY(0)";
    });
  }, []);

  // ← CHANGE 1: show popup after 30 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  const SOCIAL_ICONS = data ? [
    { icon: <GitHubIcon sx={{ fontSize: 18 }} />,    href: data.social.github,   label: "GitHub"   },
    { icon: <LinkedInIcon sx={{ fontSize: 18 }} />,  href: data.social.linkedin, label: "LinkedIn" },
    { icon: <EmailOutlined sx={{ fontSize: 18 }} />, href: data.social.email,    label: "Email"    },
  ] : [];

  /* ── Terminal — shared between mobile & desktop ── */
  const TerminalBlock = () => (
    <Box sx={{
      p: 2,
      border: "1px solid rgba(0,229,255,0.12)", borderRadius: "2px",
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

      {/* Rows */}
      {data.terminal.map(({ cmd, val }) => (
        <Box
          key={cmd}
          sx={{ mb: 0.8, display: "flex", gap: 0.7, flexWrap: "wrap" }}
        >
          <Typography sx={{ color: "#00E5FF", fontSize: "0.70rem", whiteSpace: "nowrap" }}>
            {cmd}
          </Typography>
          <Typography sx={{ color: "rgba(0,229,255,0.35)", fontSize: "0.70rem" }}>
            →
          </Typography>
          <Typography sx={{
            color:     val.includes("✓") ? "#28CA41" : "text.secondary",
            fontSize:  "0.70rem",
            wordBreak: "break-word",
          }}>
            {val}
          </Typography>
        </Box>
      ))}

      {/* Cursor row */}
      <Box sx={{ mt: 1.5, display: "flex", alignItems: "center", gap: 0.5 }}>
        <Typography sx={{ color: "primary.main", fontSize: "0.72rem" }}>$</Typography>
        <Cursor />
      </Box>
    </Box>
  );

  return (
    <Box sx={{
      display: "flex", alignItems: "center",
      position: "relative", overflow: "hidden",
      py: { xs: 2, md: 3 },
    }}>

      {/* Dot-grid bg */}
      <Box aria-hidden sx={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "radial-gradient(rgba(0,229,255,0.07) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
        maskImage: "radial-gradient(ellipse 85% 85% at 50% 50%, black 20%, transparent 100%)",
      }} />

      {/* Glow blobs */}
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

                {/* Name block */}
                <Box sx={{ mb: 3 }}>
                  <TypingText
                    text={data.role}
                    speed={55}
                    loop={true}
                    sx={{
                      color: "text.secondary", fontSize: "0.78rem",
                      letterSpacing: "0.18em", textTransform: "uppercase",
                      mb: 1, fontFamily: "'DM Mono',monospace",
                    }}
                  />
                  <TypingText
                    text={data.name}
                    speed={100}
                    loop={true}
                    sx={{
                      fontSize:             { xs: "2.5rem", sm: "3.5rem", md: "4.5rem" },
                      lineHeight:           1,
                      fontWeight:           800,
                      mb:                   1,
                      background:           "linear-gradient(135deg,#00E5FF 0%,#0091EA 60%,#FF6D00 100%)",
                      backgroundClip:       "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor:  "transparent",
                    }}
                  />
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: 1 }}>
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
                  {["low-latency", "distributed systems", "AI/LLM integrations", "intelligent automation", "LLM integrations", "vector search", "Java", "Python"].reduce(
                    (acc, keyword) =>
                      acc.flatMap((part) =>
                        typeof part !== "string"
                          ? [part]
                          : part.split(keyword).flatMap((seg, j, arr) =>
                              j < arr.length - 1
                                ? [seg, <Box key={`${keyword}-${j}`} component="span" sx={{ color: "primary.main" }}>{keyword}</Box>]
                                : [seg]
                            )
                      ),
                    [data.bio]
                  )}
                </Typography>

                {/* CTA buttons */}
                <Box
                  sx={{
                    display: "flex",
                    gap: 1.8,
                    flexWrap: "wrap",
                    mb: 4,
                    justifyContent: { xs: "space-between", sm: "flex-start" },
                    alignItems: "center",
                  }}
                >
                  {/* Career */}
                  <motion.div whileHover={{ y: -6, scale: 1.03 }} whileTap={{ scale: 0.96 }}>
                    <Button
                      component={Link}
                      to="/experience"
                      variant="contained"
                      endIcon={<WorkHistoryIcon />}
                      sx={{
                        position: "relative", overflow: "hidden",
                        px: 2.6, py: 1.2, borderRadius: "14px",
                        background: "linear-gradient(135deg,#00E5FF,#0091EA)",
                        color: "#050A12", fontWeight: 800, letterSpacing: "0.3px",
                        boxShadow: "0 8px 24px rgba(0,229,255,0.22)",
                        "&::before": {
                          content: '""', position: "absolute",
                          top: 0, left: "-120%", width: "100%", height: "100%",
                          background: "linear-gradient(90deg,transparent,rgba(255,255,255,0.35),transparent)",
                          transition: "0.7s",
                        },
                        "&:hover::before": { left: "120%" },
                        "&:hover": {
                          background: "linear-gradient(135deg,#33EAFF,#00B0FF)",
                          boxShadow: "0 14px 34px rgba(0,229,255,0.35)",
                        },
                        transition: "all 0.3s ease",
                      }}
                    >
                      Career
                    </Button>
                  </motion.div>

                  {/* About */}
                  <motion.div whileHover={{ y: -5, scale: 1.03 }} whileTap={{ scale: 0.96 }}>
                    <Button
                      component={Link} to="/about" variant="outlined" startIcon={<PersonIcon />}
                      sx={{
                        px: 2.5, py: 1.1, borderRadius: "14px",
                        borderColor: "rgba(0,229,255,0.25)", color: "text.secondary",
                        backdropFilter: "blur(10px)", background: "rgba(255,255,255,0.02)",
                        "&:hover": {
                          borderColor: "#00E5FF", color: "#00E5FF",
                          background: "rgba(0,229,255,0.08)",
                          boxShadow: "0 10px 26px rgba(0,229,255,0.12)",
                        },
                        transition: "all 0.28s ease",
                      }}
                    >
                      About
                    </Button>
                  </motion.div>

                  {/* Contact */}
                  <motion.div whileHover={{ y: -5, scale: 1.03 }} whileTap={{ scale: 0.96 }}>
                    <Button
                      component={Link} to="/contact" variant="outlined" startIcon={<AlternateEmailIcon />}
                      sx={{
                        px: 2.5, py: 1.1, borderRadius: "14px",
                        borderColor: "rgba(0,229,255,0.25)", color: "text.secondary",
                        background: "rgba(255,255,255,0.02)",
                        "&:hover": {
                          borderColor: "#00E5FF", color: "#00E5FF",
                          background: "rgba(0,229,255,0.08)",
                          boxShadow: "0 10px 26px rgba(0,229,255,0.12)",
                        },
                        transition: "all 0.28s ease",
                      }}
                    >
                      Contact
                    </Button>
                  </motion.div>

                  {/* Resume */}
                  <motion.div whileHover={{ y: -5, scale: 1.03 }} whileTap={{ scale: 0.96 }}>
                    <Button
                      component={Link} to="/resume-cover" variant="outlined" startIcon={<ArticleIcon />}
                      sx={{
                        px: 2.5, py: 1.1, borderRadius: "14px",
                        borderColor: "rgba(255,109,0,0.3)", color: "text.secondary",
                        background: "rgba(255,255,255,0.02)",
                        "&:hover": {
                          borderColor: "#FF6D00", color: "#FF6D00",
                          background: "rgba(255,109,0,0.08)",
                          boxShadow: "0 10px 26px rgba(255,109,0,0.15)",
                        },
                        transition: "all 0.28s ease",
                      }}
                    >
                      Resume
                    </Button>
                  </motion.div>
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
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.8, mb: 3 }}>
                  {data.skills.map((skill) => (
                    <Chip key={skill} label={skill} size="small" sx={{
                      background: "rgba(0,229,255,0.04)", border: "1px solid rgba(0,229,255,0.1)",
                      color: "text.secondary", fontSize: "0.65rem", height: 24,
                      "&:hover": { background: "rgba(0,229,255,0.1)", borderColor: "rgba(0,229,255,0.3)", color: "primary.main" },
                      transition: "all 0.2s ease",
                    }} />
                  ))}
                </Box>

                {/* Terminal — desktop only */}
                <Box sx={{ display: { xs: "none", md: "block" } }}>
                  <TerminalBlock />
                </Box>
              </>
            )}
          </Box>

          {/* ══════ RIGHT ══════ */}
          <Box sx={{ width: { xs: "100%", md: "420px" }, display: "flex", flexDirection: "column", gap: 2.5 }}>
            {loading || !data ? <RightSkeleton /> : (
              <>
                {/* ── CHANGE 2: Photo card — bg image on mobile, <img> on desktop ── */}
                <Box sx={{
                  border: "1px solid rgba(0,229,255,0.2)", borderRadius: "2px",
                  overflow: "hidden", background: "rgba(13,27,42,0.8)",
                  position: "relative",
                  // Mobile: photo as CSS background
                  backgroundImage: { xs: `url(/photo/profilephoto.jpeg)`, md: "none" },
                  backgroundSize: "cover",
                  backgroundPosition: "center top",
                  minHeight: { xs: 420, md: "auto" },
                }}>
                  {/* Corner accents */}
                  {[
                    { top: 0,    left: 0,  borderTop:    "2px solid #00E5FF", borderLeft:  "2px solid #00E5FF" },
                    { top: 0,    right: 0, borderTop:    "2px solid #00E5FF", borderRight: "2px solid #00E5FF" },
                    { bottom: 0, left: 0,  borderBottom: "2px solid #00E5FF", borderLeft:  "2px solid #00E5FF" },
                    { bottom: 0, right: 0, borderBottom: "2px solid #00E5FF", borderRight: "2px solid #00E5FF" },
                  ].map((s, i) => (
                    <Box key={i} sx={{ position: "absolute", width: 16, height: 16, zIndex: 2, ...s }} />
                  ))}

                  {/* Image — hidden on mobile (using bg instead), visible on desktop */}
                  <Box
                    component="img"
                    src="/photo/profilephoto.jpeg"
                    alt={data.name}
                    onError={(e) => { e.target.style.display = "none"; }}
                    sx={{
                      width: "100%", aspectRatio: "3/4",
                      objectFit: "cover", objectPosition: "center top",
                      display: { xs: "none", md: "block" },        // ← hidden on mobile
                      filter: "brightness(0.92) contrast(1.05)",
                    }}
                  />

                  {/* Name + role overlay */}
                  <Box sx={{
                    position: "absolute", bottom: 0, left: 0, right: 0,
                    px: 2, py: 1.5, zIndex: 1,
                    background: "linear-gradient(to top, rgba(5,10,18,0.95) 0%, rgba(5,10,18,0.6) 60%, transparent 100%)",
                  }}>
                    <TypingText
                      text={data.name}
                      speed={90}
                      loop={true}
                      onDone={() => setNameTyped(true)}
                      sx={{
                        color: "text.primary", fontSize: "1rem",
                        fontWeight: 700, fontFamily: "'DM Mono',monospace",
                      }}
                    />
                    {nameTyped && (
                      <TypingText
                        text={data.role}
                        speed={60}
                        loop={true}
                        sx={{
                          color: "text.secondary", fontSize: "0.72rem",
                          fontFamily: "'DM Mono',monospace", mt: 0.4,
                        }}
                      />
                    )}
                  </Box>

                  {/* Status strip */}
                  <Box sx={{
                    py: 1, px: 2, borderTop: "1px solid rgba(0,229,255,0.1)",
                    display: "flex", alignItems: "center", gap: 1, justifyContent: "center",
                    background: "rgba(5,10,18,0.6)", position: "relative", zIndex: 1,
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

                {/* Terminal — mobile only, after stats */}
                <Box sx={{ display: { xs: "block", md: "none" } }}>
                  <TerminalBlock />
                </Box>
              </>
            )}
          </Box>

        </Box>
      </Container>

      {/* ── CHANGE 1: Connect popup — appears after 30 seconds ── */}
      {showPopup && (
          <Box
            sx={{
              position: "fixed",
              bottom: 28,
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 1300,
              p: 3,
              width: 280,
              border: "1px solid rgba(0,229,255,0.25)",
              borderRadius: "4px",
              background: "rgba(5,10,18,0.96)",
              backdropFilter: "blur(20px)",
              boxShadow: "0 0 40px rgba(0,229,255,0.12), 0 20px 60px rgba(0,0,0,0.6)",
              animation: "slideUp 0.4s ease",
              "@keyframes slideUp": {
                from: { opacity: 0, transform: "translate(-50%, 20px)" },
                to:   { opacity: 1, transform: "translate(-50%, 0)" },
              },
            }}
          >
          {/* Corner accents */}
          {[
            { top: 0,    left: 0,  borderTop:    "2px solid #00E5FF", borderLeft:  "2px solid #00E5FF" },
            { top: 0,    right: 0, borderTop:    "2px solid #00E5FF", borderRight: "2px solid #00E5FF" },
            { bottom: 0, left: 0,  borderBottom: "2px solid #00E5FF", borderLeft:  "2px solid #00E5FF" },
            { bottom: 0, right: 0, borderBottom: "2px solid #00E5FF", borderRight: "2px solid #00E5FF" },
          ].map((s, i) => (
            <Box key={i} sx={{ position: "absolute", width: 10, height: 10, ...s }} />
          ))}

          {/* Close button */}
          <Box
            onClick={() => setShowPopup(false)}
            sx={{
              position: "absolute", top: 10, right: 10,
              width: 22, height: 22,
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer",
              color: "text.secondary",
              fontSize: "0.85rem", lineHeight: 1,
              border: "1px solid rgba(0,229,255,0.15)",
              borderRadius: "2px",
              "&:hover": { color: "primary.main", borderColor: "primary.main", background: "rgba(0,229,255,0.08)" },
              transition: "all 0.2s",
            }}
          >
            ✕
          </Box>

          {/* Pulse dot + label */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1.5 }}>
            <Box sx={{
              width: 7, height: 7, borderRadius: "50%",
              background: "#28CA41", boxShadow: "0 0 8px #28CA41",
              animation: "pulse 2s infinite",
              "@keyframes pulse": { "0%,100%": { opacity: 1 }, "50%": { opacity: 0.35 } },
            }} />
            <Typography sx={{
              color: "primary.main", fontSize: "0.62rem",
              letterSpacing: "0.14em", fontFamily: "'DM Mono',monospace",
            }}>
              OPEN TO CONNECT
            </Typography>
          </Box>

          <Typography sx={{
            color: "text.primary", fontSize: "0.88rem",
            fontWeight: 700, mb: 0.8, fontFamily: "'DM Mono',monospace",
          }}>
            Let's build something.
          </Typography>

          <Typography sx={{
            color: "text.secondary", fontSize: "0.72rem",
            lineHeight: 1.7, mb: 2.5, fontFamily: "'DM Mono',monospace",
          }}>
            Open for new roles, freelance &amp; collaborations. Drop a message!
          </Typography>

          <Button
            component={Link}
            to="/contact"
            onClick={() => setShowPopup(false)}
            variant="contained"
            endIcon={<ArrowForwardIcon sx={{ fontSize: 14 }} />}
            fullWidth
            sx={{
              py: 1, borderRadius: "4px",
              background: "linear-gradient(135deg,#00E5FF,#0091EA)",
              color: "#050A12", fontWeight: 800, fontSize: "0.72rem",
              letterSpacing: "0.1em",
              boxShadow: "0 6px 20px rgba(0,229,255,0.2)",
              "&:hover": {
                background: "linear-gradient(135deg,#33EAFF,#00B0FF)",
                boxShadow: "0 10px 28px rgba(0,229,255,0.35)",
              },
              transition: "all 0.25s ease",
            }}
          >
            GET IN TOUCH
          </Button>
        </Box>
      )}

    </Box>
  );
}