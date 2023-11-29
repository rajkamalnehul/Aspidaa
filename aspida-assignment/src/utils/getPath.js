export const getPath = (userRole) => {
  if (userRole == "superadmin") {
    return "/super-admin-dashboard";
  }

  if (userRole == "admin") {
    return "/admin-dashboard";
  }

  if (userRole == "user") {
    return "/user-dashboard";
  }

  return "/";
};
