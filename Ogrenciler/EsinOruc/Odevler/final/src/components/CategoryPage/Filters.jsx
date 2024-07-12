import React, { useState } from "react";
import { useFilters } from "../../app/context/FilterContext";
import { Range } from "react-range";
import { useTranslations } from "next-intl";

const Filters = ({ categories, colors, sizes, styles }) => {
  const t = useTranslations("category");

  const { filters, setFilters } = useFilters();
  const [priceRange, setPriceRange] = useState(filters.price);
  const [expandedSections, setExpandedSections] = useState({
    categories: true,
    price: true,
    colors: true,
    sizes: true,
    styles: true,
  });

  const toggleSection = (section) => {
    setExpandedSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const handlePriceChange = (values) => {
    setPriceRange(values);
    setFilters({
      ...filters,
      price: values,
    });
  };

  const handleColorChange = (color) => {
    setFilters({
      ...filters,
      colors: filters.colors.includes(color)
        ? filters.colors.filter((c) => c !== color)
        : [...filters.colors, color],
    });
  };

  const handleSizeChange = (selectedSize) => {
    setFilters((prevFilters) => {
      const newSizeArray = prevFilters.sizes.includes(selectedSize)
        ? prevFilters.sizes.filter((size) => size !== selectedSize)
        : [...prevFilters.sizes, selectedSize];
      return { ...prevFilters, sizes: newSizeArray };
    });
  };

  const handleStyleChange = (style) => {
    setFilters({
      ...filters,
      style: filters.style === style ? "" : style,
    });
  };

  const handleCategoryChange = (category) => {
    setFilters({
      ...filters,
      category: filters.category === category ? "" : category,
    });
  };

  return (
    <>
      <div className="accordion d-none d-md-block" id="filterAccordion">
        <div className="accordion-item">
          <p className="accordion-header " id="headingOne">
            <button
              className="accordion-button fw-bold fs-6"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              {t("filter")}
            </button>
          </p>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              {categories &&
                categories.map((category) => (
                  <div
                    key={category}
                    className={`category-item mb-2 ${
                      filters.category === category
                        ? "text-danger fw-bold  selected"
                        : ""
                    }`}
                    onClick={() => handleCategoryChange(category)}
                  >
                    {category}
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <p className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed fw-bold fs-6"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              {t("price")}
            </button>
          </p>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body my-4">
              {expandedSections.price && (
                <div className="priceRange position-relative">
                  <Range
                    step={1}
                    min={0}
                    max={500}
                    values={priceRange}
                    onChange={handlePriceChange}
                    renderTrack={({ props, children }) => (
                      <div
                        {...props}
                        style={{
                          ...props.style,
                          height: "6px",
                          width: "100%",
                          backgroundColor: "#ddd",
                          position: "relative",
                          zIndex: 1,
                        }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            height: "100%",
                            background: "black",
                            left: `${(priceRange[0] / 500) * 100}%`,
                            width: `${
                              ((priceRange[1] - priceRange[0]) / 500) * 100
                            }%`,
                            zIndex: 2,
                          }}
                        />
                        {children}
                      </div>
                    )}
                    renderThumb={({ props, index }) => (
                      <div
                        {...props}
                        style={{
                          ...props.style,
                          height: "20px",
                          width: "20px",
                          backgroundColor: "black",
                          borderRadius: "50%",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          zIndex: -1,
                        }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            top: "30px",
                            left: "-10px",
                            color: "black",
                            fontWeight: "bold",
                            fontSize: "12px",
                            padding: "2px 6px",
                            borderRadius: "4px",
                            background: "white",
                            zIndex: -1,
                          }}
                        >
                          ${priceRange[index]}
                        </div>
                      </div>
                    )}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <p className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed fw-bold fs-6"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              {t("color")}
            </button>
          </p>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              {expandedSections.colors && (
                <div className="row gx-2 gy-2">
                  {colors &&
                    colors.map((color) => (
                      <div key={color} className="col-auto">
                        <div
                          className={`color ${
                            filters.colors.includes(color) ? "selected" : ""
                          }`}
                          style={{
                            backgroundColor: color,
                            border:
                              color === "white" ? "1px solid #ddd" : "none",
                            width: "40px",
                            height: "40px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: "50%",
                            cursor: "pointer",
                          }}
                          onClick={() => handleColorChange(color)}
                        >
                          {filters.colors.includes(color) && (
                            <div
                              className="color-check"
                              style={{ position: "absolute" }}
                            >
                              ✓
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <p className="accordion-header" id="headingFour">
            <button
              className="accordion-button collapsed fw-bold fs-6"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              {t("sizes")}
            </button>
          </p>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              {expandedSections.sizes && (
                <div className="row">
                  {sizes &&
                    sizes.map((size) => (
                      <div key={size} className="col-6 mb-2">
                        <button
                          className={`btn w-100 rounded-4 ${
                            filters.sizes.includes(size)
                              ? "btn-dark"
                              : "text-dark bg-secondary"
                          }`}
                          onClick={() => handleSizeChange(size)}
                        >
                          {size}
                        </button>
                      </div>
                    ))}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <p className="accordion-header" id="headingFive">
            <button
              className="accordion-button collapsed fw-bold fs-6"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              {t("dressStyle")}
            </button>
          </p>
          <div
            id="collapseFive"
            className="accordion-collapse collapse"
            aria-labelledby="headingFive"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              {expandedSections.styles && (
                <div className="dress-style">
                  {styles &&
                    styles.map((style) => (
                      <div
                        key={style}
                        className={`style-item mb-2 ${
                          filters.style === style
                            ? "selected text-danger fw-bold"
                            : ""
                        }`}
                        onClick={() => handleStyleChange(style)}
                      >
                        {style}
                      </div>
                    ))}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="accordion-item py-5 mx-auto w-100 text-center">
          <div className="btn bg-dark text-white rounded-5 px-5 py-3">
            {t("applyFilter")}
          </div>
        </div>
      </div>
    </>
  );
};

export default Filters;
