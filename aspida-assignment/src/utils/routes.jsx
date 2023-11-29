import React from "react";
import { Navigate } from "react-router-dom";

// Function to create private routes
export const createPrivateRoute = (path, element, allowedRoles) => {
  const isAuthenticated = true; // Replace this with your authentication logic
  const userRole = "admin"; // Replace this with the actual role of the user after authentication
  return {
    path,
    element:
      isAuthenticated && allowedRoles.includes(userRole) ? (
        element
      ) : (
        <Navigate to={"/"} replace={true} />
      ),
  };
};
