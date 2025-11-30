import { Box, Grid, Grow, Typography } from "@mui/material";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

function History() {
  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: text1Ref, inView: text1InView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: text2Ref, inView: text2InView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: text3Ref, inView: text3InView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: text4Ref, inView: text4InView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <Grid container>
      <Grid ref={imageRef} size={{ sm: 12, md: 5 }}>
        <Grow in={imageInView} timeout={2000}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Image
              src={"/img/japan.png"}
              alt="KoiMartFarm Japan"
              width={800}
              height={800}
              style={{ width: "60%", height: "auto", display: "block" }}
            />
          </Box>
        </Grow>
      </Grid>
      <Grid size={{ sm: 12, md: 7 }}>
        <Grid container spacing={2}>
          <Grid ref={text1Ref} size={12}>
            <Grow in={text1InView} timeout={2000}>
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
            </Grow>
          </Grid>
          <Grid size={12} paddingY={5}>
            <Grid container spacing={8}>
              <Grid ref={text2Ref} size={{ sm: 12, md: 4 }}>
                <Grow in={text2InView} timeout={2000}>
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
                </Grow>
              </Grid>
              <Grid ref={text3Ref} size={{ sm: 12, md: 4 }}>
                <Grow in={text3InView} timeout={2000}>
                  <Box>
                    <Typography variant="h3" color="secondary.main">
                      ความภาคภูมิใจของเรา
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.primary"
                      paddingTop={2}
                    >
                      สิ่งที่ทำให้เราภูมิใจที่สุดคือ
                      การได้เห็นลูกค้าของเราไม่เพียงแค่มีปลาโค่ยสวยงามในครอบครอง
                      แต่ยังประสบ ความสำเร็จในเวทีประกวดระดับประเทศอีกด้วย
                      ปลาโค่ยจาก Koi Mart Farm
                      จึงเป็นเครื่องพิสูจน์ถึงคุณภาพมาตรฐาน
                      และความตั้งใจที่เรามอบให้ในทุกชีวิต
                    </Typography>
                  </Box>
                </Grow>
              </Grid>
              <Grid ref={text4Ref} size={{ sm: 12, md: 4 }}>
                <Grow in={text4InView} timeout={2000}>
                  <Box>
                    <Typography variant="h3" color="secondary.main">
                      การคัดสรรค์ปลาที่ดีที่สุดจากประเทศญี่ปุ่น
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
                </Grow>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default History;
