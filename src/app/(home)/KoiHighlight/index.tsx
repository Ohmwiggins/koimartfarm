import { Box, Slide } from "@mui/material";
import KoiHighlightBox from "../../../components/KoiHighlightBox/KoiHighlightBox";
import { useInView } from "react-intersection-observer";

function KoiHighlight() {
  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          overflowX: "auto",
          overflowY: "hidden",
          display: "flex",
          flexDirection: "row",
          gap: 2,
          maxWidth: "98vw",
          scrollbarWidth: "none",
          height: "300px",
          alignItems: "center",
        }}
        ref={ref1}
      >
        {Array.from({ length: 10 }).map((_, index) => (
          <Slide key={`row1-${index}`} in={inView1} timeout={index * 300}>
            <Box>
              <KoiHighlightBox
                img={`/img/highlights/koi-highlight${index + 1}.png`}
              />
            </Box>
          </Slide>
        ))}
      </Box>
      <Box
        sx={{
          overflowX: "auto",
          overflowY: "hidden",
          display: "flex",
          flexDirection: "row",
          gap: 2,
          maxWidth: "98vw",
          scrollbarWidth: "none",
          height: "300px",
          alignItems: "center",
        }}
        ref={ref2}
      >
        {Array.from({ length: 10 }).map((_, index) => (
          <Slide key={`row2-${index}`} in={inView2} timeout={index * 300}>
            <Box>
              <KoiHighlightBox
                img={`/img/highlights/koi-highlight${index + 11}.png`}
              />
            </Box>
          </Slide>
        ))}
      </Box>
    </Box>
  );
}

export default KoiHighlight;
