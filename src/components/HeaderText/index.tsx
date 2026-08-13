import { Box, Typography } from "@mui/material";

interface HeaderTextProps {
  title: string;
  color?: string;
  /** Thai copy shown under the divider — also feeds the page's meta description. */
  description?: string;
  /** Override when the header sits on a dark background (e.g. the footer). */
  descriptionColor?: string;
  /** Dedicated section pages pass "h1"; sections on the home page stay "h2". */
  component?: "h1" | "h2";
}

function HeaderText({
  title,
  color,
  description,
  descriptionColor,
  component = "h2",
}: HeaderTextProps) {
  return (
    <Box className="flex flex-col items-center gap-3">
      <Typography
        variant="h2"
        component={component}
        sx={{
          color: color ?? "primary.main",
          fontFamily: "var(--font-playfair)",
          textAlign: "center",
        }}
      >
        {title}
      </Typography>
      <Box className="gold-divider" />
      {description && (
        <Typography
          variant="body1"
          component="p"
          sx={{
            maxWidth: 720,
            textAlign: "center",
            color: descriptionColor ?? "text.secondary",
            fontFamily: "var(--font-prompt)",
            fontWeight: 300,
            lineHeight: 1.8,
            px: 2,
          }}
        >
          {description}
        </Typography>
      )}
    </Box>
  );
}

export default HeaderText;
