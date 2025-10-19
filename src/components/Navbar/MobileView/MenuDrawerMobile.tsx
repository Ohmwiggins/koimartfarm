import { Box, Container, Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import appLogo from "./../../../assets/logo/Logo.png";
import Fade from "@mui/material/Fade";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useEffect } from "react";
import NavBarIconButton from "./NavBarIconButton";
import { MenuButtonDrawer } from "./MenuDrawerMobile.styles";

function MenuDrawerMobile({
  isMenuOpen,
  setIsMenuOpen,
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  useEffect(() => {
    if (!isMobile && isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [isMobile, isMenuOpen]);
  return (
    <Drawer
      open={isMenuOpen}
      slots={{ transition: Fade }}
      slotProps={{
        transition: { timeout: 1000 },
        paper: {
          sx: {
            width: "100vw",
            height: "100dvh",
            backgroundColor: "background.default",
            color: "primary.contrastText",
          },
        },
      }}
    >
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
        <NavBarIconButton
          method={() => {
            setIsMenuOpen(!isMenuOpen);
            console.log(`isMenuOpen: ${isMenuOpen}`);
          }}
          component={<MenuIcon sx={{ fontSize: 30 }} />}
        />
        <Box
          component="img"
          src={appLogo}
          sx={{
            width: "100%",
            maxWidth: 55,
            height: "auto",
            display: { xs: "flex", sm: "none" },
          }}
        />
        <NavBarIconButton
          method={() => {
            setIsMenuOpen(!isMenuOpen);
            console.log(`isMenuOpen: ${isMenuOpen}`);
          }}
          component={<HomeIcon sx={{ fontSize: 30 }} />}
        />
      </Container>

      <Box
        sx={{ display: "flex", flexDirection: "column", marginTop: 7, gap: 3 }}
      >
        <MenuButtonDrawer onClick={() => console.log("Home")}>
          Home
        </MenuButtonDrawer>
        <MenuButtonDrawer onClick={() => console.log("History")}>
          History
        </MenuButtonDrawer>
        <MenuButtonDrawer onClick={() => console.log("Blog")}>
          Blog
        </MenuButtonDrawer>
        <MenuButtonDrawer onClick={() => console.log("ContactUs")}>
          Contact Us
        </MenuButtonDrawer>
      </Box>
    </Drawer>
  );
}

export default MenuDrawerMobile;
