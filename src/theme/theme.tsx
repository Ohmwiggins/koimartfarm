import { createTheme, type ThemeOptions } from "@mui/material/styles";

const themeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#E91D26",
      light: "#FA391F",
      dark: "#B71C1C",
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
    fontFamily: "'Roboto', 'Noto Sans Thai', sans-serif",
    h1: {
      fontWeight: 700,
      fontSize: "3rem",
    },
    h2: {
      fontWeight: 600,
      fontSize: "2rem",
    },
    h3: {
      fontWeight: 600,
      fontSize: "1.5rem",
    },
    body1: {
      fontSize: "1rem",
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
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "transparent",
          },
        },
      },
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
  },
};

const theme = createTheme(themeOptions);
export default theme;
