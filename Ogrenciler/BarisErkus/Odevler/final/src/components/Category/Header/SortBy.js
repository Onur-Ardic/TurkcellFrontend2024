"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { useRouter } from "@/navigation";
import { Option, Select } from "./styles";

const SortBy = () => {
  const t = useTranslations("Category");
  const [sortOption, setSortOption] = useState("mostPopular");
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
    const params = new URLSearchParams(searchParams);

    switch (event.target.value) {
      case "priceLowToHigh":
        params.set("_sort", "price");
        params.set("_order", "asc");
        break;
      case "priceHighToLow":
        params.set("_sort", "price");
        params.set("_order", "desc");
        break;
      case "alphabetical":
        params.set("_sort", "title");
        params.set("_order", "asc");
        break;
      case "reverseAlphabetical":
        params.set("_sort", "title");
        params.set("_order", "desc");
        break;
      case "discount":
        params.set("_sort", "discount");
        params.set("_order", "desc");
        break;
      default:
        params.delete("_sort");
        params.delete("_order");
        break;
    }

    router.push(`?${params.toString()}`, undefined, { scroll: false });
  };

  return (
    <Select
      value={sortOption}
      onChange={handleSortChange}
      className="form-select d-inline-block w-auto bg-transparent border-0"
    >
      <Option value="mostPopular">{t("mostPopular")}</Option>
      <Option value="priceLowToHigh">{t("priceLowToHigh")}</Option>
      <Option value="priceHighToLow">{t("priceHighToLow")}</Option>
      <Option value="alphabetical">{t("alphabetical")}</Option>
      <Option value="reverseAlphabetical">{t("reverseAlphabetical")}</Option>
      <Option value="discount">{t("discount")}</Option>
    </Select>
  );
};

export default SortBy;
