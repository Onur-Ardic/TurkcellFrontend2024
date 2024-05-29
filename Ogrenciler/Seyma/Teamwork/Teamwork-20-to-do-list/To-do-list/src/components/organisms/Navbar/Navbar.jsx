import React from "react";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <img src="https://i.hizliresim.com/hnq6ezt.png" alt="" />
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active text-muted"
                  aria-current="page"
                  href="#"
                >
                  Starred
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active text-muted"
                  aria-current="page"
                  href="#"
                >
                  Templates
                </a>
              </li>
            </ul>
          </div>
          <i className="fs-4 text-secondary bi bi-bell"></i>
          <i className="fs-4 mx-2 text-secondary  bi bi-question-lg"></i>
          <div className="profiles">
            <img
              className="w-100"
              src="https://r.resimlink.com/xFyhKj4O9.png"
              alt="profile"
            />
          </div>
        </div>
      </nav>
    </header>
  );
};
