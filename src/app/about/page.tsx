import type { Metadata } from "next";
import { Box, Container } from "@mui/material";
import History from "../(home)/KoiHistory";
import HeaderText from "../../components/HeaderText";
import PageMargin from "../../components/PageMargin";
import { BreadcrumbJsonLd } from "../../components/StructuredData";
import { getAboutContent, getAboutGallery } from "../../lib/queries";
import { SECTION_DESCRIPTIONS } from "../../lib/seo";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "About Us — เกี่ยวกับเรา",
  description:
    "เรื่องราวของ Koi Mart Farm และคุณบวรศักดิ์ ศุภทนต์ ผู้ก่อตั้ง จากความหลงใหลในปลาโค่ยสู่ผู้นำเข้า Fancy Carp จากฟาร์มชั้นนำญี่ปุ่น",
  alternates: { canonical: "/about" },
  openGraph: {
    type: "profile",
    url: "/about",
    title: "About Us — เกี่ยวกับ Koi Mart Farm",
    description:
      "เรื่องราวของ Koi Mart Farm และคุณบวรศักดิ์ ศุภทนต์ ผู้ก่อตั้ง จากความหลงใหลในปลาโค่ยสู่ผู้นำเข้า Fancy Carp จากฟาร์มชั้นนำญี่ปุ่น",
  },
};

export default async function AboutPage() {
  const [content, gallery] = await Promise.all([
    getAboutContent(),
    getAboutGallery(),
  ]);

  return (
    <PageMargin>
      <BreadcrumbJsonLd items={[{ name: "About Us", path: "/about" }]} />

      <Container maxWidth="lg" sx={{ display: "flex", flexDirection: "column" }}>
        <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
          <HeaderText
            component="h1"
            title="About Us"
            color="#E91D26"
            description={SECTION_DESCRIPTIONS.about}
          />
        </Box>

        <History content={content} galleryImages={gallery} />
      </Container>
    </PageMargin>
  );
}
