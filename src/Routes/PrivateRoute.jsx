import { useContext } from "react";
import { AuthContext } from "../components/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <span className="loading loading-spinner loading-lg absolute top-1/2 right-1/2  "></span>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to="/register"></Navigate>;
};

export default PrivateRoute;
