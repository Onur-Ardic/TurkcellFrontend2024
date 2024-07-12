import React from "react";
import ProductCard from "../products/ProductCard";
import { useTranslations } from "next-intl";

const ProductList = ({ products, title }) => {
  const t = useTranslations("cardList");

  return (
    <section className="product-list py-5">
      <div className="container pb-5 border-bottom border-1">
        <h2 className="text-center text-uppercase fw-bold">{title}</h2>
        <div className="row py-5">
          {products.slice(0, 4).map((product) => (
            <div key={product.id} className="col-lg-3 col-md-3 col-sm-6 col-6">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        <div className="view-all text-center">
          <button className="btn btn-round mx-auto text-center border">
            {t("viewAll")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductList;
