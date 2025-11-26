import { Box, Container, Typography } from "@mui/material";
import PageHeader from "../../../components/PageHeader";
import blogs from "../../../data/blog.json";
import { notFound } from "next/navigation";

async function Blog({ params }: { params: Promise<{ blogId: string }> }) {
  const blogId = (await params).blogId;
  const blog = blogs.find((x) => x.id === parseInt(blogId, 10));

  if (blog == null) {
    notFound();
  } else {
    return (
      <Container maxWidth="lg">
        <PageHeader text="Blog" />
        <Box sx={{ marginY: 10, marginX: "10%" }}>
          <Typography variant="h3">{blog?.title}</Typography>
          <Typography
            variant="body2"
            sx={{ whiteSpace: "pre-line", marginTop: 5 }}
          >
            {blog?.detail}
          </Typography>
        </Box>
      </Container>
    );
  }
}

export default Blog;
