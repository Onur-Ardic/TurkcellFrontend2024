import React from "react";
import "./components.css";

const Header2 = () => {
  return (
    <div className="navbar_container">
      <div className="row">
        <div className="col-lg-2">
          <a href="/" className="navbar_logo">
            SHOP.CO
          </a>
        </div>
        <div className="col-lg-4">
          <div className="row">
            <div className="col-lg-3">
              <a href="/" className="navbar_text ">
                Shop
              </a>
            </div>
            <div className="col-lg-3">
              <a href="/" className="navbar_text ">
                On Sale
              </a>
            </div>
            <div className="col-lg-3">
              <a href="/" className="navbar_text ">
                {" "}
                New Arrivals
              </a>
            </div>
            <div className="col-lg-3">
              <a href="/" className="navbar_text ">
                Brands
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <form>
            <input
              className="navbar_search "
              type="search"
              placeholder="Search for products..."
            />
          </form>
        </div>
        <div className="col-lg-1">
          <div className="row">
            <div className="col-lg-6">
              <i className="bi bi-cart"></i>
            </div>
            <div className="col-lg-6">
              <i className="bi bi-person"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header2;
