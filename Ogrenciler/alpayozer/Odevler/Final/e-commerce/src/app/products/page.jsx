import ProductCard from "@/components/ProductCard";
import React from "react";
import pantolon from "../../assets/images/pantolon.png";
import shirt from "../../assets/images/shirt.png";
import tshirt from "../../assets/images/tshirt.png";
import tshirt2 from "../../assets/images/tshirt2.png";

const Products = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-10">
          <div className="row">
            <div className="col-lg-4">
              <ProductCard src={pantolon} />
            </div>
            <div className="col-lg-4">
              <ProductCard src={shirt} />
            </div>
            <div className="col-lg-4">
              <ProductCard src={tshirt} />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <ProductCard src={tshirt2} />
            </div>
            <div className="col-lg-4">
              <ProductCard src={pantolon} />
            </div>
            <div className="col-lg-4">
              <ProductCard src={tshirt} />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <ProductCard src={shirt} />
            </div>
            <div className="col-lg-4">
              <ProductCard src={tshirt} />
            </div>
            <div className="col-lg-4">
              <ProductCard src={pantolon} />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <ProductCard src={tshirt} />
            </div>
            <div className="col-lg-4">
              <ProductCard src={tshirt2} />
            </div>
            <div className="col-lg-4">
              <ProductCard src={shirt} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
