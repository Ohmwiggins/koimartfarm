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

export default async function KoiVarietiesPage() {
  const { data: post } = await supabase
    .from("blog_highlights")
    .select("title, content")
    .eq("blog_id", "koi-varieties")
    .single();

  if (!post) notFound();

  let varieties: KoiVarietyRow[] = [];
  try {
    varieties = JSON.parse(post.content ?? "[]");
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
          {varieties.map((koi, index) => (
            <Grid size={{ xs: 12, sm: 6 }} key={index}>
              <Box sx={{ paddingY: 5 }}>
                <KoiVarietyBox
                  img={koi.img}
                  type={`${koi.name_en} (${koi.name_th})`}
                  characteristic={koi.characteristics}
                  meaning={koi.symbolism}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
