import { useRoutes} from "react-router-dom";
import HomeView from "../views/HomeView";
import { Abonelikler } from '../views/pages/Abonelikler';
import Shorts from '../views/pages/Shorts';
import userRouter from "./userRouter";
import ParametreView from "../views/pages/ParametreView";
import VideoPage from "../views/pages/VideoPage";

const Router = ({data, isSideBarVisible}) => {
  const routes = useRoutes([
    { path: "/", element: <HomeView isSideBarVisible={isSideBarVisible} data={data} /> },

    userRouter,
    { path: "/parametre/:id", element: <ParametreView /> },
    { path: "shorts", element: <Shorts /> },
    { path: "abonelikler", element: <Abonelikler /> },
    { path: "videoizle", element: <VideoPage /> },


  ]);
  return routes;
};

export default Router;
