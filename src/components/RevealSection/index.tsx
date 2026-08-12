"use client";

import { Box, Grow } from "@mui/material";
import { useInView } from "react-intersection-observer";
import type { SxProps, Theme } from "@mui/material";

interface RevealSectionProps {
  children: React.ReactNode;
  timeout?: number;
  threshold?: number;
  sx?: SxProps<Theme>;
}

/**
 * Scroll-reveal wrapper. Exists so pages can stay server components while
 * keeping the site's `useInView` + `<Grow>` animation — a client component may
 * receive server-rendered `children`.
 *
 * `<Grow in={false}>` applies `visibility: hidden` on first paint, which search
 * engines may discount. Keep headings and descriptive copy OUTSIDE this
 * wrapper and reveal only media/card grids with it.
 */
function RevealSection({
  children,
  timeout = 1500,
  threshold = 0.1,
  sx,
}: RevealSectionProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold });

  return (
    <Box ref={ref} sx={sx}>
      <Grow in={inView} timeout={timeout}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>{children}</Box>
      </Grow>
    </Box>
  );
}

export default RevealSection;
