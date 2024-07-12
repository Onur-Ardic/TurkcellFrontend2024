import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
const page = async ({ params }) => {
  const res = await fetch(`http://localhost:3001/topSelling/${params.shopId}`, {
    cache: "no-store",
  });
  const items = await res.json();

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <>
        {[...Array(fullStars)].map((_, index) => (
          <FaStar key={index} className="text-warning" />
        ))}
        {hasHalfStar && <FaStarHalfAlt className="text-warning" />}
        {[...Array(emptyStars)].map((_, index) => (
          <FaRegStar key={index} className="text-warning" />
        ))}
      </>
    );
  };

  return (
    <div className="container ">
      <div className="d-flex justify-content-center mt-3 flex-column align-items-center">
        <div className="col-12">
          <img src={`/images/${items.image}`} alt="" className="product-img" />
          <div className="d-flex justify-content-between mt-3 gap-1">
            <div className="col-4 border border-dark border-1 rounded-4">
              <img
                src={`/images/${items.image}`}
                alt=""
                className="product-img rounded-4"
              />
            </div>
            <div className="col-4">
              <img
                src={`/images/${items.image}`}
                alt=""
                className="product-img"
              />
            </div>
            <div className="col-4">
              <img
                src={`/images/${items.image}`}
                alt=""
                className="product-img"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="bold">{items.name}</h1>
        <div className="fs-6 d-flex align-items-center gap-2">
          <div className="d-flex">{renderStars(items.rating)}</div>
          <div>
            <span className="fw-medium">{items.rating}</span>/5
          </div>
        </div>
        <div className="fs-2 fw-bold">${items.price}</div>
        <p>
          This graphic t-shirt which is perfect for any occasion. Crafted from a
          soft and breathable fabric, it offers superior comfort and style.
        </p>
      </div>
      <hr />
      <div>
        <button>{items.colors}</button>
      </div>
    </div>
  );
};

export default page;
