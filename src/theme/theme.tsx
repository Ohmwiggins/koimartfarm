"use client";
import { createTheme, type ThemeOptions } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";

const themeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#E91D26", //header red
      light: "#FA391F",
      dark: "#231F20", //footer black
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#D3AF37", //gold
      light: "#ffffff",
      contrastText: "#000000",
    },
    background: {
      default: "#E7E7E7", //main background gray
      paper: "#ffffff",
    },
    text: {
      primary: "#000000",
      secondary: "#555555",
    },
  },

  typography: {
    fontFamily:
      "var(--font-anuphan), var(--font-inknut), var(--font-lineseed-en), var(--font-lineseed-th)",
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
          backgroundColor: "#8C8C8C",
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        contained: {
          "&.Mui-disabled": {
            backgroundColor: "#555555",
            color: "#ffffff",
          },
        },
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
    MuiInput: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffff",
          padding: 5,
          borderRadius: 4,
          fontSize: 16,
          "&.Mui-error": {
            backgroundColor: "#F4797E", // light red
          },
        },
      },
    },
  },
};

function KoiMartTheme({ children }: { children: React.ReactNode }) {
  const theme = createTheme(themeOptions);
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
export default KoiMartTheme;
