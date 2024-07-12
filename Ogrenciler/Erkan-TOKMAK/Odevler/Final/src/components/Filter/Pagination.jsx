"use client";
import { useRouter } from "@/navigation";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Pagination = ({ hasNextPage, hasPrevPage }) => {
  const t = useTranslations();
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = searchParams.get("_page") ?? "1";
  const limit = searchParams.get("_limit") ?? "9";

  const updatePage = (newPage) => {
    const params = new URLSearchParams(searchParams);
    params.set("_page", newPage);
    params.set("_limit", limit);

    router.push(`?${params.toString()}`, undefined, { scroll: false });
  };

  return (
    <nav
      aria-label="Page navigation example"
      className="d-flex justify-content-center"
    >
      <ul className="pagination mt-5">
        <li className="page-item">
          <button
            className={`page-link ${!hasPrevPage ? "disabled" : ""}`}
            onClick={() => {
              if (hasPrevPage) {
                updatePage(Number(page) - 1);
              }
            }}
          >
            <FaArrowLeft className="me-2" />
            {t("prevButton")}
          </button>
        </li>
        <li className="page-item">
          <button
            className={`page-link ${!hasNextPage ? "disabled" : ""}`}
            onClick={() => {
              if (hasNextPage) {
                updatePage(Number(page) + 1);
              }
            }}
          >
            {t("nextButton")}
            <FaArrowRight className="ms-2" />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;