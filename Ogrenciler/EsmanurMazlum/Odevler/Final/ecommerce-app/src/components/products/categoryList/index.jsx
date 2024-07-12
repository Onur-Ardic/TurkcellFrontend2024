import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '@/stores/products-store';

const categories = ["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"];

const CategoryList = () => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.products.filters.category);

  const handleCategoryClick = (category) => {
    dispatch(setCategory(category));
  };

  return (
    <div className="category-list">
      <ul>
        {categories.map((category) => (
          <li 
            key={category} 
            onClick={() => handleCategoryClick(category)} 
            className={selectedCategory === category ? 'selected' : ''}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
