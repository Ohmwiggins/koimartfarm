import type { Metadata } from "next";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import StructuredData from "../components/StructuredData";
import KoiMartTheme from "./../theme/theme";
import { inter, playfair, prompt, lineSeedEN, lineSeedTH } from "./../fonts";
import {
  KEYWORDS,
  LOGO_IMAGE,
  OG_IMAGE,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
} from "../lib/seo";
import "./../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: KEYWORDS,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "th_TH",
    alternateLocale: "en_US",
    url: "/",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Koi Mart Farm — ปลาคาร์พญี่ปุ่นพรีเมียม Fancy Carp",
      },
      { url: LOGO_IMAGE, width: 400, height: 400, alt: "Koi Mart Farm Logo" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <body
        className={`${inter.variable} ${playfair.variable} ${prompt.variable} ${lineSeedEN.variable} ${lineSeedTH.variable}`}
      >
        <StructuredData />
        <KoiMartTheme>
          <NavBar />
          {children}
          <Footer />
        </KoiMartTheme>
      </body>
    </html>
  );
}
