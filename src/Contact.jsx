import React, { useState } from "react";
import emailjs from "@emailjs/browser";

import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Snackbar,
  Alert,
  CircularProgress,
  InputAdornment,
  MenuItem,
} from "@mui/material";

import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import SendIcon from "@mui/icons-material/Send";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import TitleIcon from "@mui/icons-material/Title";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

const INFO_ITEMS = [
  {
    label: "Email",
    value: "saoodalamcse2018@gmail.com",
    icon: <EmailOutlinedIcon sx={{ fontSize: 15 }} />,
  },
  {
    label: "Location",
    value: "India — Remote Friendly",
    icon: <LocationOnOutlinedIcon sx={{ fontSize: 15 }} />,
  },
  {
    label: "Availability",
    value: "Open to work",
    icon: <TaskAltIcon sx={{ fontSize: 15 }} />,
  },
  {
    label: "Response",
    value: "Within 24 hours",
    icon: <AccessTimeOutlinedIcon sx={{ fontSize: 15 }} />,
  },
];

const PURPOSES = [
  "Job Opportunity",
  "Freelance Project",
  "Collaboration",
  "Backend Consultation",
  "Other",
];

const fieldSx = {
  "& .MuiOutlinedInput-root": {
    background: "rgba(5,10,18,0.7)",
    borderRadius: "6px",
    fontFamily: "'DM Mono', monospace",
    fontSize: "0.84rem",
    color: "#E8F4FD",
    transition: "all 0.25s ease",
    "& fieldset": { borderColor: "rgba(0,229,255,0.1)" },
    "&:hover fieldset": { borderColor: "rgba(0,229,255,0.3)" },
    "&.Mui-focused": {
      background: "rgba(0,229,255,0.03)",
      "& fieldset": { borderColor: "#00E5FF", borderWidth: 1 },
    },
    "&.Mui-error fieldset": { borderColor: "#FF6D00" },
  },
  "& .MuiInputLabel-root": {
    fontFamily: "'DM Mono', monospace",
    fontSize: "0.8rem",
    color: "rgba(123,158,200,0.7)",
    "&.Mui-focused": { color: "#00E5FF" },
    "&.Mui-error": { color: "#FF6D00" },
  },
  "& .MuiFormHelperText-root": {
    fontFamily: "'DM Mono', monospace",
    fontSize: "0.68rem",
    ml: 0,
  },
  "& .MuiInputAdornment-root .MuiSvgIcon-root": {
    fontSize: 16,
    color: "rgba(0,229,255,0.25)",
  },
  "& .MuiSelect-icon": {
    color: "rgba(0,229,255,0.3)",
  },
};

