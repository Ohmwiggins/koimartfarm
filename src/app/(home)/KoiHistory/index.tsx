import { Box, Fade, Grid, Grow, Typography } from "@mui/material";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

function History() {
  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: travelImgRef, inView: travelImgInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <Box>
      <Grid container sx={{ width: "100%" }}>
        <Grid ref={imageRef} size={{ sm: 12, md: 5 }}>
          <Grow in={imageInView} timeout={2000}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <Image
                src={"/img/history/ceo.png"}
                alt="KoiMartFarm Japan"
                width={800}
                height={800}
                style={{ width: "60%", height: "auto", display: "block" }}
              />
            </Box>
          </Grow>
        </Grid>
        <Grid ref={textRef} size={{ sm: 12, md: 7 }}>
          <Grow in={textInView} timeout={2000}>
            <Box
              sx={{ display: "flex", flexDirection: "column", paddingTop: 2 }}
            >
              <Typography variant="body1" color="text.primary">
                เริ่มต้นจากความชื่นชอบ และรักที่จะเลี้ยงปลาคาร์ปมาเป็นเวลายาวนาน
                ของคุณพ่อ สุชาติ ศุภทนต์
              </Typography>
              <Typography
                variant="body2"
                color="text.primary"
                sx={{
                  lineHeight: 1.5,
                }}
              >
                <br />
                ตั้งแต่ผมยังเด็ก จนถึงช่วงวัยรุ่น
                ผมได้รับผิดชอบการดูแลปลาคาร์ปด้วยความรู้สึกสนุกและตื่นเต้น
                <br />
                ในช่วงเวลานั้น ผมได้เห็นหลายสิ่งหลายอย่างจากการเปลี่ยนแปลง
                และพัฒนาการในด้านต่างๆ ของปลา...
                <br />
                <br />
                ทั้งการเติบโตที่มีสีสันสดใส ลวดลายที่สวยงาม
                ดูแปลกตาในแต่ละสายพันธุ์
                <br />
                ไปจนถึงรูปร่างโครงสร้างที่ใหญ่โตของตัวปลา
                <br />
                อีกทั้งเรื่องราวความเป็นมาของปลาคาร์ปที่มีมายาวนานนับพันปี
                และความหมายของ <br />
                การเลี้ยงที่มีเอกลักษณ์ สื่อถึงความอุดมสมบูรณ์ ความมั่งคั่ง
                และร่ำรวย
                <br />
                <br />
                ด้วยเสน่ห์เหล่านี้... จึงเป็นแรงบันดาลใจ
                ที่อยากจะถ่ายทอดความรู้สึกและความหมายดีๆ
                <br /> ในการเลี้ยงปลาคาร์ป
                ซึ่งถือว่าเป็นงานอดิเรกที่ทุกคนเข้าถึงได้
                <br />
                <br />
                ไม่ว่าจะเป็นเด็ก หนุ่มสาว วัยทำงาน คนเกษียณ ผู้หญิง หรือผู้ชาย
                ก็สามารถเข้าถึงความสุขที่อิ่มเอม
                <br /> ได้ทุกช่วงวัยไปพร้อมๆ กันได้อย่างลงตัว
                และยังเป็นศูนย์กลางของความสุขในครอบครัวได้เป็นอย่างดี
                <br />
                ความรู้สึกดีๆ เหล่านี้ เป็นที่มาของความสุขที่ผมสามารถแชร์ถึงทุกๆ
                คนได้ ผ่านทาง "โค่ยมาร์ทฟาร์ม" (Koi Mart Farm)
                <br />
                <br />
              </Typography>
              <Box>
                <Typography variant="h5">บวรศักดิ์ ศุภทนต์</Typography>
                <Typography variant="body1">CEO KOIMART GROUP</Typography>
              </Box>
            </Box>
          </Grow>
        </Grid>
      </Grid>
      <Grid
        container
        columns={{ xs: 12, sm: 12, md: 10 }}
        ref={travelImgRef}
        spacing={1}
        sx={{ marginTop: 10, mx: 2 }}
      >
        {[...Array(16)].map((_, index) => (
          <Grid
            key={index}
            size={{ xs: 6, sm: 4, md: 2 }}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Fade in={travelImgInView} timeout={index * 300}>
              <Image
                src={`/img/history/lists/list${index + 1}.png`}
                alt="KoiMartFarm Japan"
                width={800}
                height={800}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </Fade>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default History;
