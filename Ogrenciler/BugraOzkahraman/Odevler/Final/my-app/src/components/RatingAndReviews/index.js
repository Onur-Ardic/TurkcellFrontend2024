import React, { useState } from "react";
import { MdOutlineStar } from "react-icons/md";

const RatingAndReviews = ({ product }) => {
  const [reviews, setReviews] = useState(product.reviews);
  const [reviewsToShow, setReviewsToShow] = useState(6);
  const [showModal, setShowModal] = useState(false);
  const [sortOption, setSortOption] = useState("");
  const [filterOption, setFilterOption] = useState("");

  if (!product) {
    return <div className="alert alert-warning">Ürün bulunamadı</div>;
  }

  const loadMoreReviews = () => {
    setReviewsToShow((prev) => prev + 6);
  };

  const restrictMoreReviews = () => {
    setReviewsToShow(6);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilterOption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const username = e.target.elements.username.value;
    const rating = e.target.elements.rating.value;
    const reviewText = e.target.elements.reviewText.value;

    const newReview = {
      username: username,
      rating: parseInt(rating),
      review: reviewText,
      postedOn: new Date().toLocaleDateString(),
    };

    setReviews([...reviews, newReview]);

    closeModal();
  };

  let filteredReviews = [...reviews];

  if (sortOption === "newest") {
    filteredReviews.sort((a, b) => new Date(b.postedOn) - new Date(a.postedOn));
  } else if (sortOption === "oldest") {
    filteredReviews.sort((a, b) => new Date(a.postedOn) - new Date(b.postedOn));
  }

  if (filterOption) {
    filteredReviews = filteredReviews.filter(
      (review) => review.rating === parseInt(filterOption)
    );
  }

  const showLoadMoreButton = reviewsToShow < filteredReviews.length;
  const showHideButton =
    reviewsToShow >= filteredReviews.length && filteredReviews.length > 6;

  return (
    <div className="ratingAndReviews d-flex flex-column align-items-center">
      <div className="d-flex align-items-center w-100 justify-content-around mb-4">
        <div>
          <h4 className="mb-4">All reviews({reviews.length})</h4>
          <div className="d-flex align-items-center">
            {Array.from({ length: product.rating }, (_, index) => (
              <MdOutlineStar
                key={index}
                className="star-icon"
                style={{ color: "#FFD700" }}
              />
            ))}
            <span className="ms-2">{product.rating.toFixed(1)} / 5</span>
          </div>{" "}
        </div>
        <div className="productRating d-flex align-items-center">
          <div className="ms-auto d-flex align-items-center">
            <button className="btn bg-light" onClick={openModal}>
              Write a Review
            </button>
            <select
              className="btn btn-outline-black ms-2"
              value={filterOption}
              onChange={handleFilterChange}>
              <option value="">All stars</option>
              <option value="5">5 star reviews</option>
              <option value="4">4 star reviews</option>
              <option value="3">3 star reviews</option>
              <option value="2">2 star reviewsr</option>
              <option value="1">1 star reviews</option>
            </select>
            <select
              className="btn btn-outline-black ms-2"
              value={sortOption}
              onChange={handleSortChange}>
              <option value="">Recommended</option>
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
            </select>
          </div>
        </div>
      </div>
      <div className="reviews row gap-4 justify-content-center w-100">
        {filteredReviews.slice(0, reviewsToShow).map((review, index) => (
          <div key={index} className="card col-md-5 mb-4">
            <div className="d-flex row p-3">
              <div className="star-rating">
                {Array.from({ length: review.rating }, (_, idx) => (
                  <MdOutlineStar
                    key={idx}
                    className="star-icon"
                    style={{ color: "#FFD700" }}
                  />
                ))}
              </div>
              <div>
                <h5>{review.username}</h5>
                <p>{review.review}</p>
                <small>{review.postedOn}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
      {showLoadMoreButton && (
        <div className="text-center mt-4">
          <button className="btn bg-light rounded-5" onClick={loadMoreReviews}>
            Load More Reviews
          </button>
        </div>
      )}
      {showHideButton && (
        <div className="text-center mt-4">
          <button
            className="btn bg-light rounded-5"
            onClick={restrictMoreReviews}>
            Reviews hidden
          </button>
        </div>
      )}

      <div className={`modal ${showModal ? "show" : ""}`} tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Yorum Yaz</h5>
              <button
                type="button"
                className="btn-close"
                onClick={closeModal}></button>
            </div>
            <div className="modal-body">
              <form className="form" onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Kullanıcı Adı
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    className="form-control"
                    placeholder="Kullanıcı adınızı girin"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="rating" className="form-label">
                    Değerlendirme
                  </label>
                  <select
                    id="rating"
                    name="rating"
                    className="form-select"
                    required>
                    <option value="5">5 Yıldız</option>
                    <option value="4">4 Yıldız</option>
                    <option value="3">3 Yıldız</option>
                    <option value="2">2 Yıldız</option>
                    <option value="1">1 Yıldız</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="reviewText" className="form-label">
                    Yorumunuz
                  </label>
                  <textarea
                    id="reviewText"
                    name="reviewText"
                    rows="3"
                    className="form-control"
                    placeholder="Yorumunuzu buraya yazın"
                    required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Gönder
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingAndReviews;
