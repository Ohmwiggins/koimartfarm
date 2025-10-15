import { AppBar } from "@mui/material";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

function NavBar() {
  return (
    <AppBar>
      <NavbarDesktop />
      <NavbarMobile />
    </AppBar>
  );
}

export default NavBar;
