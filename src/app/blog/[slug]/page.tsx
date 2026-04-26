import { notFound } from "next/navigation";
import { createClient } from "@supabase/supabase-js";
import { Box, Container, Typography } from "@mui/material";
import PageHeader from "../../../components/PageHeader";
import Linkify from "../../../components/Linkify";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

interface ContentBlock {
  id: string;
  type: "paragraph" | "heading" | "image" | "video";
  content: string;
}

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

function renderBlocks(blocks: ContentBlock[]) {
  return blocks.map((block) => {
    if (block.type === "heading") {
      return (
        <Typography
          key={block.id}
          variant="h5"
          sx={{ fontWeight: 600, mt: 4, mb: 1.5 }}
        >
          {block.content}
        </Typography>
      );
    }

    if (block.type === "image") {
      return (
        <Box key={block.id} sx={{ my: 4, textAlign: "center" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={block.content}
            alt=""
            style={{ maxWidth: "80%", height: "auto", borderRadius: 8 }}
          />
        </Box>
      );
    }

    if (block.type === "video") {
      const youtubeMatch = block.content.match(
        /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/
      );
      if (youtubeMatch) {
        return (
          <Box key={block.id} sx={{ my: 4, textAlign: "center" }}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                maxWidth: 800,
                mx: "auto",
                aspectRatio: "16/9",
              }}
            >
              <iframe
                src={`https://www.youtube.com/embed/${youtubeMatch[1]}`}
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  borderRadius: 8,
                  border: "none",
                }}
              />
            </Box>
          </Box>
        );
      }
      // Direct video file URL
      return (
        <Box key={block.id} sx={{ my: 4, textAlign: "center" }}>
          <video
            src={`${block.content}#t=0.001`}
            controls
            playsInline
            style={{ maxWidth: "100%", borderRadius: 8 }}
          />
        </Box>
      );
    }

    // paragraph — split on \n\n for sub-paragraphs
    return (
      <Box key={block.id}>
        {block.content.split("\n\n").map((para, i) => (
          <Typography
            key={i}
            variant="body1"
            sx={{ mb: 2, whiteSpace: "pre-line", lineHeight: 1.9 }}
          >
            <Linkify>{para}</Linkify>
          </Typography>
        ))}
      </Box>
    );
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  const { data: post } = await supabase
    .from("blog_highlights")
    .select("blog_id, title, content, published")
    .eq("blog_id", slug)
    .single();

  if (!post || !post.published) notFound();

  let blocks: ContentBlock[] = [];
  if (post.content) {
    try {
      blocks = JSON.parse(post.content);
    } catch {
      // content is plain HTML — fall back to dangerouslySetInnerHTML
    }
  }

  return (
    <Container maxWidth="lg">
      <Box sx={{ marginX: "8%" }}>
        <PageHeader text={post.title} />
      </Box>

      <Box sx={{ marginY: 6, marginX: { xs: 0, sm: "5%", md: "10%" } }}>
        {blocks.length > 0 ? (
          renderBlocks(blocks)
        ) : (
          <Box
            sx={{
              lineHeight: 1.9,
              fontSize: { xs: 15, sm: 16 },
              "& p": { mb: 2 },
              "& h3, & h4": { fontWeight: 600, mt: 4, mb: 1.5 },
              "& img": { maxWidth: "100%", borderRadius: 1 },
            }}
            dangerouslySetInnerHTML={{ __html: post.content ?? "" }}
          />
        )}
      </Box>
    </Container>
  );
}
