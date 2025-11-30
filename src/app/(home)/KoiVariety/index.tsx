import { Box, Grid, Grow } from "@mui/material";
import KoiVarietyBox from "./KoiVarietyBox";
import { useInView } from "react-intersection-observer";

function KoiVariety() {
  const { ref: koi1Ref, inView: koi1InView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: koi2Ref, inView: koi2InView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: koi3Ref, inView: koi3InView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: koi4Ref, inView: koi4InView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: koi5Ref, inView: koi5InView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: koi6Ref, inView: koi6InView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: koi7Ref, inView: koi7InView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <Box
      sx={{
        paddingX: { xs: 5, sm: 0 },
      }}
    >
      <Grid container spacing={{ sm: 0, md: 15 }}>
        <Grid size={{ sm: 12, md: 6 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box ref={koi1Ref} sx={{ paddingY: 5 }}>
              <Grow in={koi1InView} timeout={2000}>
                <Box>
                  <KoiVarietyBox
                    img="/img/varieties/Kohaku.png"
                    type="Kohaku (โค่ฮะคุ)"
                    desc="ความเรียบง่ายที่ไร้กาลเวลา — พื้นขาวสะอาดตากับลายแดงสดชัด Kohaku คือสัญลักษณ์ของความงาม แบบดั้งเดิมที่อยู่คู่การประกวด ปลาคาร์ฟ มานานที่สุด ผู้ที่ได้ครอบครองคือผู้ที่ ได้สัมผัส จิตวิญญาณดั้งเดิมของโค่ย"
                  />
                </Box>
              </Grow>
            </Box>

            <Box ref={koi2Ref} sx={{ paddingY: 5 }}>
              <Grow in={koi2InView} timeout={2000}>
                <Box>
                  <KoiVarietyBox
                    img="/img/varieties/Sanke.png"
                    type="Sanke (ซันเกะ / Taisho Sanke)"
                    desc="ความสมดุลระหว่างสีแดง ขาว และดำ Sanke เปรียบเสมือนงานศิลปะบนผืนผ้าใบที่มีชีวิต ลวดลายที่ลงตัวทำให้เป็นที่นิยมในการโชว์ และถูกยกให้เป็นสายพันธุ์แห่งความสมบูรณ์แบบ"
                  />
                </Box>
              </Grow>
            </Box>

            <Box ref={koi3Ref} sx={{ paddingY: 5 }}>
              <Grow in={koi3InView} timeout={2000}>
                <Box>
                  <KoiVarietyBox
                    img="/img/varieties/Showa.png"
                    type="Showa (โชวะ)"
                    desc="เข้ม แข็ง และทรงพลัง พื้นดำเข้มขับลายแดงและขาวให้โดดเด่น Showa คือการผสมผสานที่ดึงดูดสายตา เหมาะสำหรับผู้ที่ชื่นชอบความแตกต่างและพลังอำนาจในบ่อปลา"
                  />
                </Box>
              </Grow>
            </Box>
          </Box>
        </Grid>

        <Grid size={{ sm: 12, md: 6 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Box ref={koi4Ref} sx={{ paddingY: 5 }}>
              <Grow in={koi4InView} timeout={2000}>
                <Box>
                  <KoiVarietyBox
                    img="/img/varieties/Ogon.png"
                    type="Ogon (โอกน)"
                    desc="ความหรูหราที่สะท้อนแสงได้ในทุกหยดน้ำ Ogon เป็นสายพันธุ์เมทัลลิก สีทอง เงิน หรือแพลทินัม แสดงถึงความมั่งคั่ง ความโชคดี และเสน่ห์เรียบง่ายที่โดดเด่นไม่เหมือนใคร"
                  />
                </Box>
              </Grow>
            </Box>

            <Box ref={koi5Ref} sx={{ paddingY: 5 }}>
              <Grow in={koi5InView} timeout={2000}>
                <Box>
                  <KoiVarietyBox
                    img="/img/varieties/Asagi.png"
                    type="Asagi (อะซางิ)"
                    desc="ความหรูหราที่สะท้อนแสงได้ในทุกหยดน้ำ Ogon เป็นสายพันธุ์เมทัลลิก สีทอง เงิน หรือแพลทินัม แสดงถึงความมั่งคั่ง ความโชคดี และเสน่ห์เรียบง่ายที่โดดเด่นไม่เหมือนใคร"
                  />
                </Box>
              </Grow>
            </Box>

            <Box ref={koi6Ref} sx={{ paddingY: 5 }}>
              <Grow in={koi6InView} timeout={2000}>
                <Box>
                  <KoiVarietyBox
                    img="/img/varieties/Asagi.png"
                    type="Asagi (อะซางิ)"
                    desc="ความหรูหราที่สะท้อนแสงได้ในทุกหยดน้ำ Ogon เป็นสายพันธุ์เมทัลลิก สีทอง เงิน หรือแพลทินัม แสดงถึงความมั่งคั่ง ความโชคดี และเสน่ห์เรียบง่ายที่โดดเด่นไม่เหมือนใคร"
                  />
                </Box>
              </Grow>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Box ref={koi7Ref} sx={{ paddingY: 5 }}>
        <Grow in={koi7InView} timeout={2000}>
          <Box>
            <KoiVarietyBox
              img="/img/varieties/Shusui.png"
              type="Shusui (ชุสุอิ)"
              desc="เวอร์ชัน Doitsu ของ Asagi ที่มีเส้นเกล็ดวิ่งตามสันหลังเพียงแถวเดียว Shusui ดูโมเดิร์นแต่ยังคงความสงบแบบดั้งเดิม เป็นสายพันธุ์ที่ผสมผสานความเรียบง่ายกับความทันสมัยได้ลงตัว"
            />
          </Box>
        </Grow>
      </Box>
    </Box>
  );
}

export default KoiVariety;
