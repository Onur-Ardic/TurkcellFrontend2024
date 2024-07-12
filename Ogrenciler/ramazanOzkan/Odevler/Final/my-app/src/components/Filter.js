"use client";
import styled from "styled-components";
import { useState } from "react";
import { useCategory } from "@/app/category/context";
import { useTranslations } from "next-intl";

const FilterContainer = styled.div`
  width: 300px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const Title = styled.h5`
  margin-bottom: 10px;
`;

const PriceRangeWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const PriceInput = styled.input`
  width: 80px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-align: center;
`;

const ColorButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 5px;
  margin-bottom: 5px;
  border: 2px solid ${(props) => (props.selected ? "black" : "transparent")};
`;

const SizeButton = styled.button`
  margin-right: 5px;
  margin-bottom: 5px;
  padding: 5px 10px;
  border: 2px solid ${(props) => (props.selected ? "black" : "#ddd")};
  border-radius: 5px;
  background: ${(props) => (props.selected ? "black" : "white")};
  color: ${(props) => (props.selected ? "white" : "black")};
`;

const ApplyButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Filter = () => {
  const {
    handleApplyFilter,
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
    selectedColor,
    setSelectedColor,
    selectedSize,
    setSelectedSize,
  } = useCategory();

  const handleMinPriceChange = (event) => {
    const value = parseInt(event.target.value);
    if (!isNaN(value) && value <= maxPrice) {
      setMinPrice(value);
    }
  };
  const t = useTranslations("Filter");
  const handleMaxPriceChange = (event) => {
    const value = parseInt(event.target.value);
    if (!isNaN(value) && value >= minPrice) {
      setMaxPrice(value);
    }
  };

  return (
    <FilterContainer>
      <Section>
        <Title>{t("title")}</Title>
      </Section>
      <Section>
        <Title>{t("price")}</Title>
        <PriceRangeWrapper>
          <PriceInput
            type="number"
            value={minPrice}
            onChange={handleMinPriceChange}
          />
          <span style={{ margin: "0 10px" }}>-</span>
          <PriceInput
            type="number"
            value={maxPrice}
            onChange={handleMaxPriceChange}
          />
        </PriceRangeWrapper>
        <input
          type="range"
          min="50"
          max="1000"
          value={minPrice}
          onChange={handleMinPriceChange}
        />
        <input
          type="range"
          min="50"
          max="1000"
          value={maxPrice}
          onChange={handleMaxPriceChange}
        />
      </Section>
      <Section>
        <Title>{t("colors")}</Title>
        {[
          "green",
          "red",
          "yellow",
          "orange",
          "cyan",
          "blue",
          "purple",
          "pink",
          "white",
          "black",
        ].map((color) => (
          <ColorButton
            key={color}
            style={{ backgroundColor: color }}
            selected={selectedColor === color}
            onClick={() => setSelectedColor(color)}
          />
        ))}
      </Section>
      <Section>
        <Title>{t("size")}</Title>
        {["XS", "S", "M", "L", "XL"].map((size) => (
          <SizeButton
            key={size}
            selected={selectedSize === size}
            onClick={() => setSelectedSize(size)}
          >
            {size}
          </SizeButton>
        ))}
      </Section>
      <Section>
        <Title>{t("dreStyle")}</Title>
        {[
          `${t("casual")}`,
          `${t("formal")}`,
          `${t("party")}`,
          `${t("gym")}`,
        ].map((style) => (
          <div key={style}>
            <input type="checkbox" id={style} />
            <label htmlFor={style} style={{ marginLeft: "5px" }}>
              {style}
            </label>
          </div>
        ))}
      </Section>
      <ApplyButton onClick={handleApplyFilter}>{t("button")}</ApplyButton>
    </FilterContainer>
  );
};

export default Filter;
