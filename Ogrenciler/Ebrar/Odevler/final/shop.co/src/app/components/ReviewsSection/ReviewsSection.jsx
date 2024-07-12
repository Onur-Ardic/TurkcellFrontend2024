import React, { useEffect, useState } from "react";
import {
    ReviewsContainer,
    ReviewItemContainer,
    ReviewItem,
    ViewButton,
    SortOptions,
    SortButton,
} from "./ReviewsSection.style"
import {AiFillCheckCircle} from "react-icons/ai";
import ReactStars from "react-rating-stars-component";


const ReviewsSection = ({ productId }) => {
  const [reviews, setReviews] = useState([]);
  const [showAllReviews, setShowAllReviews] = useState(false);
    const [sortBy, setSortBy] = useState("newest");

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/products/${productId}`
        );
        const productData = await response.json();
        if (productData.reviews) {
          setReviews(productData.reviews);
        } else {
          setReviews([]);
        }
      } catch (error) {
       
      }
    };

    fetchReviews();
  }, [productId]);

  const handleToggleReviews = () => {
    setShowAllReviews((prev) => !prev);
  };

   const sortedReviews = [...reviews].sort((a, b) => {
     if (sortBy === "oldest") {
       return new Date(a.date) - new Date(b.date);
     } else {
       return new Date(b.date) - new Date(a.date);
     }
   });
     const handleSortBy = (option) => {
       setSortBy(option);
     };

    return (
      <ReviewsContainer>
        <SortOptions className="container col-6">
          <SortButton
            onClick={() => handleSortBy("newest")}
            active={sortBy === "newest"}>
            Newest
          </SortButton>
          <SortButton
            onClick={() => handleSortBy("oldest")}
            active={sortBy === "oldest"}>
            Oldest
          </SortButton>
        </SortOptions>
        <ReviewItemContainer className="container p-3">
          {sortedReviews
            .slice(0, showAllReviews ? sortedReviews.length : 6)
            .map((review) => (
              <ReviewItem className="col-md-5" key={review.id}>
                <h4>
                  {review.author}{" "}
                  <AiFillCheckCircle style={{ color: "green" }} />
                </h4>
                <p>{review.text}</p>
                <ReactStars
                  count={5}
                  value={review.rating}
                  size={24}
                  edit={false}
                  activeColor="#ffd700"
                />
                <p>Posted on: {review.date}</p>
              </ReviewItem>
            ))}
        </ReviewItemContainer>
        {reviews.length > 6 && (
          <ViewButton onClick={handleToggleReviews}>
            {showAllReviews ? "View Less Reviews" : "View All Reviews"}
          </ViewButton>
        )}
      </ReviewsContainer>
    );

};

export default ReviewsSection;
