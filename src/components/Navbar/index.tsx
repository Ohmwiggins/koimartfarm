import { AppBar } from "@mui/material";
import NavbarDesktop from "./DesktopView";
import NavbarMobile from "./MobileView";

function NavBar() {
  return (
    <AppBar>
      <NavbarDesktop />
      <NavbarMobile />
    </AppBar>
  );
}

export default NavBar;
