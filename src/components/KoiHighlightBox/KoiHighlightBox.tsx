import { Box, Typography } from "@mui/material";
import Image from "next/image";

function KoiHighlightBox({
  img,
  desc,
  onClick,
}: {
  img: string;
  desc?: string;
  onClick?: () => void;
}) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        cursor: onClick ? "pointer" : "default",
      }}
      onClick={onClick}
    >
      <Image
        src={`${img}`}
        alt={`highlight-img-${desc}`}
        width={300}
        height={500}
        style={{ width: "180px", height: "auto", display: "block" }}
      />

      {desc && (
        <Typography
          variant="body2"
          sx={{
            color: "secondary.main",
            fontWeight: "bold",
          }}
        >
          {desc}
        </Typography>
      )}
    </Box>
  );
}

export default KoiHighlightBox;
