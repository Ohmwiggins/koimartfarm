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
        position: 'relative',
        height: "80vh",
        overflow: "hidden",
        paddingTop: "60px",
      }}
    >
      {/* Full-bleed carousel background */}
      <Box
        ref={scrollRef}
        onWheel={handleInteraction}
        onTouchStart={handleInteraction}
        onTouchMove={handleInteraction}
        sx={{
          position: 'absolute',
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

      {/* Dark gradient overlay for text contrast */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.4) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Asymmetric text overlay - left-aligned, bottom positioned */}
      <Box
        sx={{
          position: 'absolute',
          left: { xs: '5%', md: '10%' },
          bottom: '15%',
          zIndex: 2,
          maxWidth: { xs: '90%', sm: '600px', md: '700px' },
        }}
      >
        <Grow in={true} timeout={1500}>
          <Box
            sx={{
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
              backdropFilter: 'blur(8px)',
              padding: 4,
              borderRadius: 2,
              borderLeft: '4px solid',
              borderColor: 'secondary.main',
            }}
          >
            <Typography
              fontFamily="var(--font-inknut)"
              sx={{
                fontSize: { xs: 40, sm: 60, md: 72 },
                color: '#ffffff',
                textShadow: '2px 2px 8px rgba(0,0,0,0.3)',
                lineHeight: 1.1,
                mb: 2,
              }}
            >
              KOI MART FARM
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: '#ffffff',
                textShadow: '1px 1px 4px rgba(0,0,0,0.3)',
              }}
            >
              ปลาคาร์ฟแฟนซีจากฟาร์มญี่ปุ่นชั้นนำ
            </Typography>
          </Box>
        </Grow>
      </Box>
    </Box>
  );
}
