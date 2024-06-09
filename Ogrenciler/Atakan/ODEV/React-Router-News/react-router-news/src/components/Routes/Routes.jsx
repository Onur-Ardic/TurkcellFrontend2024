import { useRoutes, Navigate } from "react-router-dom";
import News from "../Views/News";
import About from "../Views/About";

const Routes = ({ onData }) => {
  const routes = useRoutes([
    { path: "/", element: <Navigate to="/Home" /> },

    {
      path: "/haberler/",
      element: <News onData={onData} />,
    },
    { path: "*", element: <Navigate to="/haberler" /> },
    { path: "/hakkımızda", element: <About /> },
  ]);
  return routes;
};

export default Routes;
