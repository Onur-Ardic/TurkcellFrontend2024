import React from "react";
import "./components.css";
import ProductCard from "./ProductCard";

const Header3 = () => {
  return (
    <nav>
      <div className="navbar_container">
        <div className="logo">SHOP.CO</div>
        <div className="navbar_menu">
          <div className="navbar_text">Shop</div>
          <div className="navbar_text">On Sale</div>
          <div className="navbar_text">New Arrivals</div>
          <div className="navbar_text">Brands</div>
        </div>
        <div className="">
          <form>
            <input
              className="input_form "
              type="search"
              placeholder="Search for products..."
            />
          </form>
        </div>
        <div className="right_icons">
          <i className="bi bi-cart .cart_icon "></i>
          <i className="bi bi-person profile_icon"></i>
        </div>
      </div>

      {/* <div className="container">
        <ProductCard />
      </div> */}
    </nav>
  );
};

export default Header3;
