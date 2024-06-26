import { useRoutes } from "react-router-dom";
import AppPage from "../AppPage";
import Home from "../Home";
import Login from "../Login";
import Signup from "../SignUp";
const Router = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/signup", element: <Signup /> },
    { path: "/login", element: <Login /> },
    { path: "/apppage", element: <AppPage /> },
  ]);
  return routes;
};

export default Router;
