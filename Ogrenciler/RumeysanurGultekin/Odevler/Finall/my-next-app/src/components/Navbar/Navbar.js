import React from "react";
import "../../app/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BiCart, BiUser } from "react-icons/bi";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbara">
      <div className="container-fluid">
        <Link className="brandfont" href="/">
          SHOP.CO
        </Link>
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
        <div className="collapse navbar-collapse " id="navbarNav">
          <div>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" href="/shop">
                  Shop
                </Link>
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
          </div>
          <div className="search-container">
            <input
              type="search"
              placeholder="Search for products..."
              aria-label="Search"
            />
          </div>
        </div>
        <div className="icons">
          <a href="#" className="icon">
            <BiCart />
          </a>
          <a href="#" className="icon">
            <BiUser />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
