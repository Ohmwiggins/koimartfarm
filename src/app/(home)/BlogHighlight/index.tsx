"use client";

import { Box, Grid, Grow } from "@mui/material";
import BlogCard from "./BlogCard";
import { useInView } from "react-intersection-observer";

const blogs = [
  { blogId: "where-to-find-koi", title: "ไปตามหาปลาคาร์ฟที่ญี่ปุ่น ไปที่ไหนกันดี", img: "/img/blogs/where-to-find-koi/blog1-0.png" },
  { blogId: "how-to-choose-koi", title: "ธรรมเนียมการเลือกซื้อปลาที่ญี่ปุ่น", img: "/img/blogs/how-to-choose-koi/blog2-banner.png" },
  { blogId: "koi-appreciation", title: "การเลือกปลาจากรูปร่างเราดูกันอย่างไรบ้าง", img: "/img/blogs/koi-appreciation/blog3-banner.png" },
  { blogId: "shape-quality-pattern", title: "รูปร่าง > คุณภาพ > แพตเทิร์น", img: "/img/blogs/shape-quality-pattern/blog4-banner.png" },
  { blogId: "importing-koi-from-japan", title: "ไปซื้อปลาที่ญี่ปุ่น ควรไปกับใคร และมีค่าใช้จ่ายอะไรบ้าง", img: "/img/blogs/importing-koi-from-japan/blog5-banner.png" },
  { blogId: "koi-hunting-tips-1", title: "Koi hunting tips 1", img: "/img/blogs/koi-hunting-tips-1/blog6-banner.png" },
  { blogId: "koi-hunting-tips-2", title: "Koi hunting tips 2", img: "/img/blogs/koi-hunting-tips-2/blog7-banner.png" },
];

function BlogHighlight() {
  const { ref: blogHighlightRef, inView: blogHilightInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      ref={blogHighlightRef}
    >
      {blogs.map((blog, index) => (
        <Grid key={blog.blogId} size={{ xs: 12, sm: 6, md: 3 }}>
          <Grow in={blogHilightInView} timeout={800 + index * 150}>
            <Box sx={{ display: "flex", height: "100%" }}>
              <BlogCard
                blogId={blog.blogId}
                title={blog.title}
                img={blog.img}
                desc={"Heading"}
              />
            </Box>
          </Grow>
        </Grid>
      ))}
    </Grid>
  );
}

export default BlogHighlight;
