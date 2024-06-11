import React from "react";
import { useRoutes, Navigate, Outlet } from "react-router-dom";
import HomeView from "../views/HomeView";
import BusinessView from "../views/BusinessView";
import EntertainmentView from "../views/EntertainmentView";
import GeneralView from "../views/GeneralView";
import NewsDetailView from "../views/NewsDetailView";

const RouterConfig = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <HomeView />,
    },
    {
      path: "/news/",
      element: (
        <div>
          <Outlet />
        </div>
      ),
      children: [
        { index: true, element: <Navigate to="" /> },
        { path: "business", element: <BusinessView /> },
        { path: "entertainment", element: <EntertainmentView /> },
        { path: "general", element: <GeneralView /> },
        { path: ":category/:id", element: <NewsDetailView /> },
      ],
    },
  ]);
  return routes;
};

export default RouterConfig;
