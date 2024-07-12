import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Link from "next/link";

const ProductCard = ({
  id,
  imgSrc,
  title,
  rating,
  price,
  originalPrice,
  discount,
}) => {
  return (
    <Link
      href={`/product/${id}`}
      className="card product-card shadow-sm"
      style={{
        width: "18rem",
        borderRadius: "15px",
        border: "none",
        backgroundColor: "#F0EEED",
        height: "444px",
        width: "296px",
        textDecoration: "none",
      }}
    >
      <img
        src={imgSrc}
        className="card-img-top"
        alt={title}
        style={{ borderRadius: "15px 15px 0 0" }}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <div className="d-flex align-items-center">
          <div className="text-warning me-2">
            {[...Array(5)].map((_, i) => (
              <i
                key={i}
                className={`fas fa-star${
                  i < Math.floor(rating) ? "" : "-half-alt"
                }`}
              ></i>
            ))}
          </div>
          <span className="text-muted">{rating}/5</span>
        </div>
        <p className="card-text mt-2 fw-bold">
          ${price}{" "}
          {originalPrice && (
            <span className="text-muted text-decoration-line-through ms-2">
              ${originalPrice}
            </span>
          )}
          {discount && <span className="text-danger ms-2">-${discount}</span>}
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
