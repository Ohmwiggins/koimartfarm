"use client";

import { Box, Container, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import { useState } from "react";
import MenuDrawerMobile from "./MenuDrawerMobile";
import Image from "next/image";

function NavbarMobile() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  return (
    <Box>
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          py: 1,
        }}
      >
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          color="inherit"
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          <MenuIcon />
        </IconButton>
        <Image
          src={"/img/logo.png"}
          alt="KoiMartFarm Background2"
          width={200}
          height={200}
          style={{ width: 50, height: "auto", display: "block" }}
        />
        <IconButton
          href="/#home"
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          color="inherit"
        >
          <HomeIcon />
        </IconButton>
      </Container>

      <MenuDrawerMobile isMenuOpen={menuOpen} setIsMenuOpen={setMenuOpen} />
    </Box>
  );
}

export default NavbarMobile;
