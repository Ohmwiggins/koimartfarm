import { Grid } from "@mui/material";
import FacebookPost from "./FacebookPost";

function FacebookPostHighlight() {
  return (
    <Grid container spacing={2} sx={{ justifyContent: "center" }}>
      <Grid size={{ xs: 12, xl: 4 }}>
        <FacebookPost src="https://www.facebook.com/KoiMartFarmBKK/posts/pfbid0TQzZAqrJv4twxSYk3E4Y879s8xUmN96v5EZXbZhGBQok28aYNFpaP9LjN4cF1gk7l" />
      </Grid>
      <Grid size={{ xs: 12, xl: 4 }}>
        <FacebookPost src="https://www.facebook.com/reel/1091166009600391/" />
      </Grid>
      <Grid size={{ xs: 12, xl: 4 }}>
        <FacebookPost src="https://www.facebook.com/KoiMartFarmBKK/posts/pfbid034mdY4MFRKSxe251BP5XszpHHm3iQcCa4PxdXVBzf2sZjRx2YVTDhuBWVp1GMwTa6l" />
      </Grid>
    </Grid>
  );
}

export default FacebookPostHighlight;
