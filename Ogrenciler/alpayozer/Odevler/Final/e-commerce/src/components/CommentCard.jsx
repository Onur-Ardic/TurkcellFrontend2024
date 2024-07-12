import React from "react";
import "./components.css";

const CommentCard = () => {
  return (
    <div className="comment_container">
      <div className="comment_content">
        <div className="comment_rate">
          <i class="bi bi-star-fill star"></i>
          <i class="bi bi-star-fill star"></i>
          <i class="bi bi-star-fill star"></i>
          <i class="bi bi-star-fill star"></i>
          <i class="bi bi-star-fill star"></i>
        </div>
        <div className="comment_name">
          Sarah M. <i class="bi bi-check-circle-fill check"></i>
        </div>
        <div className="comment_description">
          "I'm blown away by the quality and style of the clothes I received
          from Shop.co. From casual wear to elegant dresses, every piece I've
          bought has exceeded my expectations.”
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
