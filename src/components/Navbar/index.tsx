"use client";

import { AppBar, Box } from "@mui/material";
import NavbarDesktop from "./DesktopView";
import NavbarMobile from "./MobileView";

function NavBar() {
  return (
    <Box>
      {/* NOTE: hide on mobile view */}
      <AppBar sx={{ display: { xs: "none", sm: "flex" } }}>
        <NavbarDesktop />
      </AppBar>

      {/* NOTE: hide on desktop view */}
      <AppBar sx={{ display: { xs: "flex", sm: "none" } }}>
        <NavbarMobile />
      </AppBar>
    </Box>
  );
}

export default NavBar;
