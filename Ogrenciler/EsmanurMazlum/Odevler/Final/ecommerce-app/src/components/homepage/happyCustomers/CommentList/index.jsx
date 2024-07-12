"use client";
import React, { useEffect, useState } from "react";
import Comment from "../Comment";
import Image from "next/image";
import rightArrow from '../../../../../public/icons/right-arrow.svg'
import leftArrow from '../../../../../public/icons/left-arrow.svg'

const CommentList = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [reviews, setReviews] = useState([]);

  const fetchCustomers = async () => {
    const res = await fetch("http://localhost:4000/reviews");
    const data = await res.json();
    setReviews(data);
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>OUR HAPPY CUSTOMERS</h2>
        <div className="d-flex gap-3">
          <button className="border-0 bg-white" onClick={handlePrev}>
            <div className="float-right">
              <Image
                src={leftArrow}
                alt="verified"
                className="object-fit-contain"
              />
            </div>
          </button>
          <button className="border-0 bg-white" onClick={handleNext}>
            <div>
              <Image
                src={rightArrow}
                alt="verified"
                className="object-fit-contain img-fluid"
              />
            </div>
          </button>
        </div>
      </div>
      <div className="position-relative overflow-hidden">
        <div
          className="d-flex transition-transform gap-3"
          style={{
            transform: `translateX(-${
              (currentIndex * 100) / (reviews.length - 2)
            }%)`,
            transition: "transform 0.5s",
          }}
        >
          {reviews.map((review, index) => (
            <Comment key={index} review={review} customClass="col-4" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommentList;