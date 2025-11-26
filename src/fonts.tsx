import localFont from "next/font/local";
import { Anuphan, Inknut_Antiqua } from "next/font/google";

export const anuphan = Anuphan({
  subsets: ["latin", "thai"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-anuphan",
});

export const inknut = Inknut_Antiqua({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-inknut",
});

export const lineSeedEN = localFont({
  src: [
    {
      path: "../public/fonts/LINESeedSans_W_Th.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/LINESeedSans_W_Rg.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/LINESeedSans_W_Bd.woff2",
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
      path: "../public/fonts/LINESeedSansTH_W_Th.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/LINESeedSansTH_W_Rg.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/LINESeedSansTH_W_Bd.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-lineseed-th",
  display: "swap",
  preload: true,
});
