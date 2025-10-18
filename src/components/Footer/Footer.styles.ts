import { Box, Grid, InputBase, styled, type BoxProps, type GridProps, type InputBaseProps } from "@mui/material";

export const GoogleMapBox = styled(Box)<BoxProps>(() => ({
  width: "100%",
  height: "100%",
  minHeight: 200,
  borderRadius: 20,
  overflow: "hidden",
}));

export const TextInputField = styled(InputBase)<InputBaseProps>(({ theme }) => ({
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