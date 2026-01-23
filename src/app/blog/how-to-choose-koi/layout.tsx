import type { Metadata } from "next";
import PageMargin from "../../../components/PageMargin";
import { Box } from "@mui/material";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Learn about the importance of shape, quality, and pattern in koi appreciation.",
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
