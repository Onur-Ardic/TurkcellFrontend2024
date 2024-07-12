"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useTranslations } from "next-intl";

import {
  BsStarFill,
  BsStarHalf,
  BsStar,
  BsCheckCircleFill,
  BsCheck2,
} from "react-icons/bs";
import { addItemToCart } from "@/redux/slices/cartSlice";
import { auth } from "@/firebaseConfig";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetail = ({ product, comments }) => {
  const t = useTranslations("productDetail");

  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [userComment, setUserComment] = useState("");
  const [userRating, setUserRating] = useState(0);

  const [selectedColor, setSelectedColor] = useState(
    product.colors ? product.colors[0] : ""
  );
  const [selectedSize, setSelectedSize] = useState(
    product.sizes ? product.sizes[0] : ""
  );

  if (!product) {
    return <div>Product data is not available.</div>;
  }

  const renderRating = (rating) => {
    if (typeof rating !== "number") return null;

    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <span className="badge">
        {[...Array(fullStars)].map((_, index) => (
          <BsStarFill key={`full-${index}`} />
        ))}
        {halfStar && <BsStarHalf key="half" />}
        {[...Array(emptyStars)].map((_, index) => (
          <BsStar key={`empty-${index}`} />
        ))}
      </span>
    );
  };

  const handleAddToCart = async () => {
    const user = auth.currentUser;
    if (user) {
      const itemToAdd = {
        id: product.id,
        name: product.name,
        price: product.price,
        color: selectedColor,
        size: selectedSize,
        quantity,
      };
      dispatch(addItemToCart(itemToAdd));

      const response = await fetch("/api/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: user.uid,
          productId: product.id,
          quantity,
          color: selectedColor,
          size: selectedSize,
        }),
      });

      if (response.ok) {
        toast.success("Product added to cart successfully!");
      } else {
        toast.error("Failed to add product to cart.");
      }
    } else {
      toast.error("Please log in.");
    }
  };

  const handleQuantityChange = (amount) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + amount));
  };

  const handleSaveComment = async () => {
    const user = auth.currentUser;
    if (user) {
      const commentToAdd = {
        userId: user.uid,
        productId: product.id,
        comment: userComment,
        rating: userRating,
      };

      try {
        const response = await fetch("/api/comments", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(commentToAdd),
        });

        if (response.ok) {
          toast.success("Comment added successfully!");
        } else {
          const errorData = await response.json();
          console.error("Error response from server:", errorData);
          toast.error(`Failed to add comment: ${errorData.error}`);
        }
      } catch (error) {
        console.error("Network error when adding comment:", error);
        toast.error("Failed to add comment due to network error.");
      }
    } else {
      toast.error("Please log in to add a comment.");
    }
  };

  const handleRatingChange = (rating) => {
    setUserRating(rating);
  };

  return (
    <>
      <div className="container my-5 pb-5">
        <ToastContainer />
        <div className="row">
          <div className="col-md-6 d-flex flex-column flex-md-row">
            <div className="container my-3">
              <div className="row h-100">
                <div className="col-md-4 d-none d-md-flex flex-column justify-content-between">
                  <img
                    src={`/assets/img/${product.image}`}
                    className="img-fluid rounded mb-2"
                    alt="Thumbnail 1"
                  />
                  <img
                    src={`/assets/img/${product.image}`}
                    className="img-fluid rounded mb-2"
                    alt="Thumbnail 2"
                  />
                  <img
                    src={`/assets/img/${product.image}`}
                    className="img-fluid rounded"
                    alt="Thumbnail 3"
                  />
                </div>

                <div className="col-md-8 col-12 d-flex align-items-center">
                  <img
                    src={`/assets/img/${product.image}`}
                    className="img-fluid rounded w-100 h-100"
                    style={{ objectFit: "cover" }}
                    alt="Main product image"
                  />
                </div>

                <div className="col-12 d-md-none mt-3">
                  <div className="row">
                    <div className="col-4">
                      <img
                        src={`/assets/img/${product.image}`}
                        className="img-fluid rounded"
                        alt="Thumbnail 1"
                      />
                    </div>
                    <div className="col-4">
                      <img
                        src={`/assets/img/${product.image}`}
                        className="img-fluid rounded"
                        alt="Thumbnail 2"
                      />
                    </div>
                    <div className="col-4">
                      <img
                        src={`/assets/img/${product.image}`}
                        className="img-fluid rounded"
                        alt="Thumbnail 3"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex flex-column gap-2">
            <h1 className="product-title font-integral fw-bold">
              {product.name}
            </h1>
            <div className="rating mb-3 fs-6">
              {renderRating(product.rating)}
              <small className="text-muted fs-6 ">{product.rating}/5</small>
            </div>
            <h4 className="product-price  d-flex align-items-end gap-2 font-satoshi">
              ${product.price}
              <span className="text-body-tertiary  text-decoration-line-through font-satoshi">
                $500
              </span>
              <span className="bg-danger-subtle text-danger fs-6 p-1 rounded-pill px-1">
                -30%
              </span>
            </h4>
            <p className="product-description fs-6 border-bottom pb-3">
              {product.description}
            </p>
            <div className="color-options review-item border-bottom pb-3 mb-3">
              <p className="fw-bold">{t("selectedColor")}</p>
              {product.colors &&
                product.colors.map((color, index) => (
                  <button
                    key={index}
                    style={{
                      backgroundColor: color,
                      position: "relative",
                      width: "50px",
                      height: "50px",
                      color: color === selectedColor ? "white" : "black",
                      border: "1px solid black",
                    }}
                    className={`btn rounded-circle p-3 ${
                      color === selectedColor ? "active" : ""
                    }`}
                    onClick={() => setSelectedColor(color)}
                  >
                    {color === selectedColor && (
                      <BsCheck2
                        style={{
                          color: "white",
                          fontSize: "24px",
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          backgroundColor: "transparent",
                        }}
                      />
                    )}
                  </button>
                ))}
            </div>
            <div className="size-options border-bottom pb-3 mb-3">
              <p className="fw-bold">{t("chooseSize")}</p>
              {product.sizes &&
                product.sizes.map((size, index) => (
                  <button
                    key={index}
                    className={`btn btn-secondary btn-sm rounded-pill ${
                      size === selectedSize ? "active" : ""
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
            </div>
            <div className="quantity-cart d-flex align-items-center">
              <div className="quantity-selector bg-secondary rounded-pill d-flex align-items-center me-3 ">
                <button
                  className="btn  btn-sm rounded-circle border-0 fs-4"
                  onClick={() => handleQuantityChange(-1)}
                >
                  -
                </button>
                <input
                  type="text"
                  className="form-control text-center bg-secondary  border-0 text-dark"
                  value={quantity}
                  style={{ width: "50px" }}
                />
                <button
                  className="btn btn-sm rounded-circle fs-5 border-0"
                  onClick={() => handleQuantityChange(1)}
                >
                  +
                </button>
              </div>
              <button
                className="btn btn-dark add-card btn-lg rounded-pill fs-6"
                onClick={handleAddToCart}
              >
                {t("addToCart")}
              </button>
            </div>
          </div>
        </div>

        <ul
          className="nav nav-tabs my-5 justify-content-around"
          id="productTabs"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="details-tab"
              data-bs-toggle="tab"
              data-bs-target="#details"
              type="button"
              role="tab"
              aria-controls="details"
              aria-selected="true"
            >
              {t("productDetails")}
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="reviews-tab"
              data-bs-toggle="tab"
              data-bs-target="#reviews"
              type="button"
              role="tab"
              aria-controls="reviews"
              aria-selected="false"
            >
              {t("allReviews")}
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="faqs-tab"
              data-bs-toggle="tab"
              data-bs-target="#faqs"
              type="button"
              role="tab"
              aria-controls="faqs"
              aria-selected="false"
            >
              {t("faqs")}
            </button>
          </li>
        </ul>
        <div className="tab-content" id="productTabsContent">
          <div
            className="tab-pane fade show active"
            id="details"
            role="tabpanel"
            aria-labelledby="details-tab"
          >
            <div>
              <p>{product.description}</p>
              <p className="fw-bold">${product.price}</p>
            </div>
          </div>

          <div
            className="tab-pane fade"
            id="reviews"
            role="tabpanel"
            aria-labelledby="reviews-tab"
          >
            <div className="review-list row">
              <div className="row">
                <div className="col-lg-6">
                  <p className="fs-4 fw-bold text-black">{t("allReviews")}</p>
                </div>
                <div className="col-lg-6 d-flex justify-content-end">
                  <div className="row">
                    <div className="col-lg-5">
                      <select
                        className="form-select custom-select-width bg-secondary rounded-pill"
                        aria-label="Sort by date"
                      >
                        <option value="latest">{t("latest")}</option>
                        <option value="oldest">{t("oldest")}</option>
                      </select>
                    </div>
                    <div className="col-lg-7">
                      <button
                        type="button"
                        className="btn btn-dark rounded-pill"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                      >
                        {t("writeReview")}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="review-item fs-6 fw-bold col-lg-6 col-md-2 col-sm-12 py-3">
                {comments &&
                  comments.map((comment, index) => (
                    <div
                      key={index}
                      className="customer-card rounded-4 text-black border border-1 position-relative p-3"
                    >
                      <div className="info-row">
                        <div className="rating">
                          {[...Array(comment.rating)].map((_, i) => (
                            <BsStarFill key={i} style={{ color: "#ffcc00" }} />
                          ))}
                        </div>
                      </div>
                      <h5 className="customer-name font-satoshi pt-3">
                        {comment.comment}
                        <BsCheckCircleFill
                          style={{ color: "#01AB31", width: "30px" }}
                        />
                      </h5>
                      <div className="info-container">
                        <p>{comment.comment}</p>
                      </div>
                    </div>
                  ))}
              </div>

              <div className="view-all text-center">
                <button className="btn btn-round mx-auto text-center border">
                  {t("loadMoreReviews")}
                </button>
              </div>
            </div>
          </div>

          <div
            className="tab-pane fade"
            id="faqs"
            role="tabpanel"
            aria-labelledby="faqs-tab"
          >
            <div class="row">
              <div class="col-sm-12 col-lg-6 mb-3">
                <div class="card">
                  <div class="card-body">
                    <h6 class="card-title">{t("faq1")}</h6>
                    <p class="card-text">{t("faq1Answer")}</p>
                  </div>
                </div>
              </div>
              <div class="col-sm-12 col-lg-6">
                <div class="card">
                  <div class="card-body">
                    <h6 class="card-title">{t("faq2")}</h6>
                    <p class="card-text">{t("faq2Answer")}</p>
                  </div>
                </div>
              </div>
              <div class="col-sm-12 col-lg-6">
                <div class="card">
                  <div class="card-body">
                    <h6 class="card-title">{t("faq3")}</h6>
                    <p class="card-text">{t("faq3Answer")}</p>
                  </div>
                </div>
              </div>
              <div class="col-sm-12 col-lg-6">
                <div class="card">
                  <div class="card-body">
                    <h6 class="card-title">{t("faq4")}</h6>
                    <p class="card-text">{t("faq4Answer")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                {t("save")}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="form-floating">
                <div className="pb-3">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <div className="form-check form-check-inline" key={rating}>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id={`inlineCheckbox${rating}`}
                        value={rating}
                        checked={userRating >= rating}
                        onChange={() => handleRatingChange(rating)}
                      />
                      <label
                        className="form-check-label"
                        htmlFor={`inlineCheckbox${rating}`}
                      >
                        {rating}
                      </label>
                    </div>
                  ))}
                </div>

                <div className="form-floating">
                  <textarea
                    className="form-control"
                    placeholder="Leave a comment here"
                    id="floatingTextarea2"
                    value={userComment}
                    onChange={(e) => setUserComment(e.target.value)}
                  ></textarea>
                  <label htmlFor="floatingTextarea2">{t("comment")}</label>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary rounded-pill px-3"
                data-bs-dismiss="modal"
              >
                {t("close")}
              </button>

              <button
                type="button"
                className="btn btn-dark rounded-pill px-3"
                onClick={handleSaveComment}
              >
                {t("save")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
