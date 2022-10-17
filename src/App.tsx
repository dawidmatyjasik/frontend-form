import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Dashboard } from "./components/Dashboard";
import { BrowserRouter as Router } from "react-router-dom";

const mdTheme = createTheme();

function App() {
  return (
    <ThemeProvider theme={mdTheme}>
      <CssBaseline />
      <Router>
        <Dashboard />
      </Router>
    </ThemeProvider>
  );
}

export default App;
