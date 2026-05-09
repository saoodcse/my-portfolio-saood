import React, { useState, useEffect, useRef } from "react";
import { Typography, Box } from "@mui/material";

const TypingText = ({ text, speed = 80, pauseAfter = 1500, loop = true, sx, onDone }) => {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone]           = useState(false);
  const [phase, setPhase]         = useState("typing");
  const hasFiredDone              = useRef(false);

  useEffect(() => {
    let i        = 0;
    let timeout  = null;
    let interval = null;
    hasFiredDone.current = false;
    setDisplayed("");
    setDone(false);
    setPhase("typing");

    const startTyping = () => {
      i = 0;
      setPhase("typing");
      setDone(false);
      interval = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
          if (!hasFiredDone.current) {
            hasFiredDone.current = true;
            onDone?.();
          }
          if (loop) {
            timeout = setTimeout(() => startDeleting(), pauseAfter);
          }
        }
      }, speed);
    };

    const startDeleting = () => {
      setPhase("deleting");
      setDone(false);
      interval = setInterval(() => {
        i--;
        setDisplayed(text.slice(0, i));
        if (i <= 0) {
          clearInterval(interval);
          timeout = setTimeout(() => startTyping(), 400);
        }
      }, speed / 2);
    };

    startTyping();

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [text, speed, pauseAfter, loop]);

  return (
    <Typography sx={{ ...sx, position: "relative", zIndex: 1 }}>
      {displayed}
      <Box
        component="span"
        sx={{
          display:         "inline-block",
          width:           "2px",
          height:          "1em",
          backgroundColor: phase === "deleting" ? "error.main" : "primary.main",
          ml:              "2px",
          verticalAlign:   "middle",
          animation:       done ? "blink 0.8s step-end infinite" : "none",
          opacity:         1,
          "@keyframes blink": {
            "0%, 100%": { opacity: 1 },
            "50%":      { opacity: 0 },
          },
        }}
      />
    </Typography>
  );
};

export default TypingText;