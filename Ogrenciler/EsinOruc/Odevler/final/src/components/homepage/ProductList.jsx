"use client";
import React from "react";
import ProductCard from "../products/ProductCard";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

const ProductList = ({ products, title }) => {
  const t = useTranslations("cardList");
  const router = useRouter();
  const pathname = usePathname();
  const localeFromURL = pathname ? pathname.split("/")[1] : "tr";
  const locale = localeFromURL || "tr";

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
          <Link href={`/${locale}/categoryPage`}>
            <button className="btn btn-round mx-auto text-center border">
              {t("viewAll")}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductList;
