"use client";

import { Box, Container } from "@mui/material";
import { MenuButtonDesktop } from "./NavbarDesktop.styles";
import Image from "next/image";
import { usePathname } from "next/navigation";

function NavbarDesktop() {
  const pathname = usePathname() ?? "/";
  const contactHref = `${pathname}#contact`;

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
        src="/img/full-logo.png"
        alt="Koimart Farm Logo"
        width={800}
        height={200}
        style={{ width: 200, height: "auto", display: "block" }}
      />

      <Box>
        <MenuButtonDesktop href="/#home">Home</MenuButtonDesktop>
        <MenuButtonDesktop href="/#history">History</MenuButtonDesktop>
        <MenuButtonDesktop href="/#blog">Blog</MenuButtonDesktop>
        <MenuButtonDesktop href={contactHref}>Contact Us</MenuButtonDesktop>
      </Box>
    </Container>
  );
}

export default NavbarDesktop;
