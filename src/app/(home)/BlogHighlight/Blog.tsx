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
  blogId: number;
  title: string;
  img: string;
  desc: string;
}) {
  return (
    <Card sx={{ display: "flex", flexDirection: "column", maxWidth: 350 }}>
      <Image
        src={`/img/blogs/${img}`}
        alt={title}
        width={800}
        height={1000}
        style={{
          width: "auto",
          height: 150,
          objectFit: "cover",
          display: "block",
        }}
      />
      <CardContent>
        <Typography variant="body2" noWrap sx={{ fontWeight: "bold" }}>
          {title}
        </Typography>
        <Typography variant="body2" noWrap>
          {desc}
        </Typography>
      </CardContent>
      <Box sx={{ padding: 1 }}>
        <LinkedFilledButton text="อ่านต่อ" path={`/blog/${blogId}`} />
      </Box>
    </Card>
  );
}

export default BlogCard;
