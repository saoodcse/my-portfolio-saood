import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Container, Typography, Chip, Skeleton } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ForkRightIcon from "@mui/icons-material/ForkRight";
import GitHubIcon from "@mui/icons-material/GitHub";
import { fetchGithub } from "./githubSlice";

const LANG_COLORS = {
  Java: "#B07219",
  Kotlin: "#7F52FF",
  Python: "#3776AB",
  JavaScript: "#F7DF1E",
};

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

export default function OpenSource() {
  const dispatch = useDispatch();
  const { data: gh, loading } = useSelector((s) => s.github);

  useEffect(() => {
    if (!gh) dispatch(fetchGithub());
  }, [dispatch, gh]);

  return (
    <Box sx={{ py: { xs: 2, md: 3 } }}>
      <Container maxWidth="lg">
        <SectionHeader title="GitHub" accent="Activity" />

        {loading || !gh ? (
          <Skeleton
            variant="rectangular"
            height={300}
            sx={{ borderRadius: "2px", background: "rgba(0,229,255,0.05)" }}
          />
        ) : (
          <>
            {/* STATS → FLEX instead of Grid */}
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 2,
                mb: 5,
              }}
            >
              {[
                { label: "Public Repos", value: gh.stats.publicRepos },
                { label: "Total Commits", value: gh.stats.totalCommits },
                { label: "Total Stars", value: gh.stats.totalStars },
                { label: "2024 Contributions", value: gh.stats.contributions2024 },
                { label: "Followers", value: gh.stats.followers },
              ].map(({ label, value }) => (
                <Box
                  key={label}
                  sx={{
                    flex: "1 1 160px",
                    p: 2,
                    textAlign: "center",
                    border: "1px solid rgba(0,229,255,0.1)",
                    borderRadius: "2px",
                    background: "rgba(13,27,42,0.6)",
                    transition: "all 0.25s ease",
                    "&:hover": {
                      border: "1px solid rgba(0,229,255,0.25)",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      color: "primary.main",
                      fontSize: "1.5rem",
                      fontWeight: 700,
                      fontFamily: "'DM Mono',monospace",
                    }}
                  >
                    {value}
                  </Typography>
                  <Typography
                    sx={{
                      color: "text.secondary",
                      fontSize: "0.65rem",
                      letterSpacing: "0.08em",
                      fontFamily: "'DM Mono',monospace",
                    }}
                  >
                    {label}
                  </Typography>
                </Box>
              ))}
            </Box>

            {/* GitHub banner */}
            <Box
              component="a"
              href={gh.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                p: 2.5,
                mb: 4,
                border: "1px solid rgba(0,229,255,0.15)",
                borderRadius: "2px",
                background: "rgba(0,229,255,0.03)",
                textDecoration: "none",
              }}
            >
              <GitHubIcon sx={{ color: "primary.main" }} />
              <Typography
                sx={{
                  color: "primary.main",
                  fontSize: "0.82rem",
                  fontFamily: "'DM Mono',monospace",
                }}
              >
                github.com/{gh.username}
              </Typography>
            </Box>

            {/* REPOS → FLEX instead of Grid */}
            <Typography
              sx={{
                color: "text.secondary",
                fontSize: "0.72rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                mb: 3,
                fontFamily: "'DM Mono',monospace",
              }}
            >
              Top Repositories
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 3,
              }}
            >
              {gh.topRepos.map(
                ({ id, name, description, stars, forks, language, url }) => (
                  <Box
                    key={id}
                    component="a"
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      flex: "1 1 320px",
                      p: 3,
                      textDecoration: "none",
                      border: "1px solid rgba(0,229,255,0.08)",
                      borderRadius: "2px",
                      background: "rgba(13,27,42,0.5)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        border: "1px solid rgba(0,229,255,0.25)",
                        transform: "translateY(-4px)",
                        boxShadow: "0 16px 40px rgba(0,0,0,0.3)",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        color: "primary.main",
                        fontSize: "0.88rem",
                        fontWeight: 600,
                        mb: 1,
                        fontFamily: "'DM Mono',monospace",
                      }}
                    >
                      {name}
                    </Typography>

                    <Typography
                      sx={{
                        color: "text.secondary",
                        fontSize: "0.78rem",
                        mb: 2,
                        lineHeight: 1.7,
                        fontFamily: "'DM Mono',monospace",
                      }}
                    >
                      {description}
                    </Typography>

                    <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                        <Box
                          sx={{
                            width: 10,
                            height: 10,
                            borderRadius: "50%",
                            background: LANG_COLORS[language] || "#999",
                          }}
                        />
                        <Typography sx={{ fontSize: "0.68rem", color: "text.secondary" }}>
                          {language}
                        </Typography>
                      </Box>

                      <Box sx={{ display: "flex", alignItems: "center", gap: 0.4 }}>
                        <StarBorderIcon sx={{ fontSize: 14 }} />
                        <Typography sx={{ fontSize: "0.68rem", color: "text.secondary" }}>
                          {stars}
                        </Typography>
                      </Box>

                      <Box sx={{ display: "flex", alignItems: "center", gap: 0.4 }}>
                        <ForkRightIcon sx={{ fontSize: 14 }} />
                        <Typography sx={{ fontSize: "0.68rem", color: "text.secondary" }}>
                          {forks}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                )
              )}
            </Box>
          </>
        )}
      </Container>
    </Box>
  );
}