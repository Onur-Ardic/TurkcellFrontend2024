import { Rating } from "@/components/Rating";
import React, { useRef, useState } from "react";

const ModalComponent = () => {
  const ratingRef = useRef(null);
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // API'ye POST isteği gönder
    fetch("http://localhost:4000/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        rating,
        comment,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        handleClose();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      {/* Button trigger modal */}
      <button
        type="button"
        onClick={handleShow}
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Launch static backdrop modal
      </button>

      {/* Modal */}
      <div
        className={`modal fade ${show ? "show" : ""}`}
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden={!show}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Modal title
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={handleClose}
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div id="rating_label" className="mb-3">
                  <p>Rating</p>
                  <Rating
                  style={{ maxWidth: 180 }}
                  ref={ratingRef}
                  value={rating}
                  onChange={setRating}
                  className="mx-auto"
                />
                </div>
                <div className="mb-3">
                  <label htmlFor="comment" className="form-label">
                    Comment
                  </label>
                  <textarea
                    className="form-control"
                    id="comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                onClick={handleClose}
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalComponent;
