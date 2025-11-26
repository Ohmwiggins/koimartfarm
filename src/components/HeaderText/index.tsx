import { Typography } from "@mui/material";

function HeaderText({ title, color }: { title: string; color?: string }) {
  return (
    <Typography
      variant="h2"
      sx={{
        color: color ?? "primary.light",
        fontFamily: "var(--font-inknut)",
      }}
    >
      {title}
    </Typography>
  );
}

export default HeaderText;
