import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '@/stores/products-store';

const categories = ["T-shirts", "Shorts", "Shirts", "Jeans"];

const CategoryList = () => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.products.filters.category);

  const handleCategoryClick = (category) => {
    dispatch(setCategory(category));
  };

  return (
    <div className="category-list">
      <div className="list-group">
        {categories.map((category) => (
          <button 
            key={category} 
            onClick={() => handleCategoryClick(category)} 
            className={`list-group-item list-group-item-action ${selectedCategory === category ? 'selected' : ''}`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
