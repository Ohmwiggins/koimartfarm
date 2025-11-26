import { Box, Input, InputBase, InputProps, styled, type BoxProps, type InputBaseProps } from "@mui/material";

export const ContactUsLayout = styled(Box)<BoxProps>(() => ({
  width: "100%",
  height: "90%",
  minHeight: 250,
  display: "flex", flexDirection: "column",
}));

export const TextInputField = styled(Input)<InputProps>(({ theme }) => ({
  width: "100%",
  paddingLeft: theme.spacing(2),
  marginTop: theme.spacing(0.5),
  marginBottom: theme.spacing(0.5),
}));

export const AppIcon = styled("img")(() => ({
  width: 40,
}));

export const SocialIcon = styled("img")(({ theme }) => ({
  maxWidth: 50,
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(1),
  cursor: "pointer",
  "&:hover": {
    opacity: 0.8,
  },
}));