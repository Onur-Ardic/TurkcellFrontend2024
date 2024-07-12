"use client";
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Filters from "@/components/AllProduct/Filters";
import FiltersMobile from "@/components/AllProduct/FiltersMobile";
import ProductCard from "../products/ProductCard";
import { useFilters } from "../../app/context/FilterContext";
import "@/styles/css/main.css";
import { BsSliders2Vertical } from "react-icons/bs";
import { fetchProducts } from "@/services/fetchProducts";
import { filterProducts } from "@/utils/filterProducts";
import { paginate, getPageNumbers } from "@/utils/pagination";
import Pagination from "./Pagination";
import { useTranslations } from "next-intl";

const CategoryPage = () => {
  const t = useTranslations("category");

  const { filters, setFilters } = useFilters();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [colors, setColors] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [stylesSet, setStylesSet] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const itemsPerPage = 9;

  const router = useRouter();
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search");

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const products = await fetchProducts();
        const categories = [
          ...new Set(products.map((product) => product.category)),
        ];
        const colorsSet = [
          ...new Set(products.flatMap((product) => product.colors)),
        ];
        const sizesSet = [
          ...new Set(products.flatMap((product) => product.sizes)),
        ];
        const stylesSet = [
          ...new Set(products.map((product) => product.dressStyle)),
        ];

        setCategories(categories);
        setColors(colorsSet);
        setSizes(sizesSet);
        setStylesSet(stylesSet);
        setProducts(products);
      } catch (error) {
        console.error("Error loading products:", error);
      }
    };

    loadProducts();
  }, []);

  const filteredProducts = filterProducts(products, filters);
  const searchedProducts = searchQuery
    ? filteredProducts.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : filteredProducts;

  const currentProducts = paginate(searchedProducts, currentPage, itemsPerPage);
  const pageNumbers = getPageNumbers(searchedProducts, itemsPerPage);

  return (
    <>
      <div className="filter container">
        <div className="row">
          <div className="col-lg-3">
            <Filters
              categories={categories}
              colors={colors}
              sizes={sizes}
              styles={stylesSet}
            />
          </div>
          <div className="col-lg-9">
            <div className="row d-flex align-items-center justify-content-end">
              <div className="col-lg-2 col-md-6 col-sm-6">
                <h5 className="me-2">{t("casual")}</h5>
              </div>
              <div className="col-lg-10 col-md-6 col-sm-6 text-end">
                <span className="me-2">{t("sortBy")}</span>
                <select
                  value={filters.sort}
                  onChange={(e) =>
                    setFilters({ ...filters, sort: e.target.value })
                  }
                  className="form-select w-25 d-inline border-0"
                >
                  <option value="most_popular">{t("mostPopular")}</option>
                  <option value="price_asc">{t("lowtoHigh")}</option>
                  <option value="price_desc">{t("hightoLow")}</option>
                </select>
                <BsSliders2Vertical
                  className="filterIcon ms-2 d-inline-block d-md-none"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                />
              </div>
            </div>
            <div className="row">
              {currentProducts.map((product) => (
                <div
                  key={product.id}
                  className="col-lg-4 col-md-4 col-sm-6 col-6"
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>

            <div
              className="modal fade"
              id="exampleModal"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog w-100 mx-auto ">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel"></h5>
                    <button
                      type="button"
                      className="btn-close text-secondary"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    {" "}
                    <FiltersMobile
                      categories={categories}
                      colors={colors}
                      sizes={sizes}
                      styles={stylesSet}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <Pagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                pageNumbers={pageNumbers}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryPage;
