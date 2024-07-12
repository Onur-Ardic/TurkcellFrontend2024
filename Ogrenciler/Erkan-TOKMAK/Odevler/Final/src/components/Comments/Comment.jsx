import { StyledIcon } from "@/styles/CommentStyle";
import { Rating } from "@smastrom/react-rating";
import Image from "next/image";


const Comment = ({customer}) => {
  return (
    <div className="rounded-4 border p-6 mb-4 p-4">
      <Rating
        style={{ maxWidth: 100 }}
        value={customer.rating}
        className="py-1"
        readOnly
      />
      <h5 className="fw-bold my-2 d-flex gap-2">
        {customer.username}
        <StyledIcon>
          <Image
            src="/assets/icons/icon-check.png"
            alt="verified"
            className="object-fit-contain"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </StyledIcon>
      </h5>
      <p className=" mt-2  opacity-50 fw-lighter">
        {customer.comment}
      </p> 
    </div>
  );
};

export default Comment;