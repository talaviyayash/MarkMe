import SignIn from "../component/auth/signin/SignIn";
import SignUp from "../component/auth/signup/SignUp";
import Layout from "../component/layout/Layout";

export const publicRoute = [
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
