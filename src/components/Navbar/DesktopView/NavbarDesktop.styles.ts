import { Button, styled, type ButtonProps } from "@mui/material";

export const MenuButtonDesktop = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.primary.main,
  fontFamily: "var(--font-prompt), var(--font-lineseed-en)",
  fontSize: 15,
  fontWeight: 500,
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  letterSpacing: "0.02em",
  transition: "color 0.2s ease",
  "&:hover": {
    color: theme.palette.secondary.main,
    backgroundColor: "transparent",
  },
}));
