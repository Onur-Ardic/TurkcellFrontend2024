import { NavLink } from "react-router-dom";
import "./App.css";
import Router from "./routers/router";
function App() {
  return (
    <>
      <div className="container mt-3">
        <div className="textorange row row-cols-lg-7 row-cols-md-7 row-cols-sm-3  row-cols-2 justify-content-center text-center">
          <div className=" col-lg-1">
            <NavLink to="/">Anasayfa</NavLink>
          </div>
          <div className="col-lg-1 ">
            <NavLink to="/business">iş</NavLink>
          </div>
          <div className="col-lg-1 ">
            <NavLink to="/entertainment">eğlence</NavLink>
          </div>
          <div className="col-lg-1 ">
            <NavLink to="/health">sağlık</NavLink>
          </div>
          <div className="col-lg-1 ">
            <NavLink to="/science">bilim</NavLink>
          </div>
          <div className="col-lg-1 ">
            <NavLink to="/sports">spor</NavLink>
          </div>
          <div className="col-lg-1 ">
            <NavLink to="/technology">teknoloji</NavLink>
          </div>
        </div>
      </div>

      <Router />
    </>
  );
}

export default App;
