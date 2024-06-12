import { useRoutes } from "react-router-dom";
import { Abonelikler } from "../components/views/categories/Abonelikler";
import Shorts from "../components/views/categories/Shorts";
import HomeView from "../components/views/HomeView";


const Router = () => {
  const routes = useRoutes([
    { path: "/", element: <HomeView /> },
    { path: "/abonelikler", element: <Abonelikler /> },
    { path: "/shorts", element: <Shorts /> },
  ]);
  return routes;
};

export default Router;
