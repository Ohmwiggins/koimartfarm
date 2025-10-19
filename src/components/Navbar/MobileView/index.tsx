import { Box, Container, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import appLogo from "./../../../assets/logo/Logo.png";
import { useState } from "react";
import MenuDrawerMobile from "./MenuDrawerMobile";

function NavbarMobile() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  return (
    <Box>
      <Container
        maxWidth="lg"
        sx={{
          display: { xs: "flex", sm: "none" },
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
            console.log(`isMenuOpen: ${menuOpen}`);
          }}
        >
          <MenuIcon />
        </IconButton>
        <Box
          component="img"
          src={appLogo}
          sx={{
            width: "100%",
            maxWidth: 50,
            height: "auto",
            display: { xs: "flex", sm: "none" },
          }}
        />
        <IconButton
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
