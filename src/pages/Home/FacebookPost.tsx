import { Box, Card, Grid } from "@mui/material";
import { FacebookEmbed } from "react-social-media-embed";

function Post({ src }: { src: string }) {
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

function FacebookPost() {
  return (
    <Grid container spacing={2} sx={{ justifyContent: "center" }}>
      <Grid size={{ xs: 12, xl: 4 }}>
        <Post src="https://www.facebook.com/KoiMartFarmBKK/posts/pfbid0TQzZAqrJv4twxSYk3E4Y879s8xUmN96v5EZXbZhGBQok28aYNFpaP9LjN4cF1gk7l" />
      </Grid>
      <Grid size={{ xs: 12, xl: 4 }}>
        <Post src="https://www.facebook.com/reel/1091166009600391/" />
      </Grid>
      <Grid size={{ xs: 12, xl: 4 }}>
        <Post src="https://www.facebook.com/KoiMartFarmBKK/posts/pfbid034mdY4MFRKSxe251BP5XszpHHm3iQcCa4PxdXVBzf2sZjRx2YVTDhuBWVp1GMwTa6l" />
      </Grid>
    </Grid>
  );
}

export default FacebookPost;
