"use client";

import { Button } from "@mui/material";

function LinkedFilledButton({ text, path }: { text: string; path: string }) {
  return (
    <Button
      variant="contained"
      href={path}
      sx={{
        width: "100%",
        borderRadius: "9999px",
        backgroundColor: "#C5A55A",
        color: "#0F1B2D",
        fontWeight: 600,
        letterSpacing: "0.04em",
        transition: "all 0.3s ease",
        "&:hover": {
          backgroundColor: "#A8893E",
          transform: "translateY(-1px)",
          boxShadow: "0 6px 20px rgba(197, 165, 90, 0.3)",
        },
      }}
    >
      {text}
    </Button>
  );
}

export default LinkedFilledButton;
