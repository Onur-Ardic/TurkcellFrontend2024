import Image from "next/image";
import React from "react";
import "./commentcard.scss";

const CommentCard = ({ comment, className }) => {
  const { id, point, name, opinion, time } = comment;
  return (
    <div className={`comment-card ${className}`}>
      <p>Point: {point}/5</p>
      <div className="d-flex gap-1">
        <p className="name fw-bold">{name}</p>
        <Image src="/tick.png" width="24" height="24" />
      </div>
      <p className="opinion-time">{opinion}</p>
      <p className="opinion-time fw-medium">{time}</p>
    </div>
  );
};

export default CommentCard;
