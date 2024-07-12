"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import OrderSummary from "./OrderSummary";
import { fetchCartItems, saveCartItems } from "@/redux/cartActions";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebaseConfig";
import { BsChevronCompactRight } from "react-icons/bs";
import Link from "next/link";
import { useTranslations } from "next-intl";

const CartPage = () => {
  const t = useTranslations("boxes");

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items || []);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
        dispatch(fetchCartItems());
      } else {
        setUserId(null);
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  useEffect(() => {
    if (userId && cartItems.length > 0) {
      dispatch(saveCartItems(cartItems));
    }
  }, [cartItems, userId, dispatch]);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const discount = subtotal * 0.2;
  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;

  return (
    <>
      <section className="cartPage ">
        <div className="container border-top mb-5 mt-2 pt-3 ">
          <div className="breadcrumb  ">
            <span>
              <Link href="/" className="text-info">
                {t("home")}
              </Link>
              <BsChevronCompactRight />
              <Link href="#" className="text-secondary-emphasis">
                {t("cart")}
              </Link>
            </span>
          </div>
          <h3 className="fw-bold pb-2"> {t("yourCart")}</h3>

          <div className="row cartContent mb-5 ">
            <div className="col-lg-8 col-md-8 col-sm-12 border rounded-4  mb-5">
              <div className="cartItems ">
                {cartItems.map((item, index) => (
                  <CartItem key={index} item={item} />
                ))}
              </div>
            </div>
            <div className="col-lg-4 col-md-8 col-sm-12">
              <div className="orderSummaryContainer">
                <OrderSummary
                  subtotal={subtotal}
                  discount={discount}
                  deliveryFee={deliveryFee}
                  total={total}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CartPage;
