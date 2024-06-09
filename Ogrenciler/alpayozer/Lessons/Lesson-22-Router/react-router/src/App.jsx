import "./App.css";
import Router from "./routes/Router";
import { NavLink } from "react-router-dom";

function App() {
  return (
    <>
      <h1>React Router</h1>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/user">User</NavLink>
        </li>
        <li>
          <NavLink to="/parametre/123">Parametre</NavLink>
        </li>
        <li>
          <NavLink to="haberler">News</NavLink>
        </li>
        <li>
          <NavLink to="haberler/spor">Sports News</NavLink>
        </li>
        <li>
          <NavLink to="haberler/ekonomi">Economy News</NavLink>
        </li>
      </ul>
      <Router />
      <div>footer</div>
    </>
  );
}

export default App;
