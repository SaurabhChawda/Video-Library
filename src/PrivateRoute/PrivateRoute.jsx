import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
export const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const login = JSON.parse(localStorage.getItem("login"));
  return <>{login ? children : <Navigate state={{ from: location }} to="/login/" replace />}</>;
};
