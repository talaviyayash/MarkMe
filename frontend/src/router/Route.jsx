import { useRoutes } from "react-router-dom";
import { getRoleBasedRoute, routes } from "./route.description";

const Route = () => {
  const allRoute = useRoutes([...routes, ...getRoleBasedRoute("admin")]);
  return allRoute;
};

export default Route;
