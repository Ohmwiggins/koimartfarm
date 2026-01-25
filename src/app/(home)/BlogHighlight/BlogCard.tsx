"use client";

import { Box, Card, CardContent, Typography } from "@mui/material";
import Image from "next/image";
import LinkedFilledButton from "../../../components/LinkedFilledButton";

function BlogCard({
  blogId,
  title,
  img,
  desc,
}: {
  blogId: string;
  title: string;
  img: string;
  desc: string;
}) {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        width: 330,
        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Image
        src={img}
        alt={title}
        width={800}
        height={1000}
        style={{
          width: "auto",
          height: 200,
          objectFit: "cover",
          display: "block",
        }}
      />
      <CardContent>
        <Typography variant="body2" noWrap>
          {desc}
        </Typography>
        <Typography variant="body2" noWrap sx={{ fontWeight: "bold" }}>
          {title}
        </Typography>
      </CardContent>
      <Box sx={{ padding: 1 }}>
        <LinkedFilledButton text="อ่านต่อ" path={`/blog/${blogId}`} />
      </Box>
    </Card>
  );
}

export default BlogCard;
