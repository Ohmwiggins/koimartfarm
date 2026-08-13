import { Box, Container } from "@mui/material";
import Event from "./Event/index";
import HeaderText from "../../components/HeaderText";
import History from "./KoiHistory";
import BlogHighlight from "./BlogHighlight";
import Banner from "./Banner";
import RevealSection from "../../components/RevealSection";
import SectionLink from "../../components/SectionLink";
import {
  getAboutContent,
  getAboutGallery,
  getBlogHighlights,
  getEvents,
} from "../../lib/queries";
import { SECTION_DESCRIPTIONS } from "../../lib/seo";

export const revalidate = 3600;

/** The home page previews each section; the dedicated pages hold the full lists. */
const HOME_EVENT_COUNT = 6;
const HOME_BLOG_COUNT = 8;

async function Home() {
  const [events, blogs, about, gallery] = await Promise.all([
    getEvents(),
    getBlogHighlights(),
    getAboutContent(),
    getAboutGallery(),
  ]);

  return (
    <Box
      id="home"
      sx={{
        backgroundColor: "background.default",
        maxWidth: "100vw",
        overflowX: "hidden",
      }}
    >
      <Banner />

      {/* Events */}
      <Box
        id="events"
        sx={{
          paddingY: 6,
          backgroundColor: "background.default",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Heading and description stay outside RevealSection so they are
            always visible to crawlers on first paint. */}
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <HeaderText
            title="Events"
            color="#E91D26"
            description={SECTION_DESCRIPTIONS.events}
          />
        </Box>

        <RevealSection timeout={2500}>
          <Event events={events.slice(0, HOME_EVENT_COUNT)} />
        </RevealSection>

        {events.length > HOME_EVENT_COUNT && (
          <SectionLink href="/events" label="ดูกิจกรรมทั้งหมด" />
        )}
      </Box>

      {/* Blog */}
      <Box sx={{ backgroundColor: "background.elevation1", paddingY: 6 }}>
        <Container
          id="blog"
          maxWidth="xl"
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <HeaderText
              title="Blog"
              color="#E91D26"
              description={SECTION_DESCRIPTIONS.blog}
            />
          </Box>

          <Box sx={{ paddingY: 3 }}>
            <BlogHighlight blogs={blogs.slice(0, HOME_BLOG_COUNT)} />
          </Box>

          {blogs.length > HOME_BLOG_COUNT && (
            <SectionLink href="/blog" label="อ่านบทความทั้งหมด" />
          )}
        </Container>
      </Box>

      {/* About Us */}
      <Box
        id="about"
        sx={{ backgroundColor: "background.default", paddingY: 6 }}
      >
        <Container
          maxWidth="lg"
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <HeaderText
              title="About Us"
              color="#E91D26"
              description={SECTION_DESCRIPTIONS.about}
            />
          </Box>

          <Box sx={{ paddingY: 3 }}>
            <History content={about} galleryImages={gallery} />
          </Box>

          <SectionLink href="/about" label="อ่านเรื่องราวทั้งหมด" />
        </Container>
      </Box>
    </Box>
  );
}

export default Home;
