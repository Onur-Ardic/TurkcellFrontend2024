import { useEffect, useState } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { getData } from "../service/Request";
import NewsCard from "../components/NewsCard";
import { CategoryName } from "../styled";
import Spinner from "../components/Spinner";

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
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {location.pathname.endsWith("/") ? (
            <div className="row">
              <CategoryName>{category.toUpperCase()}</CategoryName>
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
