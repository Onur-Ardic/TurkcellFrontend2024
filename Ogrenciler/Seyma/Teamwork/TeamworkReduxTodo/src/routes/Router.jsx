import Entry from "../components/Entry";
import Login from "../components/Login";
import Register from "../components/Register";
import UserPage from "../components/UserPage";
import { auth } from "../config/firebase";
import { useRoutes } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

const Router = () => {
  const [user] = useAuthState(auth);

  const routes = useRoutes([
    { path: "/", element: <Entry /> },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "/user", element: user ? <UserPage /> : <Login /> },
  ]);

  return routes;
};

export default Router;

