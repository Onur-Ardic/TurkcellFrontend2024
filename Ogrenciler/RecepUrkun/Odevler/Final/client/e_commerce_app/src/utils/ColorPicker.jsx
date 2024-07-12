"use client";
import React from "react";

const ColorPicker = ({ selectedColors, onFilterChange = "" }) => {
  const colors = ["Green", "Red", "Yellow", "Blue"];

  return (
    <div>
      {colors.map((color) => (
        <label key={color} className="color-picker">
          <input
            type="radio"
            name="color"
            checked={selectedColors.includes(color)}
            onChange={() => onFilterChange(color)}
          />
          {color}
        </label>
      ))}
    </div>
  );
};

export default ColorPicker;
