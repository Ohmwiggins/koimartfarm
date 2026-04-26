"use client";

import {
  Box,
  Container,
  Dialog,
  DialogContent,
  Divider,
  IconButton,
  Pagination,
  Slide,
  Typography,
} from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloseIcon from "@mui/icons-material/Close";
import { forwardRef, useState, useRef } from "react";
import Linkify from "../../../components/Linkify";
import type { TransitionProps } from "@mui/material/transitions";
import type { KoiEvent } from "../../../models/events";

// ── helpers ───────────────────────────────────────────────────────────────────

function isVideo(url: string) {
  return /\.(mp4|webm|mov|avi|mkv|m4v)(\?|$)/i.test(url);
}
function isYouTube(url: string) {
  return /youtube\.com\/(watch|embed|shorts)|youtu\.be\//.test(url);
}
function getYouTubeId(url: string) {
  const m =
    url.match(/youtube\.com\/watch\?v=([^&]+)/) ??
    url.match(/youtu\.be\/([^?]+)/) ??
    url.match(/youtube\.com\/embed\/([^?/]+)/) ??
    url.match(/youtube\.com\/shorts\/([^?]+)/);
  return m?.[1] ?? "";
}
function getYouTubeEmbedUrl(url: string) {
  const id = getYouTubeId(url);
  return `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&controls=1`;
}

// ── slide-up transition ───────────────────────────────────────────────────────

