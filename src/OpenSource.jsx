import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Container, Typography, Grid, Chip, Skeleton } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ForkRightIcon  from "@mui/icons-material/ForkRight";
import GitHubIcon     from "@mui/icons-material/GitHub";
import { fetchGithub } from "./githubSlice";

const LANG_COLORS = { Java:"#B07219", Kotlin:"#7F52FF", Python:"#3776AB", JavaScript:"#F7DF1E" };

const SectionHeader = ({ tag, title, accent }) => (
  <Box sx={{ mb:8 }}>
    <Typography sx={{ color:"primary.main", fontSize:"0.72rem", letterSpacing:"0.2em", textTransform:"uppercase", mb:1, fontFamily:"'DM Mono',monospace" }}>{tag}</Typography>
    <Typography variant="h2" sx={{ fontSize:{ xs:"2.2rem", md:"3rem" }, color:"text.primary", mb:2 }}>
      {title}{" "}
      <Box component="span" sx={{ background:"linear-gradient(135deg,#00E5FF,#0091EA)", backgroundClip:"text", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
        {accent}
      </Box>
    </Typography>
    <Box sx={{ width:48, height:2, background:"linear-gradient(90deg,#00E5FF,transparent)" }} />
  </Box>
);

export default function OpenSource() {
  const dispatch = useDispatch();
  const { data: gh, loading } = useSelector((s) => s.github);

  useEffect(() => { if (!gh) dispatch(fetchGithub()); }, [dispatch, gh]);

  return (
    <Box sx={{ py:{ xs:6, md:10 } }}>
      <Container maxWidth="lg">
        <SectionHeader tag="// 07. open source" title="GitHub" accent="Activity" />

        {loading || !gh ? (
          <Skeleton variant="rectangular" height={300} sx={{ borderRadius:"2px", background:"rgba(0,229,255,0.05)" }} />
        ) : (
          <>
            {/* Stats row */}
            <Grid container spacing={2} sx={{ mb:5 }}>
              {[
                { label:"Public Repos",   value: gh.stats.publicRepos },
                { label:"Total Commits",  value: gh.stats.totalCommits },
                { label:"Total Stars",    value: gh.stats.totalStars },
                { label:"2024 Contributions", value: gh.stats.contributions2024 },
                { label:"Followers",      value: gh.stats.followers },
              ].map(({ label, value }) => (
                <Grid item xs={6} sm={4} md={2.4} key={label}>
                  <Box sx={{
                    p:2, textAlign:"center",
                    border:"1px solid rgba(0,229,255,0.1)", borderRadius:"2px",
                    background:"rgba(13,27,42,0.6)",
                    "&:hover":{ border:"1px solid rgba(0,229,255,0.25)", transform:"translateY(-2px)" },
                    transition:"all 0.25s ease",
                  }}>
                    <Typography sx={{ color:"primary.main", fontSize:"1.5rem", fontWeight:700, fontFamily:"'DM Mono',monospace" }}>{value}</Typography>
                    <Typography sx={{ color:"text.secondary", fontSize:"0.65rem", letterSpacing:"0.08em", fontFamily:"'DM Mono',monospace" }}>{label}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>

            {/* GitHub link banner */}
            <Box
              component="a" href={gh.profileUrl} target="_blank" rel="noopener noreferrer"
              sx={{
                display:"flex", alignItems:"center", gap:2, p:2.5, mb:4,
                border:"1px solid rgba(0,229,255,0.15)", borderRadius:"2px",
                background:"rgba(0,229,255,0.03)", textDecoration:"none",
                "&:hover":{ border:"1px solid rgba(0,229,255,0.3)", background:"rgba(0,229,255,0.06)" },
                transition:"all 0.2s ease",
              }}
            >
              <GitHubIcon sx={{ color:"primary.main" }} />
              <Typography sx={{ color:"primary.main", fontSize:"0.82rem", fontFamily:"'DM Mono',monospace" }}>
                github.com/{gh.username}
              </Typography>
            </Box>

            {/* Top repos */}
            <Typography sx={{ color:"text.secondary", fontSize:"0.72rem", letterSpacing:"0.15em", textTransform:"uppercase", mb:3, fontFamily:"'DM Mono',monospace" }}>
              Top Repositories
            </Typography>
            <Grid container spacing={3}>
              {gh.topRepos.map(({ id, name, description, stars, forks, language, url }) => (
                <Grid item xs={12} sm={6} key={id}>
                  <Box
                    component="a" href={url} target="_blank" rel="noopener noreferrer"
                    sx={{
                      display:"block", textDecoration:"none", p:3, height:"100%",
                      border:"1px solid rgba(0,229,255,0.08)", borderRadius:"2px",
                      background:"rgba(13,27,42,0.5)", backdropFilter:"blur(8px)",
                      transition:"all 0.3s ease",
                      "&:hover":{ border:"1px solid rgba(0,229,255,0.25)", transform:"translateY(-4px)", boxShadow:"0 16px 40px rgba(0,0,0,0.3)" },
                    }}
                  >
                    <Typography sx={{ color:"primary.main", fontSize:"0.88rem", fontWeight:600, mb:1, fontFamily:"'DM Mono',monospace" }}>
                      {name}
                    </Typography>
                    <Typography sx={{ color:"text.secondary", fontSize:"0.78rem", lineHeight:1.7, mb:2, flexGrow:1, fontFamily:"'DM Mono',monospace" }}>
                      {description}
                    </Typography>
                    <Box sx={{ display:"flex", alignItems:"center", gap:2 }}>
                      <Box sx={{ display:"flex", alignItems:"center", gap:0.5 }}>
                        <Box sx={{ width:10, height:10, borderRadius:"50%", background: LANG_COLORS[language] || "#999" }} />
                        <Typography sx={{ color:"text.secondary", fontSize:"0.68rem", fontFamily:"'DM Mono',monospace" }}>{language}</Typography>
                      </Box>
                      <Box sx={{ display:"flex", alignItems:"center", gap:0.4 }}>
                        <StarBorderIcon sx={{ fontSize:14, color:"text.secondary" }} />
                        <Typography sx={{ color:"text.secondary", fontSize:"0.68rem", fontFamily:"'DM Mono',monospace" }}>{stars}</Typography>
                      </Box>
                      <Box sx={{ display:"flex", alignItems:"center", gap:0.4 }}>
                        <ForkRightIcon sx={{ fontSize:14, color:"text.secondary" }} />
                        <Typography sx={{ color:"text.secondary", fontSize:"0.68rem", fontFamily:"'DM Mono',monospace" }}>{forks}</Typography>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </>
        )}
      </Container>
    </Box>
  );
}