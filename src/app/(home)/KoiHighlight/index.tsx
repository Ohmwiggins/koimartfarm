import { Box } from "@mui/material";
import highlights from "../../../data/highlight.json";
import KoiHighlightBox from "../../../components/KoiHighlightBox/KoiHighlightBox";

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
      {highlights.map((h) => (
        <Box key={h.id} sx={{ display: "inline-block", margin: 2 }}>
          <KoiHighlightBox img={h.img} desc={h.detail} />
        </Box>
      ))}
    </Box>
  );
}

export default KoiHighlight;
