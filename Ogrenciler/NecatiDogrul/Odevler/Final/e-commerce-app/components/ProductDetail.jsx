"use client";

import { useEffect, useState } from "react";
import ReviewForm from "./ReviewForm";

const ProductDetail = ({ product }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const res = await fetch(
        `http://localhost:3001/reviews?productId=${product.id}`
      );
      const data = await res.json();
      setReviews(data);
    };

    fetchReviews();
  }, [product.id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button className="btn btn-primary">Add to Cart</button>

      <h2>Reviews</h2>
      {reviews.length ? (
        reviews.map((review) => (
          <div key={review.id}>
            <h3>{review.author}</h3>
            <p>{review.text}</p>
          </div>
        ))
      ) : (
        <p>No reviews yet</p>
      )}

      <ReviewForm productId={product.id} />
    </div>
  );
};

export default ProductDetail;
