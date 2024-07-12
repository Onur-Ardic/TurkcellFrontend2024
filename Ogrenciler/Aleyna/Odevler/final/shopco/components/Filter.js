// components/Filter.js

import React from 'react';
import styled from 'styled-components';

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: ${(props) => props.theme.cardBackground};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Filter = ({ onFilterChange }) => {
  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    onFilterChange(name, value);
  };

  return (
    <FilterContainer>
      <select name="sortBy">
        <option value="">Filter by...</option>
        <option value="price">Price</option>
        <option value="date">Date</option>
        {/* Diğer filtreleme seçenekleri */}
      </select>
      <select name="category">
        <option value="">Select category...</option>
        <option value="electronics">Electronics</option>
        <option value="clothing">Clothing</option>
        {/* Diğer kategori seçenekleri */}
      </select>
      <input
        type="text"
        name="searchTerm"
        placeholder="Search..."
        onChange={handleFilterChange}
      />
    </FilterContainer>
  );
};

export default Filter;
