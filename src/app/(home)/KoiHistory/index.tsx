"use client";
import { Box, Fade, Grid, Grow, Typography, Modal, IconButton } from "@mui/material";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useState, useEffect, useCallback } from "react";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CloseIcon from '@mui/icons-material/Close';

const historyImages = Array.from({ length: 17 }, (_, i) => `/img/history/lists/list${i + 1}.png`);

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

  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const handleOpen = useCallback((index: number) => {
    setSelectedImageIndex(index);
  }, []);

  const handleClose = useCallback(() => {
    setSelectedImageIndex(null);
  }, []);

  const handlePrev = useCallback(() => {
    setSelectedImageIndex(prevIndex => 
      prevIndex !== null ? (prevIndex - 1 + historyImages.length) % historyImages.length : null
    );
  }, []);

  const handleNext = useCallback(() => {
    setSelectedImageIndex(prevIndex =>
      prevIndex !== null ? (prevIndex + 1) % historyImages.length : null
    );
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (selectedImageIndex === null) return;

      if (event.key === 'ArrowLeft') {
        handlePrev();
      } else if (event.key === 'ArrowRight') {
        handleNext();
      } else if (event.key === 'Escape') {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImageIndex, handlePrev, handleNext, handleClose]);

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
        {historyImages.map((imgSrc, index) => (
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
              <Box onClick={() => handleOpen(index)} sx={{ cursor: 'pointer', width: '100%' }}>
                <Image
                  src={imgSrc}
                  alt="KoiMartFarm Japan"
                  width={800}
                  height={800}
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </Box>
            </Fade>
          </Grid>
        ))}
      </Grid>
      <Modal open={selectedImageIndex !== null} onClose={handleClose} sx={{ backgroundColor: 'rgba(0, 0, 0, 0.8)'}}>
        <Box sx={{
          position: 'relative',
          height: '100vh',
          width: '100vw',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>

          <IconButton onClick={handleClose} sx={{ position: 'absolute', top: 20, right: 20, color: 'white' }}>
            <CloseIcon fontSize="large"/>
          </IconButton>

          <IconButton onClick={handlePrev} sx={{ position: 'absolute', left: 20, top: '50%', transform: 'translateY(-50%)', color: 'white' }}>
            <ArrowBackIosNewIcon fontSize="large"/>
          </IconButton>

          <IconButton onClick={handleNext} sx={{ position: 'absolute', right: 20, top: '50%', transform: 'translateY(-50%)', color: 'white' }}>
            <ArrowForwardIosIcon fontSize="large"/>
          </IconButton>

          {selectedImageIndex !== null && (
            <img 
              src={historyImages[selectedImageIndex]} 
              alt="KoiMartFarm History" 
              style={{ maxHeight: '90vh', maxWidth: '80vw', objectFit: 'contain' }}
            />
          )}

        </Box>
      </Modal>
    </Box>
  );
}

export default History;
