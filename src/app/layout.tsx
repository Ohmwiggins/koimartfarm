import type { Metadata } from "next";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import KoiMartTheme from "./../theme/theme";
import { anuphan, inknut, lineSeedEN, lineSeedTH } from "./../fonts";
import "./../globals.css";

export const metadata: Metadata = {
  title: {
    default: "Koi Mart Farm",
    template: "%s - Koi Mart Farm",
  },
  description: "…",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${anuphan.variable} ${inknut.variable} ${lineSeedEN.variable} ${lineSeedTH.variable}`}
      >
        <KoiMartTheme>
          <NavBar />
          {children}
          <Footer />
        </KoiMartTheme>
      </body>
    </html>
  );
}
