import { Box, Input, InputProps, styled, type BoxProps } from "@mui/material";

export const ContactUsLayout = styled(Box)<BoxProps>(() => ({
  width: "100%",
  height: "90%",
  minHeight: 250,
  display: "flex",
  flexDirection: "column",
}));

export const TextInputField = styled(Input)<InputProps>(({ theme }) => ({
  width: "100%",
  paddingLeft: theme.spacing(2),
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(1),
}));

export const AppIcon = styled("img")(() => ({
  width: 40,
}));

export const SocialIcon = styled("img")(() => ({
  width: 44,
  height: 44,
  padding: 10,
  borderRadius: 12,
  backgroundColor: "rgba(250, 248, 245, 0.08)",
  border: "1px solid rgba(197, 165, 90, 0.2)",
  cursor: "pointer",
  objectFit: "contain",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "rgba(197, 165, 90, 0.15)",
    borderColor: "rgba(197, 165, 90, 0.5)",
    transform: "translateY(-2px)",
  },
}));