const SlideUp = forwardRef(function Transition(
  props: TransitionProps & { children: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

// ── card thumbnail carousel (unchanged ratio, image on left) ──────────────────

function EventMediaCarousel({ imgs, videos }: { imgs: string[]; videos?: string[] }) {
  const [index, setIndex] = useState(0);
  const media = [...(imgs ?? []), ...(videos ?? [])];
  const len = media.length;

  if (len === 0) return null;

  const hasPrev = index > 0;
  const hasNext = index < len - 1;
  const current = media[index];

  return (
    <Box
      sx={{ width: "100%", height: "100%", position: "relative" }}
    >
      {isYouTube(current) ? (
        <iframe
          src={getYouTubeEmbedUrl(current)}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
        />
      ) : isVideo(current) ? (
        <video
          key={current}
          src={`${current}#t=0.001`}
          muted
          playsInline
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={current}
          alt={`event media ${index + 1}`}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
          draggable={false}
        />
      )}

      {hasPrev && (
        <IconButton
          size="small"
          onClick={(e) => { e.stopPropagation(); setIndex(index - 1); }}
          sx={{
            position: "absolute", left: 6, top: "50%", transform: "translateY(-50%)",
            backgroundColor: "rgba(15,27,45,0.6)", color: "#FAF8F5", width: 26, height: 26,
            "&:hover": { backgroundColor: "rgba(15,27,45,0.85)" },
          }}
        >
          <ArrowBackIosNewIcon sx={{ fontSize: 11 }} />
        </IconButton>
      )}
      {hasNext && (
        <IconButton
          size="small"
          onClick={(e) => { e.stopPropagation(); setIndex(index + 1); }}
          sx={{
            position: "absolute", right: 6, top: "50%", transform: "translateY(-50%)",
            backgroundColor: "rgba(15,27,45,0.6)", color: "#FAF8F5", width: 26, height: 26,
            "&:hover": { backgroundColor: "rgba(15,27,45,0.85)" },
          }}
        >
          <ArrowForwardIosIcon sx={{ fontSize: 11 }} />
        </IconButton>
      )}

      {media.length > 1 && (
        <Box sx={{ position: "absolute", bottom: 8, left: 0, right: 0, display: "flex", justifyContent: "center", gap: 0.5 }}>
          {media.map((_, i) => (
            <Box
              key={i}
              onClick={(e) => { e.stopPropagation(); setIndex(i); }}
              sx={{
                width: i === index ? 12 : 5, height: 5, borderRadius: "3px",
                backgroundColor: i === index ? "#C5A55A" : "rgba(255,255,255,0.5)",
                cursor: "pointer", transition: "width 0.2s ease",
              }}
            />
          ))}
        </Box>
      )}
    </Box>
  );
}

// ── modal carousel (bigger images, horizontal, swipeable) ─────────────────────

function ModalCarousel({ imgs, videos }: { imgs: string[]; videos?: string[] }) {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef(0);
  const media = [...(imgs ?? []), ...(videos ?? [])];

  if (media.length === 0) return null;

  const current = media[index];
  const hasPrev = index > 0;
  const hasNext = index < media.length - 1;

  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0 && hasNext) setIndex((i) => i + 1);
      if (diff < 0 && hasPrev) setIndex((i) => i - 1);
    }
  };

  return (
    <Box
      sx={{
        position: "relative",
        backgroundColor: "background.paper",
        userSelect: "none",
        px: { xs: 2, sm: 4 },
        pt: { xs: 2, sm: 3 },
        pb: { xs: 2, sm: 3 },
      }}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* media — floating upper layer with shadow */}
      {isYouTube(current) ? (
        <Box sx={{
          width: "100%", aspectRatio: "16/9",
          borderRadius: "12px", overflow: "hidden",
          boxShadow: "0 8px 32px rgba(10,18,32,0.18)",
        }}>
          <iframe
            src={getYouTubeEmbedUrl(current)}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ width: "100%", height: "100%", border: "none", display: "block" }}
          />
        </Box>
      ) : isVideo(current) ? (
        <Box sx={{ borderRadius: "12px", overflow: "hidden", boxShadow: "0 8px 32px rgba(10,18,32,0.18)" }}>
          <video
            key={current}
            src={`${current}#t=0.001`}
            autoPlay
            muted
            loop
            playsInline
            controls
            style={{ width: "100%", height: "auto", display: "block", maxHeight: "60vh" }}
          />
        </Box>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={current}
          alt={`event photo ${index + 1}`}
          style={{
            width: "100%", height: "auto", display: "block",
            maxHeight: "60vh", objectFit: "contain",
            borderRadius: "12px",
            boxShadow: "0 8px 32px rgba(10,18,32,0.18)",
          }}
          draggable={false}
        />
      )}

      {/* prev arrow */}
      {hasPrev && (
        <IconButton
          onClick={() => setIndex((i) => i - 1)}
          sx={{
            position: "absolute", left: { xs: 4, sm: 8 }, top: "50%", transform: "translateY(-50%)",
            backgroundColor: "rgba(255,255,255,0.85)", backdropFilter: "blur(4px)",
            color: "primary.main", width: 36, height: 36,
            boxShadow: "0 2px 8px rgba(10,18,32,0.15)",
            "&:hover": { backgroundColor: "#fff", color: "secondary.main" },
          }}
        >
          <ArrowBackIosNewIcon sx={{ fontSize: 14 }} />
        </IconButton>
      )}

      {/* next arrow */}
      {hasNext && (
        <IconButton
          onClick={() => setIndex((i) => i + 1)}
          sx={{
            position: "absolute", right: { xs: 4, sm: 8 }, top: "50%", transform: "translateY(-50%)",
            backgroundColor: "rgba(255,255,255,0.85)", backdropFilter: "blur(4px)",
            color: "primary.main", width: 36, height: 36,
            boxShadow: "0 2px 8px rgba(10,18,32,0.15)",
            "&:hover": { backgroundColor: "#fff", color: "secondary.main" },
          }}
        >
          <ArrowForwardIosIcon sx={{ fontSize: 14 }} />
        </IconButton>
      )}

      {/* dots + counter */}
      {media.length > 1 && (
        <Box sx={{ mt: 2, display: "flex", flexDirection: "column", alignItems: "center", gap: 0.75 }}>
          <Box sx={{ display: "flex", gap: 0.75 }}>
            {media.map((_, i) => (
              <Box
                key={i}
                onClick={() => setIndex(i)}
                sx={{
                  width: i === index ? 22 : 7, height: 7, borderRadius: "4px",
                  backgroundColor: i === index ? "#C5A55A" : "rgba(10,18,32,0.2)",
                  cursor: "pointer", transition: "width 0.25s ease, background-color 0.25s ease",
                }}
              />
            ))}
          </Box>
          <Typography sx={{ fontSize: 11, color: "text.secondary", fontFamily: "var(--font-inter)", fontWeight: 500 }}>
            {index + 1} / {media.length}
          </Typography>
        </Box>
      )}
    </Box>
  );
}

