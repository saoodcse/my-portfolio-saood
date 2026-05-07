import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Container, Typography, Grid, Chip, Skeleton } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { fetchBlogs } from "./blogsSlice";

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

export default function Blog() {
  const dispatch = useDispatch();
  const { data: blogs, loading } = useSelector((s) => s.blogs);

  useEffect(() => { if (!blogs.length) dispatch(fetchBlogs()); }, [dispatch, blogs.length]);

  return (
    <Box sx={{ py:{ xs:6, md:10 } }}>
      <Container maxWidth="lg">
        <SectionHeader tag="// 06. blog" title="Articles &" accent="Insights" />

        {loading ? (
          <Grid container spacing={3}>
            {[1,2,3,4].map((i) => (
              <Grid item xs={12} sm={6} key={i}>
                <Skeleton variant="rectangular" height={180} sx={{ borderRadius:"2px", background:"rgba(0,229,255,0.05)" }} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Grid container spacing={3}>
            {blogs.map(({ id, title, summary, tags, date, readTime, url }) => (
              <Grid item xs={12} sm={6} key={id}>
                <Box
                  component="a" href={url} target="_blank" rel="noopener noreferrer"
                  sx={{
                    display:"block", textDecoration:"none", p:3, height:"100%",
                    border:"1px solid rgba(0,229,255,0.08)", borderRadius:"2px",
                    background:"rgba(13,27,42,0.6)", backdropFilter:"blur(8px)",
                    transition:"all 0.3s ease", cursor:"pointer",
                    "&:hover": { border:"1px solid rgba(0,229,255,0.28)", transform:"translateY(-4px)", boxShadow:"0 16px 40px rgba(0,0,0,0.3)" },
                  }}
                >
                  <Box sx={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", mb:1.5 }}>
                    <Box sx={{ display:"flex", alignItems:"center", gap:1 }}>
                      <AccessTimeIcon sx={{ fontSize:14, color:"text.secondary" }} />
                      <Typography sx={{ color:"text.secondary", fontSize:"0.68rem", fontFamily:"'DM Mono',monospace" }}>{date} · {readTime} read</Typography>
                    </Box>
                    <OpenInNewIcon sx={{ fontSize:14, color:"rgba(0,229,255,0.3)" }} />
                  </Box>

                  <Typography sx={{ color:"text.primary", fontSize:"0.95rem", fontWeight:600, mb:1.5, lineHeight:1.4, fontFamily:"'DM Mono',monospace" }}>
                    {title}
                  </Typography>

                  <Typography sx={{ color:"text.secondary", fontSize:"0.8rem", lineHeight:1.8, mb:2, fontFamily:"'DM Mono',monospace" }}>
                    {summary}
                  </Typography>

                  <Box sx={{ display:"flex", flexWrap:"wrap", gap:0.8 }}>
                    {tags.map((t) => (
                      <Chip key={t} label={t} size="small" sx={{
                        background:"rgba(0,229,255,0.04)", border:"1px solid rgba(0,229,255,0.15)",
                        color:"primary.main", fontSize:"0.62rem", height:20,
                        "& .MuiChip-label":{ px:0.8 },
                      }} />
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