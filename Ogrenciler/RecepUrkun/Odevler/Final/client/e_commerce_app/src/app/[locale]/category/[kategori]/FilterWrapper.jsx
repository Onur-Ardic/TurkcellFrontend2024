"use client";
import React from "react";
import { useRouter } from "next/navigation";

import ColorPicker from "@/utils/ColorPicker";
import SizePicker from "@/utils//SizePicker";
import CategoryPicker from "@/utils/CategoryPicker";
import { DetailsDivider } from "@/styles/GlobalStyled";

const FilterWrapper = ({ filters, RangeSliderWithLabel }) => {
  const router = useRouter();

  const handleFilterChange = (type, value) => {
    const query = new URLSearchParams(window.location.search);
    let filterValues = query.get(type) ? query.get(type).split(",") : [];

    value = value.toLowerCase();

    if (type === "colors" || type === "sizes") {
      filterValues = [value];
    } else if (type === "category") {
      filterValues = [value.toLowerCase()];
    } else {
      if (filterValues.includes(value)) {
        filterValues.splice(filterValues.indexOf(value), 1);
      } else {
        filterValues.push(value);
      }
    }

    if (filterValues.length > 0) {
      query.set(type, filterValues.join(","));
    } else {
      query.delete(type);
    }

    query.delete("page");
    router.push(`?${query.toString()}`);
  };

  return (
    <>
      <CategoryPicker
        selectedItems={filters.categories}
        onFilterChange={(value) => handleFilterChange("categories", value)}
      />
      <DetailsDivider />
      <RangeSliderWithLabel />
      <DetailsDivider />
      <ColorPicker
        selectedColors={filters.colors}
        onFilterChange={(value) => handleFilterChange("colors", value)}
      />
      <DetailsDivider />
      <SizePicker
        selectedSizes={filters.sizes}
        onFilterChange={(value) => handleFilterChange("sizes", value)}
      />
    </>
  );
};

export default FilterWrapper;
