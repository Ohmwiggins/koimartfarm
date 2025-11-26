import { Box } from "@mui/material";
import { FacebookEmbed } from "react-social-media-embed";

function FacebookPost({ src }: { src: string }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        border: "red",
        borderWidth: 2,
        borderStyle: "solid",
        transform: "scale(0.8)",
        transformOrigin: "top left",
      }}
    >
      <FacebookEmbed url={src} />
    </Box>
  );
}

export default FacebookPost;
