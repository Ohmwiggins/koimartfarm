import { Box, Typography } from "@mui/material";

function HeaderText({ title, color }: { title: string; color?: string }) {
  return (
    <Box className="flex flex-col items-center gap-3">
      <Typography
        variant="h2"
        sx={{
          color: color ?? "primary.main",
          fontFamily: "var(--font-playfair)",
        }}
      >
        {title}
      </Typography>
      <Box className="gold-divider" />
    </Box>
  );
}

export default HeaderText;
