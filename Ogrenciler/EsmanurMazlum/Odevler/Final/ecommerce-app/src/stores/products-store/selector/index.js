import { createSelector } from '@reduxjs/toolkit';

const selectProducts = (state) => state.products.products;
const selectFilters = (state) => state.products.filters;

export const selectFilteredProducts = createSelector(
  [selectProducts, selectFilters],
  (products, filters) => {
    const { category, priceRange, colors, sizes, sort } = filters;

    // Filtreleme işlemi
    const filteredProducts = products.filter(product => {
      const isCategoryMatch = category ? product.category === category : true;
      const isPriceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];
      const isColorMatch = colors.length > 0 ? colors.includes(product.color) : true;
      const isSizeMatch = sizes.length > 0 ? sizes.includes(product.size) : true;

      return isCategoryMatch && isPriceMatch && isColorMatch && isSizeMatch;
    });

    // Sıralama işlemi
    const sortedProducts = [...filteredProducts].sort((a, b) => {
      if (sort === 'Most Popular') {
        return b.rating - a.rating;
      } else if (sort === 'Price: Low to High') {
        return a.price - b.price;
      } else if (sort === 'Price: High to Low') {
        return b.price - a.price;
      }
      return 0;
    });

    return sortedProducts;
  }
);
