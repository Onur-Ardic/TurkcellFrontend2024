import { useTranslations } from "next-intl";
import { TitleItem } from "../styles";

const HeaderTitleList = () => {
  const t = useTranslations("ProductDetail");
  return (
    <ul
      className="nav nav-tabs d-flex align-items-center justify-content-around border-bottom"
      id="contentTabs"
      role="tablist"
    >
      <li className="nav-item" role="presentation">
        <TitleItem
          className="nav-link text-secondary"
          id="productDetails-tab"
          data-bs-toggle="tab"
          data-bs-target="#productDetails"
          type="button"
          role="tab"
          aria-controls="productDetails"
          aria-selected="false"
          tabIndex={-1}
        >
          {t("productDetails")}
        </TitleItem>
      </li>
      <li className="nav-item" role="presentation">
        <TitleItem
          className="nav-link text-secondary active"
          id="ratingReviews-tab"
          data-bs-toggle="tab"
          data-bs-target="#ratingReviews"
          type="button"
          role="tab"
          aria-controls="ratingReviews"
          aria-selected="true"
          tabIndex={-1}
        >
          {t("ratingReviews")}
        </TitleItem>
      </li>
      <li className="nav-item" role="presentation">
        <TitleItem
          className="nav-link text-secondary"
          id="faqs-tab"
          data-bs-toggle="tab"
          data-bs-target="#faqs"
          type="button"
          role="tab"
          aria-controls="faqs"
          aria-selected="false"
          tabIndex={-1}
        >
          {t("faqs")}
        </TitleItem>
      </li>
    </ul>
  );
};

export default HeaderTitleList;
