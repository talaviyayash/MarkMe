import { useRoutes } from "react-router-dom";
import Layout from "../component/layout/Layout";
import SignIn from "../component/auth/signin/SignIn";
import SignUp from "../component/auth/signup/SignUp";

const publicRoute = [
  {
    element: <Layout />,
    path: "/",
    children: [
      {
        element: <SignIn />,
        path: "/signin",
      },
      {
        element: <SignUp />,
        path: "/signup",
      },
    ],
  },
];

const Route = () => {
  const allRoute = useRoutes(publicRoute);
  return allRoute;
};

export default Route;
