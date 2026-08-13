import type { Metadata } from "next";
import { Box, Container } from "@mui/material";
import BlogHighlight from "../(home)/BlogHighlight";
import HeaderText from "../../components/HeaderText";
import PageMargin from "../../components/PageMargin";
import { BreadcrumbJsonLd } from "../../components/StructuredData";
import { getBlogHighlights } from "../../lib/queries";
import { SECTION_DESCRIPTIONS } from "../../lib/seo";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Blog — บทความปลาคาร์พญี่ปุ่น",
  description: SECTION_DESCRIPTIONS.blog,
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    url: "/blog",
    title: "Blog — บทความปลาคาร์พญี่ปุ่น | Koi Mart Farm",
    description: SECTION_DESCRIPTIONS.blog,
  },
};

export default async function BlogIndexPage() {
  const blogs = await getBlogHighlights();

  return (
    <PageMargin>
      <BreadcrumbJsonLd items={[{ name: "Blog", path: "/blog" }]} />

      <Container maxWidth="xl" sx={{ display: "flex", flexDirection: "column" }}>
        <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
          <HeaderText
            component="h1"
            title="Blog"
            color="#E91D26"
            description={SECTION_DESCRIPTIONS.blog}
          />
        </Box>

        <BlogHighlight blogs={blogs} />
      </Container>
    </PageMargin>
  );
}
