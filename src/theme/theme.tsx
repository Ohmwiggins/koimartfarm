import { createTheme, type ThemeOptions } from "@mui/material/styles";

const themeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#E91D26",
      light: "#FA391F",
      dark: "#231F20",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#D3AF37",
      dark: "#A88720",
      light: "#F5E1A4",
      contrastText: "#231F20",
    },
    background: {
      default: "#E7E7E7",
      paper: "#ffffff",
    },
    text: {
      primary: "#000000",
      secondary: "#555555",
    },
  },

  typography: {
    fontFamily: "Anuphan, Inknut Antiqua, LINESeedSansEN, LINESeedSansTH",
    h1: {
      fontWeight: 700,
      fontSize: 64,
    },
    h2: {
      fontWeight: 600,
      fontSize: 40,
    },
    h3: {
      fontWeight: 600,
      fontSize: 24,
    },
    body1: {
      fontSize: 20,
      lineHeight: 1.6,
    },
    body2: {
      fontSize: 16,
      lineHeight: 1.6,
    },
    button: {
      fontWeight: 600,
      textTransform: "none",
    },
  },

  shape: {
    borderRadius: 8, // rounded corners for buttons/cards
  },

  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#E91D26",
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: { color: "#fff" },
        notchedOutline: { borderColor: "#fff" },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffff",
          padding: 5,
          borderRadius: 4,
          fontSize: 16,
        },
      },
    },
  },
};

const theme = createTheme(themeOptions);
export default theme;
