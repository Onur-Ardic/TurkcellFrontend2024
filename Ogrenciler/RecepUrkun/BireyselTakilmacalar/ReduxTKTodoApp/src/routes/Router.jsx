import { useRoutes } from "react-router-dom";
import Home from "../components/Home";
import Todos from "../components/Todos";
import Register from "../Auth/Register";
import Login from "../Auth/Login";
import WelcomePage from "../components/WelcomePage";

const Router = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <WelcomePage />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/todos",
      element: <Todos />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return routes;
};

export default Router;
