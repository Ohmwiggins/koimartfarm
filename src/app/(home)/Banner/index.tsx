import { Box, Grow, keyframes, Typography } from "@mui/material";
import Image from "next/image";

export default function Banner() {
  const scrollAnimation = keyframes`
    0% { transform: translateX(0); }
    100% { transform: translate3d(-50%, 0, 0); }
  `;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "80vh",
        overflow: "hidden",
        backgroundColor: "background.default",
        paddingTop: "80px",
      }}
    >
      <Box
        sx={{
          height: { xs: "70%", sm: "75%" },
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          overflowX: "auto",
          overflowY: "hidden",
          whiteSpace: "nowrap",
          scrollbarWidth: "none",
          width: "max-content",
          willChange: "transform",
          backfaceVisibility: "hidden",
          animation: `${scrollAnimation} 100s linear infinite`,
          backgroundColor: "background.default",

          perspective: 1000,
          transformStyle: "preserve-3d",
        }}
      >
        {Array.from({ length: 2 }).map((_, i) => {
          return (
            <Image
              key={i}
              src={`/img/banner.png`}
              alt={`KoiMartFarm Background ${i}`}
              width={6000}
              height={1000}
              style={{
                width: "auto",
                height: "90%",
              }}
              priority={true}
            />
          );
        })}
      </Box>

      <Box
        sx={{
          color: "secondary.main",
          textAlign: "center",
          width: "100%",
          zIndex: 1,
        }}
      >
        <Grow in={true} timeout={1500}>
          <Box>
            <Typography
              fontFamily="var(--font-inknut)"
              sx={{ fontSize: { xs: 32, sm: 50, md: 64 } }}
            >
              KOI MART FARM
            </Typography>
            <Typography variant="body1" sx={{ color: "text.primary" }}>
              ปลาคาร์ฟแฟนซีจากฟาร์มญี่ปุ่นชั้นนำ
            </Typography>
          </Box>
        </Grow>
      </Box>
    </Box>
  );
}
