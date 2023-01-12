import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Dashboard } from "./components/Dashboard";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { HomePage } from "./pages/HomePage";
import { PersonalPage } from "./pages/PersonalPage";

const mdTheme = createTheme();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Dashboard />}>
        <Route index element={<HomePage />} />
        <Route path="/personal" element={<PersonalPage />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
    </Route>
  )
);

function App() {
  return (
    <ThemeProvider theme={mdTheme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
