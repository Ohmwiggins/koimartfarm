import Home from "./pages/Home/index";
import { ThemeProvider } from "@mui/material";
import theme from "./theme/theme";
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
