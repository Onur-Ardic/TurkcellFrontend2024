import { useRoutes } from "react-router-dom";
import Deneme from "../pages/Deneme";

const Router = () => {
  const routes = useRoutes([{ path: "/", element: <Deneme /> }]);
  return routes;
};

export default Router;
