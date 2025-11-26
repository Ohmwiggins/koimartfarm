import { Button, styled, type ButtonProps } from "@mui/material";

export const MenuButtonDesktop = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.secondary.light,
  fontFamily: "var(--font-lineseed-en)",
  fontSize: 16,
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
}));