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
              justifyContent: { xs: "center" },
              marginRight: { xs: 0, sm: 4 },
            }}
          >
            <Image
              src={img}
              alt={"KoiMartFarm Varieties " + img}
              width={150}
              height={200}
              style={{
                width: "auto",
                height: "100%",
                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
              }}
            />
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 7 }}>
          <Box
            sx={{
              width: "100%",
              mx: { xs: "10%", sm: 0 },
              my: { xs: 2, sm: 2, md: 0 },
            }}
          >
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
