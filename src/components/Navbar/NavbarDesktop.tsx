import { Box, Button, Container } from "@mui/material";
import appLogo from "./../../assets/logo/FullLogo.png";

function NavbarDesktop() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: { xs: "none", sm: "flex" },
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        py: 1,
      }}
    >
      <Box
        component="img"
        src={appLogo}
        sx={{
          width: "100%",
          maxWidth: 200,
          height: "auto",
          display: { xs: "none", sm: "flex" },
        }}
      />
      <Box
        sx={{
          display: { xs: "none", sm: "flex" },
          flexDirection: "row",
          gap: 1,
        }}
      >
        <Button
          disableRipple
          sx={{ color: (theme) => theme.palette.primary.contrastText }}
          onClick={() => console.log("Home")}
        >
          Home
        </Button>
        <Button
          disableRipple
          sx={{ color: (theme) => theme.palette.primary.contrastText }}
          onClick={() => console.log("History")}
        >
          History
        </Button>
        <Button
          disableRipple
          sx={{ color: (theme) => theme.palette.primary.contrastText }}
          onClick={() => console.log("Blog")}
        >
          Blog
        </Button>
        <Button
          disableRipple
          sx={{ color: (theme) => theme.palette.primary.contrastText }}
          onClick={() => console.log("Contact Us")}
        >
          Contact Us
        </Button>
      </Box>
    </Container>
  );
}

export default NavbarDesktop;
