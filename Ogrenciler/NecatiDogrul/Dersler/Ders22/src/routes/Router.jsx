import { useRoutes, Navigate } from "react-router-dom";
import HomeView from "../views/HomeView";
import userRouter from "./userRouter";
import ParametreView from "../views/ParametreView";
import NewView from "../views/NewView";
import SportNewView from "../views/SportNewView";
import EconomyNewView from "../views/EconomyNewView";

const Router = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <HomeView />,
      userRouter,
    },
    {
      path: "/parametre/:id",
      element: <ParametreView />,
    },
    {
      path: "/haberler",
      element: <NewView />,
      children: [
        { index: true, element: <Navigate to="spor" /> },
        { path: "spor", element: <SportNewView /> },
        { path: "ekonomi", element: <EconomyNewView /> },
      ],
    },
  ]);
  return routes;
};

export default Router;
