import { useRoutes } from "react-router-dom";
import Business from "../views/Business";
import Entertainment from "../views/Entertainment";
import General from "../views/General";
import Health from "../views/Health";
import Science from "../views/Science";
import Sports from "../views/Sports";
import Technology from "../views/Technology";
const Router = () => {
  const routes = useRoutes([
    { path: "/", element: <General /> },
    { path: "/business", element: <Business /> },
    { path: "/entertainment", element: <Entertainment /> },
    { path: "/health", element: <Health /> },
    { path: "/science", element: <Science /> },
    { path: "/sports", element: <Sports /> },
    { path: "/technology", element: <Technology /> },
  ]);
  return routes;
};

export default Router;
