import { useRoutes } from "react-router-dom"
import HomeView from "../views/HomeView"
import AboutView from "../views/AboutView"
import ParameterView from "../views/ParameterView"

function Router() {
    const routes = useRoutes([
        { path: "/", element: <HomeView /> },
        { path: "/about", element: <AboutView /> },
        { path: "/parameter/:id", element: <ParameterView /> }
    ])

    return routes
}

export default Router