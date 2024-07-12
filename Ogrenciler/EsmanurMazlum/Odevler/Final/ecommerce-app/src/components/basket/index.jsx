"use client";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { useEffect } from "react";
import { fetchBasket } from "@/stores/basket-store";

export function Basket() {
  const products = useSelector((state) => state.basket?.products || []);

 
  // const user = useSelector((state) => state.user.user);

  return (
    <div>

        <img src="/icons/basket.svg" className="m-0" alt="Basket" />
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {products.reduce((acc, product) => acc + product.count, 0)}
        </span>
        {/* <Basket /> */}

    </div>
  );
}
