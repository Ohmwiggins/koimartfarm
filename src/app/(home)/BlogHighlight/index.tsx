"use client";

import { Box, Grid, Grow } from "@mui/material";
import BlogCard from "./BlogCard";
import { useInView } from "react-intersection-observer";

function BlogHighlight() {
  const { ref: blogHighlightRef, inView: blogHilightInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <Grid
      container
      spacing={{ xs: 3, md: 4 }}
      ref={blogHighlightRef}
      sx={{ justifyContent: "center" }}
    >
      {/* Featured Card - Full width on mobile, half on desktop */}
      <Grid size={{ xs: 12, md: 6 }}>
        <Grow in={blogHilightInView} timeout={1000}>
          <Box sx={{ display: "flex", justifyContent: "center", height: "100%" }}>
            <BlogCard
              blogId={"where-to-find-koi"}
              title={"ไปตามหาปลาคาร์ฟที่ญี่ปุ่น ไปที่ไหนกันดี"}
              img={"/img/blogs/where-to-find-koi/blog1-0.png"}
              desc={"บทความ"}
              variant="featured"
            />
          </Box>
        </Grow>
      </Grid>

      {/* Secondary Card */}
      <Grid size={{ xs: 12, sm: 6, md: 6 }}>
        <Grow in={blogHilightInView} timeout={1200}>
          <Box sx={{ display: "flex", justifyContent: "center", height: "100%" }}>
            <BlogCard
              blogId={"how-to-choose-koi"}
              title={"ธรรมเนียมการเลือกซื้อปลาที่ญี่ปุ่น"}
              img={"/img/blogs/how-to-choose-koi/blog2-banner.png"}
              desc={"บทความ"}
              variant="secondary"
            />
          </Box>
        </Grow>
      </Grid>

      {/* Standard Cards - 3 columns on desktop */}
      <Grid size={{ xs: 12, sm: 6, md: 4 }}>
        <Grow in={blogHilightInView} timeout={1400}>
          <Box sx={{ display: "flex", justifyContent: "center", height: "100%" }}>
            <BlogCard
              blogId={"koi-appreciation"}
              title={"การเลือกปลาจากรูปร่างเราดูกันอย่างไรบ้าง"}
              img={"/img/blogs/koi-appreciation/blog3-banner.png"}
              desc={"บทความ"}
            />
          </Box>
        </Grow>
      </Grid>

      <Grid size={{ xs: 12, sm: 6, md: 4 }}>
        <Grow in={blogHilightInView} timeout={1600}>
          <Box sx={{ display: "flex", justifyContent: "center", height: "100%" }}>
            <BlogCard
              blogId={"shape-quality-pattern"}
              title={"รูปร่าง > คุณภาพ > แพตเทิร์น"}
              img={"/img/blogs/shape-quality-pattern/blog4-banner.png"}
              desc={"บทความ"}
            />
          </Box>
        </Grow>
      </Grid>

      <Grid size={{ xs: 12, sm: 6, md: 4 }}>
        <Grow in={blogHilightInView} timeout={1800}>
          <Box sx={{ display: "flex", justifyContent: "center", height: "100%" }}>
            <BlogCard
              blogId={"importing-koi-from-japan"}
              title={"ไปซื้อปลาที่ญี่ปุ่น ควรไปกับใคร และมีค่าใช้จ่ายอะไรบ้าง"}
              img={"/img/blogs/importing-koi-from-japan/blog5-banner.png"}
              desc={"บทความ"}
            />
          </Box>
        </Grow>
      </Grid>

      <Grid size={{ xs: 12, sm: 6, md: 4 }}>
        <Grow in={blogHilightInView} timeout={2000}>
          <Box sx={{ display: "flex", justifyContent: "center", height: "100%" }}>
            <BlogCard
              blogId={"koi-hunting-tips-1"}
              title={"Koi hunting tips 1"}
              img={"/img/blogs/koi-hunting-tips-1/blog6-banner.png"}
              desc={"บทความ"}
            />
          </Box>
        </Grow>
      </Grid>

      <Grid size={{ xs: 12, sm: 6, md: 4 }}>
        <Grow in={blogHilightInView} timeout={2200}>
          <Box sx={{ display: "flex", justifyContent: "center", height: "100%" }}>
            <BlogCard
              blogId={"koi-hunting-tips-2"}
              title={"Koi hunting tips 2"}
              img={"/img/blogs/koi-hunting-tips-2/blog7-banner.png"}
              desc={"บทความ"}
            />
          </Box>
        </Grow>
      </Grid>
    </Grid>
  );
}

export default BlogHighlight;
