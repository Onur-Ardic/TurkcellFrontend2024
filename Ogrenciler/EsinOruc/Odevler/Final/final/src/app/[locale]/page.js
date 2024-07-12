import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductList from "@/components/homepage/ProductList";
import DressStyle from "@/components/homepage/DressStyle";
import HappyCustomers from "@/components/homepage/HappyCustomers";
import Footer from "@/components/Footer";
import path from "path";
import fs from "fs";

const fetchProducts = async () => {
  const filePath = path.join(process.cwd(), "src/db/product.json");
  const jsonData = fs.readFileSync(filePath, "utf8");
  const data = JSON.parse(jsonData);
  return data.products;
};

const fetchComments = async () => {
  const filePath = path.join(process.cwd(), "src/db/product.json");
  const jsonData = fs.readFileSync(filePath, "utf8");
  const data = JSON.parse(jsonData);
  return data.comments;
};

const HomePage = async () => {
  const products = await fetchProducts();
  const comments = await fetchComments();

  const newArrivals = products.slice(0, 4);
  const topSelling = products.slice(4, 8);

  return (
    <div>
      <Navbar />
      <Hero />
      <ProductList title="NEW ARRIVALS " products={newArrivals} />
      <ProductList title="TOP SELLING" products={topSelling} />
      <DressStyle />
      <HappyCustomers comments={comments} />
      <Footer />
    </div>
  );
};

export default HomePage;
