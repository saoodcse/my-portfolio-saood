import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import TypingText from "./TypingText"; // adjust path as needed

const NameBlock = ({ data }) => {
  const [firstNameDone, setFirstNameDone] = useState(false);
  const [lastNameDone,  setLastNameDone]  = useState(false);

  const firstName = data.name.split(" ")[0];
  const lastName  = data.name.split(" ")[1];

  return (
    <Box sx={{ mb: 3 }}>

      {/* Role — types in once, no loop */}
      <TypingText
        text={data.role}
        speed={55}
        pauseAfter={999999} // effectively no loop
        sx={{
          color:         "text.secondary",
          fontSize:      "0.78rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          mb:            1,
          fontFamily:    "'DM Mono',monospace",
        }}
      />

      {/* First + Last name side by side */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>

        {/* First name — plain white, types first */}
        <TypingText
          text={firstName}
          speed={110}
          pauseAfter={999999}
          onDone={() => setFirstNameDone(true)}
          sx={{
            fontSize:   { xs: "2.5rem", sm: "3.5rem", md: "4.5rem" },
            lineHeight: 1,
            fontWeight: 800,
            color:      "text.primary",
            fontFamily: "inherit",
          }}
        />

        {/* Last name — gradient, starts after first name done */}
        {firstNameDone && (
          <TypingText
            text={lastName}
            speed={110}
            pauseAfter={999999}
            onDone={() => setLastNameDone(true)}
            sx={{
              fontSize:              { xs: "2.5rem", sm: "3.5rem", md: "4.5rem" },
              lineHeight:            1,
              fontWeight:            800,
              mb:                    2,
              background:            "linear-gradient(135deg,#00E5FF 0%,#0091EA 60%,#FF6D00 100%)",
              backgroundClip:        "text",
              WebkitBackgroundClip:  "text",
              WebkitTextFillColor:   "transparent",
              fontFamily:            "inherit",
            }}
          />
        )}
      </Box>

      {/* Tagline — fades in only after full name is typed */}
      <Box
        sx={{
          display:    "flex",
          alignItems: "center",
          gap:        2,
          opacity:    lastNameDone ? 1 : 0,
          transform:  lastNameDone ? "translateY(0)" : "translateY(6px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}
      >
        <Box sx={{
          width:      48,
          height:     2,
          background: "linear-gradient(90deg,#00E5FF,transparent)",
        }} />
        <Typography sx={{
          color:         "text.secondary",
          fontSize:      "0.72rem",
          letterSpacing: "0.1em",
          fontFamily:    "'DM Mono',monospace",
        }}>
          {data.tagline}
        </Typography>
      </Box>

    </Box>
  );
};

export default NameBlock;