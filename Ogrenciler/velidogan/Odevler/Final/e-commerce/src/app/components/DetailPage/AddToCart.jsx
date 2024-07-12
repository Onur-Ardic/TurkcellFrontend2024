"use client";
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/app/lib/cart/cartSlice";
import toast, { Toaster } from "react-hot-toast";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

const AddToCart = ({ product,lng }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation(lng)
  const handleAddToCart = () => {
    dispatch(addToCart(product));
    toast.success("Added to cart!");
  };

  return (
    <>
      <button className="add-to-cart" onClick={handleAddToCart}>
        {t("addToCard")}
      </button>
      <Toaster position="top-right" />
    </>
  );
};

export default AddToCart;
