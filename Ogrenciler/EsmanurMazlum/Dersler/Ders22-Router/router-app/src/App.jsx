import './App.css'
import { NavLink, Router } from 'react-router-dom'

function App() {

  return (
    <>
      <h1>Haberler</h1>
      <ul>
        <li>
          <NavLink to='/'>
            Anasayfa
          </NavLink>
        </li>
      </ul>
      <Router/>
      <div>Footer</div>
    </>
  )
}

export default App
