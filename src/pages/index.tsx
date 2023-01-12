import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Dashboard } from "../components/Dashboard";
import PrivateRoutes from "../utils/PrivateRoute";
import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage";
import { PersonalPage } from "./PersonalPage";
export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<HomePage />} />
          <Route path="/personal" element={<PersonalPage />} />
        </Route>
      </Route>
      <Route path="/login" element={<LoginPage />} />
    </Route>
  )
);
