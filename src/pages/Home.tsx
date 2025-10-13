import { Box, CardMedia, Typography } from "@mui/material";
import NavBar from "../components/Navbar/Navbar";
import backgroundImg from "./../assets/bg1.png";

function Home() {
  return (
    <Box sx={{ backgroundColor: "background.default" }}>
      <NavBar />
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          image={backgroundImg}
          alt="Descriptive alt text"
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
          <Typography variant="h1">KOI MART FARM</Typography>
          <Typography variant="body1">
            ปลาคาร์ฟแฟนซีจากฟาร์มญี่ปุ่นชั้นนำ
          </Typography>
        </Box>
      </Box>
      <Typography variant="body1">ปtest</Typography>
    </Box>
  );
}

export default Home;
