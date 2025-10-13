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
type ButtonProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function MenuDrawer({ isMenuOpen, setIsMenuOpen }: ButtonProps) {
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
        <Button
          disableRipple
          sx={{ color: (theme) => theme.palette.secondary.contrastText }}
          onClick={() => console.log("Home")}
        >
          <Typography
            variant="body1"
            sx={{ color: "text.primary", fontSize: 24 }}
          >
            Home
          </Typography>
        </Button>
        <Button
          disableRipple
          sx={{ color: (theme) => theme.palette.secondary.contrastText }}
          onClick={() => console.log("History")}
        >
          <Typography
            variant="body1"
            sx={{ color: "text.primary", fontSize: 24 }}
          >
            History
          </Typography>
        </Button>
        <Button
          disableRipple
          sx={{ color: (theme) => theme.palette.secondary.contrastText }}
          onClick={() => console.log("Blog")}
        >
          <Typography
            variant="body1"
            sx={{ color: "text.primary", fontSize: 24 }}
          >
            Blog
          </Typography>
        </Button>
        <Button
          disableRipple
          sx={{ color: (theme) => theme.palette.secondary.contrastText }}
          onClick={() => console.log("Contact Ussss")}
        >
          <Typography
            variant="body1"
            sx={{ color: "text.primary", fontSize: 24 }}
          >
            Contact Us
          </Typography>
        </Button>
      </Box>
    </Drawer>
  );
}

export default MenuDrawer;
