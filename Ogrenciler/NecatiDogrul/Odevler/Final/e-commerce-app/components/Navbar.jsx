import React from "react";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-white shadow-sm"
      style={{ zIndex: 999 }}
    >
      <div className="container-fluid">
        <a
          className="navbar-brand"
          href="#"
          style={{
            fontFamily: "Integral CF",
            fontSize: "32px",
            fontWeight: 700,
          }}
        >
          SHOP.CO
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Shop
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                On Sale
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                New Arrivals
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Brands
              </a>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search for products..."
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          <div className="d-flex align-items-center ms-3">
            <FaShoppingCart className="me-3" style={{ fontSize: "24px" }} />
            <FaUser style={{ fontSize: "24px" }} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
