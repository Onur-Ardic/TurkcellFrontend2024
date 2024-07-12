import React from "react";
import { FaFilter } from "react-icons/fa";
import { useTranslations } from "next-intl";

const Sort = ({ filters, setFilters, openModal }) => {
  const t = useTranslations("category");

  return (
    <div className="sort">
      <span>{t("sortBy")}</span>
      <select
        value={filters.sort}
        onChange={(e) => setFilters({ ...filters, sort: e.target.value })}
      >
        <option value="most_popular">{t("mostPopular")}</option>
        <option value="price_asc">{t("lowtoHigh")}</option>
        <option value="price_desc">{t("hightoLow")}</option>
      </select>
      <FaFilter className="filterIcon" onClick={openModal} />
    </div>
  );
};

export default Sort;
