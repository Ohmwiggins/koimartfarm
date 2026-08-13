import type { Metadata } from "next";
import PageMargin from "../../../components/PageMargin";
import { Box } from "@mui/material";
import { SECTION_DESCRIPTIONS } from "../../../lib/seo";

// The root layout appends " | Koi Mart Farm" via its title template — don't
// repeat the brand here.
export const metadata: Metadata = {
  title: "Koi Varieties — สายพันธุ์ปลาคาร์พ",
  description: SECTION_DESCRIPTIONS.koiVarieties,
  alternates: { canonical: "/blog/koi-varieties" },
  openGraph: {
    type: "article",
    url: "/blog/koi-varieties",
    title: "Koi Varieties — สายพันธุ์ปลาคาร์พ | Koi Mart Farm",
    description: SECTION_DESCRIPTIONS.koiVarieties,
  },
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
