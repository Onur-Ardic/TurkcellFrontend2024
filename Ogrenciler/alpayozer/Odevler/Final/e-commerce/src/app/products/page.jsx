import ProductCard from "@/components/ProductCard";
import React from "react";

const Products = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-10">
          <div className="row">
            <div className="col-lg-4">
              <ProductCard />
            </div>
            <div className="col-lg-4">
              <ProductCard />
            </div>
            <div className="col-lg-4">
              <ProductCard />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <ProductCard />
            </div>
            <div className="col-lg-4">
              <ProductCard />
            </div>
            <div className="col-lg-4">
              <ProductCard />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <ProductCard />
            </div>
            <div className="col-lg-4">
              <ProductCard />
            </div>
            <div className="col-lg-4">
              <ProductCard />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <ProductCard />
            </div>
            <div className="col-lg-4">
              <ProductCard />
            </div>
            <div className="col-lg-4">
              <ProductCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
