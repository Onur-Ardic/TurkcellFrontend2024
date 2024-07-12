"use client";
import React from "react";

const CategoryPicker = ({ selectedItems, onFilterChange = "" }) => {
  const items = ["T-shirt", "Shorts", "Shirt", "Hoodie", "Jeans"];

  return (
    <div className="list-group">
      {items.map((item) => (
        <label key={item} className="list-group-item">
          <input
            type="checkbox"
            checked={selectedItems.includes(item.toLowerCase())}
            onChange={() => onFilterChange(item)}
          />
          {item}
        </label>
      ))}
    </div>
  );
};

export default CategoryPicker;
