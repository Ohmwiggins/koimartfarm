import { Box, Typography } from "@mui/material";
import Image from "next/image";

function KoiHighlightBox({ img, desc }: { img: string; desc: string }) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Image
        src={`/img/highlights/${img}`}
        alt="KoiMartFarm Background2"
        width={300}
        height={500}
        style={{ width: "100%", height: "auto", display: "block" }}
      />

      <Typography
        variant="body2"
        sx={{
          color: "secondary.main",
          fontWeight: "bold",
        }}
      >
        {desc}
      </Typography>
    </Box>
  );
}

export default KoiHighlightBox;
