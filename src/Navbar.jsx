import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import {
  AppBar, Toolbar, Typography, Button, Box,
  IconButton, Drawer, List, ListItem, ListItemText,
  useMediaQuery, useTheme,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import CodeIcon from "@mui/icons-material/Code";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Skills", path: "/skills" },
  { label: "Projects", path: "/projects" },
  { label: "Experience", path: "/experience" },
  { label: "Blog", path: "/blog" },
  { label: "Open Source", path: "/open-source" },
  { label: "Services", path: "/services" },
  { label: "Certifications", path: "/certifications" },
  { label: "Resume", path: "/resume-cover" },
  { label: "Contact", path: "/contact" }
];

export default function Navbar() {

  const location = useLocation();
  const theme = useTheme();

  const isMobile = useMediaQuery(
    theme.breakpoints.down("lg")
  );

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () =>
      setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", fn);

    return () =>
      window.removeEventListener("scroll", fn);
  }, []);

  const isActive = (path) =>
    path === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(path);

  return (
    <>
      <motion.div
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >

        <AppBar
          position="sticky"
          elevation={0}
          sx={{
            background: scrolled
              ? "rgba(5,10,18,0.95)"
              : "transparent",

            backdropFilter: scrolled
              ? "blur(16px)"
              : "none",

            borderBottom: scrolled
              ? "1px solid rgba(0,229,255,0.12)"
              : "1px solid transparent",

            transition: "all 0.4s ease",
          }}
        >

          <Toolbar
            sx={{
              px: { xs: 2, md: 4 },
              minHeight: "64px !important"
            }}
          >

            {/* Logo */}
            <Box
              component={Link}
              to="/"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                textDecoration: "none",
                flexGrow: 1
              }}
            >
              <CodeIcon
                sx={{
                  color: "primary.main",
                  fontSize: 20
                }}
              />

              <Typography
                sx={{
                  color: "text.primary",
                  fontWeight: 500,
                  letterSpacing: "0.1em",
                  fontSize: "0.85rem",
                  fontFamily: "'DM Mono',monospace"
                }}
              >
                saood
                <span style={{ color: "#00E5FF" }}>
                  .
                </span>
                ai
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

              <Box
                sx={{
                  display: "flex",
                  gap: 0,
                  alignItems: "center"
                }}
              >

                {NAV_LINKS.map((link, index) => (

                  <motion.div
                    key={link.path}
                    initial={{
                      opacity: 0,
                      y: -12
                    }}
                    animate={{
                      opacity: 1,
                      y: 0
                    }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.05,
                    }}
                    whileHover={{
                      y: -2,
                      scale: 1.03,
                    }}
                    whileTap={{
                      scale: 0.96
                    }}
                  >

                    <Button
                      component={Link}
                      to={link.path}

                      sx={{

                        color: isActive(link.path)
                          ? "primary.main"
                          : "text.secondary",

                        fontSize: "0.68rem",
                        letterSpacing: "0.06em",

                        px: 1.2,
                        py: 0.8,

                        minWidth: "auto",

                        position: "relative",

                        overflow: "hidden",

                        transition:
                          "all 0.25s ease",

                        "&::before": {
                          content: '""',

                          position: "absolute",

                          top: 0,
                          left: "-120%",

                          width: "100%",
                          height: "100%",

                          background:
                            "linear-gradient(90deg,transparent,rgba(0,229,255,0.18),transparent)",

                          transition: "0.7s",
                        },

                        "&:hover::before": {
                          left: "120%",
                        },

                        "&::after": {
                          content: '""',

                          position: "absolute",

                          bottom: 4,
                          left: "50%",

                          transform:
                            "translateX(-50%)",

                          width: isActive(link.path)
                            ? "60%"
                            : "0%",

                          height: "1px",

                          background: "#00E5FF",

                          transition:
                            "width 0.3s ease",
                        },

                        "&:hover": {
                          color: "primary.main",

                          background:
                            "rgba(0,229,255,0.04)",

                          "&::after": {
                            width: "60%"
                          }
                        },
                      }}
                    >
                      {link.label}
                    </Button>

                  </motion.div>
                ))}

                <Button
                  component={Link}
                  to="/contact"
                  variant="outlined"
                  size="small"

                  sx={{

                    ml: 1,

                    borderColor: "primary.main",

                    color: "primary.main",

                    fontSize: "0.68rem",

                    transition:
                      "all 0.25s ease",

                    "&:hover": {

                      background:
                        "rgba(0,229,255,0.08)",

                      borderColor:
                        "primary.main",

                      transform:
                        "translateY(-2px)"
                    },
                  }}
                >
                  Hire Me
                </Button>

              </Box>
            )}

          </Toolbar>
        </AppBar>

      </motion.div>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}

        PaperProps={{
          sx: {
            width: 280,

            background:
              "hsla(210, 38%, 32%, 0.91)",

            borderLeft:
              "1px solid rgba(0,229,255,0.12)",

            borderTopLeftRadius: "12px",
            borderBottomLeftRadius: "12px"
          }
        }}
      >

        <Box
          sx={{
            p: 2,

            display: "flex",

            justifyContent: "space-between",

            alignItems: "center",

            borderBottom:
              "1px solid rgba(0,229,255,0.08)"
          }}
        >

          <Typography
            sx={{
              color: "primary.main",

              fontSize: "0.75rem",

              fontFamily:
                "'DM Mono',monospace",

              letterSpacing: "0.1em"
            }}
          >
            SAOOD_DEV
          </Typography>

          <IconButton
            onClick={() =>
              setDrawerOpen(false)
            }

            sx={{
              color: "text.secondary"
            }}
          >
            <CloseIcon fontSize="small" />
          </IconButton>

        </Box>

        <List
          sx={{
            px: 1.5,
            pt: 1,
            background: "white"
          }}
        >

          {[...NAV_LINKS].map((link) => (

            <ListItem
              key={link.path}

              component={Link}

              to={link.path}

              onClick={() =>
                setDrawerOpen(false)
              }

              sx={{

                mb: 0.3,

                borderRadius: "2px",

                textDecoration: "none",

                background: isActive(link.path)
                  ? "rgba(0,229,255,0.08)"
                  : "transparent",

                border: isActive(link.path)
                  ? "1px solid rgba(0,229,255,0.18)"
                  : "1px solid transparent",

                "&:hover": {
                  background:
                    "rgba(0,229,255,0.06)"
                },
              }}
            >

              <ListItemText
                primary={link.label}

                primaryTypographyProps={{
                  sx: {

                    color: isActive(link.path)
                      ? "primary.main"
                      : "text.secondary",

                    fontSize: "0.82rem",

                    letterSpacing: "0.06em",

                    fontFamily:
                      "'DM Mono',monospace",
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