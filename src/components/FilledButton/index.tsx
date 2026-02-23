"use client";

import { Button } from "@mui/material";

function FilledButton({
  text,
  isLoading,
  method,
}: {
  text: string;
  isLoading?: boolean;
  method: () => void;
}) {
  return isLoading ? (
    <Button
      loading
      variant="contained"
      sx={{
        width: "100%",
        height: 44,
        borderRadius: "9999px",
      }}
    />
  ) : (
    <Button
      variant="contained"
      sx={{
        width: "100%",
        height: 44,
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
      onClick={() => method()}
    >
      {text}
    </Button>
  );
}

export default FilledButton;
