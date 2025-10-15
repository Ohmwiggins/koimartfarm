import { Button } from "@mui/material";

function OutlineButton({ text, method }: { text: string; method: () => void }) {
  return (
    <Button
      variant="outlined"
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
      onClick={() => method()}
    >
      {text}
    </Button>
  );
}

export default OutlineButton;
