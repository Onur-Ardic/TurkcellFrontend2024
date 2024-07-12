"use client";
import BasketList from "@/components/basket/basketList";
import { calculateBasket } from "@/components/products/productCard";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions as basketActions } from "../../stores/basket-store";
import OrderSummary from "@/components/basket/orderSummary";

function BasketPage() {
  const { products, totalAmount } = useSelector((store) => store.basket);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(basketActions.calculateBasket());
  }, [dispatch, products]);

  return (
    <div className="container">
      <h3>Your Cart</h3>
      <div className="row">
        <div className="col-lg-7">
          <div className="basket-list">
            <BasketList products={products} />
          </div>
        </div>
        <div className="col-lg-5">
          <div className="order-summary ">
            <OrderSummary />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasketPage;
