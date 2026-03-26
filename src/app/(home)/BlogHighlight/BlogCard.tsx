"use client";

import { Box, Card, CardContent, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";
import Link from "next/link";

function BlogCard({
  blogId,
  title,
  img,
  desc,
  content,
}: {
  blogId: string;
  title: string;
  img: string;
  desc: string;
  content: string;
}) {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        borderRadius: "16px",
        border: "1px solid rgba(197, 165, 90, 0.35)",
        transition: "transform 0.25s ease, box-shadow 0.25s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 12px 32px rgba(0,0,0,0.12)",
        },
      }}
    >
      {/* Image — fixed 200px height (25×8pt) */}
      <Box sx={{ position: "relative", overflow: "hidden", width: "100%", height: 200, flexShrink: 0 }}>
        <Image
          src={img}
          alt={title}
          width={800}
          height={1000}
          className="transition-transform duration-500 hover:scale-105"
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      </Box>

      {/* Content — 24px padding on all sides */}
      <CardContent
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          gap: 1,          /* 8px */
          p: 3,            /* 24px */
          "&:last-child": { pb: 3 },
        }}
      >
        {/* Category label — 11px, uppercase, tracking */}
        <Typography
          sx={{
            color: "secondary.main",
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            lineHeight: 1.5,
            fontFamily: "var(--font-inter)",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {desc}
        </Typography>

        {/* Content — 14px, 2-line clamp with ellipsis */}
        <Typography
          sx={{
            fontSize: 14,
            lineHeight: 1.6,
            color: "text.secondary",
            flexGrow: 1,
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {content}
        </Typography>
      </CardContent>

      {/* Read More — 24px horizontal, 24px bottom = consistent with content */}
      <Box sx={{ px: 3, pb: 3, pt: 0 }}>
        <Link
          href={`/blog/${blogId}`}
          className="group inline-flex items-center gap-2 transition-all duration-300 hover:gap-3"
          style={{ color: "#C5A55A", textDecoration: "none" }}
        >
          <Typography
            sx={{
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "0.04em",
              lineHeight: 1.5,
              fontFamily: "var(--font-inter)",
              color: "#C5A55A",
            }}
          >
            Read More
          </Typography>
          <ArrowForwardIcon
            sx={{
              fontSize: 16,
              color: "#C5A55A",
              transition: "transform 0.3s ease",
              ".group:hover &": { transform: "translateX(4px)" },
            }}
          />
        </Link>
      </Box>
    </Card>
  );
}

export default BlogCard;
