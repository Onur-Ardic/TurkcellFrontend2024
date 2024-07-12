"use client";
import React, { useState } from "react";
import { ArrivalsTitle, ViewAllButton } from "./Styled";
import ProductCard from "./ProductCard";
import { useTranslations } from "next-intl";

const ProductList = ({ title = "", products, showAll = false }) => {
  const [visibleProductsCount, setVisibleProductsCount] = useState(
    showAll ? products.length : 4
  );

  const handleViewAll = () => setVisibleProductsCount(products.length);
  const visibleProducts = products.slice(0, visibleProductsCount);

  const t = useTranslations("ProductList");

  return (
    <div className="container">
      <div className="row">
        {title ? <ArrivalsTitle className="mt-6_5">{title}</ArrivalsTitle> : ""}
        <div className="d-flex flex-wrap flex-md-row justify-content-between">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      {!showAll && visibleProductsCount < products.length && (
        <div className="d-flex justify-content-center">
          <ViewAllButton onClick={handleViewAll}>{t("ViewAll")}</ViewAllButton>
        </div>
      )}
    </div>
  );
};

export default ProductList;
