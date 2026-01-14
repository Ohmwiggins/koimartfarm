"use client";

import { Box, Container, Fade, Grow, Typography } from "@mui/material";
import Event from "../../components/Event/index";
import eventDetails from "../../data/events.json";
import HeaderText from "../../components/HeaderText";
import LinkedOutlineButton from "../../components/LinkedOutlineButton";
import KoiHighlight from "./KoiHighlight";
import History from "./KoiHistory";
import BlogHighlight from "./BlogHighlight";
import KoiVariety from "./KoiVariety";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

function Home() {
  const { ref: eventRef, inView: eventInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

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

  //NOTE: for bg fading
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = 9;
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalImages);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        maxWidth: "100vw",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          overflow: "hidden",
          backgroundColor: "#030916",
        }}
      >
        <Box
          sx={{
            height: { xs: "70%", sm: "80%" },
            position: "relative",
          }}
        >
          {Array.from({ length: totalImages }).map((_, i) => (
            <Fade key={i} in={currentIndex === i} timeout={1500}>
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
              >
                <Image
                  priority={i === 0}
                  src={`/img/koi-bg/${i + 1}.png`}
                  alt={`KoiMartFarm Background ${i + 1}`}
                  width={3000}
                  height={2000}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "bottom center",
                  }}
                />
              </Box>
            </Fade>
          ))}
        </Box>

        <Box
          sx={{
            color: "secondary.main",
            textAlign: "center",
            width: "100%",
            zIndex: 1,
          }}
        >
          <Grow in={true} timeout={1500}>
            <Box>
              <Typography
                fontFamily="var(--font-inknut)"
                sx={{ fontSize: { xs: 32, sm: 50, md: 64 } }}
              >
                KOI MART FARM
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "primary.contrastText" }}
              >
                ปลาคาร์ฟแฟนซีจากฟาร์มญี่ปุ่นชั้นนำ
              </Typography>
            </Box>
          </Grow>
        </Box>
      </Box>

      <Container
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
      </Container>

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
