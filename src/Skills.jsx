import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Container, Typography, Grid, LinearProgress, Skeleton } from "@mui/material";
import CodeIcon     from "@mui/icons-material/Code";
import LayersIcon   from "@mui/icons-material/Layers";
import StorageIcon  from "@mui/icons-material/Storage";
import HubIcon      from "@mui/icons-material/Hub";
import CloudIcon    from "@mui/icons-material/Cloud";
import BuildIcon    from "@mui/icons-material/Build";
import { fetchSkills } from "./skillsSlice";

const ICON_MAP = { code:<CodeIcon />, layers:<LayersIcon />, storage:<StorageIcon />, hub:<HubIcon />, cloud:<CloudIcon />, build:<BuildIcon /> };

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

export default function Skills() {
  const dispatch = useDispatch();
  const { data: skills, loading } = useSelector((s) => s.skills);

  useEffect(() => { if (!skills.length) dispatch(fetchSkills()); }, [dispatch, skills.length]);

  return (
    <Box sx={{ py:{ xs:6, md:10 } }}>
      <Container maxWidth="lg">
        <SectionHeader tag="// 03. skills" title="Technical" accent="Arsenal" />

        {loading ? (
          <Grid container spacing={3}>
            {Array.from({ length: 6 }).map((_, i) => (
              <Grid item xs={12} sm={6} md={4} key={i}>
                <Skeleton variant="rectangular" height={220} sx={{ borderRadius:"2px", background:"rgba(0,229,255,0.05)" }} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Grid container spacing={3}>
            {skills.map(({ category, color, icon, items }) => (
              <Grid item xs={12} sm={6} md={4} key={category}>
                <Box sx={{
                  p:3, height:"100%",
                  border:"1px solid rgba(0,229,255,0.08)", borderRadius:"2px",
                  background:"rgba(13,27,42,0.6)", backdropFilter:"blur(8px)",
                  transition:"all 0.3s ease",
                  "&:hover": { border:"1px solid rgba(0,229,255,0.25)", transform:"translateY(-4px)", boxShadow:"0 16px 40px rgba(0,0,0,0.3)" },
                }}>
                  {/* Header */}
                  <Box sx={{ display:"flex", alignItems:"center", gap:1.5, mb:3 }}>
                    <Box sx={{
                      width:36, height:36, borderRadius:"2px", display:"flex", alignItems:"center", justifyContent:"center",
                      background:`${color}14`, border:`1px solid ${color}33`,
                      "& svg": { fontSize:18, color },
                    }}>
                      {ICON_MAP[icon]}
                    </Box>
                    <Typography sx={{ color, fontSize:"0.72rem", letterSpacing:"0.12em", textTransform:"uppercase", fontFamily:"'DM Mono',monospace" }}>
                      {category}
                    </Typography>
                  </Box>

                  {/* Skills with progress */}
                  <Box sx={{ display:"flex", flexDirection:"column", gap:2 }}>
                    {items.map(({ name, level }) => (
                      <Box key={name}>
                        <Box sx={{ display:"flex", justifyContent:"space-between", mb:0.6 }}>
                          <Typography sx={{ color:"text.secondary", fontSize:"0.78rem", fontFamily:"'DM Mono',monospace" }}>{name}</Typography>
                          <Typography sx={{ color, fontSize:"0.7rem", fontFamily:"'DM Mono',monospace" }}>{level}%</Typography>
                        </Box>
                        <LinearProgress variant="determinate" value={level} sx={{
                          height:2, borderRadius:1,
                          background:"rgba(0,229,255,0.06)",
                          "& .MuiLinearProgress-bar": { background:`linear-gradient(90deg,${color},${color}99)`, borderRadius:1 },
                        }} />
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
}