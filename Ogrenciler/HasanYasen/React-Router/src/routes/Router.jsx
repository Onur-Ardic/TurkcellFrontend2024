import { useRoutes } from "react-router-dom"
import HomeView from "../views/HomeView"
import AboutView from "../views/AboutView"
import ParameterView from "../views/ParameterView"
import NewView from "../views/NewView"
import SporView from './../views/SporView'
import EconomyView from './../views/EconomyView'

function Router() {
    const routes = useRoutes([
        { path: "/", element: <HomeView /> },
        { path: "/about", element: <AboutView /> },
        { path: "/parameter/:id", element: <ParameterView /> },
        {
            path: "/news/", element: <NewView />,
            children: [
                { index: true, element: <SporView /> },
                { path: "spor", element: <SporView /> },
                { path: "economy", element: <EconomyView /> },
            ]
        }
    ])

    return routes
}

export default Router