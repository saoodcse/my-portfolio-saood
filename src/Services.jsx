import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Container,
  Typography,
  Chip,
  Skeleton,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import ApiIcon from "@mui/icons-material/Api";
import HubIcon from "@mui/icons-material/Hub";
import SupportIcon from "@mui/icons-material/Support";
import ReviewsIcon from "@mui/icons-material/Reviews";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { fetchServices } from "./servicesSlice";

const ICON_MAP = {
  api: <ApiIcon />,
  hub: <HubIcon />,
  support: <SupportIcon />,
  reviews: <ReviewsIcon />,
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

function ServiceCard({ service }) {
  return (
    <Box
      sx={{
        p: 3.5,
        display: "flex",
        flexDirection: "column",
        border: service.highlight
          ? "1px solid rgba(0,229,255,0.35)"
          : "1px solid rgba(0,229,255,0.08)",
        borderRadius: "2px",
        background: service.highlight
          ? "rgba(0,229,255,0.04)"
          : "rgba(13,27,42,0.6)",
        backdropFilter: "blur(8px)",
        position: "relative",
        overflow: "hidden",
        transition: "all 0.3s ease",

        "&:hover": {
          border: "1px solid rgba(0,229,255,0.35)",
          transform: "translateY(-4px)",
          boxShadow: "0 16px 40px rgba(0,0,0,0.3)",
        },
      }}
    >
      {/* Badge */}
      {service.highlight && (
        <Chip
          label="Most Popular"
          size="small"
          sx={{
            position: "absolute",
            top: 16,
            right: 16,
            height: 20,
            fontSize: "0.6rem",
            background: "rgba(0,229,255,0.15)",
            border: "1px solid rgba(0,229,255,0.3)",
            color: "primary.main",
            fontFamily: "'DM Mono',monospace",
          }}
        />
      )}

      {/* Icon */}
      <Box
        sx={{
          width: 44,
          height: 44,
          borderRadius: "2px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "rgba(0,229,255,0.08)",
          border: "1px solid rgba(0,229,255,0.2)",
          mb: 2.5,
          "& svg": {
            fontSize: 22,
            color: "primary.main",
          },
        }}
      >
        {ICON_MAP[service.icon]}
      </Box>

      {/* Title */}
      <Typography
        sx={{
          color: "text.primary",
          fontSize: "1rem",
          fontWeight: 600,
          mb: 1,
          fontFamily: "'DM Mono',monospace",
        }}
      >
        {service.title}
      </Typography>

      {/* Description */}
      <Typography
        sx={{
          color: "text.secondary",
          fontSize: "0.8rem",
          lineHeight: 1.8,
          mb: 2.5,
          fontFamily: "'DM Mono',monospace",
        }}
      >
        {service.description}
      </Typography>

      {/* Features */}
      <Box sx={{ flex: 1, mb: 3 }}>
        {service.features.map((f, i) => (
          <Box
            key={i}
            sx={{ display: "flex", gap: 1, mb: 0.8 }}
          >
            <Box
              sx={{
                width: 4,
                height: 4,
                borderRadius: "50%",
                background: "#00E5FF",
                mt: 0.8,
                flexShrink: 0,
              }}
            />
            <Typography
              sx={{
                color: "text.secondary",
                fontSize: "0.78rem",
                lineHeight: 1.6,
                fontFamily: "'DM Mono',monospace",
              }}
            >
              {f}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Footer */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            color: "primary.main",
            fontSize: "0.9rem",
            fontWeight: 700,
            fontFamily: "'DM Mono',monospace",
          }}
        >
          {service.price}
        </Typography>

        <Button
          component={Link}
          to="/contact"
          size="small"
          endIcon={
            <ArrowForwardIcon sx={{ fontSize: "14px !important" }} />
          }
          sx={{
            color: "primary.main",
            fontSize: "0.7rem",
            fontFamily: "'DM Mono',monospace",
            "&:hover": {
              background: "rgba(0,229,255,0.06)",
            },
          }}
        >
          Get Started
        </Button>
      </Box>
    </Box>
  );
}

function ServiceSkeleton() {
  return (
    <Box
      sx={{
        p: 3.5,
        border: "1px solid rgba(0,229,255,0.08)",
        borderRadius: "2px",
        background: "rgba(13,27,42,0.5)",
      }}
    >
      <Skeleton width={40} height={40} sx={{ mb: 2 }} />
      <Skeleton width="60%" height={24} sx={{ mb: 1 }} />
      <Skeleton width="90%" height={14} sx={{ mb: 0.8 }} />
      <Skeleton width="80%" height={14} sx={{ mb: 2 }} />
      <Skeleton width="100%" height={14} />
    </Box>
  );
}

export default function Services() {
  const dispatch = useDispatch();
  const { data: services, loading } = useSelector(
    (s) => s.services
  );

  useEffect(() => {
    if (!services.length) dispatch(fetchServices());
  }, [dispatch, services.length]);

  return (
    <Box sx={{ py: { xs: 2, md: 3 } }}>
      <Container maxWidth="lg">
        <SectionHeader
          title="What I"
          accent="Offer"
        />

        {/* FLEX COLUMN WRAPPER */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          {loading
            ? Array.from({ length: 4 }).map((_, i) => (
                <ServiceSkeleton key={i} />
              ))
            : services.map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                />
              ))}
        </Box>
      </Container>
    </Box>
  );
}