"use client";

import { Box, Container, Typography } from "@mui/material";
import Event from "../../components/Event/index";
import eventDetails from "../../data/events.json";
import HeaderText from "../../components/HeaderText";
import LinkedOutlineButton from "../../components/LinkedOutlineButton";
import KoiHighlight from "./KoiHighlight";
import History from "./KoiHistory";
import BlogHighlight from "./BlogHighlight";
import KoiVariety from "./KoiVariety";
import Image from "next/image";

function Home() {
  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        maxWidth: "100vw",
      }}
    >
      <Box sx={{ position: "relative" }}>
        <Image
          id="home"
          src={"/img/bg1.png"}
          alt="KoiMartFarm Background"
          width={3000}
          height={2000}
          style={{
            width: "100%",
            height: "100vh",
            display: "block",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: "70%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "secondary.main",
            textAlign: "center",
            width: "100%",
          }}
        >
          <Typography
            fontFamily="var(--font-inknut)"
            sx={{ fontSize: { xs: 32, sm: 50, md: 64 } }}
          >
            KOI MART FARM
          </Typography>
          <Typography variant="body1" sx={{ color: "primary.contrastText" }}>
            ปลาคาร์ฟแฟนซีจากฟาร์มญี่ปุ่นชั้นนำ
          </Typography>
        </Box>
      </Box>

      <Container
        sx={{
          paddingY: 10,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <HeaderText title="Events" />
        </Box>
        <Event events={eventDetails.slice(0, 5)} />
        <LinkedOutlineButton text="ดูทั้งหมด" path="/events" />
      </Container>

      <Box
        sx={{
          paddingY: 10,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <HeaderText title="Highlight KOIs" />
        </Box>
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
        <LinkedOutlineButton text="ดูทั้งหมด" path="/highlights" />
      </Box>

      <Container
        id="history"
        maxWidth="xl"
        sx={{
          paddingY: 10,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <HeaderText title="History" />
        </Box>
        <Box sx={{ paddingY: 5 }}>
          <History />
        </Box>
      </Container>

      <Container
        id="blog"
        maxWidth="xl"
        sx={{
          paddingY: 5,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <HeaderText title="Blog" />
        </Box>
        <Box sx={{ paddingY: 5 }}>
          <BlogHighlight />
        </Box>
      </Container>

      <Image
        src={"/img/bg2.png"}
        alt="KoiMartFarm Background2"
        width={3000}
        height={800}
        style={{ width: "100%", height: "auto", display: "block" }}
      />

      <Container
        maxWidth="xl"
        sx={{
          paddingY: 5,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <HeaderText title="Koi Varieties" />
        </Box>
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
