import { useRoutes } from "react-router-dom";
import HomeView from "../views/HomeView";
import NewsView from "../views/NewsView";
import NewsCategoryView from "../views/NewsCategoryView";

const Router = ({ data, loading, searchData }) => {
  const routes = useRoutes([
    {
      path: "/",
      element: (
        <HomeView data={data} searchData={searchData} loading={loading} />
      ),
    },
    {
      path: "/news/",
      element: <NewsView data={data} />,
      children: [
        { index: true, path: ":category", element: <NewsCategoryView /> },
      ],
    },
  ]);
  return routes;
};

export default Router;
