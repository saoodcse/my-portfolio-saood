import React from "react";
import { Outlet } from "react-router-dom";
import { Box, Container, Typography, IconButton, Tooltip } from "@mui/material";
import GitHubIcon   from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon    from "@mui/icons-material/Email";
import Navbar from "./Navbar";

export default function MainLayout() {
  return (
    <Box sx={{
      minHeight:"100vh", display:"flex", flexDirection:"column", background:"#050A12", position:"relative",
      "&::before": {
        content:'""', position:"fixed", inset:0,
        background:"radial-gradient(ellipse 80% 60% at 50% -10%, rgba(0,229,255,0.06) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 100% 80%, rgba(255,109,0,0.04) 0%, transparent 60%)",
        pointerEvents:"none", zIndex:0,
      },
    }}>
      <Navbar />

      <Box component="main" sx={{ flex:1, position:"relative", zIndex:1 }}>
        <Outlet />
      </Box>

      <Box component="footer" sx={{
        position:"relative", zIndex:1,
        borderTop:"1px solid rgba(0,229,255,0.08)",
        mt:8, py:4,
        background:"rgba(13,27,42,0.5)", backdropFilter:"blur(8px)",
      }}>
        <Container maxWidth="lg">
          <Box sx={{ display:"flex", flexDirection:{ xs:"column", sm:"row" }, alignItems:"center", justifyContent:"space-between", gap:2 }}>
            <Typography sx={{ color:"text.secondary", fontSize:"0.72rem", fontFamily:"'DM Mono',monospace" }}>
              © {new Date().getFullYear()}{" "}
              <Box component="span" sx={{ color:"primary.main" }}>Saood Alam</Box>
              {" "}— Senior SDE · ICICI Bank · Mumbai
            </Typography>
            <Box sx={{ display:"flex", gap:0.5 }}>
              {[
                { icon:<GitHubIcon fontSize="small" />,   label:"GitHub",   href:"https://github.com/saoodcse" },
                { icon:<LinkedInIcon fontSize="small" />, label:"LinkedIn", href:"https://www.linkedin.com/in/saoodcse/" },
                { icon:<EmailIcon fontSize="small" />,    label:"Email",    href:"mailto:saoodalamcse2018@gmail.com" },
              ].map(({ icon, label, href }) => (
                <Tooltip key={label} title={label} placement="top">
                  <IconButton component="a" href={href} target="_blank" rel="noopener noreferrer" size="small"
                    sx={{ color:"text.secondary", "&:hover":{ color:"primary.main", background:"rgba(0,229,255,0.08)" }, transition:"all 0.2s ease" }}>
                    {icon}
                  </IconButton>
                </Tooltip>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}