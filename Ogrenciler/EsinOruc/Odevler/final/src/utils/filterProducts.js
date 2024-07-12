export const filterProducts = (products, filters) => {
  return products
    .filter((product) => {
      const matchesCategory = filters.category
        ? product.category.toLowerCase() === filters.category.toLowerCase()
        : true;
      const matchesPrice =
        product.price >= filters.price[0] && product.price <= filters.price[1];
      const matchesColor = filters.colors.length
        ? filters.colors.some((color) =>
            product.colors.map((c) => c.toLowerCase()).includes(color)
          )
        : true;
      const matchesSize = filters.sizes.length
        ? filters.sizes.some((size) =>
            product.sizes
              .map((s) => s.toLowerCase())
              .includes(size.toLowerCase())
          )
        : true;
      const matchesStyle = filters.style
        ? product.dressStyle.toLowerCase() === filters.style.toLowerCase()
        : true;

      return (
        matchesCategory &&
        matchesPrice &&
        matchesColor &&
        matchesSize &&
        matchesStyle
      );
    })
    .sort((a, b) => {
      if (filters.sort === "most_popular") {
        return b.popularity - a.popularity;
      } else if (filters.sort === "price_asc") {
        return a.price - b.price;
      } else if (filters.sort === "price_desc") {
        return b.price - a.price;
      }
      return 0;
    });
};
