"use client";

import { Box, Container } from "@mui/material";
import { MenuButtonDesktop } from "./NavbarDesktop.styles";
import Image from "next/image";

function NavbarDesktop() {
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        py: 1,
      }}
    >
      <Image
        priority
        src="/img/logo-circle.png"
        alt="Koimart Farm Logo"
        width={200}
        height={200}
        style={{ width: 48, height: "auto", display: "block" }}
      />

      <Box>
        <MenuButtonDesktop href="/">Home</MenuButtonDesktop>
        <MenuButtonDesktop href="/#events">Events</MenuButtonDesktop>
        <MenuButtonDesktop href="/#blog">Blog</MenuButtonDesktop>
        <MenuButtonDesktop href="/#about">About Us</MenuButtonDesktop>
        <MenuButtonDesktop href="/#contact">Contact</MenuButtonDesktop>
        <MenuButtonDesktop href="/#links">Links</MenuButtonDesktop>
      </Box>
    </Container>
  );
}

export default NavbarDesktop;
