import { Box, Container, Typography } from "@mui/material";
import highlight from "../../data/highlight.json";

function HighlightComponent({
  type,
  img,
  desc,
}: {
  type: string;
  img: string;
  desc: string;
}) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box
        component="img"
        src={`/img/highlights/${img}`}
        alt={type}
        sx={{
          maxWidth: 150,
          height: "auto",
          margin: "auto",
        }}
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

function KoiHighlight() {
  return (
    <Box
      sx={{
        overflowX: "auto",
        overflowY: "hidden",
        whiteSpace: "nowrap",
        maxWidth: "98vw",
        scrollbarWidth: "none",
      }}
    >
      {highlight.map((h) => (
        <Box key={h.id} sx={{ display: "inline-block", margin: 2 }}>
          <HighlightComponent type={h.detail} img={h.img} desc={h.detail} />
        </Box>
      ))}
    </Box>
  );
}

export default KoiHighlight;
