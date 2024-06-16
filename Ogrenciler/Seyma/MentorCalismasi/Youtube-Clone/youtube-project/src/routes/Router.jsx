import { useRoutes} from "react-router-dom";
import HomeView from "../views/HomeView";
import { Abonelikler } from '../views/pages/Abonelikler';
import Shorts from '../views/pages/Shorts';
import userRouter from "./userRouter";
import ParametreView from "../views/pages/ParametreView";

const Router = () => {
  const routes = useRoutes([
    { path: "/", element: <HomeView /> },

    userRouter,

    { path: "/parametre/:id", element: <ParametreView /> },
    { path: "shorts", element: <Shorts /> },
    { path: "abonelikler", element: <Abonelikler /> },

   
  ]);
  return routes;
};

export default Router;
