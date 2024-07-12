import React from "react";
import path from "path";
import fs from "fs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductDetail from "@/components/ProductDetail";
import ProductList from "@/components/homepage/ProductList";

async function fetchProductById(id) {
  const filePath = path.join(process.cwd(), "src/db/product.json");
  const jsonData = fs.readFileSync(filePath, "utf8");
  const data = JSON.parse(jsonData);

  const product = data.products.find((p) => p.id === parseInt(id));
  const comments = data.comments
    .filter((comment) =>
      comment.items.some((item) => item.product_id === parseInt(id))
    )
    .map((comment) => ({
      userId: comment.user_id,
      ...comment.items.find((item) => item.product_id === parseInt(id)),
    }));

  return { product, comments };
}
const fetchProducts = async () => {
  const filePath = path.join(process.cwd(), "src/db/product.json");
  const jsonData = fs.readFileSync(filePath, "utf8");
  const data = JSON.parse(jsonData);
  return data.products;
};

const ProductPage = async ({ params }) => {
  const products = await fetchProducts();
  const { id } = params;
  const { product, comments } = await fetchProductById(id);
  const newArrivals = products.slice(0, 4);

  if (!product) {
    return (
      <div>
        <Navbar />
        <div>Product not found</div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <ProductDetail product={product} comments={comments} />
      <h4 className="text-center fw-bold font-integral">YOU MIGHT ALSO LIKE</h4>
      <ProductList products={newArrivals} />
      <Footer />
    </div>
  );
};

export default ProductPage;
