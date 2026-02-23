"use client";

import { Box, Container, Grow } from "@mui/material";
import Event from "./Event/index";
import eventDetails from "../../data/events.json";
import HeaderText from "../../components/HeaderText";
import History from "./KoiHistory";
import BlogHighlight from "./BlogHighlight";
import KoiVariety from "./KoiVariety";
import { useInView } from "react-intersection-observer";
import Banner from "./Banner";

function Home() {
  const { ref: eventRef, inView: eventInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: blogRef, inView: blogInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: historyRef, inView: historyInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: varietyRef, inView: varietyInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <Box
      id="home"
      sx={{
        backgroundColor: "background.default",
        maxWidth: "100vw",
        overflowX: "hidden",
      }}
    >
      <Banner />

      {/* Events */}
      <Box
        id="events"
        ref={eventRef}
        sx={{
          paddingY: 12,
          backgroundColor: "background.default",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Grow in={eventInView} timeout={1500}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <HeaderText title="Events" color="#E91D26" />
          </Box>
        </Grow>

        <Grow in={eventInView} timeout={2500}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Event events={eventDetails.slice(0, 5)} />
          </Box>
        </Grow>
      </Box>

      {/* Blog */}
      <Box ref={blogRef} sx={{ backgroundColor: "background.elevation1", paddingY: 12 }}>
        <Container
          id="blog"
          maxWidth="xl"
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <Grow in={blogInView} timeout={1500}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <HeaderText title="Blog" color="#E91D26" />
            </Box>
          </Grow>

          <Box sx={{ paddingY: 5 }}>
            <BlogHighlight />
          </Box>
        </Container>
      </Box>

      {/* About Us */}
      <Box id="about" ref={historyRef} sx={{ backgroundColor: "background.default", paddingY: 10 }}>
        <Container
          maxWidth="lg"
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <Grow in={historyInView} timeout={1000}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <HeaderText title="About Us" color="#E91D26" />
            </Box>
          </Grow>

          <Box sx={{ paddingY: 5 }}>
            <History />
          </Box>
        </Container>
      </Box>

      {/* Koi Varieties */}
      <Box ref={varietyRef} sx={{ backgroundColor: "background.elevation1", paddingY: 10 }}>
        <Container maxWidth="lg" sx={{ display: "flex", flexDirection: "column" }}>
          <Grow in={varietyInView} timeout={1500}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <HeaderText title="Koi Varieties" color="#E91D26" />
            </Box>
          </Grow>

          <Box sx={{ paddingY: 5 }}>
            <KoiVariety />
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default Home;
