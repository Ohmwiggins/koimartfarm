import Home from "./pages/Home";
import { ThemeProvider } from "@mui/material";
import theme from "./theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
