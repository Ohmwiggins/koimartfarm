"use client";

import { Box, Container, Grid, Typography } from "@mui/material";
import { ContactUsLayout } from "./Footer.styles";
import HeaderText from "../HeaderText";
import Image from "next/image";
import GavelIcon from "@mui/icons-material/Gavel";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import { FaFacebook } from "react-icons/fa";
import { SiTiktok, SiLine } from "react-icons/si";
import type React from "react";

type LinkItem = {
  label: string;
  url: string;
  iconBg: string;
  glowColor: string;
  icon: React.ReactNode;
};

const links: LinkItem[] = [
  {
    label: "FB Koimartfarm",
    url: "https://www.facebook.com/share/1B2sCbqi7t/",
    iconBg: "#1877F2",
    glowColor: "rgba(24,119,242,0.4)",
    icon: <FaFacebook size={24} color="#fff" />,
  },
  {
    label: "KOIMARTAUCTION.COM",
    url: "https://share.google/7jZMZbbEFF0uwkufT",
    iconBg: "#C5A55A",
    glowColor: "rgba(197,165,90,0.4)",
    icon: <GavelIcon sx={{ fontSize: 24, color: "#fff" }} />,
  },
  {
    label: "KOIMART.SHOP",
    url: "https://share.google/9T9E51QzXTDsgiooD",
    iconBg: "#C5A55A",
    glowColor: "rgba(197,165,90,0.4)",
    icon: <StorefrontIcon sx={{ fontSize: 24, color: "#fff" }} />,
  },
  {
    label: "KOIMART APP",
    url: "https://play.google.com/store/apps/details?id=com.koimartfarm",
    iconBg: "#C5A55A",
    glowColor: "rgba(197,165,90,0.4)",
    icon: <PhoneAndroidIcon sx={{ fontSize: 24, color: "#fff" }} />,
  },
  {
    label: "TikTok Koimartfarm",
    url: "https://www.tiktok.com/@koimart.farm?_r=1&_t=ZS-942iRQfm3QW",
    iconBg: "#010101",
    glowColor: "rgba(105,201,208,0.4)",
    icon: <SiTiktok size={24} color="#fff" />,
  },
  {
    label: "Line OpenChat",
    url: "https://line.me/ti/g2/5OnDbvvr0Sz3jW7Dvt7wECbG4l1dJQFjwfcNcA?utm_source=invitation&utm_medium=link_copy&utm_campaign=default",
    iconBg: "#06C755",
    glowColor: "rgba(6,199,85,0.4)",
    icon: <SiLine size={24} color="#fff" />,
  },
  {
    label: "FB PONDSCAPE",
    url: "https://www.facebook.com/share/17wVcVXZs7/",
    iconBg: "#1877F2",
    glowColor: "rgba(24,119,242,0.4)",
    icon: <FaFacebook size={24} color="#fff" />,
  },
  {
    label: "FB MATALATHAILAND",
    url: "https://www.facebook.com/share/1GYPNwgkRm/",
    iconBg: "#1877F2",
    glowColor: "rgba(24,119,242,0.4)",
    icon: <FaFacebook size={24} color="#fff" />,
  },
];

function Footer() {
  return (
    <Box
      id="contact"
      sx={{
        background:
          "linear-gradient(165deg, #0A1220 0%, #0F1B2D 40%, #1A2A42 100%)",
        paddingY: 10,
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
          sx={{
            justifyContent: "center",
          }}
        >
          {/* Section header */}
          <Grid
            size={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              marginBottom: 6,
            }}
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

          {/* Links grid — 4-col 2-row layout */}
          <Grid id="links" size={12} sx={{ my: 8 }}>
            <Grid container spacing={2}>
              {links.map(({ label, url, icon, iconBg, glowColor }) => (
                  <Grid key={label} size={{ xs: 12, sm: 6, md: 3 }}>
                    <Box
                      onClick={() => window.open(url, "_blank")}
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 2.5,        /* 20px — clear icon/text separation */
                        px: 3,           /* 24px */
                        py: 2.5,         /* 20px */
                        minHeight: 80,   /* Uniform card height */
                        borderRadius: "14px",
                        border: "1px solid rgba(255,255,255,0.07)",
                        background: "rgba(255,255,255,0.04)",
                        backdropFilter: "blur(12px)",
                        WebkitBackdropFilter: "blur(12px)",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        position: "relative",
                        overflow: "hidden",
                        "&:hover": {
                          transform: "translateY(-4px)",
                          zIndex: 2,
                          border: "1px solid rgba(255,255,255,0.14)",
                          background: "rgba(255,255,255,0.07)",
                          boxShadow: `0 12px 36px ${glowColor}`,
                          "& .link-icon-wrap": {
                            boxShadow: `0 0 20px ${glowColor}`,
                          },
                        },
                      }}
                    >
                      {/* Icon — 52×52 container, 24×24 icon */}
                      <Box
                        className="link-icon-wrap"
                        sx={{
                          width: 52,
                          height: 52,
                          borderRadius: "12px",
                          backgroundColor: iconBg,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          transition: "box-shadow 0.3s ease",
                        }}
                      >
                        {icon}
                      </Box>
                      <Typography
                        sx={{
                          color: "rgba(255,255,255,0.92)",
                          fontWeight: 600,
                          fontSize: 17,
                          letterSpacing: "0.01em",
                          lineHeight: 1.4,
                          fontFamily: "var(--font-inter)",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {label}
                      </Typography>
                    </Box>
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
