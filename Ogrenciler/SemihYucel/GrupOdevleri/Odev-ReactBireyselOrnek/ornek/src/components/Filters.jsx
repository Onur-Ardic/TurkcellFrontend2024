import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilterCategory } from '../redux/slices/booksSlice';

const Filters = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    dispatch(setFilterCategory(e.target.value));
  };

  return (
    <select onChange={handleFilterChange}>
      <option value="">All Categories</option>
      <option value="Fiction">Fiction</option>
      <option value="Non-Fiction">Non-Fiction</option>
    </select>
  );
};

export default Filters;
