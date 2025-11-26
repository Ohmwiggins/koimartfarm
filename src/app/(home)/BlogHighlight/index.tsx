"use client";

import { Box, Grid } from "@mui/material";
import blogs from "../../../data/blog.json";
import BlogCard from "./Blog";

function BlogHighlight() {
  return (
    <Grid container spacing={2} sx={{ justifyContent: "center" }}>
      {blogs.map((b) => (
        <Grid key={b.id} size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 3 }}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <BlogCard
              blogId={b.id}
              title={b.title}
              img={b.img}
              desc={b.detail}
            />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}

export default BlogHighlight;
