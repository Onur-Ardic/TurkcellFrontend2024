"use client";

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Banner = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) onClose();
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className="w-100 bg-black text-white d-flex align-items-center justify-content-center position-fixed top-0 p-3"
      style={{ zIndex: 1000 }}
    >
      <div className="text-center w-100">
        Sign up and get 20% off to your first order.{" "}
        <a href="#" style={{ color: "white", textDecoration: "underline" }}>
          Sign Up Now
        </a>
      </div>
      <button
        className="btn btn-link text-white position-absolute"
        style={{ right: 20 }}
        onClick={handleClose}
      >
        ×
      </button>
    </div>
  );
};

export default Banner;
