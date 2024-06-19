import React from 'react';
import { useDispatch } from 'react-redux';
import { setSortOption } from '../redux/slices/booksSlice';

const Sorting = () => {
  const dispatch = useDispatch();

  const handleSortChange = (e) => {
    dispatch(setSortOption(e.target.value));
  };

  return (
    <select onChange={handleSortChange}>
      <option value="">Sort By</option>
      <option value="date">Date</option>
      <option value="a-z">A-Z</option>
    </select>
  );
};

export default Sorting;
