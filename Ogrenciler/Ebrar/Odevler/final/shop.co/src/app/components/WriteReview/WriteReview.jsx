import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ReactStars from "react-rating-stars-component";

const WriteReview = ({ showModal, handleModalClose, productId }) => {
  const [reviewText, setReviewText] = useState("");
  const [author, setAuthor] = useState("");
  const [rating, setRating] = useState(0);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    const newReview = {
      id: Math.floor(Math.random() * 100000),
      author,
      text: reviewText,
      date: new Date().toISOString(),
      rating,
    };

    try {
      const response = await fetch(
        `http://localhost:3000/products/${productId}`
      );
   
      const product = await response.json();

      const updatedProduct = {
        ...product,
        reviews: [...product.reviews, newReview],
      };

      const updateResponse = await fetch(
        `http://localhost:3000/products/${productId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedProduct),
        }
      );

     

      handleModalClose();
      window.location.reload();
    } catch (error) {
      
    }
  };

  return (
    <Modal show={showModal} onHide={handleModalClose}>
      <Modal.Header closeButton>
        <Modal.Title>Write a Review</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleCommentSubmit}>
          <Form.Group controlId="formAuthor">
            <Form.Label>Author</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formCommentText">
            <Form.Label>Review</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Write your review"
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formRating">
            <Form.Label>Rating</Form.Label>
            <ReactStars
              count={5}
              size={24}
              activeColor="#ffd700"
              value={rating}
              onChange={(newRating) => setRating(newRating)}
            />
          </Form.Group>
          <Button variant="dark" type="submit" className="mt-3">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default WriteReview;
