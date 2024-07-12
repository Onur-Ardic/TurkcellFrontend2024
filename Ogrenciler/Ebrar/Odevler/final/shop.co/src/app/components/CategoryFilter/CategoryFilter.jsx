"use client";

import React, { useState } from "react";
import {
  FilterContainer,
  FilterSection,
  FiltersSection,
  FilterTitle,
  FiltersTitle,
  FilterOption,
  PriceRange,
  ColorOption,
  SizeOption,
} from "./CategoryFilter.style";
import { FaFilter } from "react-icons/fa";

const CategoryFilter = ({
  onCategoryChange,
  onPriceChange,
  onSizeChange,
  onDressStyleChange,
  onColorChange,
}) => {
  const [price, setPrice] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handlePriceChange = (value) => {
    setPrice(value);
    onPriceChange(value);
  };

  const toggleFilter = () => {
    setIsOpen(!isOpen);
  };

  return (
    <FiltersSection className="mt-5 d-lg-flex align-items-start">
      <FiltersTitle>
        {" "}
        <h2 className="d-inline-block">Filters</h2>
        <button
          className="filter-toggle-btn d-inline-block"
          onClick={toggleFilter}>
          <FaFilter size={24} style={{ color: "gray" }} />
        </button>
      </FiltersTitle>

      {isOpen && (
        <FilterContainer className="ml-lg-4">
          <FilterSection>
            {["T-Shirts", "Shorts", "Shirts", "Hoodies", "Jeans"].map(
              (category) => (
                <FilterOption
                  className="d-flex justify-content-between align-items-center pt-2"
                  key={category}
                  onClick={() => onCategoryChange(category.toLowerCase())}>
                  {category}
                </FilterOption>
              )
            )}
          </FilterSection>
          <FilterSection>
            <FilterTitle>Price</FilterTitle>
            <PriceRange
              type="range"
              min="0"
              max="500"
              onChange={(e) => handlePriceChange(e.target.value)}
            />
            <p>${price}</p>
          </FilterSection>
          <FilterSection>
            <FilterTitle>Colors</FilterTitle>
            {[
              "red",
              "green",
              "blue",
              "yellow",
              "purple",
              "aqua",
              "black",
              "white",
            ].map((color) => (
              <ColorOption
                key={color}
                color={color}
                onClick={() => onColorChange(color)}
              />
            ))}
          </FilterSection>
          <FilterSection>
            <FilterTitle>Size</FilterTitle>
            {["S", "M", "L", "XL"].map((size) => (
              <SizeOption key={size} onClick={() => onSizeChange(size)}>
                {size}
              </SizeOption>
            ))}
          </FilterSection>
          <FilterSection>
            <FilterTitle>Dress Style</FilterTitle>
            {["Casual", "Formal", "Party", "Gym"].map((style) => (
              <FilterOption
                key={style}
                className="d-flex justify-content-between align-items-center pt-2"
                onClick={() => onDressStyleChange(style)}>
                {style}
              </FilterOption>
            ))}
          </FilterSection>
        </FilterContainer>
      )}
    </FiltersSection>
  );
};

export default CategoryFilter;
