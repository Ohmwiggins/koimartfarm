"use client";

import { Box, Grid, Grow } from "@mui/material";
import blogs from "../../../data/blog.json";
import BlogCard from "./Blog";
import { useInView } from "react-intersection-observer";

function BlogHighlight() {
  const { ref: blogHighlightRef, inView: blogHilightInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <Grid
      container
      spacing={2}
      ref={blogHighlightRef}
      sx={{ justifyContent: "center" }}
    >
      {blogs.map((b, index) => (
        <Grid key={b.id} size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 3 }}>
          <Grow in={blogHilightInView} timeout={1000 + index * 1000}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <BlogCard
                blogId={b.id}
                title={b.title}
                img={b.img}
                desc={b.detail}
              />
            </Box>
          </Grow>
        </Grid>
      ))}
    </Grid>
  );
}

export default BlogHighlight;
