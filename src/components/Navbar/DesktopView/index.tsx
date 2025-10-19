import { Box, Container } from "@mui/material";
import appLogo from "./../../../assets/logo/FullLogo.png";
import { MenuButtonDesktop } from "./NavbarDesktop.styles";

function NavbarDesktop() {
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: { xs: "none", sm: "flex" }, //NOTE: hide on mobile view
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
        }}
      />
      <Box>
        <MenuButtonDesktop onClick={() => console.log("Home")}>
          Home
        </MenuButtonDesktop>
        <MenuButtonDesktop onClick={() => console.log("History")}>
          History
        </MenuButtonDesktop>
        <MenuButtonDesktop onClick={() => console.log("Blog")}>
          Blog
        </MenuButtonDesktop>
        <MenuButtonDesktop onClick={() => console.log("Contact")}>
          Contact Us
        </MenuButtonDesktop>
      </Box>
    </Container>
  );
}

export default NavbarDesktop;
