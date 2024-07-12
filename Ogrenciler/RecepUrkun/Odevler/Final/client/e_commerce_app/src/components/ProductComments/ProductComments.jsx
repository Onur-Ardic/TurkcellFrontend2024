"use client";
import React, { useState } from "react";
import { CustomerComment, CustomerCommentName } from "../HappyCustomers/Styled";
import { Rating } from "../Rating/Rating";
import { MdVerifiedUser } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { IoFilter } from "react-icons/io5";
import {
  FilterButton,
  LoadMore,
  ProductInfoTitle,
  ReviewButton,
  SortButton,
  WriteAReview,
} from "./Styled";
import { dateFormatter } from "@/utils/dateFormatter";
import { useTranslations } from "next-intl";
import { postProductComment } from "@/services/api";
import { useSelector } from "react-redux";
import CommentModal from "./CommentModal";

const ProductComments = ({ product }) => {
  const t = useTranslations("ProductComment");
  const [visibleReviews, setVisibleReviews] = useState(6);
  const currentUser = useSelector((state) => state.user.loggedInUser);
  const [showModal, setShowModal] = useState(false);

  const [newComment, setNewComment] = useState({
    user: currentUser,
    comment: "",
    rating: 0,
    date: new Date().toISOString().slice(0, 10),
  });

  const [currentProduct, setCurrentProduct] = useState(product);

  const loadMoreReviews = () => {
    setVisibleReviews(
      visibleReviews + (product.comments.length - visibleReviews)
    );
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewComment({
      ...newComment,
      [name]: value,
    });
  };

  const handleRatingChange = (value) => {
    setNewComment({
      ...newComment,
      rating: value,
    });
  };

  const addComment = async () => {
    const updatedProduct = { ...currentProduct };
    updatedProduct.comments.push(newComment);
    setCurrentProduct(updatedProduct);
    try {
      const cevap = await postProductComment(currentProduct.id, newComment);
      console.log("Cevap: ", cevap);
      setShowModal(false);
    } catch (error) {
      console.error("Failed to post comment:", error);
    }
  };

  return (
    <div className="container mt-8">
      <div className="row">
        <div className="d-flex flex-row justify-content-evenly mt-5_5 mt-md-7 border-bottom">
          <ProductInfoTitle className="mb-3_5">
            {t("ProductDetails")}
          </ProductInfoTitle>
          <ProductInfoTitle className="fw-bold">
            {t("RatingReviews")}
          </ProductInfoTitle>
          <ProductInfoTitle>{t("FAQs")}</ProductInfoTitle>
        </div>
        <div className="d-flex flex-row justify-content-between my-3_5">
          <div className="d-flex align-items-center">
            <h4 className="fw-bold">{t("AllReviews")}</h4>
            <span
              className="ms-2"
              style={{ fontSize: 16, fontWeight: 400, fontFamily: "satoshi" }}
            >
              ({product.comments.length})
            </span>
          </div>
          <div className="d-flex flex-row align-items-center">
            <FilterButton className="me-2">
              <button>
                <IoFilter />
              </button>
            </FilterButton>
            <SortButton className="dropdown-center m-2 d-none d-md-flex">
              <button
                className="dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {t("Sort")}
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item active" href="#">
                    {t("Latest")}
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    {t("Rating")}
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    {t("Date")}
                  </a>
                </li>
              </ul>
            </SortButton>
            <ReviewButton onClick={() => setShowModal(true)}>
              <WriteAReview>{t("WriteAReview")}</WriteAReview>
            </ReviewButton>
          </div>
        </div>
        <div className="d-flex flex-wrap flex-row justify-content-md-center">
          {product.comments.slice(0, visibleReviews).map((comment, index) => (
            <div
              className="col-12 col-md-6 border border-1 rounded-4 me-3_5 mb-3_5"
              style={{ maxWidth: 628 }}
              key={index}
            >
              <div className="px-4 py-4">
                <div className="d-flex justify-content-between align-items-center">
                  <Rating value={comment.rating} />
                  <BsThreeDots size={24} style={{ cursor: "pointer" }} />
                </div>
                <div className="d-flex align-items-center mt-3">
                  <CustomerCommentName>{comment.user}</CustomerCommentName>
                  <MdVerifiedUser
                    className="ms-1"
                    style={{ color: "#01AB31", height: 24, width: 24 }}
                  />
                </div>
                <CustomerComment className="mt-3">
                  {comment.comment}
                </CustomerComment>
                <p className="mt-4">
                  {dateFormatter(comment.date)} {t("Posted")}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-center">
          {visibleReviews < product.comments.length && (
            <LoadMore onClick={loadMoreReviews}>{t("LoadMore")}</LoadMore>
          )}
        </div>
      </div>
      {showModal && (
        <CommentModal
          onClose={() => setShowModal(false)}
          onSave={addComment}
          newComment={newComment}
          handleInputChange={handleInputChange}
          handleRatingChange={handleRatingChange}
        />
      )}
    </div>
  );
};

export default ProductComments;
