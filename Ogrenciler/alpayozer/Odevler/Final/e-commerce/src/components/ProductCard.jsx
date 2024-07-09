import React from "react";
import "./components.css";
import pantolon from "../assets/images/kot-pantolon.png";
import Image from "next/image";

const ProductCard = () => {
  return (
    <div className="product_container">
      <div className="product_card">
        <Image className="pr_img" src={pantolon} />
      </div>
      <div className="info_container">
        <span className="title">Skinny Fit Jeans</span>
        <div className="rate_container">
          <div>
            <i class="bi bi-star-fill star"></i>
            <i class="bi bi-star-fill star"></i>
            <i class="bi bi-star-fill star"></i>
            <i class="bi bi-star-fill star"></i>
            <i class="bi bi-star-fill star"></i>
          </div>
          <div>
            <span className="rate">4.5/</span>
            <span className="rate1">5</span>
          </div>
        </div>
        <div className="price_container">
          <span className="price">$59.99</span>
          <span className="old_price">$99.99</span>
          <div className="discount">
            <span className="discount_text">-20%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
