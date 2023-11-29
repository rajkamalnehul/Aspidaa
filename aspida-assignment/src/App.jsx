import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/login";
import SuperAdminDashboard from "./pages/super-admin-dashboard";
import AdminDashboard from "./pages/admin-dashboard";
import UserDashboard from "./pages/user-dashboard";
import NotFound from "./pages/unauthorized";
import { createPrivateRoute } from "./utils/routes";
import { useUserSelector } from "./store/selectors/user";

function App() {
  const user = useUserSelector();
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
      errorElement: <NotFound />,
    },
    createPrivateRoute(
      "/super-admin-dashboard",
      <SuperAdminDashboard />,
      ["superadmin"],
      user
    ),
    createPrivateRoute("/admin-dashboard", <AdminDashboard />, ["admin"], user),
    createPrivateRoute("/user-dashboard", <UserDashboard />, ["user"], user),
  ]);

  return <RouterProvider router={router} />;
}

export default App;
