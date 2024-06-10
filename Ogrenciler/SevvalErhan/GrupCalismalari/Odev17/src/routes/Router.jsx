import { useRoutes } from "react-router-dom";
import HomeView from "../views/HomeView";
import EconomyView from "../views/Category/EconomyView";
import SporView from "../views/Category/SporView";
import TechnologyView from "../views/Category/TechnologyView";


const Router = () => {
  const routes = useRoutes([
    { path: "/", element: <HomeView /> },
    { path: "/spor", element: <SporView /> },
    { path: "/ekonomi", element: <EconomyView /> },
    { path: "/technology", element: <TechnologyView /> },
  ]);
  return routes;
};

export default Router;
