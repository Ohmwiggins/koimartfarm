"use client";

import { Box, Container, IconButton, Typography } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
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

function Event(props: EventProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
  };

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = scrollContainerRef.current.clientWidth * 0.9;
    scrollContainerRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
    setTimeout(checkScroll, 300);
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ position: "relative" }}>
        {/* Left Arrow */}
        {canScrollLeft && (
          <IconButton
            onClick={() => scroll("left")}
            sx={{
              position: "absolute",
              left: { xs: -12, sm: -20 },
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 2,
              backgroundColor: "rgba(15,27,45,0.85)",
              color: "#C5A55A",
              width: { xs: 36, sm: 44 },
              height: { xs: 36, sm: 44 },
              "&:hover": {
                backgroundColor: "rgba(15,27,45,0.95)",
                color: "#FAF8F5",
              },
            }}
          >
            <ArrowBackIosNewIcon />
          </IconButton>
        )}

        {/* Events Container — py:5 (40px) gives shadow room without clipping */}
        <Box
          ref={scrollContainerRef}
          onScroll={checkScroll}
          sx={{
            display: "flex",
            gap: 3,
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": { display: "none" },
            py: 5,
          }}
        >
          {props.events.map((e) => (
            <Box
              key={e.id}
              sx={{
                scrollSnapAlign: "start",
                flexShrink: 0,
                width: { xs: "85%", sm: "calc(50% - 12px)" },
                display: "flex",
                flexDirection: "row",
                backgroundColor: "background.paper",
                borderRadius: "16px",
                border: "1px solid rgba(197, 165, 90, 0.35)",
                overflow: "hidden",
                // Forces a new stacking context so the browser honours the
                // overflow-hidden clip at the rounded corners even when inner
                // elements (position:relative / Next/Image fill) are composited
                // on their own GPU layer.
                isolation: "isolate",
              }}
            >
              {/* Image — left side, 4:5 ratio, stretches to card height */}
              {e.imgs && e.imgs.length > 0 && (
                <Box
                  sx={{
                    width: { xs: "45%", sm: "42%" },
                    flexShrink: 0,
                    position: "relative",
                    aspectRatio: "4/5",
                    alignSelf: "stretch",
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

        {/* Right Arrow */}
        {canScrollRight && (
          <IconButton
            onClick={() => scroll("right")}
            sx={{
              position: "absolute",
              right: { xs: -12, sm: -20 },
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 2,
              backgroundColor: "rgba(15,27,45,0.85)",
              color: "#C5A55A",
              width: { xs: 36, sm: 44 },
              height: { xs: 36, sm: 44 },
              "&:hover": {
                backgroundColor: "rgba(15,27,45,0.95)",
                color: "#FAF8F5",
              },
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        )}
      </Box>
    </Container>
  );
}

export default Event;
