"use client";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import "../styles/TopSelling.css";

const TopSelling = () => {
  const [topSelling, setTopSelling] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/topSelling")
      .then((response) => response.json())
      .then((data) => setTopSelling(data));
  }, []);

  return (
    <div className="top-selling-section">
      <div className="container">
        <h2 className="section-title">Top Selling</h2>
        <div className="row justify-content-center">
          {topSelling.map((item) => (
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
                  <div className="rating">{item.rating}/5</div>
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

export default TopSelling;
