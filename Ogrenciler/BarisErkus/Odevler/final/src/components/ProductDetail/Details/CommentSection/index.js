import Button from "@/components/Button";
import { RiIndentIncrease } from "react-icons/ri";
import Comments from "./Comments";
import { useTranslations } from "next-intl";
import Modal from "./Modal";
import SortBy from "./SortBy";
import { FilterButton } from "./styles";

const CommentsSection = ({ comments, productId }) => {
  const t = useTranslations("ProductDetail");
  return (
    <>
      <div className="d-flex flex-wrap">
        <div>
          <span className="fs-4 fw-bold">{t("allReviews")}</span> (451)
        </div>
        <div className="ms-auto d-flex flex-wrap gap-3">
          <FilterButton className="btn btn-light px-3 py-1 fs-4 d-flex align-items-center justify-content-center rounded-pill">
            <RiIndentIncrease />
          </FilterButton>
          <SortBy />
          <Button
            theme="dark"
            className="m-0 bg-black text-white"
            data-bs-toggle="modal"
            data-bs-target="#addCommentModal"
          >
            {t("writeReview")}
          </Button>
        </div>
      </div>
      <Modal productId={productId} />
      <Comments comments={comments} />
    </>
  );
};

export default CommentsSection;
