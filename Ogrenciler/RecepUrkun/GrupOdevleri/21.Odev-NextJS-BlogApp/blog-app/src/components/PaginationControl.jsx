"use client";

import React from "react";
import { useRouter } from "next/navigation";

const PaginationControl = ({ hasNextPage, hasPrevPage, page, per_page }) => {
  const router = useRouter();

  return (
    <div className="d-flex gap-4 my-4 align-items-center justify-content-center">
      <button
        className="btn btn-dark btn-sm"
        disabled={!hasPrevPage} //eger false ise onceki sayfa butonunu devre disi birak
        onClick={() => {
          router.push(`/?page=${Number(page) - 1}&per_page=${per_page}`); //urlye pushluyoruz
        }}
      >
        Previous Page
      </button>
      <div className="text-nowrap">
        {page} / {Math.ceil(100 / Number(per_page))}
      </div>
      <button
        className="btn btn-dark btn-sm"
        disabled={!hasNextPage} //false ise tiklanabilirligini devre disi birak
        onClick={() => {
          router.push(`/?page=${Number(page) + 1}&per_page=${per_page}`); // gelen parametreleri urlye yazarak sonraki sayfaya gitme
        }}
      >
        Next Page
      </button>
    </div>
  );
};

export default PaginationControl;
