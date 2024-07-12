"use client";

import React from "react";
import reviewsData from "./db.json";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faCheckCircle,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const OurHappyCustomer = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const reviews = reviewsData.reviews;

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const getReviewIndex = (index) => {
    return (currentIndex + index + reviews.length) % reviews.length;
  };

  return (
    <div className="container my-5">
      <div className="d-flex align-items-center mb-5">
        <h1 className="text-start flex-grow-1 fw-bold">OUR HAPPY CUSTOMERS</h1>
        <div>
          <button className="btn  mr-2" onClick={prevReview}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button className="btn " onClick={nextReview}>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
      <div className="row justify-content-start position-relative">
        {[0, 1, 2].map((index) => (
          <div key={index} className="col-lg-4 mb-4">
            <card className="card text-start rounded-4">
              <div className="card-body p-4 d-flex row gap-2">
                <div className="d-flex mb-2">
                  {[...Array(reviews[getReviewIndex(index)].rating)].map(
                    (_, i) => (
                      <FontAwesomeIcon
                        key={i}
                        icon={faStar}
                        className="text-warning"
                      />
                    )
                  )}
                  {[...Array(5 - reviews[getReviewIndex(index)].rating)].map(
                    (_, i) => (
                      <FontAwesomeIcon
                        key={i}
                        icon={faStar}
                        className="text-muted"
                      />
                    )
                  )}
                </div>
                <h5 className="card-title d-flex justify-content-start align-items-center">
                  {reviews[getReviewIndex(index)].name}
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-success ml-2"
                  />
                </h5>
                <p className="card-text">
                  {reviews[getReviewIndex(index)].comment}
                </p>
              </div>
            </card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurHappyCustomer;
