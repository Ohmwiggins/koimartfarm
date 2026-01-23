import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";

function KoiVarietyBox({
  img,
  type,
  desc,
}: {
  img: string;
  type: string;
  desc: string;
}) {
  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <Grid container sx={{ width: "100%", gap: 2 }}>
        <Grid size={{ xs: 11, sm: 5 }}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Image
              src={img}
              alt={"KoiMartFarm Varieties " + img}
              width={150}
              height={200}
              style={{
                width: "150px",
                height: "auto",
              }}
            />
          </Box>
        </Grid>
        <Grid size={{ xs: 11, sm: 5 }}>
          <Box sx={{ width: "100%" }}>
            <Typography variant="h4" color="secondary.main">
              {type}
            </Typography>
            <Typography variant="body2" color="text.primary" paddingTop={2}>
              {desc}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default KoiVarietyBox;
