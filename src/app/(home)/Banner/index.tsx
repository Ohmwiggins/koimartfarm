"use client";
import { Box, Grow, Typography } from "@mui/material";
import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";

export default function Banner() {
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);          // current translateX (px, always ≤ 0)
  const rafRef = useRef<number | null>(null);
  const isPausedRef = useRef(false);
  const resumeTimerRef = useRef<NodeJS.Timeout | null>(null);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragStartOffset = useRef(0);
  const imageWidthRef = useRef(0);      // width of ONE copy of the image

  // Apply offset and handle seamless loop
  const applyOffset = useCallback((offset: number) => {
    const w = imageWidthRef.current;
    if (w === 0 || !trackRef.current) return;
    // Wrap: when scrolled past one full image width, reset seamlessly
    let o = offset;
    if (o <= -w) o += w;
    if (o > 0)   o -= w;
    offsetRef.current = o;
    trackRef.current.style.transform = `translateX(${o}px)`;
  }, []);

  // RAF auto-scroll loop
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const SPEED = 1.2; // px per frame (~72px/s at 60fps)

    const tick = () => {
      if (!isPausedRef.current) {
        applyOffset(offsetRef.current - SPEED);
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    // Measure image width after it has a chance to render
    const timer = setTimeout(() => {
      const firstImg = track.firstElementChild as HTMLElement | null;
      if (firstImg) imageWidthRef.current = firstImg.offsetWidth;
      rafRef.current = requestAnimationFrame(tick);
    }, 150);

    return () => {
      clearTimeout(timer);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [applyOffset]);

  const pause = useCallback(() => {
    isPausedRef.current = true;
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
  }, []);

  const resumeLater = useCallback(() => {
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      isPausedRef.current = false;
    }, 1500);
  }, []);

  // ── Mouse drag ──────────────────────────────────────────────────────────────
  const onMouseDown = useCallback((e: React.MouseEvent) => {
    isDragging.current = true;
    dragStartX.current = e.clientX;
    dragStartOffset.current = offsetRef.current;
    pause();
  }, [pause]);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging.current) return;
    applyOffset(dragStartOffset.current + (e.clientX - dragStartX.current));
  }, [applyOffset]);

  const onMouseUp = useCallback(() => {
    if (!isDragging.current) return;
    isDragging.current = false;
    resumeLater();
  }, [resumeLater]);

  // ── Touch drag ──────────────────────────────────────────────────────────────
  const onTouchStart = useCallback((e: React.TouchEvent) => {
    dragStartX.current = e.touches[0].clientX;
    dragStartOffset.current = offsetRef.current;
    pause();
  }, [pause]);

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    applyOffset(dragStartOffset.current + (e.touches[0].clientX - dragStartX.current));
  }, [applyOffset]);

  const onTouchEnd = useCallback(() => {
    resumeLater();
  }, [resumeLater]);

  return (
    <Box sx={{ paddingTop: "60px", backgroundColor: "background.default" }}>
      {/* Auto-scroll + draggable banner */}
      <Box
        sx={{
          position: "relative",
          height: { xs: "50vh", md: "70vh" },
          overflow: "hidden",
          cursor: "grab",
          "&:active": { cursor: "grabbing" },
          userSelect: "none",
        }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
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
          {[0, 1].map((i) => (
            <Image
              key={i}
              src="/img/banner.png"
              alt="KoiMartFarm Banner"
              width={6000}
              height={1000}
              style={{ width: "auto", height: "100%", flexShrink: 0, pointerEvents: "none" }}
              priority={i === 0}
              draggable={false}
            />
          ))}
        </Box>
      </Box>

      {/* Header + subtitle below the banner */}
      <Box
        sx={{
          textAlign: "center",
          py: { xs: 5, md: 7 },
          px: 2,
          backgroundColor: "background.default",
        }}
      >
        <Grow in={true} timeout={1500}>
          <Box>
            <Typography
              sx={{
                fontFamily: "var(--font-playfair)",
                fontSize: { xs: 38, sm: 56, md: 72 },
                color: "#FF0007",
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
              นำเข้าปลา Fancy Carp จากทุกๆ ฟาร์มดังในประเทศญี่ปุ่น อาทิเช่น Dainichi, Sakai, Isa, Momotaro, Marudo
            </Typography>
          </Box>
        </Grow>
      </Box>
    </Box>
  );
}
