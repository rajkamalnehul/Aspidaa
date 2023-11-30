import React from "react";
import { Navigate } from "react-router-dom";
import { getPath } from "./getPath";

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
      ) : isAuthenticated ? (
        <>
          {console.log("Navigate to user role")}
          <Navigate to={getPath(userRole)} replace={true} />
        </>
      ) : (
        <>
          {console.log("Navigate to login")}
          <Navigate to={"/"} replace={true} />
        </>
      ),
  };
};
