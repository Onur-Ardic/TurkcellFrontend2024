import React from "react";
import Navbar from "@/components/Navbar";
import CartPage from '@/components/Boxes/CartPage';
import '@/styles/css/main.css';
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
