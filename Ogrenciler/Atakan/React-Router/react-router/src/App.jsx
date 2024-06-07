import "./App.css";
import Router from "./components/routes/Router";
import { NavLink } from "react-router-dom";

function App() {
  return (
    <>
      <h1>React-Router</h1>
      <ul>
        <li>
          <NavLink to="/">Anasayfa</NavLink>
        </li>
        <li>
          <NavLink to="/user">User</NavLink>
        </li>
        <li>
          <NavLink to="/parametre/1">Parametre</NavLink>
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
      <div>Footer</div>
    </>
  );
}

export default App;
