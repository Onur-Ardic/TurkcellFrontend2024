import React, { useEffect, useState } from "react";
import {
  Navigate,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { getData } from "../service/Request";
import NewsCard from "../components/NewsCard";

const CategoryView = () => {
  const { category } = useParams();
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();

  const fetchData = async () => {
    setIsLoading(true);
    const result = await getData(category);
    setNews(result.articles);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [category]);
  console.log(news);
  console.log("location", location.pathname.endsWith("/"));
  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {location.pathname.endsWith("/") ? (
            <div className="row">
              <h1>{category}</h1>
              {news
                .filter(
                  (item) =>
                    item.title !== "[Removed]" && item.description !== null
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
      )}
    </>
  );
};

export default CategoryView;
