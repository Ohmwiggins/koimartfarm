"use client";

import { Box, Container } from "@mui/material";
import { MenuButtonDesktop } from "./NavbarDesktop.styles";
import Image from "next/image";
import { NAV_PAGES } from "../../../lib/seo";

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
        {NAV_PAGES.map((page) => (
          <MenuButtonDesktop key={page.path} href={page.path}>
            {page.label}
          </MenuButtonDesktop>
        ))}
      </Box>
    </Container>
  );
}

export default NavbarDesktop;
