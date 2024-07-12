"use client";
import { useTranslations } from "next-intl";
import { IoMdSearch } from "react-icons/io";
import Modal from "./Modal";

const SearchInput = () => {
  const t = useTranslations("Header");
  return (
    <div className="d-flex position-relative flex-grow-1">
      <span className="position-absolute top-50 start-0 translate-middle-y ms-3">
        <IoMdSearch size={24} color="gray" />
      </span>
      <input
        className="form-control me-2 rounded-pill ps-5 py-2 pe-2 border-0 bg-light"
        placeholder={t("inputPlaceholder")}
        type="search"
        aria-label="Search"
        data-bs-toggle="modal"
        data-bs-target="#searchModal"
        readOnly
      />
      <Modal />
    </div>
  );
};

export default SearchInput;
