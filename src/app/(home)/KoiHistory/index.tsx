"use client";
import { Box, Fade, Grow, Grid, Typography, Modal, IconButton } from "@mui/material";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useState, useEffect, useCallback } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloseIcon from "@mui/icons-material/Close";

const historyImages = Array.from(
  { length: 17 },
  (_, i) => `/img/history/lists/list${i + 1}.png`
);

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

  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  const handleOpen = useCallback((index: number) => {
    setSelectedImageIndex(index);
  }, []);

  const handleClose = useCallback(() => {
    setSelectedImageIndex(null);
  }, []);

  const handlePrev = useCallback(() => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex !== null
        ? (prevIndex - 1 + historyImages.length) % historyImages.length
        : null
    );
  }, []);

  const handleNext = useCallback(() => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex !== null
        ? (prevIndex + 1) % historyImages.length
        : null
    );
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (selectedImageIndex === null) return;

      if (event.key === "ArrowLeft") {
        handlePrev();
      } else if (event.key === "ArrowRight") {
        handleNext();
      } else if (event.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImageIndex, handlePrev, handleNext, handleClose]);

  return (
    <Box>
      {/* Two-column CEO + Story layout */}
      <Grid container spacing={{ xs: 4, md: 8 }} alignItems="flex-start">
        {/* Left: CEO Image */}
        <Grid size={{ xs: 12, md: 5 }} ref={imageRef}>
          <Grow in={imageInView} timeout={2000}>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: { xs: "center", md: "flex-start" } }}>
              {/* Label chip */}
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1,
                  mb: 2,
                  px: 1.5,
                  py: 0.5,
                  borderRadius: "999px",
                  border: "1px solid rgba(197, 165, 90, 0.4)",
                  backgroundColor: "rgba(197, 165, 90, 0.08)",
                }}
              >
                <Box sx={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#C5A55A" }} />
                <Typography
                  sx={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    color: "#C5A55A",
                    textTransform: "uppercase",
                    fontFamily: "var(--font-inter)",
                  }}
                >
                  Founder & CEO
                </Typography>
              </Box>

              {/* Image with decorative frame */}
              <Box sx={{ position: "relative", display: "inline-block" }}>
                {/* Gold corner accents */}
                <Box sx={{ position: "absolute", top: -10, left: -10, width: 28, height: 28, borderTop: "2px solid #C5A55A", borderLeft: "2px solid #C5A55A", borderRadius: "4px 0 0 0", zIndex: 1 }} />
                <Box sx={{ position: "absolute", bottom: -10, right: -10, width: 28, height: 28, borderBottom: "2px solid #C5A55A", borderRight: "2px solid #C5A55A", borderRadius: "0 0 4px 0", zIndex: 1 }} />
                <Image
                  src={"/img/history/ceo.png"}
                  alt="KoiMartFarm CEO"
                  width={800}
                  height={800}
                  style={{ display: "block", width: "100%", maxWidth: 360, height: "auto", borderRadius: 16 }}
                />
              </Box>

              {/* Name + title below image */}
              <Box sx={{ mt: 3, textAlign: { xs: "center", md: "left" } }}>
                <Typography
                  sx={{ fontFamily: "var(--font-playfair)", color: "primary.main", fontSize: 20, fontWeight: 700, mb: 0.5 }}
                >
                  บวรศักดิ์ ศุภทนต์
                </Typography>
                <Typography
                  sx={{ color: "secondary.main", fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", fontFamily: "var(--font-inter)" }}
                >
                  CEO · KOIMART GROUP
                </Typography>
              </Box>
            </Box>
          </Grow>
        </Grid>

        {/* Right: Story Text */}
        <Grid size={{ xs: 12, md: 7 }} ref={textRef}>
          <Grow in={textInView} timeout={2000}>
            <Box>
              {/* Large decorative quote mark */}
              <Typography
                sx={{ fontFamily: "var(--font-playfair)", fontSize: 120, lineHeight: 0.75, color: "secondary.main", opacity: 0.2, mb: -2, userSelect: "none" }}
              >
                &ldquo;
              </Typography>

              {/* Lead quote */}
              <Box sx={{ borderLeft: "3px solid", borderColor: "secondary.main", pl: 3, mb: 4 }}>
                <Typography
                  variant="body1"
                  sx={{ color: "text.secondary", fontStyle: "italic", fontWeight: 500, lineHeight: 1.8, fontSize: { xs: 15, md: 16 }, wordBreak: "keep-all", overflowWrap: "break-word" }}
                >
                  เริ่มต้นจากความชื่นชอบ และรักที่จะเลี้ยงปลาคาร์ปมาเป็นเวลายาวนาน
                  ของคุณพ่อ{" "}
                  <Box component="span" sx={{ whiteSpace: "nowrap" }}>สุชาติ ศุภทนต์</Box>
                </Typography>
              </Box>

              {/* Body paragraphs */}
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Typography variant="body2" sx={{ color: "text.primary", lineHeight: 1.85, wordBreak: "keep-all", overflowWrap: "break-word" }}>
                  ตั้งแต่ผมยังเด็ก จนถึงช่วงวัยรุ่น ผมได้รับผิดชอบการดูแลปลาคาร์ปด้วยความรู้สึกสนุกและตื่นเต้น
                  ในช่วงเวลานั้น ผมได้เห็นหลายสิ่งหลายอย่างจากการเปลี่ยนแปลง และพัฒนาการในด้านต่างๆ ของปลา...
                </Typography>
                <Typography variant="body2" sx={{ color: "text.primary", lineHeight: 1.85, wordBreak: "keep-all", overflowWrap: "break-word" }}>
                  ทั้งการเติบโตที่มีสีสันสดใส ลวดลายที่สวยงาม ดูแปลกตาในแต่ละสายพันธุ์ ไปจนถึงรูปร่างโครงสร้างที่ใหญ่โตของตัวปลา
                  อีกทั้งเรื่องราวความเป็นมาของปลาคาร์ปที่มีมายาวนานนับพันปี และความหมายของการเลี้ยงที่มีเอกลักษณ์
                  สื่อถึงความอุดมสมบูรณ์ ความมั่งคั่ง และร่ำรวย
                </Typography>
                <Typography variant="body2" sx={{ color: "text.primary", lineHeight: 1.85, wordBreak: "keep-all", overflowWrap: "break-word" }}>
                  ด้วยเสน่ห์เหล่านี้... จึงเป็นแรงบันดาลใจที่อยากจะถ่ายทอดความรู้สึกและความหมายดีๆ
                  ในการเลี้ยงปลาคาร์ป ซึ่งถือว่าเป็นงานอดิเรกที่ทุกคนเข้าถึงได้
                </Typography>
                <Typography variant="body2" sx={{ color: "text.primary", lineHeight: 1.85, wordBreak: "keep-all", overflowWrap: "break-word" }}>
                  ไม่ว่าจะเป็นเด็ก หนุ่มสาว วัยทำงาน คนเกษียณ ผู้หญิง หรือผู้ชาย
                  ก็สามารถเข้าถึงความสุขที่อิ่มเอมได้ทุกช่วงวัยไปพร้อมๆ กันได้อย่างลงตัว
                  และยังเป็นศูนย์กลางของความสุขในครอบครัวได้เป็นอย่างดี
                </Typography>
                <Typography variant="body2" sx={{ color: "text.primary", lineHeight: 1.85, wordBreak: "keep-all", overflowWrap: "break-word" }}>
                  ความรู้สึกดีๆ เหล่านี้ เป็นที่มาของความสุขที่ผมสามารถแชร์ถึงทุกๆ คนได้ ผ่านทาง
                  &ldquo;โค่ยมาร์ทฟาร์ม&rdquo; (Koi Mart Farm)
                </Typography>
              </Box>

              {/* Stats row */}
              <Box sx={{ mt: 5, display: "flex", gap: { xs: 3, sm: 5 }, flexWrap: "wrap", borderTop: "1px solid", borderColor: "divider", pt: 4 }}>
                {[
                  { value: "30+", label: "ปีแห่งประสบการณ์" },
                  { value: "7+", label: "สายพันธุ์คัดสรร" },
                  { value: "100%", label: "นำเข้าจากญี่ปุ่น" },
                ].map(({ value, label }) => (
                  <Box key={label}>
                    <Typography sx={{ fontFamily: "var(--font-playfair)", fontSize: 28, fontWeight: 700, color: "secondary.main", lineHeight: 1 }}>
                      {value}
                    </Typography>
                    <Typography sx={{ fontSize: 12, color: "text.secondary", mt: 0.5, fontFamily: "var(--font-prompt)" }}>
                      {label}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Grow>
        </Grid>
      </Grid>

      {/* Travel photo gallery */}
      <div
        ref={travelImgRef}
        className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4"
      >
        {historyImages.map((imgSrc, index) => (
          <Fade key={index} in={travelImgInView} timeout={index * 250}>
            <div
              onClick={() => handleOpen(index)}
              className="group relative cursor-pointer overflow-hidden rounded-xl aspect-square"
            >
              <Image
                src={imgSrc}
                alt="KoiMartFarm Japan"
                width={400}
                height={400}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                style={{ display: "block" }}
              />
              <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/30 transition-all duration-300" />
            </div>
          </Fade>
        ))}
      </div>

      {/* Lightbox Modal */}
      <Modal
        open={selectedImageIndex !== null}
        onClose={handleClose}
        sx={{ backgroundColor: "rgba(10, 18, 32, 0.92)" }}
      >
        <Box
          sx={{
            position: "relative",
            height: "100vh",
            width: "100vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 20,
              right: 20,
              color: "#FAF8F5",
              "&:hover": { color: "#C5A55A" },
            }}
          >
            <CloseIcon fontSize="large" />
          </IconButton>

          <IconButton
            onClick={handlePrev}
            sx={{
              position: "absolute",
              left: 20,
              top: "50%",
              transform: "translateY(-50%)",
              color: "#FAF8F5",
              "&:hover": { color: "#C5A55A" },
            }}
          >
            <ArrowBackIosNewIcon fontSize="large" />
          </IconButton>

          <IconButton
            onClick={handleNext}
            sx={{
              position: "absolute",
              right: 20,
              top: "50%",
              transform: "translateY(-50%)",
              color: "#FAF8F5",
              "&:hover": { color: "#C5A55A" },
            }}
          >
            <ArrowForwardIosIcon fontSize="large" />
          </IconButton>

          {selectedImageIndex !== null && (
            <img
              src={historyImages[selectedImageIndex]}
              alt="KoiMartFarm History"
              style={{
                maxHeight: "90vh",
                maxWidth: "80vw",
                objectFit: "contain",
                borderRadius: "12px",
              }}
            />
          )}
        </Box>
      </Modal>
    </Box>
  );
}

export default History;
