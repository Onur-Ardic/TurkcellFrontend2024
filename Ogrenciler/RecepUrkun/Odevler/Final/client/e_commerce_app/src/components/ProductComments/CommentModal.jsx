import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Rating } from "../Rating/Rating";

const CommentModal = ({
  onClose,
  onSave,
  newComment,
  handleInputChange,
  handleRatingChange,
}) => {
  return (
    <Modal show={true} onHide={onClose} id="commentModal">
      <Modal.Header closeButton>
        <Modal.Title>Write A Review</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="comment">
            <Form.Label>Your Comment</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="comment"
              value={newComment.comment}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="rating">
            <Form.Label>Rating</Form.Label>
            <Rating
              value={newComment.rating}
              readOnly={false}
              onChange={handleRatingChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button variant="primary" onClick={onSave}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CommentModal;
