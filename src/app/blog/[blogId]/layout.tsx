import type { Metadata } from "next";
import PageMargin from "../../../components/PageMargin";
import Image from "next/image";
import { Box } from "@mui/material";

export const metadata: Metadata = {
  title: "Blog",
  description: "…",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box>
      <PageMargin>{children}</PageMargin>
      <Image
        src="/img/bg3.png"
        alt="Koi Mart Farm Background"
        width={3000}
        height={800}
        style={{ width: "100%", height: "auto", display: "block" }}
      />
    </Box>
  );
}
