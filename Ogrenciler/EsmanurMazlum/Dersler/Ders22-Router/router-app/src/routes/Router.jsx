import { Navigate, useRoutes } from "react-router-dom"
import ParametreView from "../views/ParametreView";
import NewView from "../views/NewView";
import SportView from "../views/SportView";
import EconomyNewView from "../views/EconomyNewView";
import HomeView from "../views/HomeView";

const Router = () => {
    const routes = useRoutes([
        { path: '/', element: <HomeView />},
        { path: '/parametre/:id', element: <ParametreView />},
        { path: '/haberler/', element: <NewView/>, 
            children:[
                {index: true, element: <Navigate to='spor'/>},
                {path: 'spor', element: <SportView/>},
                {path: 'ekonomi', element: <EconomyNewView/>}
            ]


        }
    ]);
    return routes;
};

export default Router;