"use client";

import { Box, Container, IconButton, Typography } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Image from "next/image";
import { useState } from "react";
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
        flexShrink: 0,
        width: { xs: "100%", md: 220 },
        height: { xs: 220, md: 260 },
        position: "relative",
        borderRadius: { xs: "12px", md: "16px 0 0 16px" },
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
            left: 6,
            top: "50%",
            transform: "translateY(-50%)",
            backgroundColor: "rgba(15,27,45,0.6)",
            color: "#FAF8F5",
            width: 28,
            height: 28,
            "&:hover": { backgroundColor: "rgba(15,27,45,0.85)" },
          }}
        >
          <ArrowBackIosNewIcon sx={{ fontSize: 12 }} />
        </IconButton>
      )}

      {/* Next button */}
      {hasNext && (
        <IconButton
          size="small"
          onClick={(e) => { e.stopPropagation(); setIndex(index + 1); }}
          sx={{
            position: "absolute",
            right: 6,
            top: "50%",
            transform: "translateY(-50%)",
            backgroundColor: "rgba(15,27,45,0.6)",
            color: "#FAF8F5",
            width: 28,
            height: 28,
            "&:hover": { backgroundColor: "rgba(15,27,45,0.85)" },
          }}
        >
          <ArrowForwardIosIcon sx={{ fontSize: 12 }} />
        </IconButton>
      )}

      {/* Dot indicators */}
      {imgs.length > 1 && (
        <Box
          sx={{
            position: "absolute",
            bottom: 8,
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
  return (
    <Container maxWidth="lg">
      <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
        {props.events.map((e) => (
          <Box
            key={e.id}
            onClick={() => window.open("https://www.koimart.shop/th/news", "_blank")}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: { xs: "flex-start", md: "center" },
              gap: { xs: 3, md: 5 },
              backgroundColor: "background.paper",
              borderRadius: "16px",
              border: "1px solid rgba(197, 165, 90, 0.35)",
              overflow: "hidden",
              p: { xs: 2, md: 0 },
              cursor: "pointer",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
              },
            }}
          >
            {/* Event poster image(s) */}
            {e.imgs && e.imgs.length > 0 && (
              <EventImageCarousel imgs={e.imgs} />
            )}

            {/* Event details */}
            <Box sx={{ flex: 1, py: { xs: 2, md: 4 }, pr: { xs: 2, md: 4 } }}>
              {/* Date — icon + label */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.75, mb: 1 }}>
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
                  fontSize: 18,
                  color: "primary.main",
                  mb: 1,
                  lineHeight: 1.35,
                }}
              >
                {e.detail}
              </Typography>
              {e.description && (
                <Typography
                  sx={{
                    fontSize: 14,
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
    </Container>
  );
}

export default Event;
