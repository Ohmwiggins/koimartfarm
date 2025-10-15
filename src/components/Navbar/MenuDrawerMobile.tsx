import {
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import appLogo from "./../../assets/logo/Logo.png";
import Fade from "@mui/material/Fade";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useEffect } from "react";

type ButtonProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

type menuButtonProps = {
  text: string;
  method: () => void;
};

function MenuButton({ text, method }: menuButtonProps) {
  return (
    <Button
      disableRipple
      sx={{
        color: (theme) => theme.palette.secondary.contrastText,
      }}
      onClick={() => method()}
    >
      <Typography
        variant="body1"
        sx={{
          color: "text.primary",
          fontSize: 24,
          fontFamily: "LINESeedSansEN",
        }}
      >
        {text}
      </Typography>
    </Button>
  );
}

function MenuDrawerMobile({ isMenuOpen, setIsMenuOpen }: ButtonProps) {
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
        <IconButton
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          color="inherit"
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
            console.log(`isMenuOpen: ${isMenuOpen}`);
          }}
          sx={{ color: "secondary.contrastText" }}
        >
          <MenuIcon sx={{ fontSize: 30 }} />
        </IconButton>
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
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          sx={{ color: "secondary.contrastText" }}
        >
          <HomeIcon sx={{ fontSize: 30 }} />
        </IconButton>
      </Container>

      <Box
        sx={{ display: "flex", flexDirection: "column", paddingTop: 7, gap: 3 }}
      >
        <MenuButton text="Home" method={() => console.log("Home")} />
        <MenuButton text="History" method={() => console.log("History")} />
        <MenuButton text="Blog" method={() => console.log("Blog")} />
        <MenuButton
          text="Contact Us"
          method={() => console.log("Contact Us")}
        />
      </Box>
    </Drawer>
  );
}

export default MenuDrawerMobile;
