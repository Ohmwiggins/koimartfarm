"use client";

import { Box, Grid, Grow } from "@mui/material";
import BlogCard from "./BlogCard";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { supabase } from "../../../lib/supabase";

interface BlogCardData {
  blogId: string;
  title: string;
  img: string;
}

function BlogHighlight() {
  const [blogs, setBlogs] = useState<BlogCardData[]>([]);

  useEffect(() => {
    supabase
      .from("blog_highlights")
      .select("blog_id, title, img")
      .order("sort_order")
      .then(({ data }) => {
        if (data) {
          setBlogs(
            data.map((d: { blog_id: string; title: string; img: string }) => ({
              blogId: d.blog_id,
              title: d.title,
              img: d.img,
            }))
          );
        }
      });
  }, []);

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
