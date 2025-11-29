import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";

function History() {
  return (
    <Grid container>
      <Grid size={{ sm: 12, md: 5 }}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Image
            src={"/img/japan.png"}
            alt="KoiMartFarm Japan"
            width={800}
            height={800}
            style={{ width: "60%", height: "auto", display: "block" }}
          />
        </Box>
      </Grid>
      <Grid size={{ sm: 12, md: 7 }}>
        <Grid container spacing={2}>
          <Grid size={12}>
            <Typography
              variant="body2"
              color="text.primary"
              sx={{ paddingTop: { sm: 10, md: 0 } }}
            >
              Koi Mart Farm เกิดจากความหลงใหลในความงามของปลาโค่ย
              เราเชื่อว่าปลาโค่ยไม่ใช่เพียงสัตว์เลี้ยง
              แต่คือสัญลักษณ์แห่งความสง่างาม ความโชคดี และความพากเพียร
              เราจึงตั้งใจสร้างพื้นที่ที่รวมปลาโค่ยคุณภาพสูง เพื่อมอบความสุข
              และคุณค่าที่มากกว่าการเลี้ยงปลา
            </Typography>
          </Grid>
          <Grid size={12} paddingY={5}>
            <Grid container spacing={8}>
              <Grid size={{ sm: 12, md: 4 }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography variant="h3" color="secondary.main">
                    จากประเทศญี่ปุ่นสู่ประเทศไทย
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.primary"
                    paddingTop={2}
                  >
                    เมื่อปลาโค่ยมาถึงประเทศไทย เราดูแลด้วยมาตรฐานสูงสุด
                    ทั้งระบบน้ำที่สะอาด การกักกัน (quarantine)
                    และการให้อาหารที่เหมาะสมเพื่อให้ปลาทุกตัวแข็งแรงและพร้อมไปสร้างความสุขในบ่อของคุณ
                  </Typography>
                </Box>
              </Grid>
              <Grid size={{ sm: 12, md: 4 }}>
                <Typography variant="h3" color="secondary.main">
                  ความภาคภูมิใจของเรา
                </Typography>
                <Typography variant="body2" color="text.primary" paddingTop={2}>
                  สิ่งที่ทำให้เราภูมิใจที่สุดคือ
                  การได้เห็นลูกค้าของเราไม่เพียงแค่มีปลาโค่ยสวยงามในครอบครอง
                  แต่ยังประสบ ความสำเร็จในเวทีประกวดระดับประเทศอีกด้วย
                  ปลาโค่ยจาก Koi Mart Farm จึงเป็นเครื่องพิสูจน์ถึงคุณภาพมาตรฐาน
                  และความตั้งใจที่เรามอบให้ในทุกชีวิต
                </Typography>
              </Grid>
              <Grid size={{ sm: 12, md: 4 }}>
                <Typography variant="h3" color="secondary.main">
                  การคัดสรรค์ปลาที่ดีที่สุดจากประเทศญี่ปุ่น
                </Typography>
                <Typography variant="body2" color="text.primary" paddingTop={2}>
                  เมื่อปลาโค่ยมาถึงประเทศไทย เราดูแลด้วยมาตรฐานสูงสุด
                  ทั้งระบบน้ำที่สะอาด การกักกัน (quarantine)
                  และการให้อาหารที่เหมาะสมเพื่อให้ปลาทุกตัวแข็งแรงและพร้อมไปสร้างความสุขในบ่อของคุณ
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default History;
