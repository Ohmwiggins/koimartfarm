import type { Metadata } from "next";
import PageMargin from "../../../components/PageMargin";
import { Box } from "@mui/material";

export const metadata: Metadata = {
  title: "Blog",
  description: "ฝากเลี้ยงที่ญี่ปุ่น (Azukari) ตอนที่ 1",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box>
      <PageMargin>{children}</PageMargin>
    </Box>
  );
}
