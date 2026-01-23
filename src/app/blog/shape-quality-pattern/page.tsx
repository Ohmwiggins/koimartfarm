"use client";
import { Box, Container, Grid, Typography } from "@mui/material";
import PageHeader from "../../../components/PageHeader";
import Image from "next/image";
import { SocialIcon } from "../../../components/Footer/Footer.styles";
import LinkedOutlineButton from "../../../components/LinkedOutlineButton";

function ShapeQualityPatternPage() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ marginX: "8%" }}>
        <PageHeader text="รูปร่าง > คุณภาพ > แพตเทิร์น" />
      </Box>

      <Box
        sx={{
          marginY: 10,
          marginX: "10%",
          display: "flex",
          flexDirection: "column",
          gap: 5,
        }}
      >
        <Grid container spacing={2} sx={{ marginTop: 2 }}>
          <Grid size={{ xs: 12, sm: 4 }}>
            <Image
              src="/img/highlights/koi-highlight23.png"
              alt="koi-appreciation-23"
              width={800}
              height={500}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }}>
            <Image
              src="/img/highlights/koi-highlight5.png"
              alt="koi-appreciation-5"
              width={800}
              height={500}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }}>
            <Image
              src="/img/highlights/koi-highlight4.png"
              alt="koi-appreciation-4"
              width={800}
              height={500}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </Grid>
        </Grid>

        <Typography
          variant="h4"
          sx={{ whiteSpace: "pre-line", fontWeight: "normal" }}
        >
          รูปร่าง {">"} คุณภาพ {">"} แพตเทิร์น
        </Typography>
        <Typography variant="body1" sx={{ whiteSpace: "pre-line" }}>
          หากจะเปรียบปลาคาร์ฟสักตัวกับภาพเขียนหรืองานศิลปะแพตเทิร์นหรือลวดลายนั้นเปรียบเสมือนลายเส้นที่สื่อให้เห็นว่าภาพนั้นคือภาพอะไร
        </Typography>
        <Typography variant="body2" sx={{ whiteSpace: "pre-line" }}>
          คุณภาพสีนั้น เปรียบเสมือนสีที่ใช้ระบายหรือแต่งแต้มในภาพ ทั้งลายเส้น
          และการลงสี จะต้องอยู่ในเฟรม (Frame)
          ที่เป็นตัวกำหนดสเกลหรือรูปร่างของภาพ
          เฟรมนั้นก็เปรียบเสมือนรูปร่างของปลาคาร์ฟที่เป็นที่วางของลวดลายที่มีคุณภาพสีที่ดีนั่นเอง
          <br />
          <br />
          มือใหม่ที่เพิ่งเลี้ยงปลา เวลามองปลา
          สิ่งแรกที่จะสะดุดตาก็คือเรื่องของลวดลาย บางคนเห็นลวดลายที่ลงตัวสวยงาม
          หรือลวดลายแปลก ๆ โดดเด่น ก็จะเกิดความรู้สึกชอบ
          นักเลี้ยงมือใหม่จึงชื่นชอบและเลือกปลาที่มีลวดลายสวยงามก่อนเป็นอันดับแรก
          เพราะมันเป็นจุดเด่นที่สามารถมองเห็น ณ ตอนนั้น เวลานั้น
          <br />
          <br />
          แต่ถ้าหากมองลึกลงไปอีก ก็จะเป็นเรื่องของคุณภาพสี
          หากไม่มีคุณภาพของสีที่ดีมารองรับ ต่อให้ลวดลายสวยเพียงไร
          ถ้าสีที่มีความบาง เบลอ แตก และจืดจาง ก็เปรียบเสมือนภาพวาดที่ลงสีไม่สวย
          และต่อให้ปลามีลวดลายที่ยอดเยี่ยม คุณภาพสีสุดยอด
          แต่ถ้าปลาตัวนั้นมีรูปร่างไม่ดี เปรียบเสมือนเฟรมของภาพวาดที่บิดเบี้ยว
          ไม่สมส่วนแล้วล่ะก็ ปลาตัวนั้นจะไม่ถูกเรียกว่ามีคุณภาพดีเลย
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <LinkedOutlineButton
          variant="outlined"
          href="https://page.line.me/ssk0751s"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Typography variant="subtitle1">
            ชื่นชอบ / สอบถามรายละเอียดได้ที่
          </Typography>
          <SocialIcon
            src={"/img/socialmedias/line.png"}
            alt="KoiMartFarm Line"
          />
        </LinkedOutlineButton>
      </Box>
    </Container>
  );
}

export default ShapeQualityPatternPage;
