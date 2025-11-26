import { Box, Container, Grid } from "@mui/material";
import PageHeader from "../../components/PageHeader";
import KoiHighlightBox from "../../components/KoiHighlightBox/KoiHighlightBox";
import highlights from "../../data/highlight.json";

function Highlights() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ marginY: 10 }}>
        <PageHeader text="Our Highlights" />
      </Box>
      <Container maxWidth="md">
        <Grid container spacing={2} justifyContent="center">
          {highlights.map((h) => (
            <Grid key={h.id}>
              <Box>
                <KoiHighlightBox img={h.img} desc={h.detail} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Container>
  );
}

export default Highlights;
