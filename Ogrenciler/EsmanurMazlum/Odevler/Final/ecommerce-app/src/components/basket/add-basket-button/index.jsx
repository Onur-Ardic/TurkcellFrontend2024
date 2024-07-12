// add-basket-button.js

'use client'
import { useDispatch } from "react-redux";
import { actions } from '../../../stores/basket-store';
import React from 'react';

export function AddBasketButton({ product, count }) {
  const dispatch = useDispatch();

  const addBasket = () => {
    const payload = {
      id: product.id,
      price: product.price,
      image: product.imgUrl,
      name: product.name,
      description: product.description,
      size: product.size,
      colors: product.imgColor,
      count,
    };
    dispatch(actions.addToBasket(payload));
    dispatch(actions.calculateBasket())
  };

  return (
    <button onClick={addBasket} className="shop-now-btn w-100">
      Add To Basket
    </button>
  );
}
