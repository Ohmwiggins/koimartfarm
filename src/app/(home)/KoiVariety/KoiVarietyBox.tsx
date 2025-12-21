import { Box, Typography } from "@mui/material";
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
      <Image
        src={img}
        alt={"KoiMartFarm Varieties " + img}
        width={150}
        height={200}
        style={{
          width: 80,
          height: "auto",
          display: "block",
          alignSelf: "flex-start",
        }}
      />
      <Box paddingLeft={{ xs: 6, md: 10 }}>
        <Typography variant="h4" color="secondary.main">
          {type}
        </Typography>
        <Typography variant="body2" color="text.primary" paddingTop={2}>
          {desc}
        </Typography>
      </Box>
    </Box>
  );
}

export default KoiVarietyBox;
