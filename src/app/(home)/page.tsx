"use client";

import { Box, Container, Grow } from "@mui/material";
import Event from "./Event/index";
import HeaderText from "../../components/HeaderText";
import History from "./KoiHistory";
import BlogHighlight from "./BlogHighlight";
import { useInView } from "react-intersection-observer";
import Banner from "./Banner";
import { useState, useEffect } from "react";
import { supabase } from "../../lib/supabase";
import type { KoiEvent } from "../../models/events";

function Home() {
  const [events, setEvents] = useState<KoiEvent[]>([]);

  useEffect(() => {
    supabase
      .from("events")
      .select("*")
      .order("sort_order")
      .then(({ data }) => {
        if (data) setEvents(data as KoiEvent[]);
      });
  }, []);

  const { ref: eventRef, inView: eventInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: blogRef, inView: blogInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: historyRef, inView: historyInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

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
        ref={eventRef}
        sx={{
          paddingY: 6,
          backgroundColor: "background.default",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Grow in={eventInView} timeout={1500}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <HeaderText title="Events" color="#E91D26" />
          </Box>
        </Grow>

        <Grow in={eventInView} timeout={2500}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Event events={events} />
          </Box>
        </Grow>
      </Box>

      {/* Blog */}
      <Box ref={blogRef} sx={{ backgroundColor: "background.elevation1", paddingY: 6 }}>
        <Container
          id="blog"
          maxWidth="xl"
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <Grow in={blogInView} timeout={1500}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <HeaderText title="Blog" color="#E91D26" />
            </Box>
          </Grow>

          <Box sx={{ paddingY: 3 }}>
            <BlogHighlight />
          </Box>
        </Container>
      </Box>

      {/* About Us */}
      <Box id="about" ref={historyRef} sx={{ backgroundColor: "background.default", paddingY: 6 }}>
        <Container
          maxWidth="lg"
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <Grow in={historyInView} timeout={1000}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <HeaderText title="About Us" color="#E91D26" />
            </Box>
          </Grow>

          <Box sx={{ paddingY: 3 }}>
            <History />
          </Box>
        </Container>
      </Box>

    </Box>
  );
}

export default Home;
