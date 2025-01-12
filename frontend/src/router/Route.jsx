import { decodeToken } from "react-jwt";
import { useRoutes } from "react-router-dom";
import { getRoleBasedRoute, routes } from "./route.description";
import { useSelector } from "react-redux";

const Route = () => {
  const token = localStorage.getItem("token");
  const decodedValue = decodeToken(token);
  const role = useSelector((state) => state?.app?.userProfile?.role);

  const allRoute = useRoutes([
    ...routes,
    ...getRoleBasedRoute(role || decodedValue?.role),
  ]);
  return allRoute;
};

export default Route;
