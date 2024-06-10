import React from "react";
import { useRoutes, Navigate } from "react-router-dom";
import HomeView from "../views/HomeView";
import BusinessView from "../views/BusinessView";
import EntertainmentView from "../views/EntertainmentView";

const Router = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <HomeView />,
    },
    {
      path: "/news",
      element: <HomeView />,
      children: [
        { index: true, element: <Navigate to="" /> },
        { path: "business", element: <BusinessView /> },
        { path: "entertainment", element: <EntertainmentView /> },
        /*
        { path: "health", element: <HealthView /> },
        { path: "science", element: <ScienceView /> },
        */
      ],
    },
  ]);
  return routes;
};

export default Router;
