"use client";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import "../styles/NewArrivals.css";

const NewArrivals = () => {
  const [newArrivals, setNewArrivals] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/newArrival")
      .then((response) => response.json())
      .then((data) => setNewArrivals(data));
  }, []);

  return (
    <div className="new-arrivals-section">
      <div className="container">
        <h2 className="section-title">New Arrivals</h2>
        <div className="row justify-content-center">
          {newArrivals.map((item) => (
            <div key={item.id} className="col-md-3 col-6 mb-4">
              <div className="card">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={295}
                  height={298}
                  className="card-img-top"
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{item.title}</h5>
                  <div className="rating">
                    {[...Array(Math.floor(item.rating))].map((_, index) => (
                      <span key={index} className="star">
                        ★
                      </span>
                    ))}
                    {item.rating % 1 !== 0 && <span className="star">☆</span>}
                    <span className="rating-score">{item.rating}/5</span>
                  </div>
                  <p className="card-text">
                    {item.oldPrice && (
                      <span className="old-price">${item.oldPrice}</span>
                    )}
                    <span className="price">${item.price}</span>
                    {item.discount && (
                      <span className="discount">-{item.discount}</span>
                    )}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <button className="view-all-btn">View All</button>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
