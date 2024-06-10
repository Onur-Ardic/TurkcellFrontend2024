import { useRoutes } from "react-router-dom";
import ShowView from "../views/ShowView";
const Router = () => {
  const routes = useRoutes([
    { path: "/", element: <ShowView category="general" /> },
    { path: "/business", element: <ShowView category="business" /> },
    { path: "/entertainment", element: <ShowView category="entertainment" /> },
    { path: "/health", element: <ShowView category="health" /> },
    { path: "/science", element: <ShowView category="science" /> },
    { path: "/sports", element: <ShowView category="sports" /> },
    { path: "/technology", element: <ShowView category="technology" /> },
  ]);
  return routes;
};

export default Router;
