import { Button } from "@mui/material";

function LinkedOutlineButton({ text, path }: { text: string; path: string }) {
  return (
    <Button
      variant="outlined"
      href={path}
      sx={{
        mx: "auto",
        color: "text.primary",
        borderColor: "text.primary",
        paddingX: { xs: 2, sm: 5 },
        fontWeight: "bold",
        "&:hover": {
          borderColor: "text.primary",
        },
      }}
    >
      {text}
    </Button>
  );
}

export default LinkedOutlineButton;
