import React from "react";
import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import { themes } from "../style/styled";
import { NavLink } from "react-router-dom";
import ThemeButton from "./ThemeButton";
import { CiLogout } from "react-icons/ci";
import { getAuth, signOut } from "firebase/auth";

const Navbar = () => {
  const theme = useSelector((state) => state.theme.value);
  const loggedInUser = localStorage.getItem("userData")
    ? JSON.parse(localStorage.getItem("userData")).userName
    : null;

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        localStorage.removeItem("userData"); // localStorage'dan kullanıcı bilgisini kaldır
        window.location.reload(); // Sayfayı yenile, veya react-router kullanıyorsanız navigate vb. kullanarak yönlendirme yapabilirsiniz
      })
      .catch((error) => {
        console.error("Sign out error", error);
      });
  };

  return (
    <ThemeProvider theme={themes[theme]}>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          {console.log(loggedInUser)}
          {loggedInUser ? (
            <NavLink
              to="/home"
              className="navbar-brand"
              style={{ color: themes[theme].navTextColor }}
            >
              Home
            </NavLink>
          ) : (
            ""
          )}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-evenly"
            id="navbarSupportedContent"
          >
            <div className="nav-item d-flex gap-4 mx-auto">
              {loggedInUser ? (
                <NavLink
                  to="/todos"
                  className="navbar-brand"
                  style={{ color: themes[theme].navTextColor }}
                >
                  Todos
                </NavLink>
              ) : (
                ""
              )}
              <ThemeButton />
            </div>
            {!loggedInUser ? (
              <div className="me-5">
                <NavLink
                  to="/login"
                  className="navbar-brand"
                  style={{ color: themes[theme].navTextColor }}
                >
                  Login
                </NavLink>
                <NavLink
                  to="/register"
                  className="navbar-brand"
                  style={{ color: themes[theme].navTextColor }}
                >
                  Register
                </NavLink>
              </div>
            ) : (
              <div className="me-5 d-flex align-items-center">
                <h5 className="m-0 mx-3">{loggedInUser}</h5>
                <NavLink
                  to="/"
                  className="navbar-brand"
                  onClick={handleLogout}
                  style={{ color: themes[theme].navTextColor }}
                >
                  <CiLogout />
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </nav>
    </ThemeProvider>
  );
};

export default Navbar;
