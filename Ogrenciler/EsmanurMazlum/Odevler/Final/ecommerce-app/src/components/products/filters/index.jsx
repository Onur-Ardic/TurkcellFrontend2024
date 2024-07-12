'use client';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPriceRange, setSort, setColors, setSizes } from '../../../stores/products-store';
import CategoryList from '../categoryList';
import ProductsSize from '../productSize';
import { Range } from 'react-range';
import ProductsFilterColor from '../productsFilterColor';

function Filters() {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.products.filters);
  const { minPrice, maxPrice } = useSelector((state) => state.products);
  const products = useSelector((state) => state.products.products);

  const [priceRange, setPriceRangeState] = useState(filters.priceRange);
  const [selectedColor, setSelectedColor] = useState(filters.colors[0] || '');
  const [selectedSize, setSelectedSize] = useState(filters.sizes[0] || '');

  const handlePriceRangeChange = (values) => {
    setPriceRangeState(values);
    dispatch(setPriceRange(values));
  };

  const handleSortChange = (e) => dispatch(setSort(e.target.value));

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    dispatch(setColors([color]));
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
    dispatch(setSizes([size]));
  };



  return (
    <div className="filters">
      <div className='d-flex justify-content-between align-items-center'>
        <p className='fs-20 fw-bold m-0'>Filters</p>
        <img src='/icons/filter-icon.svg' />
      </div>
      <hr/>
      <CategoryList />
      <hr/>
      <div>
        <p className='fs-20 fw-bold m-0'>Price</p>
        <Range
          step={5}
          min={minPrice}
          max={maxPrice}
          values={priceRange}
          onChange={(values) => handlePriceRangeChange(values)}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: '6px',
                background: '#ccc',
                marginTop: '15px'
              }}
            >
              {children}
            </div>
          )}
          renderThumb={({ props }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: '20px',
                width: '20px',
                backgroundColor: '#000',
                borderRadius: '50%',
                outline: 'none'
              }}
            />
          )}
        />
        <div className="d-flex justify-content-between mt-3">
          <span>{`$${priceRange[0]}`}</span>
          <span>{`$${priceRange[1]}`}</span>
        </div>
      </div>
      <ProductsFilterColor 
        products={products}
        selectedColor={selectedColor}
        onSelectColor={handleColorSelect}
      />
      <ProductsSize
        products={products}
        selectedSize={selectedSize}
        onSelectSize={handleSizeSelect}
      />
      <div>
        <p className='fs-20 fw-bold m-0'>Sort</p>
        <select onChange={handleSortChange} value={filters.sort}>
          <option value="Most Popular">Most Popular</option>
          <option value="Price: Low to High">Price: Low to High</option>
          <option value="Price: High to Low">Price: High to Low</option>
        </select>
      </div>
      <button className='shop-now-btn w-100 p-2 mt-3' onClick={() => dispatch(setSort('Most Popular'))}>Apply Filter</button>
    </div>
  );
}

export default Filters;
