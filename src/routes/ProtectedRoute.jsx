import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

const ProtectedRoute = ({ children, redirectTo, authRequired }) => {
  const { user } = useAuth();

  if (authRequired && !user) {
    return <Navigate to={redirectTo} />;
  }

  if (!authRequired && user) {
    return <Navigate to={redirectTo} />;
  }

  return children;
};

export default ProtectedRoute;
