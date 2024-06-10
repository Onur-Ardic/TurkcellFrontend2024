import { NavLink } from "react-router-dom";
import "./App.css";
import Router from "./routers/router";
import { Navbar, NavLinkDiv } from "./StyledComponent";
function App() {
  return (
    <>
      <div className="container mt-3">
        <Navbar>
          <NavLink to="/">
            <NavLinkDiv>Anasayfa</NavLinkDiv>
          </NavLink>
          <NavLink to="/business">
            <NavLinkDiv>İş</NavLinkDiv>
          </NavLink>
          <NavLink to="/entertainment">
            <NavLinkDiv>Eğlence</NavLinkDiv>
          </NavLink>
          <NavLink to="/health">
            <NavLinkDiv>Sağlık</NavLinkDiv>
          </NavLink>
          <NavLink to="/science">
            <NavLinkDiv>Bilim</NavLinkDiv>
          </NavLink>
          <NavLink to="/sports">
            <NavLinkDiv>Spor</NavLinkDiv>
          </NavLink>
          <NavLink to="/technology">
            <NavLinkDiv>Teknoloji</NavLinkDiv>
          </NavLink>
        </Navbar>
      </div>

      <Router />
    </>
  );
}

export default App;
