"use client";
import { createTheme, type ThemeOptions } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypeBackground {
    banner: string;
    elevation1: string;
    elevation2: string;
  }
}

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
      default: "#F5F5F5", //main background warm gray - more premium
      paper: "#ffffff",
      banner: "#030916",
      elevation1: "#FAFAFA", //subtle elevated sections
      elevation2: "#F8F8F8", //cards/content areas
    },
    text: {
      primary: "#000000",
      secondary: "#555555",
    },
  },

  typography: {
    fontFamily:
      "var(--font-anuphan), var(--font-lineseed-th), sans-serif",
    h1: {
      fontFamily: "var(--font-inknut)",
      fontWeight: 700,
      fontSize: 64,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontFamily: "var(--font-inknut)",
      fontWeight: 600,
      fontSize: 40,
      letterSpacing: '-0.02em',
    },
    h3: {
      fontFamily: "var(--font-inknut)",
      fontWeight: 600,
      fontSize: 30,
      letterSpacing: '-0.02em',
    },
    h4: {
      fontFamily: "var(--font-inknut)",
      fontWeight: 600,
      fontSize: 24,
      letterSpacing: '-0.02em',
    },
    h5: {
      fontFamily: "var(--font-inknut)",
      fontWeight: 600,
      fontSize: 20,
      letterSpacing: '-0.02em',
    },
    body1: {
      fontSize: 20,
      lineHeight: 1.6,
    },
    body2: {
      fontSize: 16,
      lineHeight: 1.6,
    },
    subtitle1: {
      fontSize: 16,
      fontWeight: 600,
    },
    button: {
      fontWeight: 600,
      textTransform: "none",
    },
  },

  shape: {
    borderRadius: 12, // modern rounded corners for buttons/cards
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
          boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
          transition: 'box-shadow 0.3s ease, transform 0.3s ease',
          '&:hover': {
            boxShadow: "0 8px 24px rgba(0,0,0,0.10)",
            transform: 'translateY(-2px)',
          },
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