function Cursor() {
  const [on, setOn] = React.useState(true);

  React.useEffect(() => {
    const t = setInterval(() => setOn((v) => !v), 530);
    return () => clearInterval(t);
  }, []);

  return (
    <Box
      component="span"
      sx={{
        color: "#00E5FF",
        opacity: on ? 1 : 0,
        transition: "opacity 0.1s",
      }}
    >
      ▌
    </Box>
  );
}

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    purpose: "Job Opportunity",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const [snackbar, setSnackbar] = useState({
    open: false,
    type: "success",
    msg: "",
  });

  const validate = () => {
    const e = {};

    if (!form.name.trim() || form.name.trim().length < 2)
      e.name = "Name must be at least 2 characters";

    if (
      !form.email.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
    )
      e.email = "Enter a valid email address";

    if (!form.subject.trim())
      e.subject = "Subject is required";

    if (!form.message.trim() || form.message.trim().length < 10)
      e.message = "Message must be at least 10 characters";

    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((p) => ({
      ...p,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((p) => ({
        ...p,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async () => {
    const e = validate();

    if (Object.keys(e).length) {
      setErrors(e);
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          subject: form.subject,
          purpose: form.purpose,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSnackbar({
        open: true,
        type: "success",
        msg: "Message sent! I'll get back to you soon.",
      });

      setForm({
        name: "",
        email: "",
        subject: "",
        purpose: "Job Opportunity",
        message: "",
      });

      setErrors({});
    } catch (err) {
      console.error(err);

      setSnackbar({
        open: true,
        type: "error",
        msg: "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        py: { xs: 2, md: 3 },
        position: "relative",
        overflow: "hidden",
      }}
    >

      
      {/* Glow blobs */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          top: "-10%",
          left: "-5%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          pointerEvents: "none",
          background:
            "radial-gradient(circle,rgba(0,229,255,0.05) 0%,transparent 70%)",
        }}
      />

      <Box
        aria-hidden
        sx={{
          position: "absolute",
          bottom: "-10%",
          right: "-5%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          pointerEvents: "none",
          background:
            "radial-gradient(circle,rgba(255,109,0,0.04) 0%,transparent 70%)",
        }}
      />

      <Container maxWidth="lg">
        {/* HEADER */}
        <Box sx={{ mb: 7 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              mb: 1.5,
            }}
          >


            
            <Box
              sx={{
                width: 32,
                height: 32,
                borderRadius: "6px",
                background: "rgba(0,229,255,0.08)",
                border: "1px solid rgba(0,229,255,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <EmailOutlinedIcon
                sx={{
                  fontSize: 16,
                  color: "#00E5FF",
                }}
              />
            </Box>

            <Typography
              sx={{
                color: "text.secondary",
                fontSize: "0.65rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                fontFamily: "'DM Mono',monospace",
              }}
            >
              Get In Touch
            </Typography>
          </Box>

          

          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2.2rem", md: "3rem" },
              color: "text.primary",
              mb: 1.5,
              lineHeight: 1.1,
              fontWeight: 800,
            }}
          >
            Let's{" "}
            <Box
              component="span"
              sx={{
                background: "linear-gradient(135deg,#00E5FF,#0091EA)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Connect
            </Box>
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              flexWrap: "wrap",
            }}
          >
            <Box
              sx={{
                width: 48,
                height: 2,
                background:
                  "linear-gradient(90deg,#00E5FF,transparent)",
              }}
            />

            <Typography
              sx={{
                color: "text.secondary",
                fontSize: "0.72rem",
                fontFamily: "'DM Mono',monospace",
              }}
            >
              Open to opportunities, freelance & collaborations
            </Typography>
          </Box>
        </Box>

        <Grid container spacing={{ xs: 3, md: 4 }}>
          {/* LEFT PANEL */}
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 2.5,
                 display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              {INFO_ITEMS.map(({ label, value, icon }) => (
                <Box
                  key={label}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    width: {
                      xs: "100%",
                      sm: "calc(50% - 10px)",
                      md: "45%",
                    },
                    p: 2,
                    borderRadius: "6px",
                    border: "1px solid rgba(0,229,255,0.08)",
                    background: "rgba(13,27,42,0.5)",
                    backdropFilter: "blur(8px)",
                    transition: "all 0.25s ease",

                    "&:hover": {
                      border: "1px solid rgba(0,229,255,0.2)",
                      background: "rgba(0,229,255,0.04)",
                      transform: "translateX(4px)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 30,
                      height: 30,
                      borderRadius: "6px",
                      flexShrink: 0,
                      background: "rgba(0,229,255,0.06)",
                      border: "1px solid rgba(0,229,255,0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#00E5FF",
                    }}
                  >
                    {icon}
                  </Box>

                  <Box>
                    <Typography
                      sx={{
                        color: "text.secondary",
                        fontSize: "0.6rem",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        fontFamily: "'DM Mono',monospace",
                        mb: 0.3,
                      }}
                    >
                      {label}
                    </Typography>

                    <Typography
                      sx={{
                        color: "text.primary",
                        fontSize: "0.78rem",
                        fontFamily: "'DM Mono',monospace",
                        lineHeight: 1.4,
                        wordBreak: "break-word",
                      }}
                    >
                      {value}
                    </Typography>
                  </Box>
                </Box>
              ))}

              {/* Terminal */}
              <Box
                sx={{
                  width: "100%",
                  p: 2.5,
                  borderRadius: "6px",
                  background: "rgba(5,10,18,0.9)",
                  border: "1px solid rgba(0,229,255,0.1)",
                  fontFamily: "'DM Mono',monospace",
                  boxShadow: "inset 0 0 30px rgba(0,0,0,0.3)",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 0.8,
                    mb: 2,
                    pb: 1.5,
                    borderBottom:
                      "1px solid rgba(0,229,255,0.07)",
                  }}
                >
                  {["#FF5F57", "#FFBD2E", "#28CA41"].map((c) => (
                    <Box
                      key={c}
                      sx={{
                        width: 9,
                        height: 9,
                        borderRadius: "50%",
                        background: c,
                      }}
                    />
                  ))}

                  <Typography
                    sx={{
                      color: "rgba(0,229,255,0.3)",
                      fontSize: "0.6rem",
                      ml: 0.8,
                      fontFamily: "'DM Mono',monospace",
                    }}
                  >
                    saood@dev ~ zsh
                  </Typography>
                </Box>

                <Typography
                  component="div"
                  sx={{
                    color: "text.secondary",
                    fontSize: "0.7rem",
                    lineHeight: 2,
                    wordBreak: "break-word",
                  }}
                >
                  <Box
                    component="span"
                    sx={{ color: "#7B9EC8" }}
                  >
                    {"// ready to build something?"}
                  </Box>{" "}
                  <Box
                    component="span"
                    sx={{ color: "#00E5FF" }}
                  >
                    {"const "}
                  </Box>
                  <Box
                    component="span"
                    sx={{ color: "#E8F4FD" }}
                  >
                    {"idea"}
                  </Box>
                  <Box
                    component="span"
                    sx={{ color: "#00E5FF" }}
                  >
                    {" = "}
                  </Box>
                  <Box
                    component="span"
                    sx={{ color: "#FF6D00" }}
                  >
                    {"yourProject"}
                  </Box>
                  {"; "}
                  <Box
                    component="span"
                    sx={{ color: "#00E5FF" }}
                  >
                    {"saood"}
                  </Box>
                  {".build(idea); "}
                  <Box
                    component="span"
                    sx={{ color: "#28CA41" }}
                  >
                    {"✓ ready"}
                  </Box>
                </Typography>

                <Box
                  sx={{
                    mt: 1.5,
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5,
                  }}
                >
                  <Typography
                    sx={{
                      color: "#00E5FF",
                      fontSize: "0.75rem",
                    }}
                  >
                    $
                  </Typography>

                  <Cursor />
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* RIGHT FORM */}
          <Grid item xs={12} md={8}>
            <Box
              sx={{
                p: { xs: 2.5, sm: 3, md: 4 },
                background: "rgba(13,27,42,0.6)",
                border: "1px solid rgba(0,229,255,0.1)",
                borderRadius: "10px",
                backdropFilter: "blur(16px)",
                position: "relative",
                overflow: "hidden",

                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 2,
                  background:
                    "linear-gradient(90deg,#00E5FF,#0091EA,transparent)",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  mb: 3.5,
                  flexWrap: "wrap",
                }}
              >
                <Box
                  sx={{
                    width: 36,
                    height: 36,
                    borderRadius: "8px",
                    background:
                      "linear-gradient(135deg,rgba(0,229,255,0.15),rgba(0,145,234,0.1))",
                    border:
                      "1px solid rgba(0,229,255,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <SendIcon
                    sx={{
                      fontSize: 16,
                      color: "#00E5FF",
                    }}
                  />
                </Box>

                <Box>
                  <Typography
                    sx={{
                      color: "text.primary",
                      fontSize: "0.9rem",
                      fontWeight: 700,
                      fontFamily: "'DM Mono',monospace",
                    }}
                  >
                    Send a Message
                  </Typography>

                  <Typography
                    sx={{
                      color: "text.secondary",
                      fontSize: "0.68rem",
                      fontFamily: "'DM Mono',monospace",
                    }}
                  >
                    I'll reply within 24 hours
                  </Typography>
                </Box>
              </Box>

              {/* FLEX FORM */}
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: { xs: 2, sm: 2.5 },
                  width: "100%",
                }}
              >
                {/* Name */}
                <Box
                  sx={{
                    width: {
                      xs: "100%",
                      sm: "calc(50% - 10px)",
                    },
                  }}
                >
                  <TextField
                    required
                    fullWidth
                    label="Your Name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    error={!!errors.name}
                    helperText={errors.name}
                    disabled={loading}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccountCircleIcon />
                        </InputAdornment>
                      ),
                    }}
                    sx={fieldSx}
                  />
                </Box>

                {/* Email */}
                <Box
                  sx={{
                    width: {
                      xs: "100%",
                      sm: "calc(50% - 10px)",
                    },
                  }}
                >
                  <TextField
                    required
                    fullWidth
                    label="Email Address"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    error={!!errors.email}
                    helperText={errors.email}
                    disabled={loading}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <EmailOutlinedIcon />
                        </InputAdornment>
                      ),
                    }}
                    sx={fieldSx}
                  />
                </Box>

                {/* Subject */}
                <Box
                  sx={{
                    width: {
                      xs: "100%",
                      sm: "calc(50% - 10px)",
                    },
                  }}
                >
                  <TextField
                    required
                    fullWidth
                    label="Subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    error={!!errors.subject}
                    helperText={errors.subject}
                    disabled={loading}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <TitleIcon />
                        </InputAdornment>
                      ),
                    }}
                    sx={fieldSx}
                  />
                </Box>

                {/* Purpose */}
                <Box
                  sx={{
                    width: {
                      xs: "100%",
                      sm: "calc(50% - 10px)",
                    },
                  }}
                >
                  <TextField
                    required
                    select
                    fullWidth
                    label="Purpose"
                    name="purpose"
                    value={form.purpose}
                    onChange={handleChange}
                    disabled={loading}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <BusinessCenterIcon />
                        </InputAdornment>
                      ),
                    }}
                    sx={fieldSx}
                  >
                    {PURPOSES.map((p) => (
                      <MenuItem
                        key={p}
                        value={p}
                        sx={{
                          fontFamily:
                            "'DM Mono',monospace",
                          fontSize: "0.82rem",
                          background:
                            "rgba(5,10,18,0.95)",
                          color: "text.secondary",

                          "&:hover": {
                            background:
                              "rgba(0,229,255,0.08)",
                            color: "#00E5FF",
                          },

                          "&.Mui-selected": {
                            background:
                              "rgba(0,229,255,0.1)",
                            color: "#00E5FF",
                          },
                        }}
                      >
                        {p}
                      </MenuItem>
                    ))}
                  </TextField>
                </Box>

                {/* Message */}
                <Box sx={{ width: "100%" }}>
                  <TextField
                    required
                    fullWidth
                    multiline
                    rows={5}
                    label="Your Message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    error={!!errors.message}
                    helperText={
                      errors.message ||
                      `${form.message.length} / 500`
                    }
                    disabled={loading}
                    inputProps={{ maxLength: 500 }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment
                          position="start"
                          sx={{
                            alignSelf: "flex-start",
                            mt: 1.5,
                          }}
                        >
                          <MessageOutlinedIcon />
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      ...fieldSx,

                      "& .MuiFormHelperText-root": {
                        fontFamily:
                          "'DM Mono',monospace",
                        fontSize: "0.68rem",
                        ml: 0,
                        color: errors.message
                          ? "#FF6D00"
                          : "rgba(123,158,200,0.45)",
                      },
                    }}
                  />
                </Box>

                {/* Submit */}
                <Box sx={{ width: "100%" }}>
                  <Button
                    fullWidth
                    variant="contained"
                    onClick={handleSubmit}
                    disabled={loading}
                    endIcon={
                      loading ? (
                        <CircularProgress
                          size={15}
                          sx={{ color: "#050A12" }}
                        />
                      ) : (
                        <SendIcon fontSize="small" />
                      )
                    }
                    sx={{
                      py: 1.6,
                      borderRadius: "8px",

                      background: loading
                        ? "rgba(0,229,255,0.25)"
                        : "linear-gradient(135deg,#00E5FF,#0091EA)",

                      color: "#050A12",
                      fontWeight: 800,
                      fontSize: "0.78rem",
                      letterSpacing: "0.14em",
                      fontFamily: "'DM Mono',monospace",

                      boxShadow: loading
                        ? "none"
                        : "0 6px 24px rgba(0,229,255,0.2)",

                      "&:hover:not(:disabled)": {
                        background:
                          "linear-gradient(135deg,#33EAFF,#00B0FF)",
                        transform: "translateY(-2px)",
                        boxShadow:
                          "0 12px 32px rgba(0,229,255,0.35)",
                      },

                      transition: "all 0.25s ease",
                    }}
                  >
                    {loading
                      ? "Sending..."
                      : "Send Message"}
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Snackbar */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={5000}
        onClose={() =>
          setSnackbar((s) => ({
            ...s,
            open: false,
          }))
        }
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      >
        <Alert
          severity={snackbar.type}
          onClose={() =>
            setSnackbar((s) => ({
              ...s,
              open: false,
            }))
          }
          icon={
            snackbar.type === "success" ? (
              <TaskAltIcon fontSize="small" />
            ) : undefined
          }
          sx={{
            background:
              snackbar.type === "success"
                ? "rgba(0,229,255,0.08)"
                : "rgba(255,109,0,0.08)",

            border: `1px solid ${
              snackbar.type === "success"
                ? "rgba(0,229,255,0.3)"
                : "rgba(255,109,0,0.3)"
            }`,

            color:
              snackbar.type === "success"
                ? "#00E5FF"
                : "#FF6D00",

            fontFamily: "'DM Mono',monospace",
            fontSize: "0.8rem",
            borderRadius: "6px",
            backdropFilter: "blur(12px)",

            "& .MuiAlert-icon": {
              color:
                snackbar.type === "success"
                  ? "#00E5FF"
                  : "#FF6D00",
            },
          }}
        >
          {snackbar.msg}
        </Alert>
      </Snackbar>
    </Box>
  );
}