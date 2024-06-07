
import './App.css'
import Router from './routes/Router'

function App() {

  return (
    <>
    <h1>React Routers</h1>
    <ul>
      <li>
        <NavLink to="/"></NavLink>
      </li>
      <li>
        <NavLink to="/user">User</NavLink>
      </li>
      <li>
        <NavLink to="/parametre/123">Parametre</NavLink>
      </li>
      <li>
        <NavLink to="/"></NavLink>
      </li>
    </ul>
    <div>Footer</div>
    </>
  

  )
}

export default App
