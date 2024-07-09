import React from "react";
import { Rating, ThinStar } from "@smastrom/react-rating";

const thinStarStyles = {
  itemShapes: ThinStar,
  activeFillColor: "#f59e0b",
  inactiveFillColor: "#ffedd5",
};

function ProductCard({ product }) {

    const calculateDiscount = (price, originalPrice) => {
        return ((originalPrice - price) / originalPrice) * 100;
    };

  return (
    <div className="col-lg-3 col-md-4 col-sm-6 p-0">
      <div>
        <div className="product-card">
          <img
            className="product-img img-fluid"
            src={product.imgUrl}
            alt={product.name}
          />
        </div>
        <div>
          <p className="fw-bold m-0 mt-2 fs-20">{product.name}</p>
        </div>
        <div style={{ width: "40%", display: "flex" }}>
          <Rating value={product.rating} itemStyles={thinStarStyles} readOnly />
          <p className="m-0 mx-1">{product.rating}/5</p>
        </div>
        <div>
        <p className="fw-bold fs-24 d-flex align-items-center">
            ${product.price}
            {product.original_price > product.price && (
              <>
                <span className="ms-2 text-decoration-line-through discount-color">
                  ${product.original_price}
                </span>
                <span className="ms-2 text-danger discount-badge">
                  -{calculateDiscount(product.price, product.original_price).toFixed(0)}%
                </span>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
