import type { Metadata } from "next";
import { Box, Container, Grid, Typography } from "@mui/material";
import HeaderText from "../../components/HeaderText";
import PageMargin from "../../components/PageMargin";
import ContactForm from "../../components/ContactForm";
import { BreadcrumbJsonLd } from "../../components/StructuredData";
import { ADDRESS_TH, PHONE_LOCAL, SECTION_DESCRIPTIONS } from "../../lib/seo";

export const metadata: Metadata = {
  title: "Contact — ติดต่อเรา",
  description:
    "ติดต่อ Koi Mart Farm 46/81 หมู่ 2 แจ้งวัฒนะ 28 บางตลาด ปากเกร็ด นนทบุรี 11120 โทร 083-615-5250 ติดต่อผ่าน Line, Facebook หรือส่งข้อความผ่านฟอร์ม",
  alternates: { canonical: "/contact" },
  openGraph: {
    type: "website",
    url: "/contact",
    title: "Contact — ติดต่อ Koi Mart Farm",
    description:
      "ติดต่อ Koi Mart Farm ปากเกร็ด นนทบุรี โทร 083-615-5250 เปิดทุกวัน 09:00–18:00",
  },
};

/** Plain-text NAP block — the exact detail local search results surface. */
const DETAILS = [
  { label: "ที่อยู่", value: ADDRESS_TH },
  { label: "โทรศัพท์", value: PHONE_LOCAL, href: `tel:+66${PHONE_LOCAL.slice(1)}` },
  { label: "เวลาทำการ", value: "เปิดทุกวัน 09:00 – 18:00 น." },
  { label: "Line", value: "@koimartfarm", href: "https://lin.ee/nTAFJe2" },
];

export default function ContactPage() {
  return (
    <PageMargin>
      <BreadcrumbJsonLd items={[{ name: "Contact", path: "/contact" }]} />

      <Container maxWidth="lg" sx={{ display: "flex", flexDirection: "column" }}>
        <Box sx={{ display: "flex", justifyContent: "center", mb: 5 }}>
          <HeaderText
            component="h1"
            title="Contact"
            color="#E91D26"
            description={SECTION_DESCRIPTIONS.contact}
          />
        </Box>

        <Grid container spacing={3} sx={{ mb: 6 }}>
          {DETAILS.map((detail) => (
            <Grid key={detail.label} size={{ xs: 12, sm: 6, md: 3 }} sx={{ display: "flex" }}>
              <Box
                sx={{
                  // flex-grow rather than height:100% — inside a Grid item the
                  // latter resolves against the row box and overflows it.
                  flex: 1,
                  p: 3,
                  borderRadius: "16px",
                  border: "1px solid rgba(197, 165, 90, 0.25)",
                  backgroundColor: "background.paper",
                }}
              >
                <Typography
                  component="h2"
                  sx={{
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "secondary.main",
                    fontFamily: "var(--font-inter)",
                    mb: 1,
                  }}
                >
                  {detail.label}
                </Typography>
                <Typography
                  {...(detail.href
                    ? { component: "a", href: detail.href }
                    : { component: "p" })}
                  variant="body2"
                  sx={{
                    color: "text.primary",
                    fontFamily: "var(--font-prompt)",
                    lineHeight: 1.8,
                    textDecoration: "none",
                    ...(detail.href && {
                      "&:hover": { color: "secondary.main" },
                    }),
                  }}
                >
                  {detail.value}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Form + map on navy — ContactForm and the themed Input are styled for
          a dark surface, matching the footer. */}
      <Box
        sx={{
          background:
            "linear-gradient(165deg, #0A1220 0%, #0F1B2D 40%, #1A2A42 100%)",
          paddingY: 7,
        }}
      >
        <Container maxWidth="lg">
          <Grid container columnSpacing={5} rowSpacing={4}>
            <Grid size={{ xs: 12, md: 5 }}>
              <ContactForm />
            </Grid>

            <Grid size={{ xs: 12, md: 7 }}>
              <Box
                sx={{
                  borderRadius: "16px",
                  overflow: "hidden",
                  border: "1px solid rgba(197, 165, 90, 0.15)",
                  height: { xs: 320, md: "100%" },
                  minHeight: 320,
                }}
              >
                <iframe
                  title="แผนที่ Koi Mart Farm ปากเกร็ด นนทบุรี"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1040.735378468406!2d100.52806330942832!3d13.901343551246619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e283667e313185%3A0xf3d9ce05d5dff8ae!2z4Lia4LiI4LiBLiDguYLguITguYjguKIg4Lih4Liy4Lij4LmM4LiXIOC4n-C4suC4o-C5jOC4oQ!5e0!3m2!1sth!2sth!4v1760697310973!5m2!1sth!2sth"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  style={{ border: "none", display: "block" }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </PageMargin>
  );
}
