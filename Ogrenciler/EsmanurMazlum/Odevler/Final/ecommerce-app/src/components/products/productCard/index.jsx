import React from "react";
import { Rating, ThinStar } from "@smastrom/react-rating";
import Link from "next/link";
import Image from "next/image";

const thinStarStyles = {
  itemShapes: ThinStar,
  activeFillColor: "#f59e0b",
  inactiveFillColor: "#ffedd5",
};

export const calculateDiscount = (price, originalPrice) => {
  return ((originalPrice - price) / originalPrice) * 100;
};

function ProductCard({ product }) {

    

  return (
    <Link href={`/productDetail/${product.id}`} className="col-lg-3 col-md-4 col-sm-6 p-0">
      <div>
        <div className="product-card">
          <div className="product-img img-fluid">
          <Image
            src={`/${product.imgUrl}`}
            alt={product.name}
            fill
          />
          </div>
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
    </Link>
  );
}

export default ProductCard;
