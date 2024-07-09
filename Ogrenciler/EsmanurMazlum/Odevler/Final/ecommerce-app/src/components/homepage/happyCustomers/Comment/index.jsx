import { Rating } from "@smastrom/react-rating";
import Image from "next/image";
import verified from '../../../../../public/icons/verified.svg'


const Comment = ({ review }) => {
  return (
    <div className="rounded-4 border p-6 mb-4 col-4 p-4">
      <Rating
        style={{ maxWidth: 100 }}
        value={review.rating}
        className="py-1"
        readOnly
      />
      <p className="fw-bold my-2 d-flex gap-2">
        {review.username}
        <div>
          <Image
            src={verified}
            alt="verified"
            className="object-fit-contain"
          />
        </div>
      </p>
      <p className=" mt-2  opacity-50 fw-lighter">{review.comment}</p>
    </div>
  );
};

export default Comment;
