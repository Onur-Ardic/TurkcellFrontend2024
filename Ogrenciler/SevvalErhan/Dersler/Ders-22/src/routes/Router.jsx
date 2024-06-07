import { useRoutes } from "react-router-dom";
import HomeView from "../views/HomeView";
import userRouter from "./userRouter";
import ParametreView from "../views/ParametreView";
import SportNewView from "../views/SportNewView";
import NewView from "../views/NewView";
import EconomyNewView from "../views/EconomyNewView"

const Router = () => {
    const routes = useRoutes([
        { path: "/", element: <HomeView /> },
        userRouter,
        { path: "/parametre/:id", element: <ParametreView /> },
        { path: "/haberler/", element: <NewView />,
        children: [
          // girişte bir sayfayı varsayyılan olrak göstermesini istiyorum
          {index: true, element:<Navigate to='spor'/> }, 
          {path: "spor", element: <SportNewView />},
          {path: "ekonomi", element: <EconomyNewView />},
        ]
      
      },
    ])
  return routes;
};

export default Router;