import { IconButton } from "@mui/material";

function NavBarIconButton({
  method,
  component,
}: {
  method?: () => void;
  component?: React.ReactNode;
}) {
  return (
    <IconButton
      aria-label="account of current user"
      aria-controls="menu-appbar"
      aria-haspopup="true"
      color="inherit"
      onClick={method}
      sx={{ color: "secondary.contrastText" }}
    >
      {component}
    </IconButton>
  );
}

export default NavBarIconButton;
