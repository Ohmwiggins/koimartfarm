"use client";

import { Box, Container, Grow } from "@mui/material";
import Event from "./Event/index";
import eventDetails from "../../data/events.json";
import HeaderText from "../../components/HeaderText";
import LinkedOutlineButton from "../../components/LinkedOutlineButton";
import KoiHighlight from "./KoiHighlight";
import History from "./KoiHistory";
import BlogHighlight from "./BlogHighlight";
import KoiVariety from "./KoiVariety";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import Banner from "./Banner";

function Home() {
  const { ref: eventRef, inView: eventInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // const { ref: eventHighlightRef, inView: eventHighlightInView } = useInView({
  //   triggerOnce: true,
  //   threshold: 0.2,
  // });

  const { ref: highlightRef, inView: highlightInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: historyRef, inView: historyInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: blogRef, inView: blogInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: varietyRef, inView: varietyInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        maxWidth: "100vw",
      }}
    >
      <Banner />

      <Box
        ref={eventRef}
        sx={{
          paddingY: 10,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Grow in={eventInView} timeout={1500}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <HeaderText title="Events" />
          </Box>
        </Grow>

        <Grow in={eventInView} timeout={2500}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Event events={eventDetails.slice(0, 5)} />
            {/* <LinkedOutlineButton text="ดูทั้งหมด" path="/events" /> */}
          </Box>
        </Grow>
      </Box>

      <Box
        sx={{
          paddingY: 10,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
        ref={highlightRef}
      >
        <Grow in={highlightInView} timeout={1500}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <HeaderText title="Koi Appreciation" />
          </Box>
        </Grow>
        <Grow in={highlightInView} timeout={2500}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                paddingY: 5,
                overflowX: "hidden",
              }}
            >
              <KoiHighlight />
            </Box>
            <LinkedOutlineButton
              text="ศึกษาเพิ่มเติม"
              path="/blog/koi-appreciation"
            />
          </Box>
        </Grow>
      </Box>

      <Box ref={historyRef}></Box>
      <Container
        id="history"
        maxWidth="lg"
        sx={{
          paddingY: 10,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Grow in={historyInView} timeout={1000}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <HeaderText title="History" />
          </Box>
        </Grow>

        <Box sx={{ paddingY: 5 }}>
          <History />
        </Box>
      </Container>

      <Container
        ref={blogRef}
        id="blog"
        maxWidth="xl"
        sx={{
          paddingY: 5,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Grow in={blogInView} timeout={1500}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <HeaderText title="Blog" />
          </Box>
        </Grow>

        <Box sx={{ paddingY: 5 }}>
          <BlogHighlight />
        </Box>
      </Container>

      <Image
        src={"/img/bg2.png"}
        alt="KoiMartFarm Background2"
        width={3000}
        height={800}
        style={{
          width: "100%",
          height: "50vh",
          display: "block",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />

      <Container
        ref={varietyRef}
        maxWidth="xl"
        sx={{
          paddingY: 5,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Grow in={varietyInView} timeout={1500}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <HeaderText title="Koi Varieties" />
          </Box>
        </Grow>

        <Box sx={{ paddingY: 5 }}>
          <KoiVariety />
        </Box>
      </Container>
      {/* 
      <Container maxWidth="xl">
        <FacebookPost />
      </Container> */}
    </Box>
  );
}

export default Home;
