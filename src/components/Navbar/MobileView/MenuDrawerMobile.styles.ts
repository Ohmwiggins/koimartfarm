import { Button, styled, type ButtonProps } from "@mui/material";

export const MenuButtonDrawer = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.secondary.contrastText,
  fontFamily: "LINESeedSansEN",
  fontSize: 24,
  fontWeight: 400,
}));