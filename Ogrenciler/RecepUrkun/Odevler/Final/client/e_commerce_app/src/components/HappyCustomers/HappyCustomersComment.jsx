import { CustomerComment, CustomerCommentName } from "./Styled";
import { Rating } from "../Rating/Rating";
import { MdVerifiedUser } from "react-icons/md";

const HappyCustomersComment = ({ yorum }) => {
  const { id, name, comment, rating } = yorum;

  return (
    <div className="border rounded-4  me-3_5" key={id}>
      <div className="px-4 py-4">
        <Rating value={rating} />
        <div className="d-flex align-items-center mt-3">
          <CustomerCommentName>{name}</CustomerCommentName>
          <MdVerifiedUser
            className="ms-1"
            style={{ color: "#01AB31", height: 24, width: 24 }}
          />
        </div>
        <CustomerComment className="mt-3">{comment}</CustomerComment>
      </div>
    </div>
  );
};

export default HappyCustomersComment;
