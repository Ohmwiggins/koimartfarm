"use client";

import { Box, IconButton, Typography } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useRouter } from "next/navigation";

function PageHeader({ text }: { text: string }) {
  const router = useRouter();

  const handleBack = () => {
    if (typeof window !== "undefined" && window.history.length <= 1) {
      router.push("/");
    } else {
      router.back();
    }
  };

  return (
    <Box sx={{ mb: 6 }}>
      {/* Breadcrumb + back */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          mb: 4,
        }}
      >
        <IconButton
          size="small"
          onClick={handleBack}
          sx={{
            color: "secondary.main",
            border: "1px solid",
            borderColor: "secondary.main",
            borderRadius: "8px",
            width: 36,
            height: 36,
            "&:hover": {
              backgroundColor: "rgba(197,165,90,0.1)",
            },
          }}
        >
          <ArrowBackIosNewIcon sx={{ fontSize: 14 }} />
        </IconButton>
        <Typography
          sx={{
            fontSize: 13,
            color: "text.secondary",
            fontFamily: "var(--font-inter)",
            letterSpacing: "0.04em",
          }}
        >
          Home
        </Typography>
        <Typography sx={{ fontSize: 13, color: "text.disabled" }}>
          /
        </Typography>
        <Typography
          sx={{
            fontSize: 13,
            color: "secondary.main",
            fontFamily: "var(--font-inter)",
            letterSpacing: "0.04em",
            fontWeight: 600,
          }}
        >
          Blog
        </Typography>
      </Box>

      {/* Article title */}
      <Typography
        variant="h3"
        sx={{
          fontFamily: "var(--font-prompt)",
          color: "primary.main",
          fontWeight: 700,
          lineHeight: 1.25,
          mb: 2,
          fontSize: { xs: 26, sm: 32, md: 38 },
        }}
      >
        {text}
      </Typography>

      {/* Gold accent divider */}
      <Box
        sx={{
          width: 56,
          height: 3,
          borderRadius: "2px",
          background: "linear-gradient(90deg, #C5A55A, #E8C97A)",
        }}
      />
    </Box>
  );
}

export default PageHeader;
