import { Typography } from "@mui/material";

function HeaderText({ title }: { title: string }) {
  return (
    <Typography
      variant="h2"
      sx={{
        color: "primary.light",
        fontFamily: "Inknut Antiqua",
      }}
    >
      {title}
    </Typography>
  );
}

export default HeaderText;
