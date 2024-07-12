import HeaderTitleList from "./HeaderTitleList";
import DetailsSection from "./DetailsSection";
import Faqs from "./Faqs";
import CommentsSection from "./CommentSection";

const Details = ({ comments, product }) => {
  return (
    <div className="container mt-5">
      <div className="row mt-5">
        <div className="col-12 m-0 p-0">
          <HeaderTitleList />
          <div className="tab-content mt-4" id="contentTabs">
            <div
              className="tab-pane fade "
              id="productDetails"
              role="tabpanel"
              aria-labelledby="productDetails-tab"
            >
              <DetailsSection product={product} />
            </div>
            <div
              className="tab-pane fade show active"
              id="ratingReviews"
              role="tabpanel"
              aria-labelledby="ratingReviews-tab"
            >
              <CommentsSection comments={comments} productId={product.id} />
            </div>
            <div
              className="tab-pane fade"
              id="faqs"
              role="tabpanel"
              aria-labelledby="faqs-tab"
            >
              <Faqs />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
