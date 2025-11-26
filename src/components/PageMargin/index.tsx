import { Box } from "@mui/material";
import React from "react";

function PageMargin({ children }: { children: React.ReactNode }) {
  return <Box sx={{ marginY: 20 }}>{children}</Box>;
}

export default PageMargin;
