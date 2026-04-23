import React, { use } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router";
import Loading from "../pages/Loading/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Loading />;
  }

  if (user?.email) {
    return children;
  }

  return (
    <Navigate
      to="/login"
      state={{ from: location }}
      replace
    />
  );
};

export default PrivateRoute;