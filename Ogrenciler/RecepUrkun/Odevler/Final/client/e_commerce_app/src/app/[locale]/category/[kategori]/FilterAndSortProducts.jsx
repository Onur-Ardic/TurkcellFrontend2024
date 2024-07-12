import ProductList from "@/containers/Products/ProductList";

const FilterAndSortProducts = ({ products, filters, sortOption }) => {
  const applyFilters = (products, filters) => {
    let filtered = [...products];

    if (filters.categories.length > 0) {
      filtered = filtered.filter((product) =>
        filters.categories.includes(product.category)
      );
    }

    if (filters.colors.length > 0) {
      filtered = filtered.filter((product) =>
        filters.colors.some((color) => product.color.includes(color))
      );
    }

    if (filters.sizes.length > 0) {
      filtered = filtered.filter((product) =>
        filters.sizes.some((size) =>
          product.size.map((s) => s.toLowerCase()).includes(size.toLowerCase())
        )
      );
    }

    if (filters.dressStyles.length > 0) {
      filtered = filtered.filter((product) =>
        filters.dressStyles.includes(product.dressStyle)
      );
    }

    return filtered;
  };

  const sortProducts = (products, sortOption) => {
    let sorted = [...products];
    switch (sortOption) {
      case "Lowest Price":
        sorted.sort(
          (a, b) => parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1))
        );
        break;
      case "Highest Price":
        sorted.sort(
          (a, b) => parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1))
        );
        break;
      case "Rating":
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      case "Stock":
        sorted.sort((a, b) => b.stock - a.stock);
        break;
      case "Most Popular":
        sorted.sort((a, b) => b.numberOfSales - a.numberOfSales);
        break;
      default:
        break;
    }
    return sorted;
  };

  const filteredProducts = applyFilters(products, filters);
  const sortedProducts = sortProducts(filteredProducts, sortOption);

  return <ProductList products={sortedProducts} showAll={true} />;
};

export default FilterAndSortProducts;
