"use client";

import { Box, Card, CardContent, Typography } from "@mui/material";
import Image from "next/image";
import LinkedFilledButton from "../../../components/LinkedFilledButton";

function BlogCard({
  blogId,
  title,
  img,
  desc,
  variant = "standard",
}: {
  blogId: string;
  title: string;
  img: string;
  desc: string;
  variant?: "featured" | "secondary" | "standard";
}) {
  const getImageHeight = () => {
    if (variant === "featured") return 300;
    return 200;
  };

  const getMaxWidth = () => {
    if (variant === "featured") return "100%";
    if (variant === "secondary") return 400;
    return 360;
  };

  const getTitleVariant = () => {
    if (variant === "featured") return "h4";
    return "h5";
  };

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        maxWidth: getMaxWidth(),
        height: "100%",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.06)",
        borderTop: variant === "featured" ? '4px solid' : 'none',
        borderColor: 'secondary.main',
      }}
    >
      <Image
        src={img}
        alt={title}
        width={800}
        height={1000}
        style={{
          width: "auto",
          height: getImageHeight(),
          objectFit: "cover",
          display: "block",
        }}
      />
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Typography variant="subtitle1" color="text.secondary" noWrap>
          {desc}
        </Typography>
        <Typography variant={getTitleVariant()} sx={{ fontWeight: 600, lineHeight: 1.3 }}>
          {title}
        </Typography>
      </CardContent>
      <Box sx={{ padding: 2 }}>
        <LinkedFilledButton text="อ่านต่อ" path={`/blog/${blogId}`} />
      </Box>
    </Card>
  );
}

export default BlogCard;
