import { Box, Slide } from "@mui/material";
import highlights from "../../../data/highlight.json";
import KoiHighlightBox from "../../../components/KoiHighlightBox/KoiHighlightBox";
import { useInView } from "react-intersection-observer";

function KoiHighlight() {
  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <Box
      sx={{
        overflowX: "auto",
        overflowY: "hidden",
        whiteSpace: "nowrap",
        maxWidth: "98vw",
        scrollbarWidth: "none",
      }}
      ref={imageRef}
    >
      {highlights.map((h, index) => (
        <Box key={h.id} sx={{ display: "inline-block", margin: 2 }}>
          <Slide in={imageInView} timeout={index * 300}>
            <Box>
              <KoiHighlightBox img={h.img} desc={h.detail} />
            </Box>
          </Slide>
        </Box>
      ))}
    </Box>
  );
}

export default KoiHighlight;
