"use client";
import React from "react";

const SizePicker = ({ selectedSizes, onFilterChange = "" }) => {
  const sizes = ["Small", "Medium", "Large"];

  return (
    <div>
      {sizes.map((size) => (
        <label key={size} className="size-picker">
          <input
            type="radio"
            name="size"
            checked={selectedSizes === size}
            onChange={() => onFilterChange(size)}
          />
          {size}
        </label>
      ))}
    </div>
  );
};

export default SizePicker;
