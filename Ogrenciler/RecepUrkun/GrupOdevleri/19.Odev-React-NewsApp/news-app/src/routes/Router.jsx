import { useRoutes } from "react-router-dom";
import HomePage from "../views/HomePage";
import SportNewView from "../views/SportNewView";
import EconomyNewView from "../views/EconomyNewView";
import HealthNewView from "../views/HealthNewView";
import NewDetail from "../views/NewDetail";

const Router = ({ selectedLanguage }) => {
  const routes = useRoutes([
    { path: "/", element: <HomePage selectedLanguage={selectedLanguage} /> },
    {
      path: "/haber/:id",
      element: <NewDetail selectedLanguage={selectedLanguage} />,
    },
    {
      path: "/spor",
      element: <SportNewView selectedLanguage={selectedLanguage} />,
    },
    {
      path: "/ekonomi",
      element: <EconomyNewView selectedLanguage={selectedLanguage} />,
    },
    {
      path: "/saglik",
      element: <HealthNewView selectedLanguage={selectedLanguage} />,
    },
  ]);
  return routes;
};

export default Router;
