import React from "react";
import Navbar from "@/components/Navbar";
import CartPage from "@/components/Basket/CartPage";
import "@/styles/css/main.css";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <div>
      <Navbar />
      <CartPage />
      <Footer />
    </div>
  );
}
