import { useEffect, useState } from "react";
import { get } from "./api";
import { NavLink, } from "react-router-dom";
import  Router from './routes/Router'

function App() {
  const [data, setData] = useState([])
  

  useEffect(() => {
    const result = get("economy").then(data=>
      setData(data));
   
  }, []);

  return (
    <>
    <div>  
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <NavLink className={"nav-link active"} to="/">Anasayfa</NavLink>
        </li>
        <li class="nav-item">
        <NavLink className={"nav-link"} to="/spor">Spor</NavLink>
        </li>
        <li class="nav-item">
        <NavLink className={"nav-link"} to="/ekonomi">Ekonomi</NavLink>
        </li>
        <li class="nav-item">
        <NavLink className={"nav-link"} to="/technology">Technology</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
      <Router />
    </>
  )
}

export default App
