import { useRoutes } from "react-router-dom";
import HomeView from "../views/HomeView";
import UserView from "../views/UserView";
import ParameterView from "../views/ParameterView";

const Router = () => {
  const routes = useRoutes([
    { path: "/", element: <HomeView /> },
    { path: "/user", element: <UserView /> },
    { path: "/parameter/:id", element: <ParameterView /> },
  ]);
  return routes;
};
export default Router;
