import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import NewsCard from "../components/NewsCard";

const HomeView = ({ news }) => {
  const location = useLocation();
  console.log(location.pathname.endsWith("/"));
  return (
    <>
      {location.pathname.endsWith("/") ? (
        <div className="row">
          {news
            .filter(
              (item) => item.title !== "[Removed]" && item.description !== null
            )
            .map((e, index) => (
              <div key={index} className="col-lg-4">
                <NewsCard news={e} />
              </div>
            ))}
        </div>
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default HomeView;
