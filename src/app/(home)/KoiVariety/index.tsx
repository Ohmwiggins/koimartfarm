import { Box, Grid, Grow } from "@mui/material";
import KoiVarietyBox from "./KoiVarietyBox";
import { useInView } from "react-intersection-observer";

const koiVarieties = [
  {
    img: "/img/varieties/Kohaku.png",
    type: "Kohaku (โคฮากุ)",
    characteristic: [
      "พื้นลำตัวสีขาว (Shiroji)",
      "ลวดลายสีแดง (Hi) ชัดเจน",
      "เป็นสายพันธุ์คลาสสิกและได้รับความนิยมสูงสุด",
    ],
    meaning: [
      "ความโชคดี",
      "ความสำเร็จ",
      "ความเจริญรุ่งเรือง",
      "การเริ่มต้นใหม่",
    ],
  },
  {
    img: "/img/varieties/Sanke.png",
    type: "Sanke / Taisho Sanke (ซังเคะ)",
    characteristic: [
      "พื้นสีขาว",
      "ลายแดงผสมจุดดำ",
      "สีดำเป็นลักษณะจุดแต้ม ไม่ครอบงำทั้งตัว",
    ],
    meaning: [
      "ความสมดุล",
      "การเติบโตอย่างมั่นคง",
      "ความก้าวหน้าแบบมีระบบ",
      "โชคลาภ",
    ],
  },
  {
    img: "/img/varieties/Showa.png",
    type: "Showa / Showa Sanshoku (โชวะ)",
    characteristic: [
      "พื้นสีดำเป็นหลัก",
      "มีลายแดงและขาวแทรก",
      "ลวดลายดูทรงพลังและหนักแน่น",
    ],
    meaning: [
      "พลัง",
      "อำนาจ",
      "ความแข็งแกร่ง",
      "การฝ่าฟันอุปสรรค",
      "จิตวิญญาณนักสู้",
    ],
  },
  {
    img: "/img/varieties/Ogon.png",
    type: "Yamabuki Ogon (ยามาบูกิ โอโกน)",
    characteristic: [
      "สีเหลืองทองทั้งตัว",
      "ผิวเงาแบบโลหะ (Metallic)",
      "เรียบหรูและโดดเด่น",
    ],
    meaning: ["เงินทอง", "ความมั่งคั่ง", "ความอุดมสมบูรณ์", "การเรียกทรัพย์"],
  },
  {
    img: "/img/varieties/Asagi.png",
    type: "Asagi (อะซากิ)",
    characteristic: [
      "หลังเป็นลายเกล็ดน้ำเงินเทาแบบตาข่าย",
      "ท้อง แก้ม และครีบมีสีแดงส้มไล่ขึ้น",
    ],
    meaning: ["ความสงบ", "ความสุขุม", "ความมั่นคง", "ปัญญา", "ความลุ่มลึก"],
  },
  {
    img: "/img/varieties/Shusui.png",
    type: "Shusui (ชูซุย)",
    characteristic: [
      "ไม่มีเกล็ด (Doitsu)",
      "มีแถวเกล็ดใหญ่เรียงตามแนวสันหลัง",
      "สีแดงด้านข้างลำตัว",
    ],
    meaning: [
      "เอกลักษณ์",
      "ความแตกต่าง",
      "ความคิดสร้างสรรค์",
      "การปรับตัว",
      "แนวคิดสมัยใหม่",
    ],
  },
  {
    img: "/img/varieties/Chagoi.png",
    type: "Chagoi (ชาโกอิ)",
    characteristic: [
      "สีโทนน้ำตาลชา / เขียวมะกอก / ทองน้ำตาล",
      "โตเร็ว แข็งแรง",
      "นิสัยเชื่องและเข้าหาคนง่าย",
    ],
    meaning: [
      "ความอบอุ่น",
      "มิตรภาพ",
      "ความอุดมสมบูรณ์",
      "ความสัมพันธ์ที่ดี",
      "ความกลมกลืน",
    ],
  },
];

const KoiVarietyItem = ({ koi }: { koi: (typeof koiVarieties)[0] }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <Grid size={{ xs: 12, sm: 6 }}>
      <Box ref={ref} sx={{ paddingY: 5 }}>
        <Grow in={inView} timeout={2000}>
          <Box>
            <KoiVarietyBox
              img={koi.img}
              type={koi.type}
              characteristic={koi.characteristic}
              meaning={koi.meaning}
            />
          </Box>
        </Grow>
      </Box>
    </Grid>
  );
};

function KoiVariety() {
  return (
    <Box sx={{ paddingX: { xs: 2, sm: 0 } }}>
      <Grid container spacing={4}>
        {koiVarieties.map((koi, index) => (
          <KoiVarietyItem key={index} koi={koi} />
        ))}
      </Grid>
    </Box>
  );
}

export default KoiVariety;
