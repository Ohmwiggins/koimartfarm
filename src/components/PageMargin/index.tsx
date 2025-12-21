import { Box } from "@mui/material";
import React from "react";

function PageMargin({ children }: { children: React.ReactNode }) {
  return (
    <Box sx={{ py: 20, backgroundColor: "background.default" }}>{children}</Box>
  );
}

export default PageMargin;
