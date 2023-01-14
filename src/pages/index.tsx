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
import { ProjectParticipiantPage } from "./ProjectParticipiantPage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<PrivateRoutes />}>
        <Route element={<Dashboard />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/personal" element={<PersonalPage />} />
          <Route
            path="/project-paricipiant"
            element={<ProjectParticipiantPage />}
          />
        </Route>
      </Route>
      <Route path="/login" element={<LoginPage />} />
    </Route>
  )
);
