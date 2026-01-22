import { Box } from "@mui/material";
import Image from "next/image";

function EventHighlightBox({ img }: { img: string }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
        transition: "transform 0.2s",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
      onClick={() => window.open("https://www.koimart.shop/th/news", "_blank")}
    >
      <Image
        src={img}
        alt={img}
        width={500}
        height={300}
        style={{ width: "250px", height: "auto", display: "block" }}
      />
    </Box>
  );
}

export default EventHighlightBox;
