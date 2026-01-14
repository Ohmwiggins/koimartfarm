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
                เริ่มจากความชื่นชอบและรักที่จะเลี้ยง
                <br />
                ปลาคาร์ฟมาเป็นเวลายาวนานของคุณพ่อ สุชาติ ศุภทนต์
              </Typography>
              <Typography
                variant="body2"
                color="text.primary"
                sx={{
                  lineHeight: 1.5,
                }}
              >
                <br />
                ตั้งแต่ผมเด็ก ๆ จนถึงผมเป็นวัยรุ่น
                <br />
                ผมเองได้รับผิดชอบการดูแลปลาคาร์ฟด้วยความรู้สึกสนุกและตื่นเต้นในช่วงเวลานั้น
                <br />
                ผมเองก็ได้เห็นหลายสิ่งหลายอย่างในการเปลี่ยนแปลงของพัฒนาการในด้านต่าง
                <br />
                ๆ ของปลาคาร์ฟ การเติบโตที่มีสีสันสดใส ลวดลายที่สวยงาม
                <br />
                และดูแปลกตาของแต่ละสายพันธุ์
                <br />
                <br />
                รูปร่างโครงสร้างที่ใหญ่ของตัวปลา
                อีกทั้งเรื่องราวความเป็นมาของปลาคาร์ฟที่มีมายาวนานนับพันปี
                <br />
                ความหมายของการเลี้ยงปลาคาร์ฟที่ดี มีเอกลักษณ์ และอุดมสมบูรณ์
                <br />
                ด้วยเสน่ห์เหล่านี้
                จึงเป็นแรงบันดาลใจที่อยากถ่ายทอดความรู้สึกและความหมายดี ๆ
                ในการเลี้ยงปลาคาร์ฟ
                ซึ่งถือว่าเป็นงานอดิเรกอย่างหนึ่งที่ทุกคนเข้าถึงได้ เด็ก
                หนุ่มสาว วัยทำงาน คนเกษียณ ผู้หญิงหรือผู้ชาย
                ที่สามารถเข้าถึงความสุขที่อิ่มเอมได้ทุกช่วงวัยไปพร้อม ๆ
                กันได้อย่างลงตัว
                <br />
                และเป็นศูนย์กลางของความสุขในครอบครัวได้เป็นอย่างดี
                <br />
                ความรู้สึกดี ๆ เหล่านี้เป็นที่มาของความสุข ที่ผมสามารถแชร์ถึงทุก
                ๆ คนได้ ผ่านทาง โค่ยมาร์ฟาร์ม
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
