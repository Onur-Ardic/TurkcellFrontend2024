"use client";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { removeItemFromCart } from "../../redux/slice/cartSlice";
import { FaTrash } from "react-icons/fa";
import {
  Container,
  CartContainer,
  CartTitle,
  CartItem,
  CartItemDetails,
  CouponSection,
  RemoveButton,
  OrderSummary,
  OrderSummaryItem,
  TotalPrice,
  Divider,
  CheckoutButton,
} from "./page.style";

const Card = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleRemove = (item) => {
    dispatch(removeItemFromCart(item));
  };


const subtotal = cartItems.reduce(
  (total, item) => total + parseFloat(item.price) * parseInt(item.quantity, 10),
  0
);
const percentString =
  cartItems.length > 0 &&
  cartItems[0].discount &&
  typeof cartItems[0].discount === "string" && 
  cartItems[0].discount.includes("%") 
    ? cartItems[0].discount.replace("-", "") 
    : "0";

const percentNumber = parseInt(percentString, 10); 
const delivery = 15.0;
const total = subtotal + delivery - percentNumber;

  return (
    <>
      <Navbar />
      <CartTitle className="container pt-5 text-uppercase">Your Cart</CartTitle>
      <Container className="container pt-3">
        <CartContainer>
          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cartItems.map((item) => (
              <CartItem key={`${item.id}-${item.color}-${item.size}`}>
                <img src={item.image} alt={item.name} width="50" height="50" />
                <CartItemDetails>
                  <span className="fs-4 fw-bold">{item.name}</span>

                  <span  >
                    Size:{" "}
                    <span className="text-body-tertiary d-inline-block">{item.size}</span>
                  </span>
                  <span >
                    Color:{" "}
                    <span className="text-body-tertiary d-inline-block"> {item.color}</span>
                  </span>
                  <p className="pt-5 fs-3 fw-bold">${item.price}</p>
                </CartItemDetails>
                <RemoveButton onClick={() => handleRemove(item)}>
                  <FaTrash />
                </RemoveButton>
              </CartItem>
            ))
          )}
        </CartContainer>
        <OrderSummary>
          <h2>Order Summary</h2>
          <OrderSummaryItem className="pt-3">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </OrderSummaryItem>
          <OrderSummaryItem>
            <span>Discount</span>
            <span className="text-danger">-${percentNumber.toFixed(2)}</span>
          </OrderSummaryItem>
          <OrderSummaryItem>
            <span>Delivery</span>
            <span>${delivery.toFixed(2)}</span>
          </OrderSummaryItem>

          <Divider />
          <TotalPrice>
            <span>Total</span>
            <span className="fs-5">${total.toFixed(2)}</span>
          </TotalPrice>
          <CouponSection className="d-flex justify-content-between mt-4">
            <input type="text" placeholder="Enter coupon code" />
            <button>Apply Coupon</button>
          </CouponSection>

          <CheckoutButton className="mt-3">Go to Checkout</CheckoutButton>
        </OrderSummary>
      </Container>
      <Footer />
    </>
  );
};

export default Card;
