"use client";

import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import CategoryFilter from "../../components/CategoryFilter/CategoryFilter.jsx";
import React, { useEffect, useState } from "react";
import StyleProductGrid from "../../components/StyleProductGrid/StyleProductGrid.jsx";

const CategoryPage = ({ params }) => {
  const { style } = params;
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState(1000);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedDressStyle, setSelectedDressStyle] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
  }, []);
  useEffect(() => {
    const filtered = products.filter((product) => {
      const matchesCategory = selectedCategory
        ? product.category.toLowerCase() === selectedCategory.toLowerCase()
        : true;
     const matchesPrice = parseFloat(product.price) <= priceRange;

      const matchesSize = selectedSize
        ? product.sizes.some((size) => size.toLowerCase() === selectedSize.toLowerCase())
        : true;
      const matchesDressStyle = selectedDressStyle
        ? product.dressStyle.toLowerCase() === selectedDressStyle.toLowerCase()
        : true;
   const matchesColor = selectedColor
     ? product.colors.some(
         (color) => color.toLowerCase() === selectedColor.toLowerCase()
       )
     : true;
      return (
        matchesCategory &&
        matchesPrice &&
        matchesSize &&
        matchesDressStyle &&
        matchesColor
      );
    });
    setFilteredProducts(filtered);
  }, [
    selectedCategory,
    priceRange,
    selectedSize,
    selectedDressStyle,
    selectedColor,
    products,
  ]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handlePriceChange = (price) => {
    setPriceRange(price);
  };
  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };
  const handleDressStyleChange = (style) => {
    setSelectedDressStyle(style);
  };
  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <CategoryFilter
              onCategoryChange={handleCategoryChange}
              onPriceChange={handlePriceChange}
              onSizeChange={handleSizeChange}
              onDressStyleChange={handleDressStyleChange}
              onColorChange={handleColorChange}
            />
          </div>
          <div className="col-lg-9 col-md-12">
            {filteredProducts.length > 0 ? (
              <StyleProductGrid products={filteredProducts} style={style} />
            ) : (
              <p>Ürün bulunamadı</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CategoryPage;
