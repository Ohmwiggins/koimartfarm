import { Box, Grid, Typography } from "@mui/material";
import HeaderText from "../HeaderText";
import appLogo from "./../../assets/logo/FullLogo.png";
import FilledButton from "../FilledButton";
import {
  GoogleMapBox,
  TextInputField,
  AppIcon,
  SocialIcon,
} from "./Footer.styles";

function Footer() {
  return (
    <Grid
      container
      columnSpacing={5}
      rowSpacing={1}
      sx={{ marginY: 10, justifyContent: "center" }}
    >
      <Grid
        size={12}
        sx={{ display: "flex", justifyContent: "center", marginBottom: 5 }}
      >
        <HeaderText title="Contact Us" color="primary.contrastText" />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <GoogleMapBox>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1040.735378468406!2d100.52806330942832!3d13.901343551246619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e283667e313185%3A0xf3d9ce05d5dff8ae!2z4Lia4LiI4LiBLiDguYLguITguYjguKIg4Lih4Liy4Lij4LmM4LiXIOC4n-C4suC4o-C5jOC4oQ!5e0!3m2!1sth!2sth!4v1760697310973!5m2!1sth!2sth"
            width="100%"
            height="100%"
            loading="lazy"
          ></iframe>
        </GoogleMapBox>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Box>
          <Typography
            variant="h3"
            sx={{
              marginBottom: 2,
              marginTop: { xs: 5, md: 0 }, // for spacing on mobile view
            }}
          >
            ส่งข้อความหาเรา
          </Typography>
          <TextInputField placeholder="ชื่อผู้ติดต่อ" />
          <TextInputField placeholder="บริษัท" />
          <TextInputField placeholder="หัวเรื่อง" />
          <TextInputField multiline rows={4} placeholder="รายละเอียด" />
        </Box>
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}></Grid>
      <Grid
        size={{ xs: 12, md: 6 }}
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <AppIcon src="img/Koi.png" alt="Koi Mart Farm Logo" />
        <Box sx={{ width: "30%", height: "60%" }}>
          <FilledButton text="ส่ง" method={() => console.log("submit")} />
        </Box>
      </Grid>

      <Grid size={{ sm: 12, md: 6 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "flex-start" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Box
            component="img"
            src={appLogo}
            sx={{
              width: "100%",
              maxWidth: 250,
              height: "auto",
              display: "flex",
            }}
          />
          <Typography
            variant="h3"
            sx={{ color: "primary.contrastText", paddingY: 2 }}
          >
            Koi Mart Farm Co.,LTD
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "primary.contrastText", paddingY: 0.5 }}
          >
            46/81 Moo2 Chaengwattana28, Bangtalad, Pak Kret District, Nonthaburi
            11120
          </Typography>
        </Box>
      </Grid>
      <Grid
        size={{ sm: 12, md: 6 }}
        sx={{
          display: "flex",
          justifyContent: { sm: "center", md: "flex-end" },
          alignItems: "flex-end",
        }}
      >
        <SocialIcon
          src={"/img/socialmedias/facebook.png"}
          onClick={() => console.log("facebook")}
          alt="KoiMartFarm Facebook"
        />
        <SocialIcon
          src={"/img/socialmedias/tiktok.png"}
          onClick={() => console.log("tiktok")}
          alt="KoiMartFarm Tiktok"
        />
        <SocialIcon
          src={"/img/socialmedias/line.png"}
          onClick={() => console.log("line")}
          alt="KoiMartFarm Line"
        />
        <SocialIcon
          src={"/img/socialmedias/instagram.png"}
          onClick={() => console.log("instagram")}
          alt="KoiMartFarm Instagram"
        />
      </Grid>
    </Grid>
  );
}

export default Footer;
