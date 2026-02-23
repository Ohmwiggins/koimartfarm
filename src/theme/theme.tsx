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
      main: "#0F1B2D",
      light: "#1A2A42",
      dark: "#0A1220",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#C5A55A",
      light: "#D4BA7A",
      dark: "#A8893E",
      contrastText: "#0F1B2D",
    },
    background: {
      default: "#FAF8F5",
      paper: "#ffffff",
      banner: "#0A1220",
      elevation1: "#FEFCF9",
      elevation2: "#F5F0EB",
    },
    text: {
      primary: "#1A1A1A",
      secondary: "#5C4033",
    },
  },

  typography: {
    fontFamily:
      "var(--font-prompt), var(--font-inter), var(--font-lineseed-th), sans-serif",
    h1: {
      fontFamily: "var(--font-playfair)",
      fontWeight: 700,
      fontSize: 64,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontFamily: "var(--font-playfair)",
      fontWeight: 600,
      fontSize: 40,
      letterSpacing: "-0.02em",
    },
    h3: {
      fontFamily: "var(--font-playfair)",
      fontWeight: 600,
      fontSize: 30,
      letterSpacing: "-0.02em",
    },
    h4: {
      fontFamily: "var(--font-playfair)",
      fontWeight: 600,
      fontSize: 24,
      letterSpacing: "-0.02em",
    },
    h5: {
      fontFamily: "var(--font-playfair)",
      fontWeight: 600,
      fontSize: 20,
      letterSpacing: "-0.02em",
    },
    body1: {
      fontSize: 18,
      lineHeight: 1.8,
      fontWeight: 300,
    },
    body2: {
      fontSize: 16,
      lineHeight: 1.7,
      fontWeight: 300,
    },
    subtitle1: {
      fontSize: 14,
      fontWeight: 500,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
    },
    button: {
      fontWeight: 600,
      textTransform: "none",
      letterSpacing: "0.02em",
    },
  },

  shape: {
    borderRadius: 12,
  },

  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(250, 248, 245, 0.85)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(197, 165, 90, 0.15)",
          color: "#0F1B2D",
          boxShadow: "none",
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 9999,
          padding: "10px 28px",
        },
        contained: {
          backgroundColor: "#0F1B2D",
          color: "#FAF8F5",
          "&:hover": {
            backgroundColor: "#1A2A42",
          },
          "&.Mui-disabled": {
            backgroundColor: "#8BA3C1",
            color: "#ffffff",
          },
        },
        outlined: {
          borderColor: "#C5A55A",
          color: "#0F1B2D",
          "&:hover": {
            borderColor: "#A8893E",
            backgroundColor: "rgba(197, 165, 90, 0.06)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: "0 4px 20px rgba(15, 27, 45, 0.06)",
          border: "1px solid rgba(197, 165, 90, 0.08)",
          transition: "box-shadow 0.4s ease, transform 0.4s ease",
          "&:hover": {
            boxShadow: "0 16px 40px rgba(15, 27, 45, 0.12)",
            transform: "translateY(-4px)",
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          backgroundColor: "rgba(255, 255, 255, 0.06)",
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#C5A55A",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#C5A55A",
            borderWidth: 2,
          },
        },
        input: { color: "#FAF8F5" },
        notchedOutline: {
          borderColor: "rgba(250, 248, 245, 0.2)",
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(255, 255, 255, 0.08)",
          padding: "8px 16px",
          borderRadius: 10,
          fontSize: 16,
          color: "#FAF8F5",
          border: "1px solid rgba(250, 248, 245, 0.15)",
          transition: "border-color 0.3s ease, background-color 0.3s ease",
          "&:hover": {
            borderColor: "rgba(197, 165, 90, 0.4)",
          },
          "&.Mui-focused": {
            borderColor: "#C5A55A",
            backgroundColor: "rgba(255, 255, 255, 0.12)",
          },
          "&::before, &::after": {
            display: "none",
          },
          "&.Mui-error": {
            backgroundColor: "rgba(220, 53, 69, 0.15)",
            borderColor: "rgba(220, 53, 69, 0.5)",
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "rgba(250, 248, 245, 0.6)",
          "&.Mui-focused": {
            color: "#C5A55A",
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
