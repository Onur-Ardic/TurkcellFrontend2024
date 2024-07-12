import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Pagination = ({ currentPage, setCurrentPage, pageNumbers }) => {
  return (
    <nav>
      <ul className="pagination  justify-content-between">
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <button
            className="page-link"
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            <FaArrowLeft /> Previous
          </button>
        </li>
        <div className="page-numbers d-flex  ">
          {pageNumbers.map((number) => (
            <li
              key={number}
              className={`page-item border-0 ${
                number === currentPage ? "active border-o" : ""
              }`}
            >
              <button
                onClick={() => setCurrentPage(number)}
                className="page-link border-0 text-dark"
              >
                {number}
              </button>
            </li>
          ))}
        </div>
        <li
          className={`page-item ${
            currentPage === pageNumbers.length ? "disabled" : ""
          }`}
        >
          <button
            className="page-link"
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next <FaArrowRight />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
