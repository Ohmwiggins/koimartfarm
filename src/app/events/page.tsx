import type { Metadata } from "next";
import { Box, Container } from "@mui/material";
import Event from "../(home)/Event/index";
import HeaderText from "../../components/HeaderText";
import PageMargin from "../../components/PageMargin";
import { BreadcrumbJsonLd } from "../../components/StructuredData";
import { getEvents } from "../../lib/queries";
import { SECTION_DESCRIPTIONS } from "../../lib/seo";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Events — กิจกรรมและงานประมูลปลาคาร์พ",
  description: SECTION_DESCRIPTIONS.events,
  alternates: { canonical: "/events" },
  openGraph: {
    type: "website",
    url: "/events",
    title: "Events — กิจกรรมและงานประมูลปลาคาร์พ | Koi Mart Farm",
    description: SECTION_DESCRIPTIONS.events,
  },
};

export default async function EventsPage() {
  const events = await getEvents();

  return (
    <PageMargin>
      <BreadcrumbJsonLd items={[{ name: "Events", path: "/events" }]} />

      <Container maxWidth="xl" sx={{ display: "flex", flexDirection: "column" }}>
        <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
          <HeaderText
            component="h1"
            title="Events"
            color="#E91D26"
            description={SECTION_DESCRIPTIONS.events}
          />
        </Box>

        <Event events={events} />
      </Container>
    </PageMargin>
  );
}
