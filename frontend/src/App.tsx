import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Dashboard } from "./components/Dashboard";

const mdTheme = createTheme();

function App() {
  return (
    <ThemeProvider theme={mdTheme}>
      <CssBaseline />
      <Dashboard />
    </ThemeProvider>
  );
}

export default App;
