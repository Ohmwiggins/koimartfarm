"use client";

import { Box, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useRouter } from "next/navigation";
import PageHeaderText from "../PageHeaderText";

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
        size="medium"
        color="inherit"
        onClick={() => handleBack()}
        sx={{ mr: 2 }}
      >
        <ArrowBackIosNewIcon sx={{ fontSize: 40 }} />
      </IconButton>
      <PageHeaderText title={text} />
    </Box>
  );
}

export default PageHeader;
