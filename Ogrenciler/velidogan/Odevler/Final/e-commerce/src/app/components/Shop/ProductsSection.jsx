"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  setSort,
  selectFilteredProducts,
} from "@/app/lib/products/productsSlice";
import ShopCard from "./ShopCard";
import { useTranslation } from "@/app/i18n/client";
import "../../styles/main.scss"
const ProductsSection = ({lng}) => {
  const { t } = useTranslation(lng)
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.products?.filters);
  const dressStyle = useSelector((state) => state.products?.filters.dressStyle);
  const sortedProducts = useSelector(selectFilteredProducts);
  const items = useSelector((state) => state.products?.items);
  console.log(filters);
  console.log(items);
  console.log(sortedProducts);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleSortChange = (e) => {
    dispatch(setSort(e.target.value));
  };

  return (
    <div className="products-section">
      <div className="title">
        <h1>{dressStyle}</h1>
        <div className="products-amount">
          {t("showInfoProduct")}
          <span style={{ marginLeft: "0.8rem" }}>
            {t("sort-by")}
            <select onChange={handleSortChange}>
              <option value="priceLowToHigh">{t("price-low")}</option>
              <option value="priceHighToLow">{t("price-high")}</option>
              <option value="aToZ">A-Z</option>
              <option value="zToA">Z-A</option>
            </select>
          </span>
        </div>
      </div>
      <div className="products-list">
        {sortedProducts.map((product) => (
          <ShopCard product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsSection;
