import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../redux/slices/booksSlice';

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <input
      type="text"
      placeholder="Search for a book..."
      onChange={handleSearch}
    />
  );
};

export default SearchBar;
