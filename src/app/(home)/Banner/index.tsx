"use client";
import { Box, IconButton, Typography, Grow } from "@mui/material";
import Image from "next/image";
import { useState, useCallback, useEffect, useRef } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { supabase } from "../../../lib/supabase";

type MediaType = "image" | "video" | "youtube";

function getMediaType(url: string): MediaType {
  if (/youtube\.com\/(watch|embed|shorts)|youtu\.be\//.test(url)) return "youtube";
  if (/\.(mp4|webm|mov|avi|mkv|m4v)(\?|$)/i.test(url)) return "video";
  return "image";
}

function getYouTubeEmbedUrl(url: string): string {
  const watchMatch = url.match(/youtube\.com\/watch\?v=([^&]+)/);
  const shortMatch = url.match(/youtu\.be\/([^?]+)/);
  const embedMatch = url.match(/youtube\.com\/embed\/([^?/]+)/);
  const shortsMatch = url.match(/youtube\.com\/shorts\/([^?]+)/);
  const videoId = (watchMatch ?? shortMatch ?? embedMatch ?? shortsMatch)?.[1] ?? "";
  return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&rel=0`;
}

const FALLBACK_SLIDES = [
  "/img/koi-images/Koi-image-01.png",
  "/img/koi-images/Koi-image-02.png",
  "/img/koi-images/Koi-image-03.png",
  "/img/koi-images/Koi-image-04.png",
  "/img/koi-images/Koi-image-05.png",
  "/img/koi-images/Koi-image-06.png",
  "/img/koi-images/Koi-image-07.png",
];

export default function Banner() {
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);           // current translateX (px, always ≤ 0)
  const rafRef = useRef<number | null>(null);
  const isPausedRef = useRef(false);
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragStartOffset = useRef(0);
  const slideWidthRef = useRef(0);       // width of ONE image slide (px)
  const totalWidthRef = useRef(0);       // width of ONE full set of slides (px)

  const [currentDot, setCurrentDot] = useState(0);
  const [slides, setSlides] = useState<string[]>([]);
  const slidesRef = useRef<string[]>([]);

  useEffect(() => {
    supabase
      .from("carousel_images")
      .select("url")
      .order("sort_order")
      .then(({ data }) => {
        const urls = data && data.length > 0
          ? data.map((d: { url: string }) => d.url)
          : FALLBACK_SLIDES;
        slidesRef.current = urls;
        setSlides(urls);
      });
  }, []);

  // ── Apply offset with seamless-loop wrapping ────────────────────────────
  const applyOffset = useCallback((offset: number) => {
    const total = totalWidthRef.current;
    if (total === 0 || !trackRef.current) return;

    let o = offset;
    if (o <= -total) o += total;
    if (o > 0) o -= total;

    offsetRef.current = o;
    trackRef.current.style.transform = `translateX(${o}px)`;

    // Keep dot indicator in sync
    const slideW = slideWidthRef.current;
    if (slideW > 0) {
      const raw = Math.round(Math.abs(o) / slideW) % slidesRef.current.length;
      setCurrentDot(raw);
    }
  }, []);

  // ── RAF auto-scroll loop (1.2 px/frame ≈ 72 px/s at 60 fps) ───────────
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const SPEED = 1.2;

    const tick = () => {
      if (!isPausedRef.current) {
        applyOffset(offsetRef.current - SPEED);
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    // Measure after first render paint
    const timer = setTimeout(() => {
      const firstSlide = track.firstElementChild as HTMLElement | null;
      if (firstSlide) {
        slideWidthRef.current = firstSlide.offsetWidth;
        totalWidthRef.current = firstSlide.offsetWidth * slidesRef.current.length;
      }
      rafRef.current = requestAnimationFrame(tick);
    }, 150);

    return () => {
      clearTimeout(timer);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [applyOffset, slides]);

  // ── Pause / resume helpers ──────────────────────────────────────────────
  const pause = useCallback(() => {
    isPausedRef.current = true;
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
  }, []);

  const resumeLater = useCallback(() => {
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      isPausedRef.current = false;
    }, 2000);
  }, []);

  // ── Arrow navigation (jump by exactly one slide width) ─────────────────
  const jumpBy = useCallback(
    (direction: "prev" | "next") => {
      const slideW = slideWidthRef.current;
      if (slideW === 0) return;
      pause();
      applyOffset(
        offsetRef.current + (direction === "prev" ? slideW : -slideW)
      );
      resumeLater();
    },
    [pause, applyOffset, resumeLater]
  );

  // ── Mouse drag ──────────────────────────────────────────────────────────
  const onMouseDown = useCallback(
    (e: React.MouseEvent) => {
      isDragging.current = true;
      dragStartX.current = e.clientX;
      dragStartOffset.current = offsetRef.current;
      pause();
    },
    [pause]
  );

  const onMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging.current) return;
      applyOffset(dragStartOffset.current + (e.clientX - dragStartX.current));
    },
    [applyOffset]
  );

  const onMouseUp = useCallback(() => {
    if (!isDragging.current) return;
    isDragging.current = false;
    resumeLater();
  }, [resumeLater]);

  // ── Touch drag ──────────────────────────────────────────────────────────
  const onTouchStart = useCallback(
    (e: React.TouchEvent) => {
      dragStartX.current = e.touches[0].clientX;
      dragStartOffset.current = offsetRef.current;
      pause();
    },
    [pause]
  );

  const onTouchMove = useCallback(
    (e: React.TouchEvent) => {
      applyOffset(
        dragStartOffset.current + (e.touches[0].clientX - dragStartX.current)
      );
    },
    [applyOffset]
  );

  const onTouchEnd = useCallback(() => resumeLater(), [resumeLater]);

  return (
    <Box sx={{ paddingTop: "60px", backgroundColor: "background.default" }}>
      {/* ── Strip carousel ─────────────────────────────────────────────── */}
      <Box
        sx={{
          position: "relative",
          height: { xs: "50vh", md: "70vh" },
          overflow: "hidden",
          cursor: "grab",
          "&:active": { cursor: "grabbing" },
          userSelect: "none",
          backgroundColor: "primary.dark",
        }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/*
         * Track — SLIDES duplicated once for a seamless infinite loop.
         * Each slide: height 100% + aspectRatio 4/5 → portrait, no gaps.
         */}
        <Box
          ref={trackRef}
          sx={{
            display: "flex",
            flexDirection: "row",
            height: "100%",
            width: "max-content",
            willChange: "transform",
          }}
        >
          {[...slides, ...slides].map((src, i) => {
            const mediaType = getMediaType(src);
            return (
              <Box
                key={i}
                sx={{
                  position: "relative",
                  height: "100%",
                  aspectRatio: "4/5",
                  flexShrink: 0,
                  overflow: "hidden",
                }}
              >
                {mediaType === "image" && (
                  <Image
                    src={src}
                    alt={`Koi image ${(i % slides.length) + 1}`}
                    fill
                    style={{ objectFit: "cover", pointerEvents: "none" }}
                    priority={i < slides.length}
                    draggable={false}
                  />
                )}
                {mediaType === "video" && (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      pointerEvents: "none",
                    }}
                  >
                    <source src={src} />
                  </video>
                )}
                {mediaType === "youtube" && (
                  <iframe
                    src={getYouTubeEmbedUrl(src)}
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    style={{
                      width: "100%",
                      height: "100%",
                      border: "none",
                      pointerEvents: "none",
                    }}
                  />
                )}
              </Box>
            );
          })}
        </Box>

        {/* ── Prev arrow ───────────────────────────────────────────────── */}
        <IconButton
          onClick={() => jumpBy("prev")}
          aria-label="Previous image"
          sx={{
            position: "absolute",
            left: { xs: 12, md: 24 },
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 10,
            backgroundColor: "rgba(15,27,45,0.55)",
            color: "#FAF8F5",
            width: { xs: 40, md: 52 },
            height: { xs: 40, md: 52 },
            "&:hover": {
              backgroundColor: "rgba(15,27,45,0.9)",
              color: "secondary.main",
            },
          }}
        >
          <ArrowBackIosNewIcon />
        </IconButton>

        {/* ── Next arrow ───────────────────────────────────────────────── */}
        <IconButton
          onClick={() => jumpBy("next")}
          aria-label="Next image"
          sx={{
            position: "absolute",
            right: { xs: 12, md: 24 },
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 10,
            backgroundColor: "rgba(15,27,45,0.55)",
            color: "#FAF8F5",
            width: { xs: 40, md: 52 },
            height: { xs: 40, md: 52 },
            "&:hover": {
              backgroundColor: "rgba(15,27,45,0.9)",
              color: "secondary.main",
            },
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>

        {/* ── Dot indicators ───────────────────────────────────────────── */}
        <Box
          sx={{
            position: "absolute",
            bottom: 16,
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
            gap: 1,
            zIndex: 10,
            pointerEvents: "none",
          }}
        >
          {slides.map((_, i) => (
            <Box
              key={i}
              sx={{
                width: i === currentDot ? 24 : 8,
                height: 8,
                borderRadius: "4px",
                backgroundColor:
                  i === currentDot
                    ? "secondary.main"
                    : "rgba(255,255,255,0.4)",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </Box>
      </Box>

      {/* ── Brand text below the strip ─────────────────────────────────── */}
      <Box
        sx={{
          textAlign: "center",
          py: { xs: 5, md: 7 },
          px: 2,
          backgroundColor: "background.default",
        }}
      >
        <Grow in timeout={1500}>
          <Box>
            <Typography
              sx={{
                fontFamily: "var(--font-playfair)",
                fontSize: { xs: 38, sm: 56, md: 72 },
                color: "#E91D26",
                lineHeight: 1.05,
                fontWeight: 700,
                letterSpacing: "-0.02em",
                mb: 2,
              }}
            >
              KOIMART FARM
            </Typography>
            <Typography
              sx={{
                fontFamily: "var(--font-prompt)",
                fontSize: { xs: 15, sm: 17, md: 19 },
                color: "text.secondary",
                fontWeight: 300,
                letterSpacing: "0.03em",
                maxWidth: 680,
                mx: "auto",
                lineHeight: 1.7,
              }}
            >
              นำเข้าและจัดจำหน่าย Fancy Carp จากทุกๆ ฟาร์มดังในประเทศญี่ปุ่น
              อาทิเช่น Dainichi, Sakai, Isa, Momotaro, Marudo
            </Typography>
          </Box>
        </Grow>
      </Box>
    </Box>
  );
}
