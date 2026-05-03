import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Tabs,
  Tab,
  Button,
  TextField,
  Grid,
  Snackbar,
  Alert,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";

const RESUME_URL = "/docs/Saood_Alam_Resume.pdf";
const COVER_URL = "/docs/Saood_Alam_Cover_Letter.pdf";

export default function Documents() {
  const [tab, setTab] = useState(0);
  const [email, setEmail] = useState("");
  const [snackbar, setSnackbar] = useState({ open: false, msg: "", type: "success" });

  const currentFile = tab === 0 ? RESUME_URL : COVER_URL;
  
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = currentFile;
    link.download = currentFile.split("/").pop();
    link.click();
  };

  const handleSendEmail = async () => {
    if (!email) {
      setSnackbar({ open: true, msg: "Enter email", type: "error" });
      return;
    }

    try {
      // call backend API
      await fetch("/api/send-docs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          type: tab === 0 ? "resume" : "cover",
        }),
      });

      setSnackbar({ open: true, msg: "Sent successfully!", type: "success" });
      setEmail("");
    } catch {
      setSnackbar({ open: true, msg: "Failed to send", type: "error" });
    }
  };

  return (
    <Box sx={{ py: 3 }}>
      <Container maxWidth="lg">

        {/* Header */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h2" sx={{ fontSize: { xs: "2.2rem", md: "3rem" }, mb: 2 }}>
            Resume &{" "}
            <Box
              component="span"
              sx={{
                background: "linear-gradient(135deg, #00E5FF, #0091EA)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Cover Letter
            </Box>
          </Typography>

          <Box sx={{ width: 48, height: 2, background: "linear-gradient(90deg, #00E5FF, transparent)" }} />
        </Box>

        {/* Tabs */}
        <Tabs value={tab} onChange={(e, v) => setTab(v)} sx={{ mb: 3 }}>
          <Tab label="Resume" />
          <Tab label="Cover Letter" />
        </Tabs>

        {/* Preview */}
        <Box
          sx={{
            height:500,
            border: "1px solid rgba(0,229,255,0.2)",
            mb: 3,
          }}
        >
          <iframe
            src={currentFile}
            width="100%"
            height="100%"
            style={{ border: "none" }}
          />
        </Box>

        {/* Actions */}
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Button
              fullWidth
              variant="contained"
              onClick={handleDownload}
              endIcon={<DownloadIcon />}
              sx={{
                py: 1.5,
                background: "linear-gradient(135deg,#00E5FF,#0091EA)",
                color: "#050A12",
              }}
            >
              Download
            </Button>
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ mb: 1 }}
            />

            <Button
              fullWidth
              variant="outlined"
              onClick={handleSendEmail}
              endIcon={<EmailIcon />}
              sx={{
                py: 1.5,
                borderColor: "#00E5FF",
                color: "#00E5FF",
              }}
            >
              Email
            </Button>
          </Grid>
        </Grid>

      </Container>

      {/* Snackbar */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert severity={snackbar.type}>{snackbar.msg}</Alert>
      </Snackbar>
    </Box>
  );
}