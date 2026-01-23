"use client";
import { Button, styled } from "@mui/material";

const LinkedOutlineButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  borderColor: theme.palette.text.primary,
  borderRadius: 8,
  paddingLeft: 24,
  paddingRight: 24,
  paddingTop: 8,
  paddingBottom: 8,
  fontWeight: "bold",
  "&:hover": {
    borderColor: theme.palette.text.primary,
  },
  flexDirection: "row",
  alignItems: "center",
  gap: 8,
}));

export default LinkedOutlineButton as typeof Button;
