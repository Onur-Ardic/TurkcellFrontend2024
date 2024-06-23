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
          <NavLink to="/user">User</NavLink>
        </li>""
        <li>
          <NavLink to="/parametre/123">Parametre</NavLink>
        </li>
        <li>
          <NavLink to="/haberler/">Haberler</NavLink>
        </li>
        <li>
          <NavLink to="/haberler/spor">Spor</NavLink>
        </li>
        <li>
          <NavLink to="/haberler/ekonomi">Ekonomi</NavLink>
        </li>
      </ul>
      <Router />
    </>
  );
}

export default App;
