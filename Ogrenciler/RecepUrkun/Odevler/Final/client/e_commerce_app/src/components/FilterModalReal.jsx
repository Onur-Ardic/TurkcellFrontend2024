import React from "react";
import { getTranslations } from "next-intl/server";
import { GiSettingsKnobs } from "react-icons/gi";
import RangeSliderWithLabel from "./RangeSliderWithLabel";
import ColorPicker from "@/utils/ColorPicker";
import SizePicker from "@/utils//SizePicker";
import CategoryPicker from "@/utils/CategoryPicker";
CategoryPicker;
import { DetailsDivider } from "@/styles/GlobalStyled";

const FilterModalReal = async () => {
  const t = await getTranslations("CategoryAndFilter");
  const categories = ["T-shirt", "Shorts", "Shirt", "Hoodie", "Jeans"];
  const dressStyles = ["Casual", "Formal", "Party", "Gym"];
  const colors = [
    "green",
    "red",
    "yellow",
    "orange",
    "magenta",
    "blue",
    "purple",
    "pink",
    "white",
    "black",
  ];
  const sizes = [
    "XX-Small",
    "X-Small",
    "Small",
    "Medium",
    "Large",
    "X-Large",
    "XX-Large",
    "3X-Large",
    "4X-Large",
  ];

  const handleCategoryChange = (value) => {
    console.log("Category Filter:", value);
  };

  const handleColorChange = (value) => {
    console.log("Color Filter:", value);
  };

  const handleSizeChange = (value) => {
    console.log("Size Filter:", value);
  };

  const handleDressStyleChange = (value) => {
    console.log("Dress Style Filter:", value);
  };

  return (
    <div>
      <button
        type="button"
        className="btn"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <GiSettingsKnobs />
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title fs-5 fw-bold" id="exampleModalLabel">
                {t("Filters")}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="d-flex flex-column">
                <h5 className="fw-bolder mb-3_5">{t("Categories")}</h5>
                <CategoryPicker
                  selectedItems={[]}
                  onFilterChange={handleCategoryChange}
                  items={categories}
                />
              </div>
              <DetailsDivider />
              <RangeSliderWithLabel />
              <DetailsDivider />
              <div className="d-flex flex-column">
                <h5 className="fw-bolder mb-3_5">{t("Colors")}</h5>
                <ColorPicker
                  selectedColors={[]}
                  onFilterChange={handleColorChange}
                  colors={colors}
                />
              </div>
              <DetailsDivider />
              <div className="d-flex flex-column">
                <h5 className="fw-bold mb-3_5">{t("Sizes")}</h5>
                <SizePicker
                  selectedSizes=""
                  onFilterChange={handleSizeChange}
                  sizes={sizes}
                />
              </div>
              <DetailsDivider />
              <div className="d-flex flex-column">
                <h5 className="fw-bold mb-3_5">{t("Dress Styles")}</h5>
                <CategoryPicker
                  selectedItems={[]}
                  onFilterChange={handleDressStyleChange}
                  items={dressStyles}
                />
              </div>
            </div>
            <div className="modal-footer justify-content-center">
              <button
                className="btn mt-4 w-100"
                style={{
                  borderRadius: 62,
                  backgroundColor: "#000",
                  color: "#fff",
                  fontSize: 14,
                }}
              >
                <h6 className="py-2">{t("Apply Filters")}</h6>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterModalReal;
