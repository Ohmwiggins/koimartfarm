"use client";

import { Box, Container, Grid, Typography } from "@mui/material";
import { ContactUsLayout, SocialIcon } from "./Footer.styles";
import HeaderText from "../HeaderText";
import Image from "next/image";
import ContactForm from "./ContactForm";

function Footer() {
  return (
    <Box id="contact" sx={{ backgroundColor: "primary.dark", paddingY: 10 }}>
      <Container maxWidth={"xl"}>
        <Grid
          container
          columnSpacing={5}
          rowSpacing={1}
          sx={{
            justifyContent: "center",
          }}
        >
          <Grid
            size={12}
            sx={{ display: "flex", justifyContent: "center", marginBottom: 5 }}
          >
            <HeaderText title="Contact Us" color="primary.contrastText" />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <ContactUsLayout>
              <Box
                sx={{
                  borderRadius: 5,
                  width: "100%",
                  height: "100%",
                  overflow: "hidden",
                }}
              >
                <iframe
                  title="Koi Mart Farm Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1040.735378468406!2d100.52806330942832!3d13.901343551246619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e283667e313185%3A0xf3d9ce05d5dff8ae!2z4Lia4LiI4LiBLiDguYLguITguYjguKIg4Lih4Liy4Lij4LmM4LiXIOC4n-C4suC4o-C5jOC4oQ!5e0!3m2!1sth!2sth!4v1760697310973!5m2!1sth!2sth"
                  width="100%"
                  height="100%"
                  loading="lazy"
                ></iframe>
              </Box>
            </ContactUsLayout>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <ContactForm />
          </Grid>

          <Grid size={{ sm: 12, md: 6 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "center", md: "flex-start" },
                textAlign: { xs: "center", md: "left" },
                marginTop: 5,
              }}
            >
              <Image
                src={"/img/full-logo.png"}
                alt="Koi Mart Farm Logo"
                width={428}
                height={126}
                style={{ width: 250, height: "auto", display: "block" }}
              />
              <Typography
                variant="h4"
                sx={{
                  color: "primary.contrastText",
                  paddingY: 2,
                }}
              >
                Koi Mart Farm Co.,LTD
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "primary.contrastText", paddingY: 0.5 }}
              >
                46/81 Moo2 Chaengwattana28, Bangtalad, Pak Kret District,
                Nonthaburi 11120
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
              onClick={() =>
                window.open("https://www.facebook.com/KoiMartFarmBKK", "_blank")
              }
              alt="KoiMartFarm Facebook"
            />
            <SocialIcon
              src={"/img/socialmedias/tiktok.png"}
              onClick={() =>
                window.open(
                  "https://www.tiktok.com/@koimart.farm?_t=ZS-90joD57tes6&_r=1",
                  "_blank"
                )
              }
              alt="KoiMartFarm Tiktok"
            />
            <SocialIcon
              src={"/img/socialmedias/line.png"}
              onClick={() =>
                window.open("https://page.line.me/ssk0751s", "_blank")
              }
              alt="KoiMartFarm Line"
            />
            <SocialIcon
              src={"/img/socialmedias/instagram.png"}
              onClick={() =>
                window.open(
                  "https://www.instagram.com/koimartfarm?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
                  "_blank"
                )
              }
              alt="KoiMartFarm Instagram"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
