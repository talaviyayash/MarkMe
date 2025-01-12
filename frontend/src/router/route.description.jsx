import { Navigate } from "react-router-dom";
import SignIn from "../component/auth/signin/SignIn";
import SignUp from "../component/auth/signup/SignUp";
import Layout from "../component/layout/Layout";
import ProtectedRoute from "../routes/ProtectedRoute";
import PublicRoute from "../routes/PublicRoute";
import AdminDashboard from "../component/admin/dashboard/Dashboard";
import AdminClasses from "../component/admin/classes/Classes";
import AdminSchool from "../component/admin/school/School";

export const routes = [
  {
    element: <PublicRoute />,
    children: [
      {
        element: <Layout />,
        path: "/",
        children: [
          {
            index: true,
            element: <Navigate to="/signin" />,
          },
          {
            element: <SignIn />,
            path: "signin",
          },
          {
            element: <SignUp />,
            path: "signup",
          },
        ],
      },
    ],
  },
];

const adminRout = [
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <Layout />,
        children: [
          {
            element: <AdminDashboard />,
            path: "dashboard",
          },
          {
            element: <AdminClasses />,
            path: "classes",
          },
          {
            element: <AdminSchool />,
            path: "school",
          },
        ],
      },
    ],
  },
];

export const getRoleBasedRoute = (role) => {
  if (role === "admin") {
    return adminRout;
  }
};
