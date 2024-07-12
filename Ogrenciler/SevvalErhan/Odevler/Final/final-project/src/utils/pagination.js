export const paginate = (products, currentPage, itemsPerPage) => {
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return currentProducts;
};

export const getPageNumbers = (products, itemsPerPage) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(products.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  return pageNumbers;
};
