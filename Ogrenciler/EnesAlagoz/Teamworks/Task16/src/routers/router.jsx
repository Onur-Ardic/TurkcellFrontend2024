import { useRoutes } from "react-router-dom";
import ShowView from "../views/ShowView";

const categories = ["general", "business", "entertainment", "health", "science", "sports", "technology"];

const Router = ({ loading, error, data, setCategory }) => {
  const routes = useRoutes(
    categories.map((showCategory) => ({
      path: showCategory === "general" ? "/" : `/${showCategory}`,
      element: (
        <ShowView showCategory={showCategory} setCategory={setCategory} loading={loading} error={error} data={data} />
      ),
    }))
  );
  return routes;
};

export default Router;
