import { NavLink } from "react-router-dom";
import "./App.css";
import Router from "./routes/Router";

function App() {
  return (
    <>
      <h1>React Router</h1>
      <ul>
        <li>
          <NavLink to="/">Anasayfa</NavLink>
          <NavLink to="/user">User</NavLink>
          <NavLink to="/parametre/123">Parametre</NavLink>
          <NavLink to="/haberler">Haberler</NavLink>
          <NavLink to="/haberler/spor">Spor</NavLink>
          <NavLink to="/haberler/ekonomi">Ekonomi</NavLink>
        </li>
      </ul>
      <Router />
    </>
  );
}

export default App;
