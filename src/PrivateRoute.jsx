import { useAuth } from "./AuthContext";
import { Navigate } from "react-router-dom";
const PrivateRoute = ({ element }) => {
  const { isAuthenticated } = useAuth();
  const _sessionStorage = sessionStorage.getItem("authToken") ? true : false;
  return isAuthenticated || _sessionStorage ? (
    element
  ) : (
    <Navigate to="/Login" />
  );
};
export default PrivateRoute;
