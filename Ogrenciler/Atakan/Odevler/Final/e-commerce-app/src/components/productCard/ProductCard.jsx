import Image from "next/image";
import React from "react";
import "./productcard.scss";
import Link from "next/link";

const ProductCard = ({ product }) => {
  const { id, image, name, point, price, category } = product;
  return (
    <Link
      href={`http://localhost:3001/details/${id}`}
      className="text-decoration-none text-reset"
    >
      <div className="product-card border-0">
        <Image
          className="img-fluid"
          src={`/product-images/${image}`}
          alt="Product Image"
          width="250"
          height="298"
          priority={false}
        />
        <div className="card-body">
          <p className="name fw-bold">{name}</p>
          <p>Point: {point}/5</p>
          <p className="price fw-bold">{price}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
