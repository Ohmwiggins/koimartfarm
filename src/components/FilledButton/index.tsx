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
        height: 40,
      }}
    />
  ) : (
    <Button
      variant="contained"
      sx={{
        "&:hover": { backgroundColor: "primary.light" },
        width: "100%",
        height: 40,
      }}
      onClick={() => method()}
    >
      {text}
    </Button>
  );
}

export default FilledButton;
