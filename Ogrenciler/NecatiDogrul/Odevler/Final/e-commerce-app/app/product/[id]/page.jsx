import ProductDetail from "../../../components/ProductDetail";

async function fetchProduct(id) {
  const res = await fetch(`http://localhost:3001/products/${id}`);
  const product = await res.json();
  return product;
}

export default async function ProductDetailPage({ params }) {
  const product = await fetchProduct(params.id);

  return (
    <div className="container">
      <ProductDetail product={product} />
    </div>
  );
}
