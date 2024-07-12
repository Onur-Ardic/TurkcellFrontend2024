"use client";
import React, { useState } from "react";
import productsData from "../../datas/db.json";

const FilterCategoryCard = ({ applyFilters }) => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");

  const handleApplyFilters = () => {
    applyFilters({
      minPrice,
      maxPrice,
      color,
      size,
    });
  };

  return (
    <div>
      <h3>Filters</h3>
      <div className="filter-group">
        <label>
          Minimum Fiyat:
          <input
            type="number"
            min="0"
            max="1000"
            value={minPrice}
            onChange={(e) => setMinPrice(parseInt(e.target.value, 10))}
          />
        </label>
      </div>
      <div className="filter-group">
        <label>
          Maksimum Fiyat:
          <input
            type="number"
            min="0"
            max="1000"
            value={maxPrice}
            onChange={(e) => setMaxPrice(parseInt(e.target.value, 10))}
          />
        </label>
      </div>
      <div className="filter-group">
        <label>
          Colors:
          <select value={color} onChange={(e) => setColor(e.target.value)}>
            <option value="">Hepsi</option>
            <option value="Red">Kırmızı</option>
            <option value="Blue">Mavi</option>
            <option value="Green">Yeşil</option>
          </select>
        </label>
      </div>
      <div className="filter-group">
        <label>
          Beden:
          <select value={size} onChange={(e) => setSize(e.target.value)}>
            <option value="">Hepsi</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
        </label>
      </div>
      <button className="btn btn-primary me-2" onClick={handleApplyFilters}>
        Filtreleri Uygula
      </button>
    </div>
  );
};

export default FilterCategoryCard;
