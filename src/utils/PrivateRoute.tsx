import { Outlet, Navigate } from "react-router-dom";
import LoadingScreen from "../components/Loading";
import { useAuth } from "../hooks/useAuth";

const PrivateRoutes = () => {
  const { currentUser, loading } = useAuth();
  if (!loading) {
    return !!currentUser ? <Outlet /> : <Navigate to="/login" />;
  }
  return <LoadingScreen />;
};

export default PrivateRoutes;
