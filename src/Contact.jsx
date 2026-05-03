import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createAsyncThunk } from "@reduxjs/toolkit";
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
} from "@mui/material";
// import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import SendIcon from "@mui/icons-material/Send";
import { submitContact } from "./api";

export const sendContactForm = createAsyncThunk(
  "contact/send",
  async (formData, { rejectWithValue }) => {
    try {
      const result = await submitContact(formData);
      return result;
    } catch (err) {
      return rejectWithValue(err.message || "Failed to send");
    }
  }
);

const INFO_ITEMS = [
  { label: "Email", value: "saoodalamcse2018@gmail.com", prefix: "→ " },
  { label: "Location", value: "India — Remote Friendly", prefix: "→ " },
  { label: "Availability", value: "Open to work", prefix: "→ " },
  { label: "Response", value: "Within 24 hours", prefix: "→ " },
];

const inputSx = {
  "& .MuiOutlinedInput-root": {
    background: "rgba(13, 27, 42, 0.6)",
    borderRadius: "2px",
    fontFamily: "'DM Mono', monospace",
    fontSize: "0.85rem",
    "& fieldset": {
      borderColor: "rgba(0, 229, 255, 0.12)",
    },
    "&:hover fieldset": {
      borderColor: "rgba(0, 229, 255, 0.28)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#00E5FF",
      borderWidth: 1,
    },
    "&.Mui-error fieldset": {
      borderColor: "#FF6D00",
    },
  },
  "& .MuiInputLabel-root": {
    fontFamily: "'DM Mono', monospace",
    fontSize: "0.82rem",
    color: "rgba(123, 158, 200, 0.8)",
    "&.Mui-focused": { color: "#00E5FF" },
    "&.Mui-error": { color: "#FF6D00" },
  },
  "& .MuiFormHelperText-root": {
    fontFamily: "'DM Mono', monospace",
    fontSize: "0.7rem",
    color: "#FF6D00",
    ml: 0,
  },
  "& .MuiInputAdornment-root .MuiSvgIcon-root": {
    fontSize: 16,
    color: "rgba(0, 229, 255, 0.3)",
  },
};

