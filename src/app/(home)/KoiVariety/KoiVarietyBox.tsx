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
                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
              }}
            />
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 7 }}>
          <Box sx={{ width: "100%", mx: { xs: "10%", sm: 0 } }}>
            <Typography variant="h4" color="secondary.main">
              {type}
            </Typography>
            <Box paddingTop={2}>
              <Typography
                sx={{ fontWeight: "bold" }}
                variant="body2"
                component="div"
              >
                ลักษณะเด่น
              </Typography>
              {characteristic.map((item, index) => (
                <Typography key={index} variant="body2" component="div">
                  - {item}
                </Typography>
              ))}
              <Box sx={{ height: "1em" }} />
              <Typography
                sx={{ fontWeight: "bold" }}
                variant="body2"
                component="div"
              >
                ความหมายเชิงสัญลักษณ์
              </Typography>
              {meaning.map((item, index) => (
                <Typography key={index} variant="body2" component="div">
                  - {item}
                </Typography>
              ))}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default KoiVarietyBox;
