"use client";

import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Image from "next/image";
import { useState, useRef } from "react";
import type { KoiEvent } from "../../../models/events";

type EventProps = {
  events: KoiEvent[];
};

function EventImageCarousel({ imgs }: { imgs: string[] }) {
  const [index, setIndex] = useState(0);

  if (imgs.length === 0) return null;

  const hasPrev = index > 0;
  const hasNext = index < imgs.length - 1;

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Image
        src={imgs[index]}
        alt={`event image ${index + 1}`}
        fill
        style={{ objectFit: "cover" }}
      />

      {/* Prev button */}
      {hasPrev && (
        <IconButton
          size="small"
          onClick={(e) => { e.stopPropagation(); setIndex(index - 1); }}
          sx={{
            position: "absolute",
            left: 8,
            top: "50%",
            transform: "translateY(-50%)",
            backgroundColor: "rgba(15,27,45,0.6)",
            color: "#FAF8F5",
            width: 32,
            height: 32,
            "&:hover": { backgroundColor: "rgba(15,27,45,0.85)" },
          }}
        >
          <ArrowBackIosNewIcon sx={{ fontSize: 14 }} />
        </IconButton>
      )}

      {/* Next button */}
      {hasNext && (
        <IconButton
          size="small"
          onClick={(e) => { e.stopPropagation(); setIndex(index + 1); }}
          sx={{
            position: "absolute",
            right: 8,
            top: "50%",
            transform: "translateY(-50%)",
            backgroundColor: "rgba(15,27,45,0.6)",
            color: "#FAF8F5",
            width: 32,
            height: 32,
            "&:hover": { backgroundColor: "rgba(15,27,45,0.85)" },
          }}
        >
          <ArrowForwardIosIcon sx={{ fontSize: 14 }} />
        </IconButton>
      )}

      {/* Dot indicators */}
      {imgs.length > 1 && (
        <Box
          sx={{
            position: "absolute",
            bottom: 12,
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
            gap: 0.75,
          }}
        >
          {imgs.map((_, i) => (
            <Box
              key={i}
              onClick={(e) => { e.stopPropagation(); setIndex(i); }}
              sx={{
                width: i === index ? 16 : 6,
                height: 6,
                borderRadius: "3px",
                backgroundColor: i === index ? "#C5A55A" : "rgba(255,255,255,0.5)",
                cursor: "pointer",
                transition: "width 0.2s ease, background-color 0.2s ease",
              }}
            />
          ))}
        </Box>
      )}
    </Box>
  );
}

const CARD_SCROLL_PX = 340; // approx height of one card + gap

function Event(props: EventProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [atTop, setAtTop] = useState(true);
  const [atBottom, setAtBottom] = useState(false);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setAtTop(el.scrollTop <= 4);
    setAtBottom(el.scrollTop + el.clientHeight >= el.scrollHeight - 4);
  };

  const goNext = () => {
    scrollRef.current?.scrollBy({ top: CARD_SCROLL_PX, behavior: "smooth" });
  };

  const goPrev = () => {
    scrollRef.current?.scrollBy({ top: -CARD_SCROLL_PX, behavior: "smooth" });
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 5 }}>
      <Box
        ref={scrollRef}
        onScroll={handleScroll}
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: 3,
          maxHeight: `${CARD_SCROLL_PX * 2}px`,
          overflowY: "scroll",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {props.events.map((e) => (
          <Box
            key={e.id}
            sx={{
              display: "flex",
              flexDirection: "row",
              maxWidth: 900,
              mx: "auto",
              width: "100%",
              backgroundColor: "background.paper",
              borderRadius: "16px",
              border: "1px solid rgba(197, 165, 90, 0.35)",
              overflow: "hidden",
              isolation: "isolate",
            }}
          >
              {/* Image — left side, 4:5 ratio, stretches to card height */}
              {e.imgs && e.imgs.length > 0 && (
                <Box
                  sx={{
                    width: { xs: "35%", sm: "25%" },
                    flexShrink: 0,
                    position: "relative",
                    aspectRatio: "3/4",
                    alignSelf: "flex-start",
                    minHeight: { xs: 120, sm: 160 },
                  }}
                >
                  <EventImageCarousel imgs={e.imgs} />
                </Box>
              )}

              {/* Info — right side */}
              <Box
                sx={{
                  p: { xs: 2, sm: 3 },
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  minWidth: 0,
                }}
              >
                {/* Date */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 0.75, mb: 1.5 }}>
                  <CalendarTodayIcon sx={{ fontSize: 13, color: "secondary.main" }} />
                  <Typography
                    sx={{
                      fontSize: 11,
                      fontWeight: 600,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "secondary.main",
                      lineHeight: 1.5,
                      fontFamily: "var(--font-inter)",
                    }}
                  >
                    {e.date}
                  </Typography>
                </Box>

                {/* Title */}
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: { xs: 15, sm: 17 },
                    color: "primary.main",
                    mb: 1.5,
                    lineHeight: 1.35,
                  }}
                >
                  {e.detail}
                </Typography>

                {e.description && (
                  <Typography
                    sx={{
                      fontSize: { xs: 12, sm: 13 },
                      fontWeight: 400,
                      color: "text.secondary",
                      lineHeight: 1.6,
                    }}
                  >
                    {e.description}
                  </Typography>
                )}
              </Box>
            </Box>
          ))}
      </Box>

      {/* Scroll buttons */}
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 1.5, mt: 4 }}>
        <Button
          onClick={goPrev}
          disabled={atTop}
          startIcon={<KeyboardArrowUpIcon />}
          variant="outlined"
          sx={{
            borderRadius: "9999px",
            borderColor: !atTop ? "rgba(197,165,90,0.7)" : "rgba(197,165,90,0.2)",
            color: !atTop ? "secondary.main" : "rgba(197,165,90,0.3)",
            px: 3,
            py: 0.75,
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            fontFamily: "var(--font-inter)",
            "&:hover": {
              backgroundColor: "rgba(197,165,90,0.08)",
              borderColor: "secondary.main",
            },
            "&.Mui-disabled": {
              borderColor: "rgba(197,165,90,0.15)",
              color: "rgba(197,165,90,0.25)",
            },
          }}
        >
          Previous
        </Button>

        <Button
          onClick={goNext}
          disabled={atBottom}
          endIcon={<KeyboardArrowDownIcon />}
          variant="contained"
          sx={{
            borderRadius: "9999px",
            backgroundColor: !atBottom ? "#0F1B2D" : "rgba(15,27,45,0.15)",
            color: "#FAF8F5",
            px: 3,
            py: 0.75,
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            fontFamily: "var(--font-inter)",
            boxShadow: "none",
            "&:hover": {
              backgroundColor: "#1A2A42",
              boxShadow: "none",
            },
            "&.Mui-disabled": {
              backgroundColor: "rgba(15,27,45,0.1)",
              color: "rgba(250,248,245,0.3)",
            },
          }}
        >
          Next
        </Button>
      </Box>
      </Box>
    </Container>
  );
}

export default Event;
