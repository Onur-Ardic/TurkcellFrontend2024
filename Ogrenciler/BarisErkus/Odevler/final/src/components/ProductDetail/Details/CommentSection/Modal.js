"use client";
import { notify } from "@/lib/notify";
import Button from "@/components/Button";
import { addComment } from "@/server/comment";
import { getUser } from "@/server/user";
import { Rating } from "@smastrom/react-rating";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { useSelector } from "react-redux";
import { ModalContent } from "./styles";

const Modal = ({ productId }) => {
  const t = useTranslations("ProductDetail");
  const { user } = useSelector((state) => state.user);

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      notify(t("noLoggedIn"), "error");
      return;
    }
    if (!comment || !rating || comment === "" || rating === 0) {
      notify(t("emptyFields"), "error");
      return;
    }

    const displayUser = await getUser(user.uid);

    const newComment = {
      id: String(new Date().getTime()),
      username: displayUser.name,
      content: comment,
      rating: rating,
      created_at: new Date().toISOString(),
    };

    try {
      const res = await addComment(productId, newComment);
      if (res) {
        notify(t("addedComment"), "success");
      }
    } catch {
      notify(t("unExpectedError"), "error");
    }
  };

  return (
    <div
      className="modal fade"
      id="addCommentModal"
      tabIndex="-1"
      aria-labelledby="addCommentModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <ModalContent className="modal-content">
          <form onSubmit={handleSubmit}>
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="addCommentModalLabel">
                {t("modalTitle")}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <h5 className="fs-6">{t("modalSubtitle")}</h5>
              <Rating
                id="rating"
                style={{ maxWidth: 200 }}
                className="d-flex mx-auto my-3"
                value={rating}
                onChange={setRating}
              />
              <textarea
                id="comment"
                name="comment"
                className="form-control"
                rows="5"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </div>
            <div className="modal-footer">
              <Button
                type="submit"
                className="btn btn-primary my-0"
                data-bs-dismiss="modal"
              >
                {t("modalSubmit")}
              </Button>
            </div>
          </form>
        </ModalContent>
      </div>
    </div>
  );
};

export default Modal;
