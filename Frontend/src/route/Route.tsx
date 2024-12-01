import { useRoutes } from "react-router";
import Navbar from "../component/Navbar/Navbar";
import Home from "../component/Home/Home";
import Login from "../component/Auth/login/login";

const Route = () => {
  const allRoutes = useRoutes([
    {
      children: [
        {
          path: "/",
          element: <Navbar />,
          children: [
            {
              index: true,
              element: <Home />,
            },
            {
              path: "/login",
              element: <Login />,
            },
          ],
        },
      ],
    },
  ]);

  return allRoutes;
};

export default Route;
