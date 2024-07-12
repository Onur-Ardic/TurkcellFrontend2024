import React from "react";
import CategoryPage from "@/components/ProductPage/ProductPage";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <div>
      <Navbar />
      <CategoryPage />
      <Footer />
    </div>
  );
}
