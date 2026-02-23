import localFont from "next/font/local";
import { Inter, Playfair_Display, Prompt } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

export const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-playfair",
});

export const prompt = Prompt({
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-prompt",
});

export const lineSeedEN = localFont({
  src: [
    {
      path: "./assets/fonts/LINESeedSans_W_Th.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "./assets/fonts/LINESeedSans_W_Rg.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./assets/fonts/LINESeedSans_W_Bd.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-lineseed-en",
  display: "swap",
  preload: true,
});

export const lineSeedTH = localFont({
  src: [
    {
      path: "./assets/fonts/LINESeedSansTH_W_Th.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "./assets/fonts/LINESeedSansTH_W_Rg.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./assets/fonts/LINESeedSansTH_W_Bd.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-lineseed-th",
  display: "swap",
  preload: true,
});
