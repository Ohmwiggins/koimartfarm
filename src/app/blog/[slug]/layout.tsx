import PageMargin from "../../../components/PageMargin";
import { Box } from "@mui/material";

// Metadata is per-post — see `generateMetadata` in ./page.tsx. Defining it here
// would statically override every post with the same title and description.

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
