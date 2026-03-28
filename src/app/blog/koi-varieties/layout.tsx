import type { Metadata } from "next";
import PageMargin from "../../../components/PageMargin";
import { Box } from "@mui/material";

export const metadata: Metadata = {
  title: "Koi Varieties | KoiMart Farm",
  description: "สายพันธุ์ปลาคาร์พคุณภาพจาก KoiMart Farm — ลักษณะเด่น และความหมายเชิงสัญลักษณ์ของแต่ละสายพันธุ์",
};

export default function KoiVarietiesLayout({
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
