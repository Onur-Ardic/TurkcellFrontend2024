"use client";
import React, { useState, useEffect } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import { getHomepageComments } from "@/services/api";
import HappyCustomersComment from "./HappyCustomersComment";
import { HappyCustomerTitle } from "./Styled";
import "./style.css";
import { useTranslations } from "next-intl";

const HappyCustomers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [comments, setComments] = useState([]);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const fetchComments = async () => {
      const data = await getHomepageComments();
      setComments(data);
    };

    fetchComments();

    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getDisplayCount = () => (isMobileView ? 1 : 3);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < Math.ceil(comments.length / getDisplayCount()) - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const isPrevDisabled = currentIndex === 0;
  const isNextDisabled =
    currentIndex === Math.ceil(comments.length / getDisplayCount()) - 1;

  const t = useTranslations("HappCustomer");

  return (
    <div className="container mt-7">
      <div className="d-flex justify-content-between align-items-center">
        <HappyCustomerTitle className="ms-3 ms-md-0">
          {t("title")}
        </HappyCustomerTitle>
        <div className="d-flex me-3 me-md-0">
          <button
            className="border-0 me-3"
            onClick={handlePrev}
            disabled={isPrevDisabled}
          >
            <FaArrowLeft />
          </button>
          <button
            className="border-0"
            onClick={handleNext}
            disabled={isNextDisabled}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
      <div className="position-relative overflow-hidden mt-4_8">
        <div
          className={`d-flex transition-transform ${
            isMobileView ? "flex-column" : ""
          }`}
          style={{
            transition: "transform 0.5s",
          }}
        >
          {comments.length > 0 &&
            comments
              .slice(
                currentIndex * getDisplayCount(),
                currentIndex * getDisplayCount() + getDisplayCount()
              )
              .map((comment) => (
                <div
                  key={comment.id}
                  className={`${isMobileView ? "col-12" : "col-12 col-md-4"}`}
                >
                  <HappyCustomersComment yorum={comment} />
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default HappyCustomers;
