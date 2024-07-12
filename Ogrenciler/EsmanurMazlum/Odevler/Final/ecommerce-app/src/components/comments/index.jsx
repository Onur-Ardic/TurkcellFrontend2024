"use client";
import React, { useEffect, useState } from "react";
import Comment from "../homepage/happyCustomers/Comment";
import CommentModal from "./commentModal";

function CommentDashboard() {
  const [reviews, setReviews] = useState([]);
  const [sortOrder, setSortOrder] = useState("latest");

  const fetchCustomers = async () => {
    const res = await fetch("http://localhost:4000/reviews");
    const data = await res.json();
    setReviews(data);
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const sortedReviews = [...reviews].sort((a, b) => {
    if (sortOrder === "latest") {
      return new Date(b.date) - new Date(a.date);
    } else {
      return new Date(a.date) - new Date(b.date);
    }
  });

  return (
    <>
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <p className="fs-24 fw-bold m-0">All Reviews</p>
          <span className="mx-2">({reviews.length})</span>
        </div>
        <div className="d-flex align-items-center gap-3">
          <div className="d-flex align-items-center justify-content-between my-3">
            <div className="d-flex align-items-center">
              <select
                id="sortOrder"
                className="form-select"
                value={sortOrder}
                onChange={handleSortChange}
              >
                <option value="latest">Latest</option>
                <option value="oldest">Oldest</option>
              </select>
            </div>
          </div>
          <CommentModal />
        </div>
      </div>
      <div className="row">
        {sortedReviews
          .map((review, index) => (
            <div className="col-lg-6">
              <Comment key={index} review={review} customClass="m-1" />
            </div>
          ))
          .slice(0, 6)}
      </div>
    </>
  );
}

export default CommentDashboard;