export default function Contact() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, type: "success", msg: "" });

  const validate = () => {
    useEffect(() => {
    document.title = "Contact";
  }, []);

    const e = {};
    if (!form.name.trim() || form.name.trim().length < 2)
      e.name = "Name must be at least 2 characters";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email address";
    if (!form.message.trim() || form.message.trim().length < 10)
      e.message = "Message must be at least 10 characters";
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async () => {
    const e = validate();
    if (Object.keys(e).length) {
      setErrors(e);
      return;
    }
    setLoading(true);
    try {
      await dispatch(sendContactForm(form)).unwrap();
      setSnackbar({ open: true, type: "success", msg: "Message sent! I'll get back to you soon." });
      setForm({ name: "", email: "", message: "" });
      setErrors({});
    } catch {
      setSnackbar({ open: true, type: "error", msg: "Something went wrong. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ py: { xs: 2, md: 3 } }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h2"
            sx={{ fontSize: { xs: "2.2rem", md: "3rem" }, color: "text.primary", mb: 2 }}
          >
            Let's{" "}
            <Box
              component="span"
              sx={{
                background: "linear-gradient(135deg, #00E5FF, #0091EA)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Connect
            </Box>
          </Typography>
          <Box
            sx={{ width: 48, height: 2, background: "linear-gradient(90deg, #00E5FF, transparent)" }}
          />
        </Box>

        <Grid container spacing={6}>
          {/* Left - Info */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="body1"
              sx={{ color: "text.secondary", fontSize: "0.88rem", lineHeight: 1.9, mb: 4 }}
            >
              Have a project in mind or want to discuss backend architecture?
              I'm always open to exploring interesting opportunities.
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mb: 4 }}>
              {INFO_ITEMS.map(({ label, value, prefix }) => (
                <Box
                  key={label}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 0.3,
                    pl: 2,
                    borderLeft: "1px solid rgba(0, 229, 255, 0.15)",
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", fontSize: "0.68rem", letterSpacing: "0.1em", textTransform: "uppercase" }}
                  >
                    {label}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "text.primary", fontSize: "0.82rem" }}
                  >
                    <Box component="span" sx={{ color: "primary.main" }}>
                      {prefix}
                    </Box>
                    {value}
                  </Typography>
                </Box>
              ))}
            </Box>

            {/* Decorative terminal snippet */}
            <Box
              sx={{
                p: 2.5,
                background: "rgba(5, 10, 18, 0.8)",
                border: "1px solid rgba(0, 229, 255, 0.08)",
                borderRadius: "2px",
                fontFamily: "'DM Mono', monospace",
              }}
            >
              <Typography sx={{ color: "text.secondary", fontSize: "0.7rem" }}>
                <Box component="span" sx={{ color: "#7B9EC8" }}>{"// ready to build something?"}</Box>
                {"\n"}
                <Box component="span" sx={{ color: "primary.main" }}>{"const "}</Box>
                <Box component="span" sx={{ color: "#E8F4FD" }}>{"idea"}</Box>
                <Box component="span" sx={{ color: "primary.main" }}>{" = "}</Box>
                <Box component="span" sx={{ color: "#FF6D00" }}>{"yourProject"}</Box>
                {";\n"}
                <Box component="span" sx={{ color: "primary.main" }}>{"saood"}</Box>
                {".build(idea);"}
              </Typography>
            </Box>
          </Grid>

          {/* Right - Form */}
          <Grid item xs={12} md={8}>
            <Box
              sx={{
                p: { xs: 3, md: 5 },
                background: "rgba(13, 27, 42, 0.6)",
                border: "1px solid rgba(0, 229, 255, 0.1)",
                borderRadius: "2px",
                backdropFilter: "blur(12px)",
              }}
            >
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
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
                          {/* <PersonOutlineIcon /> */}
                        </InputAdornment>
                      ),
                    }}
                    sx={inputSx}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
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
                    sx={inputSx}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    multiline
                    rows={6}
                    label="Your Message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    error={!!errors.message}
                    helperText={errors.message || `${form.message.length} / 500`}
                    disabled={loading}
                    inputProps={{ maxLength: 500 }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start" sx={{ alignSelf: "flex-start", mt: 1.5 }}>
                          <MessageOutlinedIcon />
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      ...inputSx,
                      "& .MuiFormHelperText-root": {
                        fontFamily: "'DM Mono', monospace",
                        fontSize: "0.7rem",
                        color: errors.message ? "#FF6D00" : "rgba(123, 158, 200, 0.5)",
                        ml: 0,
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    fullWidth
                    variant="contained"
                    onClick={handleSubmit}
                    disabled={loading}
                    endIcon={
                      loading ? (
                        <CircularProgress size={16} sx={{ color: "#050A12" }} />
                      ) : (
                        <SendIcon fontSize="small" />
                      )
                    }
                    sx={{
                      py: 1.5,
                      background: loading
                        ? "rgba(0, 229, 255, 0.3)"
                        : "linear-gradient(135deg, #00E5FF, #0091EA)",
                      color: "#050A12",
                      fontWeight: 600,
                      fontSize: "0.8rem",
                      letterSpacing: "0.12em",
                      "&:hover": {
                        background: "linear-gradient(135deg, #33EAFF, #00B0FF)",
                        transform: "translateY(-1px)",
                        boxShadow: "0 8px 24px rgba(0, 229, 255, 0.3)",
                      },
                      transition: "all 0.25s ease",
                    }}
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={5000}
        onClose={() => setSnackbar((s) => ({ ...s, open: false }))}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          severity={snackbar.type}
          onClose={() => setSnackbar((s) => ({ ...s, open: false }))}
          sx={{
            background: snackbar.type === "success"
              ? "rgba(0, 229, 255, 0.1)"
              : "rgba(255, 109, 0, 0.1)",
            border: `1px solid ${snackbar.type === "success" ? "rgba(0, 229, 255, 0.3)" : "rgba(255, 109, 0, 0.3)"}`,
            color: snackbar.type === "success" ? "#00E5FF" : "#FF6D00",
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.8rem",
            "& .MuiAlert-icon": {
              color: snackbar.type === "success" ? "#00E5FF" : "#FF6D00",
            },
          }}
        >
          {snackbar.msg}
        </Alert>
      </Snackbar>
    </Box>
  );
}