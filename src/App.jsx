import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import store      from "./store";
import MainLayout from "./MainLayout";
import Home          from "./Home"
import About from "./About";
import Skills        from "./Skills";
import Projects      from "./Projects";
import Experience    from "./Experience";
import Blog          from "./Blog";
import OpenSource    from "./OpenSource";
import Services      from "./Services";
import Certifications from "./Certifications";
import Contact       from "./Contact";
import Documents     from "./Resume";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary:    { main: "#00E5FF" },
    secondary:  { main: "#FF6D00" },
    background: { default: "#050A12", paper: "#0D1B2A" },
    text:       { primary: "#E8F4FD", secondary: "#7B9EC8" },
  },
  typography: {
    fontFamily: "'DM Mono','Courier New',monospace",
    h1: { fontFamily:"'Clash Display','Georgia',serif", fontWeight:700, letterSpacing:"-0.03em" },
    h2: { fontFamily:"'Clash Display','Georgia',serif", fontWeight:700, letterSpacing:"-0.02em" },
    h3: { fontFamily:"'Clash Display','Georgia',serif", fontWeight:600, letterSpacing:"-0.01em" },
    h4: { fontFamily:"'Clash Display','Georgia',serif", fontWeight:600 },
    h5: { fontFamily:"'Clash Display','Georgia',serif", fontWeight:600 },
    h6: { fontFamily:"'Clash Display','Georgia',serif", fontWeight:600 },
    body1:  { fontFamily:"'DM Mono',monospace", lineHeight:1.8 },
    body2:  { fontFamily:"'DM Mono',monospace", lineHeight:1.7 },
    button: { fontFamily:"'DM Mono',monospace", fontWeight:500, letterSpacing:"0.08em", textTransform:"uppercase" },
  },
  shape: { borderRadius: 2 },
  components: {
    MuiButton: { styleOverrides: { root: { borderRadius:2, padding:"10px 28px" } } },
    MuiCard:   { styleOverrides: { root: { backgroundImage:"none", border:"1px solid rgba(0,229,255,0.08)" } } },
    MuiAppBar: { styleOverrides: { root: { backgroundImage:"none" } } },
  },
});

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300;1,400&display=swap');
          * { box-sizing:border-box; }
          html { scroll-behavior:smooth; }
          ::-webkit-scrollbar { width:4px; }
          ::-webkit-scrollbar-track { background:#050A12; }
          ::-webkit-scrollbar-thumb { background:#00E5FF33; border-radius:2px; }
          ::-webkit-scrollbar-thumb:hover { background:#00E5FF66; }
        `}</style>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index               element={<Home />} />
              <Route path="about"        element={<About />} />
              <Route path="skills"       element={<Skills />} />
              <Route path="projects"     element={<Projects />} />
              <Route path="experience"   element={<Experience />} />
              <Route path="blog"         element={<Blog />} />
              <Route path="open-source"  element={<OpenSource />} />
              <Route path="services"     element={<Services />} />
              <Route path="certifications" element={<Certifications />} />
              <Route path="contact"      element={<Contact />} />
              <Route path="resume-cover" element={<Documents />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}