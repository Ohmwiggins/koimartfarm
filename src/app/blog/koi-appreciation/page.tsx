"use client";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import PageHeader from "../../../components/PageHeader";
import Image from "next/image";
import highlights from "../../../data/highlight.json";
import KoiHighlightBox from "../../../components/KoiHighlightBox/KoiHighlightBox";
import { SocialIcon } from "../../../components/Footer/Footer.styles";

function KoiAppreciationPage() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ marginX: "8%" }}>
        <PageHeader text="Koi Appreciation" />
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
              src="/img/blogs/koi-appreciation/blog3-0.png"
              alt="koi-appreciation-0"
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
              src="/img/blogs/koi-appreciation/blog3-1.png"
              alt="koi-appreciation-1"
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
              src="/img/blogs/koi-appreciation/blog3-2.png"
              alt="koi-appreciation-1"
              width={800}
              height={500}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </Grid>
        </Grid>
        <Typography variant="h4" sx={{ whiteSpace: "pre-line" }}>
          การเลือกปลาจากรูปร่าง เราดูกันอย่างไรบ้าง
        </Typography>
        <Typography variant="body2" sx={{ whiteSpace: "pre-line" }}>
          1. ความกว้างของปากและคาง
          ที่มีผลต่อศักยภาพในการเจริญเติบโตและขนาดของปลา
          <br />
          <br />
          2. ความห่างของตานั้นมีความสัมพันธ์กับขนาดของกะโหลก
          ปลาที่มีระยะห่างระหว่างดวงตาทั้งสองดวงกว้าง
          แทบทุกตัวจะเป็นปลาที่มีกะโหลกกว้าง และปลาที่มีกะโหลกกว้าง
          จะมีแนวโน้มที่จะโตเป็นปลาจัมโบ้ที่มีขนาดใหญ่ได้
          <br />
          <br />
          3. ความยาวของกะโหลก เป็นเรื่องที่ควรให้ความสำคัญ
          ปลาที่กะโหลกกว้างแต่สั้น มักจะเป็นปลาที่เติบโตได้ดีในช่วงแรก
          แต่ในระยะยาวจะสู้ปลาที่มีกะโหลกทั้งกว้างและยาวไม่ได้
          และต้องไม่ลืมว่าปลาแต่ละสายพันธุ์มีรูปทรงของกะโหลกแตกต่างกัน โดยทั่วไป
          Showa และ Shiro Utsuri จะมีรูปทรงหัวสั้นกว่าปลาโคฮากุและสายพันธุ์อื่น
          ๆ
          <br />
          <br />
          4. ความกว้างของไหล่
          ปลาบางตัวจะมีขนาดไหล่กว้างเกินไปเมื่อเทียบกับความยาวลำตัว
          จนทำให้ปลาดูสั้น ในทางกลับกัน
          ปลาที่มีขนาดความกว้างของไหล่เล็กแคบเกินไปเมื่อเทียบกับความยาวลำตัว
          ก็จะดูเป็นปลาที่มีรูปร่างผอมยาว
          ส่วนมากมักจะเป็นปลาตัวผู้ที่โครงสร้างไม่ดีและยากที่จะเลี้ยงให้ล่ำขึ้นมาได้
          ความชอบของแต่ละคนต่างกัน
          บางคนชอบปลาเล็กที่หุ่นหนาล่ำเหมือนนักกล้ามตั้งแต่ยังตัวเล็ก ๆ
          บางคนชอบปลาที่มีรูปร่างหรือโครงสร้างดีเพื่อรองรับการเติบโตในอนาคต
          หรือเลือกปลาที่สวยในวันหน้านั่นเอง
          <br />
          <br />
          5. กล้ามเนื้อที่เป็นสันจากหัวปลาวิ่งไปหาปลายกระโดง
          จุดนี้เป็นอีกส่วนที่สำคัญมาก สันหลังที่หนา ดูแข็งแรง
          จะช่วยประคองปลาเมื่อเติบโตขึ้น ทำให้รูปร่างไม่ย้อย หลังไม่แอ่น
          <br />
          <br />
          6. โหนกหลังเมื่อมองจากด้านข้าง หรือ side view
          ปลาคาร์ฟนั้นมีโครงสร้างแตกต่างกันไปตามสายเลือดหรือ Bloodline เช่น
          ปลาจาก Sakai Fish Farm นั้น ส่วนใหญ่จะมีสันหลังที่สูง
          ลักษณะการโค้งของโหนกหลังจะต้องกลมกลืนกันทั้งตัว ถึงจะมองดูสมส่วน
          <br />
          <br />
          7. ข้อหางของปลา จุดนี้สำคัญมากเช่นกัน ปลาที่ดีที่มีศักยภาพในการเติบโต
          ต้องมีข้อหางที่อวบหนา กลมกลืนกับช่วงท้อง
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {highlights.map((h) => (
            <Grid key={h.id} size={{ xs: 6, sm: 4, md: 3 }}>
              <Box>
                <KoiHighlightBox img={h.img} desc={h.detail} />
              </Box>
            </Grid>
          ))}
        </Grid>
        <Typography variant="h4" sx={{ whiteSpace: "pre-line" }}>
          Koi Appreciation
        </Typography>
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
      <Box>
        <Button
          variant="outlined"
          sx={{
            mx: "auto",
            color: "text.primary",
            borderColor: "text.primary",
            borderRadius: 2,
            paddingX: 3,
            paddingY: 1,
            fontWeight: "bold",
            "&:hover": {
              borderColor: "text.primary",
            },
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 1,
          }}
          onClick={() => window.open("https://page.line.me/ssk0751s", "_blank")}
        >
          <Typography variant="subtitle1">
            ชื่นชอบ / สอบถามรายละเอียดได้ที่
          </Typography>
          <SocialIcon
            src={"/img/socialmedias/line.png"}
            alt="KoiMartFarm Line"
          />
        </Button>
      </Box>
    </Container>
  );
}

export default KoiAppreciationPage;
