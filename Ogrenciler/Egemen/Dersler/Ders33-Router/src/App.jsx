import { NavLink } from 'react-router-dom'
import './App.css'
import Router from "./routes/Router"

function App() {

  return (
    <>
      <h1>React Router</h1>
      <ul>
        <li>
          <NavLink to="/Anasayfa">Anasayfa</NavLink>
        </li>
        <li>
          <NavLink to="/user">User</NavLink>
        </li>
        <li>
          <NavLink to="/parametre/23">Parametre</NavLink>
        </li>
        <li>
          <NavLink to="/haberler">haberler</NavLink>
        </li>
        <li>
          <NavLink to="/haberler/spor">spor haberleri</NavLink>
        </li>
        <li>
          <NavLink to="/haberler/ekonomi">ekonomi haberleri</NavLink>
        </li>
      </ul>
      <Router />
      <h1>Footer</h1>
    </>
  )
}

export default App
