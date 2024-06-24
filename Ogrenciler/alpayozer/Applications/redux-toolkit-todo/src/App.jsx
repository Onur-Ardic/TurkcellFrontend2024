import "./App.css";
import Router from "./routes/Router";
import { NavLink } from "react-router-dom";

function App() {
  return (
    <>
      <ul>
        <li>
          <NavLink to="/">Anasayfa</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/register">Register</NavLink>
        </li>
      </ul>
      <Router />
    </>
  );
}

export default App;
