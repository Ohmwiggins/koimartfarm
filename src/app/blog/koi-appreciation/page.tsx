"use client";
import { Box, Container, Grid, Typography } from "@mui/material";
import PageHeader from "../../../components/PageHeader";
import Image from "next/image";
import { SocialIcon } from "../../../components/Footer/Footer.styles";
import LinkedOutlineButton from "../../../components/LinkedOutlineButton";

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
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <LinkedOutlineButton
          href="https://page.line.me/ssk0751s"
          variant="outlined"
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

export default KoiAppreciationPage;
