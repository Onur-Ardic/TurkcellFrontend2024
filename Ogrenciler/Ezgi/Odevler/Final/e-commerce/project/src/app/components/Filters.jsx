"use client";
import { useDispatch, useSelector } from "react-redux";
import {
  setSelectedColor,
  setSelectedType,
  setSelectedSize,
  setSelectedCategory,
  clearFilters,
} from "../redux/filterSlice";
import { GiSettingsKnobs } from "react-icons/gi";
import {
  StyledColorButton,
  StyledTypeButton,
  StyledSizeButton,
  StyledCategoryButton,
} from "./styles/styled";

const Filters = ({ products }) => {
  const dispatch = useDispatch();
  const { selectedColor, selectedType, selectedSize, selectedCategory } = useSelector(
    (state) => state.filter
  );

  const uniqueTypes = [...new Set(products.map((product) => product.type))];
  const uniqueCategories = [...new Set(products.map((product) => product.category))];

  const allColors = products.reduce((acc, product) => {
    acc.push(...product.colors);
    return acc;
  }, []);

  const allSizes = products.reduce((acc, product) => {
    acc.push(...product.sizes);
    return acc;
  }, []);

  const uniqueColors = [...new Set(allColors)];
  const uniqueSizes = [...new Set(allSizes)];

  const handleColorSelection = (color) => {
    dispatch(setSelectedColor(color));
  };
  const handleTypeSelection = (type) => {
    dispatch(setSelectedType(type));
  };
  const handleSizeSelection = (size) => {
    dispatch(setSelectedSize(size));
  };
  const handleCategorySelection = (category) => {
    dispatch(setSelectedCategory(category));
  };

  const handleClearFilters = () => {
    dispatch(clearFilters());
  };

  return (
    <div className="border border-1 rounded-4 p-3">
      <div className="d-flex justify-content-between">
        <h6 className="fw-bold">Filters</h6>
        <GiSettingsKnobs size={20} />
      </div>
      <hr className="text-secondary" />
      <div className="d-flex flex-column gap-3">
        {uniqueTypes.length > 0 ? (
          uniqueTypes.map((type) => (
            <StyledTypeButton
              key={type}
              selected={selectedType === type}
              className="text-capitalize text-start"
              onClick={() => handleTypeSelection(type)}
            >
              {type}
            </StyledTypeButton>
          ))
        ) : (
          <p>No types found.</p>
        )}
      </div>
      <hr className="text-secondary" />
      <div>
        <h6 className="fw-bold">Colors</h6>
        <div className="d-flex flex-wrap gap-2">
          {uniqueColors.length > 0 ? (
            uniqueColors.map((color) => (
              <StyledColorButton
                className="rounded-circle border-1"
                key={color}
                color={color}
                selected={selectedColor === color}
                onClick={() => handleColorSelection(color)}
              />
            ))
          ) : (
            <p>No colors found.</p>
          )}
        </div>
      </div>
      <hr className="text-secondary" />
      <div>
        <h6 className="fw-bold">Sizes</h6>
        <div className="d-flex gap-3">
          {uniqueSizes.length > 0 ? (
            uniqueSizes.map((size) => (
              <StyledSizeButton
                key={size}
                selected={selectedSize === size}
                className="text-capitalize text-start bg-body-secondary rounded-5"
                onClick={() => handleSizeSelection(size)}
              >
                {size}
              </StyledSizeButton>
            ))
          ) : (
            <p>No sizes found.</p>
          )}
        </div>
      </div>
      <hr className="text-secondary" />
      <div>
        <h6 className="fw-bold">Dress Style</h6>
        <div className="d-flex flex-column gap-3">
          {uniqueCategories.length > 0 ? (
            uniqueCategories.map((category) => (
              <StyledCategoryButton
                key={category}
                selected={selectedCategory === category}
                className="text-capitalize text-start"
                onClick={() => handleCategorySelection(category)}
              >
                {category}
              </StyledCategoryButton>
            ))
          ) : (
            <p>No categories found.</p>
          )}
        </div>
      </div>
      <hr />
      <div>
        <button
          className="border-0 w-100 rounded-5 bg-black text-white ps-4 pe-4 py-3 my-3"
          onClick={handleClearFilters}
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
};

export default Filters;
