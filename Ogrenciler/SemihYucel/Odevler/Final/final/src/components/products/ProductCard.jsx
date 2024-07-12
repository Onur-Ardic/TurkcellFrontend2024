"use client";
import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

const ProductCard = ({ product }) => {
  const router = useRouter();
  const pathname = usePathname();
  const localeFromURL = pathname ? pathname.split("/")[1] : "tr";
  const locale = localeFromURL || "tr";

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<BsStarFill color="#FFC633" key={i} />);
      } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
        stars.push(<BsStarHalf color="#FFC633" key={i} />);
      } else {
        stars.push(<BsStar color="white" key={i} />);
      }
    }
    return stars;
  };

  const discountedPrice = product.discount
    ? (product.price * (100 - product.discount)) / 100
    : product.price;

  return (
    <Link href={`/${locale}/productDetail/${product.id}`} passHref>
      <div className="card product-card border-0">
        <img
          className="card-img-top rounded-5 p-3"
          src={`/assets/img/${product.image}`}
          alt={product.name}
        />
        <div className="card-body">
          <p className="card-title fw-bold fs-6">{product.name}</p>
          <div className="card-text d-inline ">
            {renderStars(product.rating)}
          </div>
          <p className="d-inline">
            {" "}
            {product.rating}/ <span className="fw-light">5</span>
          </p>
          <div className="price-info d-flex align-items-center mt-2">
            <span className="text-dark font-satoshi fw-bold ">
              ${discountedPrice.toFixed(2)}
            </span>
            {product.discount > 0 && (
              <>
                <span className="text-muted text-decoration-line-through ms-2 ">
                  ${product.price}
                </span>

                <span className="price-count badge bg-danger-subtle  text-danger ms-2 rounded-pill">
                  -{product.discount}%
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
