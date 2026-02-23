import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";

interface KoiVarietyBoxProps {
  img: string;
  type: string;
  characteristic: string[];
  meaning: string[];
}

function KoiVarietyBox({
  img,
  type,
  characteristic,
  meaning,
}: KoiVarietyBoxProps) {
  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <Grid container sx={{ width: "100%" }}>
        <Grid size={{ xs: 12, md: 5 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginRight: { xs: 0, md: 4 },
              marginBottom: { xs: 2, md: 0 },
            }}
          >
            <Image
              src={img}
              alt={"KoiMartFarm Varieties " + img}
              width={200}
              height={267}
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "200px",
                borderRadius: "16px",
              }}
            />
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 7 }}>
          <Box sx={{ width: "100%", px: { xs: 2, sm: 0 } }}>
            <Typography variant="h5" sx={{ fontWeight: 600, color: "secondary.main" }}>
              {type}
            </Typography>
            <Box sx={{ paddingTop: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box>
                <Typography
                  sx={{ fontWeight: 600, mb: 0.5, fontSize: 14, letterSpacing: "0.02em" }}
                  variant="subtitle2"
                  component="div"
                >
                  ลักษณะเด่น
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.25 }}>
                  {characteristic.map((item, index) => (
                    <Typography key={index} variant="body2" component="div" sx={{ lineHeight: 1.7, fontSize: 13 }}>
                      • {item}
                    </Typography>
                  ))}
                </Box>
              </Box>

              <Box>
                <Typography
                  sx={{ fontWeight: 600, mb: 0.5, fontSize: 14, letterSpacing: "0.02em" }}
                  variant="subtitle2"
                  component="div"
                >
                  ความหมายเชิงสัญลักษณ์
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.25 }}>
                  {meaning.map((item, index) => (
                    <Typography key={index} variant="body2" component="div" sx={{ lineHeight: 1.7, fontSize: 13 }}>
                      • {item}
                    </Typography>
                  ))}
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default KoiVarietyBox;
