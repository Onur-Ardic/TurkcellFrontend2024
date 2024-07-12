"use client";
import React from "react";
import dynamic from "next/dynamic";

const DynamicProductDetails = dynamic(() => import("../ProductDetails/index"), {
  ssr: false,
});
const DynamicRatingAndReviews = dynamic(
  () => import("../RatingAndReviews/index"),
  {
    ssr: false,
  }
);
const DynamicFAQs = dynamic(() => import("../Faqs/faqs"), {
  ssr: false,
});

const ProductTabs = ({ product }) => {
  const [activeTab, setActiveTab] = React.useState("rating");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="productTabs  ">
      <div className="tabButtons d-flex col justify-content-around ">
        <button
          className={`btn ${activeTab === "details" ? "active" : ""}`}
          onClick={() => handleTabChange("details")}>
          Product Details
          <hr />
        </button>
        <button
          className={`btn ${activeTab === "rating" ? "active" : ""}`}
          onClick={() => handleTabChange("rating")}>
          Rating & Reviews
          <hr />
        </button>

        <button
          className={`btn ${activeTab === "faqs" ? "active" : ""}`}
          onClick={() => handleTabChange("faqs")}>
          FAQs
          <hr />
        </button>
      </div>
      <div className="tabContent  ">
        {activeTab === "rating" && (
          <DynamicRatingAndReviews product={product} />
        )}
        {activeTab === "details" && (
          <DynamicProductDetails details={product.details} />
        )}
        {activeTab === "faqs" && <DynamicFAQs />}
      </div>
    </div>
  );
};

export default ProductTabs;
