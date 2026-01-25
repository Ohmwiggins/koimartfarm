"use client";

import { Box, Button, Container, Grow } from "@mui/material";
import Event from "./Event/index";
import eventDetails from "../../data/events.json";
import HeaderText from "../../components/HeaderText";
import KoiHighlight from "./KoiHighlight";
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
              }}
            >
              <KoiHighlight />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                variant="outlined"
                href={"/blog/koi-appreciation"}
                sx={{ color: "text.primary", borderColor: "text.primary" }}
              >
                ศึกษาเพิ่มเติม
              </Button>
            </Box>
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

      <Box sx={{ display: "flex", justifyContent: "center", paddingY: 5 }}>
        <iframe
          src="https://www.youtube.com/embed/3HtnQz21_yk?autoplay=1&mute=1&loop=1&playlist=3HtnQz21_yk"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{
            height: "80vh",
            aspectRatio: "9 / 16",
            border: "none",
            maxWidth: "100%",
          }}
        ></iframe>
      </Box>

      <Container
        ref={varietyRef}
        maxWidth="lg"
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
