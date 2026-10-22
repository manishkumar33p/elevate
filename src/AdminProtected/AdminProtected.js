
import React from "react";
import { Navigate } from "react-router-dom";

export default function AdminProtected({ children }) {
  const isLoggedIn =
    sessionStorage.getItem("elevateAdminLoggedIn") === "true";

  if (!isLoggedIn) {
    return <Navigate to="/admin-login" replace />;
  }

  return children;
}
