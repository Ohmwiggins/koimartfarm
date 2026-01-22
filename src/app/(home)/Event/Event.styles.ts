import { Container, Divider, styled, type ContainerProps, type DividerProps } from "@mui/material";

export const EventTable = styled(Container)<ContainerProps>(({ theme }) => ({
  marginTop: theme.spacing(5),
  marginBottom: theme.spacing(5),
  marginLeft: "auto",
  marginRight: "auto",
}));

export const EventDivider = styled(Divider)<DividerProps>(({ theme }) => ({
  borderBottomWidth: 1,
  borderColor: theme.palette.text.primary,
  marginBottom: theme.spacing(1),
}));
