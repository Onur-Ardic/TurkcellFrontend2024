"use client";
import React, { useState } from "react";
import productsData from "../../datas/db.json";
import { MdOutlineStar } from "react-icons/md";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";

const CategoryCard = ({ style }) => {
  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filteredCount, setFilteredCount] = useState(0);
  const [isFilterApplied, setIsFilterApplied] = useState(false);

  const applyFilters = () => {
    const filtered = productsData.products.filter((product) => {
      const productStyle = product.style && product.style.toLowerCase();
      const cardStyle = style && style.toLowerCase();
      const matchesStyle = productStyle === cardStyle;
      const matchesPrice =
        product.price >= minPrice && product.price <= maxPrice;
      const matchesColor = color ? product.color === color : true;
      const matchesSize = size ? product.size === size : true;

      return matchesStyle && matchesPrice && matchesColor && matchesSize;
    });

    setFilteredProducts(filtered);
    setFilteredCount(filtered.length);
    setCurrentPage(1);
    setIsFilterApplied(true);
  };

  const resetFilters = () => {
    setMinPrice(0);
    setMaxPrice(1000);
    setColor("");
    setSize("");
    setFilteredProducts([]);
    setFilteredCount(0);
    setIsFilterApplied(false);
    setCurrentPage(1);
  };

  const colorOptions = [
    "Red",
    "Blue",
    "Green",
    "Brown",
    "Purple",
    "Orange",
    "Black",
    "White",
    "Gray",
  ];
  const sizeOptions = ["XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL", "5XL"];

  const styleFilteredItems = isFilterApplied
    ? filteredProducts.filter((product) => {
        const productStyle = product.style && product.style.toLowerCase();
        const cardStyle = style && style.toLowerCase();
        return productStyle === cardStyle;
      })
    : productsData.products.filter((product) => {
        const productStyle = product.style && product.style.toLowerCase();
        const cardStyle = style && style.toLowerCase();
        return productStyle === cardStyle;
      });

  const totalPages = Math.ceil(styleFilteredItems.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = styleFilteredItems.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="d-flex col px-5 mt-5">
      <div className="col-md-3 px-5">
        <h3>Filters</h3>
        <div className="filter-group mb-3">
          <label>
            Minimum Price:
            <input
              className="rounded-pill p-1"
              type="number"
              min="0"
              max="1000"
              value={minPrice}
              onChange={(e) => setMinPrice(parseInt(e.target.value, 10))}
            />
          </label>
        </div>
        <div className="filter-group mb-3">
          <label>
            Maksimum Price:
            <input
              className="rounded-pill p-1"
              type="number"
              min="0"
              max="1000"
              value={maxPrice}
              onChange={(e) => setMaxPrice(parseInt(e.target.value, 10))}
            />
          </label>
        </div>
        <div className="filter-group mb-3">
          <label>
            Colors:
            <div className="color-options">
              {colorOptions.map((option) => (
                <div
                  key={option}
                  className={`color-option ${
                    color === option ? "selected" : ""
                  }`}
                  style={{
                    backgroundColor: option.toLowerCase(),
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    display: "inline-block",
                    margin: "5px",
                    cursor: "pointer",
                    position: "relative",
                  }}
                  onClick={() => setColor(color === option ? "" : option)}>
                  {color === option && (
                    <FaCheck
                      className="check-icon"
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        color: "white",
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          </label>
        </div>
        <div className="filter-group mb-3">
          <label>
            Size:
            <div className="size-options">
              {sizeOptions.map((option) => (
                <div
                  key={option}
                  className={`size-option ${size === option ? "selected" : ""}`}
                  style={{
                    backgroundColor: size === option ? "black" : "gray",
                    color: "white",
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    display: "inline-block",
                    textAlign: "center",
                    lineHeight: "30px",
                    margin: "5px",
                    cursor: "pointer",
                    position: "relative",
                  }}
                  onClick={() => setSize(size === option ? "" : option)}>
                  {option}
                </div>
              ))}
            </div>
          </label>
        </div>
        <div className="d-flex row gap-2">
          <button className="btn bg-black text-white" onClick={applyFilters}>
            Apply Filters
          </button>
          <button className="btn bg-black text-white" onClick={resetFilters}>
            Reset Filters
          </button>
          <div>
            <h4>See All Categories</h4>
            <ul>
              <Link
                href="/categorypage/casual"
                className="text-decoration-none text-black fw-bold">
                <li>Casual</li>
              </Link>
              <Link
                href="/categorypage/formal"
                className="text-decoration-none text-black fw-bold">
                <li>Formal</li>
              </Link>
              <Link
                href="/categorypage/gym"
                className="text-decoration-none text-black fw-bold">
                <li>Gym</li>
              </Link>
              <Link
                href="/categorypage/party"
                className="text-decoration-none text-black fw-bold">
                <li>Party</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-md-8">
        <div className="row">
          {currentItems.map((product) => (
            <div
              key={product.id}
              className="col-12 col-sm-6 col-md-4 mb-4 d-flex justify-content-center">
              <Link
                href={`/productdetail/${product.id}`}
                className="text-decoration-none">
                <div
                  className="card h-100"
                  style={{ width: "300px", height: "300px" }}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="card-img-top"
                    style={{
                      height: "200px",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <div className="card-text">
                      <div className="productRating d-flex align-items-center mb-2">
                        {Array.from({ length: product.rating }, (_, index) => (
                          <MdOutlineStar
                            key={index}
                            className="star-icon"
                            style={{ color: "#FFD700" }}
                          />
                        ))}
                        <span className="ms-2">
                          {product.rating.toFixed(1)} / 5
                        </span>
                      </div>
                      <div className="productPrice d-flex align-items-center mb-2">
                        <span className="me-2">${product.price}</span>
                        {product.originalPrice && (
                          <span className="text-decoration-line-through me-2">
                            ${product.originalPrice}
                          </span>
                        )}
                        {product.discount && (
                          <span className="productDiscount bg-danger bg-opacity-25 text-danger fs-6 rounded-pill px-2">
                            {product.discount}%
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="d-flex justify-content-between align-items-center mt-4">
          <button
            className="btn btn-secondary"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}>
            Previous
          </button>
          <div className="pagination">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                className={`btn ${
                  currentPage === index + 1 ? "btn-secondary" : "btn-light"
                }`}
                onClick={() => handlePageChange(index + 1)}>
                {index + 1}
              </button>
            ))}
          </div>
          <button
            className="btn btn-secondary"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
