"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";

const RangeSliderWithLabel = () => {
  const t = useTranslations("CategoryAndFilter");

  const [rangeValue, setRangeValue] = useState(50);

  const handleRangeChange = (event) => {
    setRangeValue(event.target.value);
  };

  return (
    <>
      <label htmlFor="customRange3" className="form-label fw-bolder">
        {t("Price")}
      </label>
      <input
        type="range"
        className="form-range"
        min="50"
        max="200"
        step="1"
        id="customRange3"
        value={rangeValue}
        onChange={handleRangeChange}
      />
      <div className="fw-bold mt-1">{`$: ${rangeValue}`}</div>
    </>
  );
};

export default RangeSliderWithLabel;
