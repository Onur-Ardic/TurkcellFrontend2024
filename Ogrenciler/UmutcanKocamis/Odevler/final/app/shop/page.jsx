"use client";
import { useState, useEffect } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { FaFilter } from "react-icons/fa";
import NewsLetter from "@/components/Newsletter";
import Link from "next/link";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [sortOption, setSortOption] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("http://localhost:3001/topSelling", {
        cache: "no-store",
      });
      const data = await res.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <>
        {[...Array(fullStars)].map((_, index) => (
          <FaStar key={index} className="text-warning" />
        ))}
        {hasHalfStar && <FaStarHalfAlt className="text-warning" />}
        {[...Array(emptyStars)].map((_, index) => (
          <FaRegStar key={index} className="text-warning" />
        ))}
      </>
    );
  };

  const handleSort = (e) => {
    const option = e.target.value;
    setSortOption(option);

    let sortedProducts = [...products];
    if (option === "price-asc") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (option === "price-desc") {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (option === "rating-high") {
      sortedProducts.sort((a, b) => b.rating - a.rating);
    } else if (option === "rating-low") {
      sortedProducts.sort((a, b) => a.rating - b.rating);
    }
    setProducts(sortedProducts);
  };

  const handleColorSelect = (color) => {
    setSelectedColors((prevColors) =>
      prevColors.includes(color)
        ? prevColors.filter((c) => c !== color)
        : [...prevColors, color]
    );
  };

  const handleSizeSelect = (size) => {
    setSelectedSizes((prevSizes) =>
      prevSizes.includes(size)
        ? prevSizes.filter((s) => s !== size)
        : [...prevSizes, size]
    );
  };

  const applyFilters = () => {
    const filteredProducts = products.filter((product) => {
      return (
        product.price >= priceRange[0] &&
        product.price <= priceRange[1] &&
        (selectedColors.length > 0
          ? selectedColors.some((color) => product.colors.includes(color))
          : true) &&
        (selectedSizes.length > 0
          ? selectedSizes.some((size) => product.sizes.includes(size))
          : true)
      );
    });
    setProducts(filteredProducts);
    setShowModal(false); // Close the modal after applying filters
  };

  return (
    <div className="container">
      <hr />
      <div className="container mt-3">
        <div className="d-flex justify-content-between">
          <div>
            Home
            <MdOutlineKeyboardArrowRight />
            {products[2]?.dressStyle}
          </div>
        </div>
        <div>
          <div className="mt-3 d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-end">
              <h1 className="fw-bold m-0 me-2">{products[2]?.dressStyle}</h1>
              <p className="text-black-50 m-0">
                Showing {products[0]?.id}-{products.length} of 100 products{" "}
              </p>
            </div>
            <div className="d-flex align-items-center gap-2">
              <FaFilter className="fs-2" onClick={() => setShowModal(true)} />
              <select
                onChange={handleSort}
                value={sortOption}
                className="form-select"
              >
                <option value="">Sort By</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating-high">Rating: High to Low</option>
                <option value="rating-low">Rating: Low to High</option>
              </select>
            </div>
          </div>
        </div>
        <div className="d-flex flex-wrap justify-content-center gap-2 mt-5">
          {products.map((product) => {
            return (
              <div key={product.id}>
                <Link href={`/shop/${product.id}`}>
                  <img
                    src={`/images/${product.image}`}
                    alt=""
                    className="product-img"
                  />
                </Link>

                <div>
                  <p className="fw-bold">{product.name}</p>
                  <div className="fs-6 d-flex align-items-center gap-2">
                    <div className="d-flex">{renderStars(product.rating)}</div>
                    <div>
                      <span className="fw-medium">{product.rating}</span>/5
                    </div>
                  </div>
                  <div className="fs-2 fw-bold">${product.price}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <NewsLetter />

      {/* Modal */}
      <div
        className={`modal fade ${showModal ? "show d-block" : "d-none"}`}
        tabIndex="-1"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Filter Options</h5>
              <button
                type="button"
                className="btn-close"
                onClick={() => setShowModal(false)}
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label">Price</label>
                <input
                  type="range"
                  className="form-range"
                  min="0"
                  max="1000"
                  value={priceRange[1]}
                  onChange={(e) =>
                    setPriceRange([0, parseInt(e.target.value, 10)])
                  }
                />
                <div className="d-flex justify-content-between">
                  <span>$0</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Colors</label>
                <div className="d-flex gap-2">
                  {Array.from(
                    new Set(products.flatMap((product) => product.colors))
                  ).map((color) => (
                    <button
                      key={color}
                      type="button"
                      className={`btn ${
                        selectedColors.includes(color)
                          ? "border border-dark"
                          : ""
                      }`}
                      style={{
                        backgroundColor: color,
                        width: "30px",
                        height: "30px",
                      }}
                      onClick={() => handleColorSelect(color)}
                    ></button>
                  ))}
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Sizes</label>
                <div className="d-flex gap-2">
                  {Array.from(
                    new Set(products.flatMap((product) => product.sizes))
                  ).map((size) => (
                    <button
                      key={size}
                      type="button"
                      className={`btn ${
                        selectedSizes.includes(size)
                          ? "btn-primary"
                          : "btn-outline-primary"
                      }`}
                      onClick={() => handleSizeSelect(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              {/* Add similar sections for dress style if needed */}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={applyFilters}
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
