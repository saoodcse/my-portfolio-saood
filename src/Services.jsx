import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Container, Typography, Grid, Chip, Skeleton, Button } from "@mui/material";
import { Link } from "react-router-dom";
import ApiIcon      from "@mui/icons-material/Api";
import HubIcon      from "@mui/icons-material/Hub";
import SupportIcon  from "@mui/icons-material/Support";
import ReviewsIcon  from "@mui/icons-material/Reviews";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { fetchServices } from "./servicesSlice";

const ICON_MAP = { api:<ApiIcon />, hub:<HubIcon />, support:<SupportIcon />, reviews:<ReviewsIcon /> };

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

export default function Services() {
  const dispatch = useDispatch();
  const { data: services, loading } = useSelector((s) => s.services);

  useEffect(() => { if (!services.length) dispatch(fetchServices()); }, [dispatch, services.length]);

  return (
    <Box sx={{ py:{ xs:6, md:10 } }}>
      <Container maxWidth="lg">
        <SectionHeader tag="// 08. services" title="What I" accent="Offer" />

        {loading ? (
          <Grid container spacing={3}>
            {[1,2,3,4].map((i) => (
              <Grid item xs={12} sm={6} key={i}>
                <Skeleton variant="rectangular" height={260} sx={{ borderRadius:"2px", background:"rgba(0,229,255,0.05)" }} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Grid container spacing={3}>
            {services.map(({ id, title, icon, description, features, price, highlight }) => (
              <Grid item xs={12} sm={6} key={id}>
                <Box sx={{
                  p:3.5, height:"100%", display:"flex", flexDirection:"column",
                  border:`1px solid ${highlight ? "rgba(0,229,255,0.35)" : "rgba(0,229,255,0.08)"}`,
                  borderRadius:"2px",
                  background: highlight ? "rgba(0,229,255,0.04)" : "rgba(13,27,42,0.6)",
                  backdropFilter:"blur(8px)",
                  position:"relative", overflow:"hidden",
                  transition:"all 0.3s ease",
                  "&:hover":{ border:"1px solid rgba(0,229,255,0.35)", transform:"translateY(-4px)", boxShadow:"0 16px 40px rgba(0,0,0,0.3)" },
                }}>
                  {highlight && (
                    <Chip label="Most Popular" size="small" sx={{
                      position:"absolute", top:16, right:16, height:20, fontSize:"0.6rem",
                      background:"rgba(0,229,255,0.15)", border:"1px solid rgba(0,229,255,0.3)",
                      color:"primary.main", fontFamily:"'DM Mono',monospace",
                      "& .MuiChip-label":{ px:0.8 },
                    }} />
                  )}

                  <Box sx={{
                    width:44, height:44, borderRadius:"2px", display:"flex", alignItems:"center", justifyContent:"center",
                    background:"rgba(0,229,255,0.08)", border:"1px solid rgba(0,229,255,0.2)", mb:2.5,
                    "& svg":{ fontSize:22, color:"primary.main" },
                  }}>
                    {ICON_MAP[icon]}
                  </Box>

                  <Typography sx={{ color:"text.primary", fontSize:"1rem", fontWeight:600, mb:1, fontFamily:"'DM Mono',monospace" }}>
                    {title}
                  </Typography>

                  <Typography sx={{ color:"text.secondary", fontSize:"0.8rem", lineHeight:1.8, mb:2.5, fontFamily:"'DM Mono',monospace" }}>
                    {description}
                  </Typography>

                  <Box sx={{ flex:1, mb:3 }}>
                    {features.map((f, i) => (
                      <Box key={i} sx={{ display:"flex", alignItems:"flex-start", gap:1, mb:0.8 }}>
                        <Box sx={{ width:4, height:4, borderRadius:"50%", background:"#00E5FF", mt:0.8, flexShrink:0 }} />
                        <Typography sx={{ color:"text.secondary", fontSize:"0.78rem", lineHeight:1.6, fontFamily:"'DM Mono',monospace" }}>{f}</Typography>
                      </Box>
                    ))}
                  </Box>

                  <Box sx={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                    <Typography sx={{ color:"primary.main", fontSize:"0.9rem", fontWeight:700, fontFamily:"'DM Mono',monospace" }}>
                      {price}
                    </Typography>
                    <Button component={Link} to="/contact" size="small" endIcon={<ArrowForwardIcon sx={{ fontSize:"14px !important" }} />}
                      sx={{ color:"primary.main", fontSize:"0.7rem", fontFamily:"'DM Mono',monospace", "&:hover":{ background:"rgba(0,229,255,0.06)" } }}>
                      Get Started
                    </Button>
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