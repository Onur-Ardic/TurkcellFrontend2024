"use client";
import ReactStars from 'react-rating-stars-component';
import { FaRegCheckCircle } from "react-icons/fa";
import { CardComment } from "./styles/styled";

const CommentCard = ({ comment }) => {
    return (
        <CardComment className='col-md-4 border border-1 rounded-4 p-4 d-flex flex-column gap-2'>
            <ReactStars
                count={5}
                value={comment.rating}
                size={24}
                activeColor="#ffd700"
                isHalf={true}
                edit={false}
            />
            <div className='d-flex align-items-center gap-2'><p className='fw-bold m-0 fs-5'>{comment.username}</p> <FaRegCheckCircle color='green' size={20}/> </div>
            <p className='text-body-secondary'>{comment.comment}</p>
        </CardComment>
    );
};

export default CommentCard;
