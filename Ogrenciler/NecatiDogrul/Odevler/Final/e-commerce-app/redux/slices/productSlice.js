import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  filteredProducts: [],
  filter: "",
  sort: "",
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
      state.filteredProducts = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
    sortAndFilterProducts: (state) => {
      let filteredProducts = state.products;

      if (state.filter) {
        filteredProducts = filteredProducts.filter((product) =>
          product.name.toLowerCase().includes(state.filter.toLowerCase())
        );
      }

      if (state.sort) {
        filteredProducts.sort((a, b) => {
          if (state.sort === "asc") {
            return a.price - b.price;
          } else if (state.sort === "desc") {
            return b.price - a.price;
          }
          return 0;
        });
      }

      state.filteredProducts = filteredProducts;
    },
  },
});

export const { setProducts, setFilter, setSort, sortAndFilterProducts } =
  productSlice.actions;
export default productSlice.reducer;
