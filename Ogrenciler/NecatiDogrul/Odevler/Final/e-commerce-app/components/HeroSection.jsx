import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/heroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-container container-fluid">
      <div className="row justify-content-start">
        <div
          className="
            col-md-6 col-12
            d-flex
            flex-column
            justify-content-center
            align-items-start
            hero-content"
        >
          <h1 className="hero-title">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
          <p className="hero-subtitle">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <a href="#" className="shop-now-btn">
            Shop Now
          </a>
        </div>
      </div>
      <div className="row stats-container justify-content-start">
        <div className="col-md-2 col-12 stat">
          <h3>200+</h3>
          <p>International Brands</p>
        </div>
        <div className="col-md-2 col-12 stat">
          <h3>2,000+</h3>
          <p>High-Quality Products</p>
        </div>
        <div className="col-md-2 col-12 stat">
          <h3>30,000+</h3>
          <p>Happy Customers</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
