import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import CodeIcon from "@mui/icons-material/Code";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Resume & Cover Letter", path: "/resume-cover" },
  { label: "Contact", path: "/contact" },

];

export default function Navbar() {
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          background: scrolled
            ? "rgba(5, 10, 18, 0.92)"
            : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(0, 229, 255, 0.12)"
            : "1px solid transparent",
          transition: "all 0.4s ease",
        }}
      >
        <Toolbar sx={{ px: { xs: 2, md: 6 }, py: 1.5, minHeight: "68px !important" }}>
          {/* Logo */}
          <Box
            component={Link}
            to="/"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              textDecoration: "none",
              flexGrow: 1,
            }}
          >
            <CodeIcon sx={{ color: "primary.main", fontSize: 20 }} />
            <Typography
              variant="body1"
              sx={{
                color: "text.primary",
                fontWeight: 500,
                letterSpacing: "0.1em",
                fontSize: "0.85rem",
              }}
            >
              SA<span style={{ color: "#00E5FF" }}>_</span>dev
            </Typography>
          </Box>

          {isMobile ? (
            <IconButton
              onClick={() => setDrawerOpen(true)}
              sx={{ color: "primary.main" }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: "flex", gap: 0.5, alignItems: "center" }}>
              {NAV_LINKS.map((link) => (
                <Button
                  key={link.path}
                  component={Link}
                  to={link.path}
                  sx={{
                    color: isActive(link.path) ? "primary.main" : "text.secondary",
                    fontSize: "0.75rem",
                    letterSpacing: "0.1em",
                    px: 2,
                    py: 0.8,
                    position: "relative",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: 4,
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: isActive(link.path) ? "60%" : "0%",
                      height: "1px",
                      background: "#00E5FF",
                      transition: "width 0.3s ease",
                    },
                    "&:hover": {
                      color: "primary.main",
                      background: "rgba(0, 229, 255, 0.04)",
                      "&::after": { width: "60%" },
                    },
                  }}
                >
                  {link.label}
                </Button>
              ))}
              <Button
                component={Link}
                to="/contact"
                variant="outlined"
                size="small"
                sx={{
                  ml: 1.5,
                  borderColor: "primary.main",
                  color: "primary.main",
                  fontSize: "0.72rem",
                  "&:hover": {
                    background: "rgba(0, 229, 255, 0.08)",
                    borderColor: "primary.main",
                  },
                }}
              >
                Hire Me
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
      
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            borderTopLeftRadius: "12px",
            borderBottomLeftRadius: "12px",
            width: 260,
            background: "hsl(214, 5%, 75%)",
            borderLeft: "1px solid rgba(4, 4, 4, 0.12)",
            
          },
        }}
      >
        <Box 
        sx={{ p: 2, display: "flex", justifyContent: "flex-end" }}>
          <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: "primary.main" }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List sx={{ px: 2 }}>
          {NAV_LINKS.map((link) => (
            <ListItem
              key={link.path}
              component={Link}
              to={link.path}
              onClick={() => setDrawerOpen(false)}
              sx={{
                mb: 0.5,
                borderRadius: 1,
                textDecoration: "none",
                background: isActive(link.path)
                  ? "#0c3bd6d1"
                  : "transparent",
                border: isActive(link.path)
                  ? "1px solid hsla(31, 87%, 44%, 0.20)"
                  : "1px solid transparent",
                "&:hover": {
                  background: "rgb(85, 113, 137)",
                },
              }}
            >
              <ListItemText
              sx={{ color: "white", "&:hover": { color: "#90caf9" } }}
                primary={link.label}
                primaryTypographyProps={{
                  sx: {
                    color: isActive(link.path) ? "primary.main" : "text.secondary",
                    fontSize: "0.85rem",
                    letterSpacing: "0.08em",
                  },
                }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}