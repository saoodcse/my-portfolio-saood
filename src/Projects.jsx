import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Button,
  Skeleton,
  Alert,
} from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { fetchProjects } from "./projectSlice";

function ProjectCard({ project, index }) {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background: "rgba(13, 27, 42, 0.7)",
        border: "1px solid rgba(0, 229, 255, 0.08)",
        borderRadius: "2px",
        backdropFilter: "blur(8px)",
        transition: "all 0.3s ease",
        cursor: "default",
        animation: `fadeUp 0.5s ease ${index * 0.08}s both`,
        "@keyframes fadeUp": {
          from: { opacity: 0, transform: "translateY(20px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        "&:hover": {
          border: "1px solid rgba(0, 229, 255, 0.28)",
          transform: "translateY(-6px)",
          boxShadow: "0 20px 48px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(0, 229, 255, 0.1)",
          background: "rgba(13, 27, 42, 0.9)",
        },
      }}
    >
      <CardContent sx={{ flex: 1, p: 3, display: "flex", flexDirection: "column", "&:last-child": { pb: 3 } }}>
        {/* Card header */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            mb: 2,
          }}
        >
          <Box
            sx={{
              width: 36,
              height: 36,
              border: "1px solid rgba(0, 229, 255, 0.2)",
              borderRadius: "2px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(0, 229, 255, 0.04)",
            }}
          >
            <Typography
              sx={{ color: "primary.main", fontSize: "0.72rem", fontFamily: "'DM Mono', monospace" }}
            >
              {String(project.id).padStart(2, "0")}
            </Typography>
          </Box>
          <OpenInNewIcon
            sx={{
              color: "rgba(0, 229, 255, 0.2)",
              fontSize: 16,
              "&:hover": { color: "primary.main" },
              transition: "color 0.2s",
              cursor: "pointer",
            }}
          />
        </Box>

        <Typography
          variant="h6"
          sx={{
            color: "text.primary",
            fontSize: "1rem",
            mb: 1.5,
            lineHeight: 1.3,
          }}
        >
          {project.title}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            fontSize: "0.82rem",
            lineHeight: 1.8,
            mb: 2.5,
            flexGrow: 1,
            width: 500
          }}
        >
          {project.description}
        </Typography>

        {/* Tech chips */}
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.8 }}>
          {project.tech.split(", ").map((t) => (
            <Chip
              key={t}
              label={t}
              size="small"
              sx={{
                background: "rgba(0, 229, 255, 0.04)",
                border: "1px solid rgba(0, 229, 255, 0.15)",
                color: "primary.main",
                fontSize: "0.65rem",
                letterSpacing: "0.05em",
                height: 22,
                "& .MuiChip-label": { px: 1 },
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
    <Card
      sx={{
        background: "rgba(13, 27, 42, 0.5)",
        border: "1px solid rgba(0, 229, 255, 0.06)",
        borderRadius: "2px",
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Skeleton
          variant="rectangular"
          width={36}
          height={36}
          sx={{ mb: 2, background: "rgba(0, 229, 255, 0.06)", borderRadius: "2px" }}
        />
        <Skeleton
          width="70%"
          height={24}
          sx={{ mb: 1.5, background: "rgba(0, 229, 255, 0.06)" }}
        />
        <Skeleton
          width="100%"
          height={16}
          sx={{ mb: 0.8, background: "rgba(0, 229, 255, 0.04)" }}
        />
        <Skeleton
          width="85%"
          height={16}
          sx={{ mb: 2, background: "rgba(0, 229, 255, 0.04)" }}
        />
        <Box sx={{ display: "flex", gap: 1 }}>
          {[60, 80, 55].map((w) => (
            <Skeleton
              key={w}
              width={w}
              height={22}
              sx={{ background: "rgba(0, 229, 255, 0.06)", borderRadius: "11px" }}
            />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}

export default function Projects() {
  const dispatch = useDispatch();
  const { data: projects, loading, error } = useSelector((s) => s.projects);

  useEffect(() => {
    if (projects.length === 0) dispatch(fetchProjects());
  }, [dispatch, projects.length]);

  return (
    <Box sx={{ py: { xs: 2, md: 3 } }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ mb: 8 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            <Typography
              variant="h2"
              sx={{ fontSize: { xs: "2.2rem", md: "3rem" }, color: "text.primary" }}
            >
              Featured{" "}
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(135deg, #00E5FF, #0091EA)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Work
              </Box>
            </Typography>
            {!loading && (
              <Button
                startIcon={<RefreshIcon />}
                onClick={() => dispatch(fetchProjects())}
                size="small"
                sx={{
                  color: "text.secondary",
                  fontSize: "0.72rem",
                  letterSpacing: "0.08em",
                  "&:hover": { color: "primary.main" },
                }}
              >
                Refresh
              </Button>
            )}
          </Box>
          <Box
            sx={{
              width: 48,
              height: 2,
              background: "linear-gradient(90deg, #00E5FF, transparent)",
              mt: 2,
            }}
          />
        </Box>

        {/* Error State */}
        {error && (
          <Alert
            severity="error"
            action={
              <Button
                size="small"
                onClick={() => dispatch(fetchProjects())}
                sx={{ color: "#FF6D00", fontSize: "0.72rem" }}
              >
                Retry
              </Button>
            }
            sx={{
              mb: 4,
              background: "rgba(255, 109, 0, 0.08)",
              border: "1px solid rgba(255, 109, 0, 0.2)",
              color: "#FF6D00",
              "& .MuiAlert-icon": { color: "#FF6D00" },
            }}
          >
            {error}
          </Alert>
        )}

        {/* Loading count indicator */}
        {loading && (
          <Typography
            variant="body2"
            sx={{ color: "text.secondary", fontSize: "0.75rem", mb: 3, letterSpacing: "0.1em" }}
          >
            <Box component="span" sx={{ color: "primary.main" }}>▌</Box> Fetching projects...
          </Typography>
        )}

        <Grid container spacing={3}>
          {loading
            ? Array.from({ length: 6 }).map((_, i) => (
                <Grid item xs={12} sm={6} md={6} lg={6} key={i}>
                  <ProjectSkeleton />
                </Grid>
              ))
            : projects.map((project, index) => (
                <Grid item xs={12} sm={6} md={6} lg={6} key={project.id}>
                  <ProjectCard project={project} index={index} />
                </Grid>
              ))}
        </Grid>

        {!loading && projects.length === 0 && !error && (
          <Box sx={{ textAlign: "center", py: 8 }}>
            <Typography variant="body1" sx={{ color: "text.secondary" }}>
              No projects found.
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
}