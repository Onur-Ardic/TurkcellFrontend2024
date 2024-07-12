import React from "react";
import ProductCard from "./ProductCard";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
// import tshirtImage from "img/product/1.png";
import styled from "styled-components";
import Link from "next/link";
import { useTranslations } from "next-intl";

// const SectionOne = styled.div`
//   width: 90%;
//   margin: "0 auto";
// `;

const ProductArea = ({ products }) => {
  const t = useTranslations("ProductArea");
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">{t("title")}</h2>
      <div className="row justify-content-center">
        {products.map((product) => (
          <div className="col-md-3" key={product.id}>
            <ProductCard
              id={product.id}
              imgSrc={product.img}
              title={product.name}
              rating={product.rate}
              price={product.price}
              originalPrice={product.priceOld}
            />
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <Link href="/category" className="btn btn-light btn-lg rounded-pill ">
          {t("button")}
        </Link>
      </div>
    </div>
  );
};

export default ProductArea;
