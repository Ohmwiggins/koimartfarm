"use client";

import { Box, Container, Grid, Typography } from "@mui/material";
import { ContactUsLayout } from "./Footer.styles";
import HeaderText from "../HeaderText";
import Image from "next/image";

type LinkItem = {
  label: string;
  url: string;
  img: string;
};

const group1Links: LinkItem[] = [
  {
    label: "Line OpenChat Koimart Square",
    url: "https://line.me/ti/g2/5OnDbvvr0Sz3jW7Dvt7wECbG4l1dJQFjwfcNcA?utm_source=invitation&utm_medium=link_copy&utm_campaign=default",
    img: "/img/contacts/line.png",
  },
  {
    label: "FB Messenger Koimartfarm",
    url: "https://m.me/koimartfarm",
    img: "/img/contacts/messenger.png",
  },
  {
    label: "Instagram @Koimartfarm",
    url: "https://www.instagram.com/tong.koimart?igsh=MXMyenMzNHp0dnV3Yg==",
    img: "/img/contacts/instagram.png",
  },
  {
    label: "TikTok Koimart.farm",
    url: "https://www.tiktok.com/@koimart.farm?_r=1&_t=ZS-942iRQfm3QW",
    img: "/img/contacts/tiktok.png",
  },
];

const group2Links: LinkItem[] = [
  {
    label: "Facebook Pondscape",
    url: "https://www.facebook.com/share/17wVcVXZs7/",
    img: "/img/contacts/pondscape.png",
  },
  {
    label: "Website Koimart.shop",
    url: "https://share.google/9T9E51QzXTDsgiooD",
    img: "/img/contacts/koimartshop.png",
  },
  {
    label: "Website Koimartauction",
    url: "https://share.google/7jZMZbbEFF0uwkufT",
    img: "/img/contacts/koimartauction.png",
  },
  {
    label: "Facebook Matalathailand",
    url: "https://www.facebook.com/share/1GYPNwgkRm/",
    img: "/img/contacts/matalathailand.png",
  },
];

function BannerCard({ label, url, img }: LinkItem) {
  return (
    <Box
      onClick={() => window.open(url, "_blank")}
      sx={{
        borderRadius: "14px",
        overflow: "hidden",
        cursor: "pointer",
        transition: "all 0.3s ease",
        border: "1px solid rgba(255,255,255,0.07)",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 12px 36px rgba(0,0,0,0.4)",
          border: "1px solid rgba(255,255,255,0.14)",
        },
      }}
    >
      <Image
        src={img}
        alt={label}
        width={4805}
        height={1164}
        unoptimized
        style={{ width: "100%", height: "auto", display: "block" }}
      />
    </Box>
  );
}

function Footer() {
  return (
    <Box
      id="contact"
      sx={{
        background:
          "linear-gradient(165deg, #0A1220 0%, #0F1B2D 40%, #1A2A42 100%)",
        paddingY: 6,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle gold radial glow */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "50%",
          height: "50%",
          background:
            "radial-gradient(circle at 80% 20%, rgba(197, 165, 90, 0.04) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        <Grid
          container
          columnSpacing={5}
          rowSpacing={1}
          sx={{ justifyContent: "center" }}
        >
          {/* Section header */}
          <Grid
            size={12}
            sx={{ display: "flex", justifyContent: "center", marginBottom: 6 }}
          >
            <HeaderText title="Contact Us" color="#FAF8F5" />
          </Grid>

          {/* Map */}
          <Grid size={{ xs: 12, md: 8 }}>
            <ContactUsLayout>
              <Box
                sx={{
                  borderRadius: "16px",
                  width: "100%",
                  height: "100%",
                  overflow: "hidden",
                  border: "1px solid rgba(197, 165, 90, 0.15)",
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

          {/* Links — two groups with phone number divider */}
          <Grid id="links" size={12} sx={{ my: 8 }}>
            {/* Group 1: Line, Messenger, IG, TikTok */}
            <Grid container spacing={2}>
              {group1Links.map((item) => (
                <Grid key={item.label} size={{ xs: 12, sm: 6, md: 3 }}>
                  <BannerCard {...item} />
                </Grid>
              ))}
            </Grid>

            {/* Phone number divider */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, my: 3 }}>
              <Box
                sx={{
                  flex: 1,
                  height: "1px",
                  background:
                    "linear-gradient(90deg, transparent, rgba(197,165,90,0.4))",
                }}
              />
              <Typography
                sx={{
                  color: "#C5A55A",
                  fontFamily: "var(--font-inter)",
                  fontWeight: 700,
                  fontSize: { xs: 18, md: 22 },
                  letterSpacing: "0.06em",
                  whiteSpace: "nowrap",
                }}
              >
                📞 02-964-9595
              </Typography>
              <Box
                sx={{
                  flex: 1,
                  height: "1px",
                  background:
                    "linear-gradient(90deg, rgba(197,165,90,0.4), transparent)",
                }}
              />
            </Box>

            {/* Group 2: Pondscape, Koimart.shop, Koimartauction, Matalathailand */}
            <Grid container spacing={2}>
              {group2Links.map((item) => (
                <Grid key={item.label} size={{ xs: 12, sm: 6, md: 3 }}>
                  <BannerCard {...item} />
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Divider */}
          <Grid size={12}>
            <Box
              sx={{
                height: "1px",
                background:
                  "linear-gradient(90deg, transparent, rgba(197, 165, 90, 0.2), transparent)",
                mb: 5,
              }}
            />
          </Grid>

          {/* Bottom: Logo + Company info */}
          <Grid size={12}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: { xs: "center", md: "flex-start" },
                justifyContent: "space-between",
                gap: 3,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Box>
                <Image
                  src={"/img/logo-circle.png"}
                  alt="Koi Mart Farm Logo"
                  width={200}
                  height={200}
                  style={{ width: 100, height: "auto", display: "block" }}
                />
              </Box>
              <Box sx={{ maxWidth: 400 }}>
                <Typography
                  sx={{
                    fontFamily: "var(--font-playfair)",
                    color: "#FAF8F5",
                    fontSize: 20,
                    fontWeight: 600,
                    mb: 1,
                  }}
                >
                  Koi Mart Farm Co.,LTD
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "rgba(250, 248, 245, 0.6)",
                    lineHeight: 1.6,
                  }}
                >
                  46/81 Moo2 Chaengwattana28, Bangtalad, Pak Kret District,
                  Nonthaburi 11120
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
