"use client";
import Link from "next/link";
import { useState } from "react";
import { MdOutlineStar } from "react-icons/md";
import { Button } from "./styled";
const MightAlso = ({ products = [] }) => {
  const [visibleProducts, setVisibleProducts] = useState(4);
  const showAllProducts = () => setVisibleProducts(8);
  const showLessProducts = () => setVisibleProducts(4);

  return (
    <div className="container m-5 ">
      <div className="row justify-content-center">
        {products.slice(0, visibleProducts).map((product) => (
          <div key={product.id} className="col-md-3 mb-4">
            <Link
              className="text-decoration-none"
              href={`/productdetail/${product.id}`}>
              <div className="card border-0 gap-2">
                <img
                  src={product.image}
                  alt={product.name}
                  className="card-img-top"
                  style={{ height: "298px", width: "295px" }}
                />
                <div className="card-body text-start d-flex row">
                  <div>
                    {" "}
                    <h6 className="productTitle fs-5 fw-bold">
                      {product.name}
                    </h6>{" "}
                  </div>
                  <div className="productRating d-flex align-items-center mb-2">
                    {Array.from({ length: product.rating }, (_, index) => (
                      <MdOutlineStar
                        key={index}
                        className="star-icon"
                        style={{ color: "#FFD700" }}
                      />
                    ))}
                    <span className="ms-2">
                      {product.rating.toFixed(1)} / 5
                    </span>
                  </div>
                  <div className="productPrice d-flex align-items-center mb-2 fs-4 ">
                    <span className="me-2 fw-bold">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-decoration-line-through me-2">
                        ${product.originalPrice}
                      </span>
                    )}
                    {product.discount && (
                      <span className="productDiscount bg-danger bg-opacity-25 text-danger fs-6 rounded-pill px-2">
                        {product.discount}%
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        {visibleProducts < 8 ? (
          <Button className="btn" onClick={showAllProducts}>
            View All
          </Button>
        ) : (
          <Button className="btn" onClick={showLessProducts}>
            Show Less
          </Button>
        )}
      </div>
    </div>
  );
};

export default MightAlso;
