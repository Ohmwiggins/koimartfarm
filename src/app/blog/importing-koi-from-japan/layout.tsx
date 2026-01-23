import type { Metadata } from "next";
import PageMargin from "../../../components/PageMargin";
import { Box } from "@mui/material";

export const metadata: Metadata = {
  title: "Blog",
  description: "How to import Koi from japan?",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box>
      <PageMargin>{children}</PageMargin>
    </Box>
  );
}
