import React from "react";
import { Navigate } from "react-router-dom";

// Function to create private routes
export const createPrivateRoute = (path, element, allowedRoles, user) => {
  const isAuthenticated = user?.isAuthenticated; // Replace this with your authentication logic
  const userRole = user?.role; // Replace this with the actual role of the user after authentication
  console.log(user);
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
