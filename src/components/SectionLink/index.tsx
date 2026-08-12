"use client";

// Must be a client component: `component={Link}` passes a function to MUI's
// Box, which cannot cross the server/client boundary.
import Link from "next/link";
import { Box } from "@mui/material";

/**
 * "View all" link from a home-page section to its dedicated page.
 *
 * Rendered as a real `<a href>` so it is a crawlable internal link — the
 * navbar plus these links are how Google learns the site's section hierarchy.
 */
function SectionLink({ href, label }: { href: string; label: string }) {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
      <Box
        component={Link}
        href={href}
        sx={{
          display: "inline-flex",
          alignItems: "center",
          gap: 1,
          px: 3.5,
          py: 1.25,
          borderRadius: "9999px",
          border: "1px solid rgba(197, 165, 90, 0.5)",
          color: "secondary.main",
          fontFamily: "var(--font-prompt)",
          fontWeight: 500,
          fontSize: { xs: 14, md: 15 },
          textDecoration: "none",
          transition: "all 0.25s ease",
          "&:hover": {
            backgroundColor: "rgba(197, 165, 90, 0.08)",
            borderColor: "secondary.main",
            transform: "translateY(-2px)",
          },
        }}
      >
        {label}
        <Box component="span" aria-hidden="true">
          →
        </Box>
      </Box>
    </Box>
  );
}

export default SectionLink;
