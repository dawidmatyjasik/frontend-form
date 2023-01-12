import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const PrivateRoutes = () => {
  const { currentUser, loading } = useAuth();
  if (!loading) {
    return !!currentUser ? <Outlet /> : <Navigate to="/login" />;
  }
  return <h1>Loading...</h1>;
};

export default PrivateRoutes;
