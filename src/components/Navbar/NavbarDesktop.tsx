import { Box, Button, Container, makeStyles } from "@mui/material";
import appLogo from "./../../assets/logo/FullLogo.png";

type menuButtonProps = {
  text: string;
  method: () => void;
};

function MenuButton({ text, method }: menuButtonProps) {
  return (
    <Button
      disableRipple
      sx={{
        color: (theme) => theme.palette.primary.contrastText,
        fontFamily: "LINESeedSansEN",
        fontSize: 16,
      }}
      onClick={() => method()}
    >
      {text}
    </Button>
  );
}

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
        <MenuButton text="Home" method={() => console.log("Home")} />
        <MenuButton text="History" method={() => console.log("History")} />
        <MenuButton text="Blog" method={() => console.log("Blog")} />
        <MenuButton
          text="Contact Us"
          method={() => console.log("Contact Us")}
        />
      </Box>
    </Container>
  );
}

export default NavbarDesktop;
