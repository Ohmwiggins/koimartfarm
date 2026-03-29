import { notFound } from "next/navigation";
import { createClient } from "@supabase/supabase-js";
import { Box, Container, Grid } from "@mui/material";
import PageHeader from "../../../components/PageHeader";
import KoiVarietyBox from "../../(home)/KoiVariety/KoiVarietyBox";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

interface KoiVarietyRow {
  name_en: string;
  name_th: string;
  img: string;
  characteristics: string[];
  symbolism: string[];
}

interface ContentSection {
  id: string;
  type: "koi_variety" | "video";
  content: string;
}

function getYouTubeEmbedUrl(url: string): string {
  // handles https://youtu.be/VIDEO_ID and https://www.youtube.com/watch?v=VIDEO_ID
  const shortMatch = url.match(/youtu\.be\/([^?&]+)/);
  if (shortMatch) return `https://www.youtube.com/embed/${shortMatch[1]}`;
  const longMatch = url.match(/[?&]v=([^?&]+)/);
  if (longMatch) return `https://www.youtube.com/embed/${longMatch[1]}`;
  return url;
}

export default async function KoiVarietiesPage() {
  const { data: post } = await supabase
    .from("blog_highlights")
    .select("title, content")
    .eq("blog_id", "koi-varieties")
    .single();

  if (!post) notFound();

  let sections: ContentSection[] = [];
  try {
    const parsed = JSON.parse(post.content ?? "[]");
    // Support new sectioned format (array with `type`) and legacy flat koi array
    if (parsed.length > 0 && parsed[0].type) {
      sections = parsed;
    } else {
      sections = (parsed as KoiVarietyRow[]).map((koi, i) => ({
        id: `legacy-${i}`,
        type: "koi_variety" as const,
        content: JSON.stringify(koi),
      }));
    }
  } catch {
    // malformed content
  }

  return (
    <Container maxWidth="lg">
      <Box sx={{ marginX: "8%" }}>
        <PageHeader text={post.title} />
      </Box>

      <Box sx={{ marginY: 6, paddingX: { xs: 2, sm: 0 } }}>
        <Grid container spacing={4}>
          {sections.map((section) => {
            if (section.type === "koi_variety") {
              let koi: KoiVarietyRow | null = null;
              try {
                koi = JSON.parse(section.content);
              } catch {
                return null;
              }
              if (!koi) return null;
              return (
                <Grid size={{ xs: 12, sm: 6 }} key={section.id}>
                  <Box sx={{ paddingY: 5 }}>
                    <KoiVarietyBox
                      img={koi.img}
                      type={`${koi.name_en} (${koi.name_th})`}
                      characteristic={koi.characteristics}
                      meaning={koi.symbolism}
                    />
                  </Box>
                </Grid>
              );
            }

            if (section.type === "video") {
              return (
                <Grid size={{ xs: 12 }} key={section.id}>
                  <Box
                    sx={{
                      position: "relative",
                      width: "100%",
                      paddingTop: "56.25%", // 16:9 aspect ratio
                      borderRadius: 2,
                      overflow: "hidden",
                      my: 2,
                    }}
                  >
                    <iframe
                      src={getYouTubeEmbedUrl(section.content)}
                      title="Video"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        border: "none",
                      }}
                    />
                  </Box>
                </Grid>
              );
            }

            return null;
          })}
        </Grid>
      </Box>
    </Container>
  );
}
