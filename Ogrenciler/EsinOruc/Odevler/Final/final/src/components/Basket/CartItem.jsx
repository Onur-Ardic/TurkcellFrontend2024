"use client";

import React from "react";
import { useDispatch } from "react-redux";
import { FaTrashAlt } from "react-icons/fa";
import { auth } from "@/firebaseconfig";
import {
  removeItemFromCart,
  updateItemQuantity,
} from "@/redux/slices/cartSlice";
import "@/styles/css/main.css";
import Image from "next/image";
import { toast } from "react-toastify";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const handleRemoveFromCart = async (productId, color, size) => {
    const user = auth.currentUser;
    if (user) {
      const cartItem = {
        userId: user.uid,
        productId: productId,
        color: color,
        size: size,
      };

      const response = await fetch("/api/cart", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cartItem),
      });

      if (response.ok) {
        toast.success("Product removed from cart successfully!");
        dispatch(removeItemFromCart({ productId, color, size })); // Assuming you have a removeItemFromCart action
      } else {
        toast.error("Failed to remove product from cart.");
      }
    } else {
      toast.error("Please log in to remove products from your cart.");
    }
  };
  const handleQuantityChange = (newQuantity) => {
    if (newQuantity > 0) {
      dispatch(updateItemQuantity({ id: item.id, quantity: newQuantity }));
    }
  };

  return (
    <div className="cartItem border-top rounded-0 p-3 d-flex align-items-revert justify-content-between position-relative">
      <Image
        src={`/assets/img/${item.image}`}
        width={150}
        height={150}
        alt={item.name}
        className="rounded me-3 cartItem-image"
      />
      <div className="details  ">
        <p className="fw-bold fs-6 text-dark">{item.name}</p>
        <p>Size: {item.size}</p>
        <p>Color: {item.color}</p>
        <p className="price fw-bold text-dark ">${item.price}</p>
      </div>
      <div className="d-flex flex-column align-items-end justify-content-between">
        <button
          className="btn border-0 delete-btn"
          onClick={() => handleRemoveFromCart(item.id, item.color, item.size)}
        >
          <FaTrashAlt className="text-danger" />
        </button>
        <div className="actions rounded-pill px-2 d-flex align-items-center">
          <button
            className="btn bg-transparent rounded-pill quantity-btn border-0"
            onClick={() => handleQuantityChange(item.quantity - 1)}
          >
            -
          </button>
          <span className="quantity fs-6 my-0 mx-2 ">{item.quantity}</span>
          <button
            className="quantity-btn rounded-pill bg-transparent py-0 border-0 "
            onClick={() => handleQuantityChange(item.quantity + 1)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
