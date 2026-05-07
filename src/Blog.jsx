import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Container, Typography, Chip, Skeleton } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { fetchBlogs } from "./blogsSlice";

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

function BlogCard({ blog }) {
  return (
    <Box
      component="a"
      href={blog.url}
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        display: "flex",
        flexDirection: "column",
        textDecoration: "none",
        p: 3,
        border: "1px solid rgba(0,229,255,0.08)",
        borderRadius: "2px",
        background: "rgba(13,27,42,0.6)",
        backdropFilter: "blur(8px)",
        transition: "all 0.3s ease",
        cursor: "pointer",
        height: "100%",

        "&:hover": {
          border: "1px solid rgba(0,229,255,0.28)",
          transform: "translateY(-4px)",
          boxShadow: "0 16px 40px rgba(0,0,0,0.3)",
        },
      }}
    >
      {/* Top row */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          mb: 1.5,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <AccessTimeIcon sx={{ fontSize: 14, color: "text.secondary" }} />
          <Typography
            sx={{
              color: "text.secondary",
              fontSize: "0.68rem",
              fontFamily: "'DM Mono',monospace",
            }}
          >
            {blog.date} · {blog.readTime} read
          </Typography>
        </Box>

        <OpenInNewIcon
          sx={{ fontSize: 14, color: "rgba(0,229,255,0.3)" }}
        />
      </Box>

      {/* Title */}
      <Typography
        sx={{
          color: "text.primary",
          fontSize: "0.95rem",
          fontWeight: 600,
          mb: 1.5,
          lineHeight: 1.4,
          fontFamily: "'DM Mono',monospace",
        }}
      >
        {blog.title}
      </Typography>

      {/* Summary */}
      <Typography
        sx={{
          color: "text.secondary",
          fontSize: "0.8rem",
          lineHeight: 1.8,
          mb: 2,
          fontFamily: "'DM Mono',monospace",
          flexGrow: 1,
        }}
      >
        {blog.summary}
      </Typography>

      {/* Tags */}
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.8 }}>
        {blog.tags.map((t) => (
          <Chip
            key={t}
            label={t}
            size="small"
            sx={{
              background: "rgba(0,229,255,0.04)",
              border: "1px solid rgba(0,229,255,0.15)",
              color: "primary.main",
              fontSize: "0.62rem",
              height: 20,
              "& .MuiChip-label": { px: 0.8 },
            }}
          />
        ))}
      </Box>
    </Box>
  );
}

function BlogSkeleton() {
  return (
    <Box
      sx={{
        p: 3,
        border: "1px solid rgba(0,229,255,0.08)",
        borderRadius: "2px",
        background: "rgba(13,27,42,0.5)",
      }}
    >
      <Skeleton
        width="60%"
        height={20}
        sx={{ mb: 1, background: "rgba(0,229,255,0.05)" }}
      />
      <Skeleton
        width="90%"
        height={14}
        sx={{ mb: 0.8, background: "rgba(0,229,255,0.04)" }}
      />
      <Skeleton
        width="80%"
        height={14}
        sx={{ mb: 1.5, background: "rgba(0,229,255,0.04)" }}
      />

      <Box sx={{ display: "flex", gap: 1 }}>
        {[60, 80, 50].map((w) => (
          <Skeleton
            key={w}
            width={w}
            height={20}
            sx={{
              background: "rgba(0,229,255,0.06)",
              borderRadius: "10px",
            }}
          />
        ))}
      </Box>
    </Box>
  );
}

export default function Blog() {
  const dispatch = useDispatch();
  const { data: blogs, loading } = useSelector((s) => s.blogs);

  useEffect(() => {
    if (!blogs.length) dispatch(fetchBlogs());
  }, [dispatch, blogs.length]);

  return (
    <Box sx={{ py: { xs: 2, md: 3 } }}>
      <Container maxWidth="lg">
        <SectionHeader title="Articles &" accent="Insights" />

        {/* FLEX COLUMN CONTAINER */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          {loading
            ? Array.from({ length: 4 }).map((_, i) => (
                <BlogSkeleton key={i} />
              ))
            : blogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
        </Box>
      </Container>
    </Box>
  );
}