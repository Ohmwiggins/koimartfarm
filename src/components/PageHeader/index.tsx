"use client";

import { Box, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import HeaderText from "../../components/HeaderText";
import { useRouter } from "next/navigation";

function PageHeader({ text }: { text: string }) {
  const router = useRouter();

  const handleBack = () => {
    //NOTE: fallback case
    if (typeof window !== "undefined" && window.history.length <= 1) {
      router.push("/");
    } else {
      router.back();
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        color="inherit"
        onClick={() => handleBack()}
      >
        <ArrowBackIosNewIcon sx={{ fontSize: 50 }} />
      </IconButton>
      <HeaderText title={text} />
    </Box>
  );
}

export default PageHeader;
