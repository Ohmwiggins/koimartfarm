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
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': onClick ? {
          transform: 'scale(1.05)',
          '& img': {
            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
          }
        } : {},
      }}
      onClick={onClick}
    >
      <Image
        src={`${img}`}
        alt={`highlight-img-${desc}`}
        width={300}
        height={500}
        style={{
          width: "180px",
          height: "auto",
          display: "block",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
          transition: 'box-shadow 0.3s ease',
        }}
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
