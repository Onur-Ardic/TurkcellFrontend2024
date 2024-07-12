import CategoryProductList from "../../../components/CategoryProductList";

async function fetchCategoryProducts(category) {
  const res = await fetch(
    `http://localhost:3001/products?category=${category}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  const products = await res.json();
  return products;
}

const CategoryPage = async ({ params }) => {
  const products = await fetchCategoryProducts(params.category);

  return (
    <div className="container">
      <h1>Category: {params.category}</h1>
      <CategoryProductList products={products} />
    </div>
  );
};

export default CategoryPage;