// ── event detail modal ────────────────────────────────────────────────────────

function EventModal({ event, open, onClose }: { event: KoiEvent | null; open: boolean; onClose: () => void }) {
  const hasMedia = Boolean((event?.imgs && event.imgs.length > 0) || (event?.videos && event.videos.length > 0));

  return (
    <Dialog
      open={open}
      onClose={onClose}
      slots={{ transition: SlideUp }}
      maxWidth="md"
      fullWidth
      scroll="paper"
      sx={{
        "& .MuiDialog-paper": {
          borderRadius: { xs: "20px 20px 0 0", sm: "20px" },
          backgroundColor: "background.paper",
          border: "1px solid rgba(197,165,90,0.2)",
          overflow: "hidden",
          m: { xs: "auto auto 0 auto", sm: "32px auto" },
          maxHeight: { xs: "92vh", sm: "88vh" },
        },
        "& .MuiBackdrop-root": {
          backdropFilter: "blur(6px)",
          backgroundColor: "rgba(10,18,32,0.55)",
        },
      }}
    >
      {/* close button */}
      <IconButton
        onClick={onClose}
        sx={{
          position: "absolute", top: 12, right: 12, zIndex: 30,
          backgroundColor: "rgba(10,18,32,0.65)", backdropFilter: "blur(4px)",
          color: "#FAF8F5", width: 36, height: 36,
          "&:hover": { backgroundColor: "rgba(10,18,32,0.9)" },
        }}
      >
        <CloseIcon sx={{ fontSize: 18 }} />
      </IconButton>

      <DialogContent sx={{ p: 0 }}>
        {event && (
          <>
            {hasMedia && <ModalCarousel imgs={event.imgs ?? []} videos={event.videos} />}

            <Box sx={{ px: { xs: 3, sm: 4 }, pt: 3, pb: 4 }}>
              {/* date pill */}
              <Box sx={{
                display: "inline-flex", alignItems: "center", gap: 0.75,
                px: 1.5, py: 0.5, borderRadius: "9999px", mb: 2,
                backgroundColor: "rgba(197,165,90,0.1)",
                border: "1px solid rgba(197,165,90,0.3)",
              }}>
                <CalendarTodayIcon sx={{ fontSize: 12, color: "secondary.main" }} />
                <Typography sx={{
                  fontSize: 11, fontWeight: 700, letterSpacing: "0.1em",
                  textTransform: "uppercase", color: "secondary.main",
                  fontFamily: "var(--font-inter)",
                }}>
                  {event.date}
                </Typography>
              </Box>

              {/* title */}
              <Typography sx={{
                fontFamily: "var(--font-playfair)", fontWeight: 700,
                fontSize: { xs: 20, sm: 24 }, color: "primary.main",
                lineHeight: 1.3, mb: event.description ? 2 : 0,
              }}>
                {event.detail}
              </Typography>

              {event.description && (
                <>
                  <Divider sx={{ borderColor: "rgba(197,165,90,0.2)", mb: 2 }} />
                  <Typography sx={{
                    fontSize: { xs: 14, sm: 15 }, color: "text.secondary",
                    lineHeight: 1.9, fontFamily: "var(--font-prompt)",
                    whiteSpace: "pre-line",
                  }}>
                    <Linkify>{event.description}</Linkify>
                  </Typography>
                </>
              )}
            </Box>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

// ── main component ────────────────────────────────────────────────────────────

const PER_PAGE = 2;

type EventProps = { events: KoiEvent[] };

function Event({ events }: EventProps) {
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState<KoiEvent | null>(null);

  const totalPages = Math.ceil(events.length / PER_PAGE);
  const paginated = events.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  return (
    <Container maxWidth="md">
      <Box sx={{ py: 5 }}>
        <Box sx={{ display: "grid", gridTemplateColumns: "1fr", gap: 3 }}>
          {paginated.map((e) => (
            <Box
              key={e.id}
              onClick={() => setSelected(e)}
              sx={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                backgroundColor: "background.paper",
                borderRadius: "16px",
                border: "1px solid rgba(197,165,90,0.25)",
                overflow: "hidden",
                isolation: "isolate",
                cursor: "pointer",
                transition: "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
                "&:hover": {
                  transform: "translateY(-3px)",
                  boxShadow: "0 10px 32px rgba(10,18,32,0.1)",
                  borderColor: "rgba(197,165,90,0.55)",
                },
              }}
            >
              {/* thumbnail — fixed size on the left */}
              {(e.imgs && e.imgs.length > 0) || (e.videos && e.videos.length > 0) ? (
                <Box sx={{
                  width: { xs: 200, sm: 255 },
                  height: { xs: 267, sm: 340 },
                  flexShrink: 0,
                  alignSelf: "center",
                  position: "relative",
                  backgroundColor: "#0A1220",
                  overflow: "hidden",
                }}>
                  <EventMediaCarousel imgs={e.imgs ?? []} videos={e.videos} />
                </Box>
              ) : null}

              {/* info */}
              <Box sx={{
                p: { xs: 2.5, sm: 4 }, flex: 1,
                display: "flex", flexDirection: "column", justifyContent: "center", minWidth: 0,
              }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 0.75, mb: 1.5 }}>
                  <CalendarTodayIcon sx={{ fontSize: 13, color: "secondary.main" }} />
                  <Typography sx={{
                    fontSize: 11, fontWeight: 600, letterSpacing: "0.08em",
                    textTransform: "uppercase", color: "secondary.main",
                    lineHeight: 1.5, fontFamily: "var(--font-inter)",
                  }}>
                    {e.date}
                  </Typography>
                </Box>

                <Typography sx={{
                  fontWeight: 700, fontSize: { xs: 16, sm: 19 },
                  color: "primary.main", mb: 1.5, lineHeight: 1.35,
                }}>
                  {e.detail}
                </Typography>

                {e.description && (
                  <Typography sx={{
                    fontSize: { xs: 13, sm: 14 }, color: "text.secondary",
                    lineHeight: 1.7,
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}>
                    {e.description}
                  </Typography>
                )}

                <Typography sx={{
                  mt: 2, fontSize: 11, fontWeight: 700,
                  color: "secondary.main", fontFamily: "var(--font-inter)",
                  letterSpacing: "0.08em", textTransform: "uppercase",
                }}>
                  View Details →
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>

        {totalPages > 1 && (
          <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
            <Pagination
              count={totalPages}
              page={page}
              onChange={(_, v) => setPage(v)}
              sx={{
                "& .MuiPaginationItem-root": { color: "primary.main", fontFamily: "var(--font-inter)", fontWeight: 600 },
                "& .MuiPaginationItem-root.Mui-selected": {
                  backgroundColor: "secondary.main", color: "#fff",
                  "&:hover": { backgroundColor: "secondary.light" },
                },
              }}
            />
          </Box>
        )}
      </Box>

      <EventModal
        event={selected}
        open={Boolean(selected)}
        onClose={() => setSelected(null)}
      />
    </Container>
  );
}

export default Event;
