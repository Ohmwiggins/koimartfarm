"use client";
import { Box, Grow, Typography } from "@mui/material";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Banner() {
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragScrollLeft = useRef(0);

  const handleInteraction = () => {
    setIsPaused(true);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 2000);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    isDragging.current = true;
    dragStartX.current = e.pageX - scrollRef.current.offsetLeft;
    dragScrollLeft.current = scrollRef.current.scrollLeft;
    handleInteraction();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    const x = e.pageX - scrollRef.current.offsetLeft;
    scrollRef.current.scrollLeft = dragScrollLeft.current - (x - dragStartX.current);
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    const scroll = () => {
      if (!isPaused) {
        if (scrollElement.scrollLeft >= scrollElement.scrollWidth / 2) {
          scrollElement.scrollLeft = 0;
        } else {
          scrollElement.scrollLeft += 0.5;
        }
      }
      animationFrameRef.current = requestAnimationFrame(scroll);
    };

    animationFrameRef.current = requestAnimationFrame(scroll);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isPaused]);

  return (
    <Box sx={{ paddingTop: "60px", backgroundColor: "background.default" }}>
      {/* Slide carousel */}
      <Box
        sx={{
          position: "relative",
          height: { xs: "50vh", md: "70vh" },
          overflow: "hidden",
        }}
      >
        <Box
          ref={scrollRef}
          onWheel={handleInteraction}
          onTouchStart={handleInteraction}
          onTouchMove={handleInteraction}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          sx={{
            cursor: "grab",
            "&:active": { cursor: "grabbing" },
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            overflowX: "scroll",
            overflowY: "hidden",
            whiteSpace: "nowrap",
            scrollbarWidth: "none",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            perspective: 1000,
            transformStyle: "preserve-3d",
          }}
        >
          {Array.from({ length: 2 }).map((_, i) => (
            <Image
              key={i}
              src={`/img/banner.png`}
              alt={`KoiMartFarm Background ${i}`}
              width={6000}
              height={1000}
              style={{ width: "auto", height: "100%" }}
              priority={true}
            />
          ))}
        </Box>
      </Box>

      {/* Header + subtitle below the carousel */}
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
