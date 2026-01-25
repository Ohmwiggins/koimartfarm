"use client";
import { Box, Grow, Typography } from "@mui/material";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Banner() {
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  const handleInteraction = () => {
    setIsPaused(true);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 2000); // Resume after 2 seconds of inactivity
  };

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    const scroll = () => {
      if (!isPaused) {
        if (scrollElement.scrollLeft >= scrollElement.scrollWidth / 2) {
          scrollElement.scrollLeft = 0;
        } else {
          scrollElement.scrollLeft += 0.5; // Adjust scroll speed here
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
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "80vh",
        overflow: "hidden",
        backgroundColor: "background.default",
        paddingTop: "60px",
        gap: "5%",
      }}
    >
      <Box
        ref={scrollRef}
        onWheel={handleInteraction}
        onTouchStart={handleInteraction}
        onTouchMove={handleInteraction}
        sx={{
          height: { xs: "70%", sm: "100%" },
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          overflowX: "scroll",
          overflowY: "hidden",
          whiteSpace: "nowrap",
          scrollbarWidth: "none",
          width: "100%",
          backfaceVisibility: "hidden",
          perspective: 1000,
          transformStyle: "preserve-3d",
        }}
      >
        {Array.from({ length: 2 }).map((_, i) => {
          return (
            <Image
              key={i}
              src={`/img/banner.png`}
              alt={`KoiMartFarm Background ${i}`}
              width={6000}
              height={1000}
              style={{
                width: "auto",
                height: "100%",
              }}
              priority={true}
            />
          );
        })}
      </Box>

      <Box
        sx={{
          color: "secondary.main",
          textAlign: "center",
          width: "100%",
          zIndex: 1,
        }}
      >
        <Grow in={true} timeout={1500}>
          <Box>
            <Typography
              fontFamily="var(--font-inknut)"
              sx={{ fontSize: { xs: 32, sm: 50, md: 64 } }}
            >
              KOI MART FARM
            </Typography>
            <Typography variant="body1" sx={{ color: "text.primary" }}>
              ปลาคาร์ฟแฟนซีจากฟาร์มญี่ปุ่นชั้นนำ
            </Typography>
          </Box>
        </Grow>
      </Box>
    </Box>
  );
}
