import "./App.css";
import Router from "./routes/Router";
import { NavLink } from "react-router-dom";

function App() {
  return (
    <>
      <h1>Hello React Router</h1>
      <ul>
        <li>
          <NavLink to="/">Anasayfa</NavLink>
        </li>
        <li>
          <NavLink to="/user">User</NavLink>
        </li>
        <li>
          <NavLink to="/parametre/123">Parametre</NavLink>
        </li>
        <li>
          <NavLink to="/haberler">Haberler</NavLink>
        </li>
        <li>
          <NavLink to="/haberler/spor">Spor Haberleri</NavLink>
        </li>
        <li>
          <NavLink to="/haberler/ekonomi">Ekonomi Haberleri</NavLink>
        </li>
      </ul>
      <Router />
      <div>Footer</div>
    </>
  );
}

export default App;
