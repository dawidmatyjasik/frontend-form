import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Dashboard } from "../components/Dashboard";
import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage";
import { PersonalPage } from "./PersonalPage";

export const router = createBrowserRouter(
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
