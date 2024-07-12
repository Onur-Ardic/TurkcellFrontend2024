"use client";
import React from "react";
import "./components.css";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white">
      <div className="container">
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
        <a className="navbar-brand navbar_logo" href="/">
          SHOP.CO
        </a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <a
                className="nav-link navbar_text active"
                aria-current="page"
                href="#"
              >
                Shop
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link navbar_text" href="#">
                On Sale
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link navbar_text" href="#">
                New Arrivals
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link navbar_text" href="#">
                Brands
              </a>
            </li>
          </ul>
          <form className="">
            <input
              className="navbar_search"
              type="search"
              placeholder="Search for products..."
            />
          </form>
          <div className="header_icons">
            <i className="nav-item bi bi-cart "></i>
            <i className="nav-item bi bi-person-circle "></i>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
