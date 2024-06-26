import React from "react";
import { NavLink } from "react-router-dom";
import Router from "./routers/router"; // Router bileşeninizin doğru yolu

function App() {
  return (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/signup">SignIn</NavLink>
      <NavLink to="/login">LogIn</NavLink>
      <Router />
    </>
  );
}

export default App;
