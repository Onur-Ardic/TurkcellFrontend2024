import React from "react";
import { useRoutes, Navigate } from "react-router-dom";

import HomeView from "../views/HomeView";
import CategoryView from "../views/CategoryView";
import DetailView from "../views/DetailView";

const Router = ({ news }) => {
  const routes = useRoutes([
    {
      path: "/",
      element: <HomeView news={news} />,
      children: [
        {
          path: ":newsId",
          element: <DetailView />,
        },
      ],
    },
    {
      path: "/category/:category",
      element: <CategoryView />,
      children: [{ path: ":newsId", element: <DetailView /> }],
    },
  ]);
  return routes;
};

export default Router;
