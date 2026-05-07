import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  Skeleton,
  Button,
  Alert,
} from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { fetchProjects } from "./projectSlice";

function ProjectCard({ project, index }) {
  return (
    <Card
      sx={{
        flex: "1 1 48%",
        minWidth: "320px",
        display: "flex",
        flexDirection: "column",
        background: "rgba(13, 27, 42, 0.7)",
        border: "1px solid rgba(0, 229, 255, 0.08)",
        borderRadius: "2px",
        backdropFilter: "blur(8px)",
        transition: "all 0.3s ease",
        animation: `fadeUp 0.5s ease ${index * 0.08}s both`,
        "@keyframes fadeUp": {
          from: { opacity: 0, transform: "translateY(20px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        "&:hover": {
          border: "1px solid rgba(0, 229, 255, 0.28)",
          transform: "translateY(-6px)",
          boxShadow: "0 20px 48px rgba(0,0,0,0.4)",
        },
      }}
    >
      <CardContent sx={{ flex: 1, p: 3, display: "flex", flexDirection: "column" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          <Box
            sx={{
              width: 36,
              height: 36,
              border: "1px solid rgba(0, 229, 255, 0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography sx={{ color: "primary.main", fontSize: "0.72rem" }}>
              {String(project.id).padStart(2, "0")}
            </Typography>
          </Box>

          <OpenInNewIcon sx={{ fontSize: 16, color: "rgba(0,229,255,0.4)" }} />
        </Box>

        <Typography sx={{ fontSize: "1rem", mb: 1, color: "text.primary" }}>
          {project.title}
        </Typography>

        <Typography
          sx={{
            fontSize: "0.82rem",
            color: "text.secondary",
            mb: 2,
            flex: 1,
          }}
        >
          {project.description}
        </Typography>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.8 }}>
          {project.tech.split(", ").map((t) => (
            <Chip
              key={t}
              label={t}
              size="small"
              sx={{
                background: "rgba(0,229,255,0.05)",
                border: "1px solid rgba(0,229,255,0.15)",
                color: "primary.main",
                fontSize: "0.65rem",
              }}
            />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}

function ProjectSkeleton() {
  return (
    <Box sx={{ flex: "1 1 48%", minWidth: "320px" }}>
      <Skeleton height={200} sx={{ background: "rgba(0,229,255,0.05)" }} />
    </Box>
  );
}




const SectionHeader = ({ tag, title, accent }) => (
  <Box sx={{ mb: 8 }}>
    <Typography
      sx={{
        color: "primary.main",
        fontSize: "0.72rem",
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        mb: 1,
        fontFamily: "'DM Mono',monospace",
      }}
    >
      {tag}
    </Typography>

    <Typography
      variant="h2"
      sx={{
        fontSize: { xs: "2.2rem", md: "3rem" },
        color: "text.primary",
        mb: 2,
      }}
    >
      {title}{" "}
      <Box
        component="span"
        sx={{
          background: "linear-gradient(135deg,#00E5FF,#0091EA)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {accent}
      </Box>
    </Typography>

    <Box
      sx={{
        width: 48,
        height: 2,
        background: "linear-gradient(90deg,#00E5FF,transparent)",
      }}
    />
  </Box>
);


export default function Projects() {
  const dispatch = useDispatch();
  const { data: projects, loading, error } = useSelector((s) => s.projects);

  useEffect(() => {
    if (projects.length === 0) dispatch(fetchProjects());
  }, [dispatch, projects.length]);

  return (
    <Box sx={{ py: 3 }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 5 }}>
        
          <SectionHeader title= "Featured" accent= "Work"></SectionHeader>

          {!loading && (
            <Button
              startIcon={<RefreshIcon />}
              onClick={() => dispatch(fetchProjects())}
              sx={{ color: "primary.main" }}
            >
              Refresh
            </Button>
          )}
        </Box>

        {/* Error */}
        {error && <Alert severity="error">{error}</Alert>}

        {/* FLEX CONTAINER */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 3,
          }}
        >
          {loading
            ? Array.from({ length: 6 }).map((_, i) => (
                <ProjectSkeleton key={i} />
              ))
            : projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
        </Box>
      </Container>
    </Box>
  );
}