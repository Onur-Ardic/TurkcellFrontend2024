import { useTranslations } from "next-intl";
import MobileModal from "../MobileModal";
import SortBy from "./SortBy";

const Header = ({ length }) => {
  const t = useTranslations("Category");

  return (
    <div className="d-flex flex-wrap">
      <span className="fs-4 fw-bold">{t("casual")}</span>
      <div className="ms-auto d-flex align-items-center justify-content-center flex-wrap gap-2">
        <span className="opacity-50 d-md-block d-none">
          {length} {t("showingProduct")} {t("showing")}
        </span>
        <div className="d-md-flex align-items-center justify-content-center gap-2 d-none">
          <span className="opacity-50"></span> {t("sortby")}: <SortBy />
        </div>
        <MobileModal />
      </div>
    </div>
  );
};

export default Header;
