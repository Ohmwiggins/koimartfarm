"use client";

import { Box, Grid, Grow, Pagination, useMediaQuery, useTheme } from "@mui/material";
import BlogCard from "./BlogCard";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { supabase } from "../../../lib/supabase";

interface BlogCardData {
  blogId: string;
  title: string;
  img: string;
  content: string;
}

function BlogHighlight() {
  const [blogs, setBlogs] = useState<BlogCardData[]>([]);
  const [page, setPage] = useState(1);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "lg"));
  const perPage = isMobile || isTablet ? 4 : 8;

  useEffect(() => {
    supabase
      .from("blog_highlights")
      .select("blog_id, title, img, content")
      .order("sort_order")
      .then(({ data }) => {
        if (data) {
          setBlogs(
            data.map((d: { blog_id: string; title: string; img: string; content: string }) => {
              let preview = "";
              try {
                const blocks: { type: string; content: string }[] = JSON.parse(d.content ?? "[]");
                preview = blocks.find((b) => b.type === "paragraph")?.content ?? "";
              } catch {
                preview = d.content ?? "";
              }
              return {
                blogId: d.blog_id,
                title: d.title,
                img: d.img,
                content: preview,
              };
            })
          );
        }
      });
  }, []);

  const totalPages = Math.ceil(blogs.length / perPage);
  const paginated = blogs.slice((page - 1) * perPage, page * perPage);

  const { ref: blogHighlightRef, inView: blogHilightInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box>
      <Grid container spacing={{ xs: 2, md: 3 }} ref={blogHighlightRef}>
        {paginated.map((blog, index) => (
          <Grid key={blog.blogId} size={{ xs: 12, sm: 6, md: 3 }}>
            <Grow in={blogHilightInView} timeout={800 + index * 150}>
              <Box sx={{ display: "flex", height: "100%" }}>
                <BlogCard
                  blogId={blog.blogId}
                  title={blog.title}
                  img={blog.img}
                  desc={blog.title}
                  content={blog.content}
                />
              </Box>
            </Grow>
          </Grid>
        ))}
      </Grid>

      {totalPages > 1 && (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
          <Pagination
            count={totalPages}
            page={page}
            onChange={(_, value) => {
              setPage(value);
            }}
            sx={{
              "& .MuiPaginationItem-root": {
                color: "primary.main",
                fontFamily: "var(--font-inter)",
                fontWeight: 600,
              },
              "& .MuiPaginationItem-root.Mui-selected": {
                backgroundColor: "secondary.main",
                color: "#fff",
                "&:hover": { backgroundColor: "secondary.light" },
              },
            }}
          />
        </Box>
      )}
    </Box>
  );
}

export default BlogHighlight;
