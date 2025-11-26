"use client";

import { Button } from "@mui/material";

function LinkedFilledButton({ text, path }: { text: string; path: string }) {
  return (
    <Button
      variant="contained"
      href={path}
      sx={{
        "&:hover": { backgroundColor: "primary.light" },
        width: "100%",
      }}
    >
      {text}
    </Button>
  );
}

export default LinkedFilledButton;
