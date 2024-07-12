import React from "react";
import ProductPage from "@/components/AllProduct/ProductPage";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <div>
      <Navbar />
      <ProductPage />
      <Footer />
    </div>
  );
}
