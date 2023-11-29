import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/login";
import SuperAdminDashboard from "./pages/super-admin-dashboard";
import AdminDashboard from "./pages/admin-dashboard";
import UserDashboard from "./pages/user-dashboard";
import NotFound from "./pages/unauthorized";
import { createPrivateRoute } from "./utils/routes";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <NotFound />,
  },
  createPrivateRoute("/super-admin-dashboard", <SuperAdminDashboard />, [
    "super-admin",
  ]),
  createPrivateRoute("/admin-dashboard", <AdminDashboard />, ["admin"]),
  createPrivateRoute("/user-dashboard", <UserDashboard />, ["user"]),
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
