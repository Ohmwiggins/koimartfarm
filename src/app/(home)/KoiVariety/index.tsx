"use client";

import { Box, Grid, Grow } from "@mui/material";
import KoiVarietyBox from "./KoiVarietyBox";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { supabase } from "../../../lib/supabase";

interface KoiVarietyRow {
  name_en: string;
  name_th: string;
  img: string;
  characteristics: string[];
  symbolism: string[];
}

const KoiVarietyItem = ({ koi }: { koi: KoiVarietyRow }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <Grid size={{ xs: 12, sm: 6 }}>
      <Box ref={ref} sx={{ paddingY: 5 }}>
        <Grow in={inView} timeout={2000}>
          <Box>
            <KoiVarietyBox
              img={koi.img}
              type={`${koi.name_en} (${koi.name_th})`}
              characteristic={koi.characteristics}
              meaning={koi.symbolism}
            />
          </Box>
        </Grow>
      </Box>
    </Grid>
  );
};

function KoiVariety() {
  const [varieties, setVarieties] = useState<KoiVarietyRow[]>([]);

  useEffect(() => {
    supabase
      .from("koi_varieties")
      .select("name_en, name_th, img, characteristics, symbolism")
      .order("sort_order")
      .then(({ data, error }) => {
        console.log("[koi_varieties] data:", data, "error:", error);
        if (data) setVarieties(data as KoiVarietyRow[]);
      });
  }, []);

  return (
    <Box sx={{ paddingX: { xs: 2, sm: 0 } }}>
      <Grid container spacing={4}>
        {varieties.map((koi, index) => (
          <KoiVarietyItem key={index} koi={koi} />
        ))}
      </Grid>
    </Box>
  );
}

export default KoiVariety;
