"use client";

import { Box, Container, IconButton, Pagination, Typography } from "@mui/material";
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

const PER_PAGE = 2;

function Event({ events }: EventProps) {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(events.length / PER_PAGE);
  const paginated = events.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 5 }}>
        <Box sx={{ display: "grid", gridTemplateColumns: "1fr", gap: 3 }}>
          {paginated.map((e) => (
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
              {e.imgs && e.imgs.length > 0 && (
                <Box
                  sx={{
                    width: { xs: "35%", sm: "25%" },
                    flexShrink: 0,
                    position: "relative",
                    aspectRatio: "3/4",
                    alignSelf: "center",
                    minHeight: { xs: 120, sm: 160 },
                  }}
                >
                  <EventImageCarousel imgs={e.imgs} />
                </Box>
              )}

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

        {totalPages > 1 && (
          <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
            <Pagination
              count={totalPages}
              page={page}
              onChange={(_, value) => setPage(value)}
              sx={{
                "& .MuiPaginationItem-root": {
                  color: "primary.main",
                  fontFamily: "var(--font-inter)",
                  fontWeight: 600,
                },
                "& .MuiPaginationItem-root.Mui-selected": {
                  backgroundColor: "secondary.main",
                  color: "#fff",
                  "&:hover": { backgroundColor: "secondary.light" },
                },
              }}
            />
          </Box>
        )}
      </Box>
    </Container>
  );
}

export default Event;
