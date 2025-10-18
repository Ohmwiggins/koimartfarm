import { Button, styled, type ButtonProps } from "@mui/material";

export const ContainedButton = styled(Button)<ButtonProps>(({ theme }) => ({
  "&:hover": { backgroundColor: theme.palette.primary.light },
  width: "100%",
}));