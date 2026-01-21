import { Box, Grow, keyframes, Typography } from "@mui/material";
import Image from "next/image";

export default function Banner() {
  const scrollAnimation = keyframes`
    0% { transform: translateX(0); }
    100% { transform: translate3d(-33.33%, 0, 0); }
  `;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#030916",
      }}
    >
      <Box
        sx={{
          height: { xs: "70%", sm: "80%" },
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
          animation: `${scrollAnimation} 300s linear infinite`,
          backgroundColor: "#030916",

          perspective: 1000,
          transformStyle: "preserve-3d",
        }}
      >
        {Array.from({ length: 10 }).map((_, i) => {
          const imageNumber = (i % 9) + 1;
          return (
            <Image
              key={i}
              src={`/img/banner.png`}
              alt={`KoiMartFarm Background ${imageNumber}`}
              width={12000}
              height={2000}
              style={{
                width: "auto",
                height: "90%",
              }}
              priority={i < 9}
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
            <Typography variant="body1" sx={{ color: "primary.contrastText" }}>
              ปลาคาร์ฟแฟนซีจากฟาร์มญี่ปุ่นชั้นนำ
            </Typography>
          </Box>
        </Grow>
      </Box>
    </Box>
  );
}
