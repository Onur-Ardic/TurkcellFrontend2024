"use client";
import React, { useState } from "react";
import { BsDash, BsPlus } from "react-icons/bs";

const Counter = ({ initialQuantity }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrease = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  };

  return (
    <div className="d-flex align-items-center bg-light rounded-5 ">
      <button className="btn btn-outline-black " onClick={handleDecrease}>
        <BsDash />
      </button>
      <span className="mx-2">{quantity}</span>
      <button className="btn btn-outline-black " onClick={handleIncrease}>
        <BsPlus />
      </button>
    </div>
  );
};

export default Counter;
