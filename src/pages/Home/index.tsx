import { Box, CardMedia, Container, Typography } from "@mui/material";
import NavBar from "../../components/Navbar";
import Event from "../../components/Event/index";
import eventDetails from "../../data/events.json";
import HeaderText from "../../components/HeaderText";
import OutlineButton from "../../components/OutlineButton";
import KoiHighlight from "./KoiHighlight";
import History from "./History";
import Blog from "./Blog";
import KoiVariety from "./KoiVariety";

function Home() {
  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        maxWidth: "100vw",
      }}
    >
      <NavBar />
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          image="/img/bg1.png"
          alt="KoiMartFarm"
          sx={{ width: "100%", height: "auto" }}
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
            fontFamily="Inknut Antiqua"
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
        <OutlineButton
          text="ดูทั้งหมด"
          method={() => console.log("See more event")}
        />
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
        <OutlineButton
          text="ดูทั้งหมด"
          method={() => console.log("See more Koi")}
        />
      </Box>

      <Container
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
          <Blog />
        </Box>
      </Container>

      <Box
        component="img"
        src="/img/bg2.png"
        alt="KoiMartFarm2"
        sx={{ width: "100%", height: "auto" }}
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
    </Box>
  );
}

export default Home;
