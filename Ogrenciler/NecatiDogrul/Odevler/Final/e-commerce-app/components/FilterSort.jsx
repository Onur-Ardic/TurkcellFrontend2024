"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setProducts,
  setFilter,
  setSort,
  sortAndFilterProducts,
} from "../redux/slices/productSlice";

const FilterSort = ({ initialProducts }) => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.products.filter);
  const sort = useSelector((state) => state.products.sort);

  useEffect(() => {
    dispatch(setProducts(initialProducts));
    dispatch(sortAndFilterProducts());
  }, [dispatch, initialProducts]);

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  const handleSortChange = (e) => {
    dispatch(setSort(e.target.value));
  };

  const applyFilterSort = () => {
    dispatch(sortAndFilterProducts());
  };

  return (
    <div className="filter-sort">
      <input
        type="text"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Filter by name"
      />
      <select value={sort} onChange={handleSortChange}>
        <option value="">Sort by price</option>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
      <button onClick={applyFilterSort}>Apply Filter and Sort</button>
    </div>
  );
};

export default FilterSort;
