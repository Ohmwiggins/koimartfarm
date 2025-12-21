import { Typography } from "@mui/material";

function PageHeaderText({ title, color }: { title: string; color?: string }) {
  return (
    <Typography
      variant="h3"
      sx={{
        color: color ?? "secondary.contrastText",
        fontFamily: "var(--font-lineseed-th)",
      }}
    >
      {title}
    </Typography>
  );
}

export default PageHeaderText;
