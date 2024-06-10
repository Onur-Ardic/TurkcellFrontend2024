import React from "react";
import { useRoutes } from "react-router-dom";
import HomeView from "../views/HomeView";
import NewsView from "../views/NewsView";
import NewsCategoryView from "../views/NewsCategoryView";

const Router = () => {
  const routes = useRoutes([
    { path: "/", element: <HomeView /> },
    {
      path: "/news/",
      element: <NewsView />,
      children: [
        { index: true, path: ":category", element: <NewsCategoryView /> },
      ],
    },
  ]);
  return routes;
};

export default Router;
