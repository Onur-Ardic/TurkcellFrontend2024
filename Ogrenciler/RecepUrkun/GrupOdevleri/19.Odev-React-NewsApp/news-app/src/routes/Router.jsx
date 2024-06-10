import { useRoutes } from "react-router-dom";
import HomePage from "../views/HomePage";
import SportNewView from "../views/SportNewView";
import EconomyNewView from "../views/EconomyNewView";
import HealthNewView from "../views/HealthNewView";
import NewDetail from "../views/NewDetail";
import TechnologyNewView from "../views/TechnologyNewView";
import ScienceNewView from "../views/ScienceNewView";
import EntertainmentNewView from "../views/EntertainmentNewView";

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
    {
      path: "/teknoloji",
      element: <TechnologyNewView selectedLanguage={selectedLanguage} />,
    },
    {
      path: "/bilim",
      element: <ScienceNewView selectedLanguage={selectedLanguage} />,
    },
    {
      path: "/eglence",
      element: <EntertainmentNewView selectedLanguage={selectedLanguage} />,
    },
  ]);
  return routes;
};

export default Router;
