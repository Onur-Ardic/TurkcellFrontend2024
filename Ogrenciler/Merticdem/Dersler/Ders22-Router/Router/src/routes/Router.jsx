import { useRoutes } from "react-router-dom";
import HomeView from "../views/HomeView";
import userRoter from "./userRouter";
import ParametreView from "../views/ParametreView";

const Router = () => {
  const routes = useRoutes([
    { path: "/", element: <HomeView /> },
    { path: "/user", element: <userRoter /> },
    { path: "/parametre/:id", element: <ParametreView /> },
  ]);
  return routes;
};

export default Router;
