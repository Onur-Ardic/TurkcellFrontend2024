import { useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import BusinessNews from "../pages/BusinessNews";
import EntertainmentNews from "../pages/EntertainmentNews";
import HealthNews from "../pages/HealthNews";
import SportsNews from "../pages/SportsNews";
import ScienceNews from "../pages/ScienceNews";
import TechnologyNews from "../pages/TechnologyNews";

const Router = ({ category, news }) => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Home category={category} news={news} />,
    },
    {
      path: "/business",
      element: <BusinessNews news={news} />,
    },
    {
      path: "/entertainment",
      element: <EntertainmentNews news={news} />,
    },
    {
      path: "/health",
      element: <HealthNews news={news} />,
    },
    {
      path: "/sports",
      element: <SportsNews news={news} />,
    },
    {
      path: "/science",
      element: <ScienceNews news={news} />,
    },
    {
      path: "/technology",
      element: <TechnologyNews news={news} />,
    },
    {
      path: "*",
      element: <Home category={category} news={news} />,
    },
  ]);
  return routes;
};

export default Router;
