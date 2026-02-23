"use client";

import { Box, Container, Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import Fade from "@mui/material/Fade";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useEffect } from "react";
import NavBarIconButton from "./NavBarIconButton";
import { MenuButtonDrawer } from "./MenuDrawerMobile.styles";
import Image from "next/image";
import { useRouter } from "next/navigation";

function MenuDrawerMobile({
  isMenuOpen,
  setIsMenuOpen,
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {

  const router = useRouter();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  useEffect(() => {
    if (!isMobile) {
      setIsMenuOpen(false);
    }
  }, [isMobile, isMenuOpen, setIsMenuOpen]);

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
          }}
          component={<MenuIcon sx={{ fontSize: 30 }} />}
        />
        <Image
          src={"/img/logo-circle.png"}
          alt="KoiMartFarm Logo"
          width={200}
          height={200}
          style={{ width: 55, height: "auto", display: "block" }}
        />
        <NavBarIconButton
          method={() => {
            setIsMenuOpen(!isMenuOpen);
            router.push("/");
          }}
          component={<HomeIcon sx={{ fontSize: 30 }} />}
        />
      </Container>

      <Box
        sx={{ display: "flex", flexDirection: "column", marginTop: 7, gap: 3 }}
      >
        <MenuButtonDrawer href="/" onClick={() => setIsMenuOpen(false)}>
          Home
        </MenuButtonDrawer>
        <MenuButtonDrawer href="/#events" onClick={() => setIsMenuOpen(false)}>
          Events
        </MenuButtonDrawer>
        <MenuButtonDrawer href="/#blog" onClick={() => setIsMenuOpen(false)}>
          Blog
        </MenuButtonDrawer>
        <MenuButtonDrawer href="/#about" onClick={() => setIsMenuOpen(false)}>
          About Us
        </MenuButtonDrawer>
        <MenuButtonDrawer href="/#contact" onClick={() => setIsMenuOpen(false)}>
          Contact Us
        </MenuButtonDrawer>
      </Box>
    </Drawer>
  );
}

export default MenuDrawerMobile;
