import { Typography } from "@mui/material";

function HeaderText({ title, color }: { title: string; color?: string }) {
  return (
    <Typography
      variant="h2"
      sx={{
        color: color ?? "primary.light",
        fontFamily: "Inknut Antiqua",
      }}
    >
      {title}
    </Typography>
  );
}

export default HeaderText;
