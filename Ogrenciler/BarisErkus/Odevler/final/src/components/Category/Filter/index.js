"use client";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { useRouter, useSearchParams } from "next/navigation";
import {
  checkValidQuery,
  convertStringToQueriesObject,
  convertValidStringQueries,
} from "@/lib/filter";
import { FilterContainer } from "./styles";
import Button from "@/components/Button";
import Head from "./Head";
import Category from "./Category";
import Range from "./Range";
import Colors from "./Colors";
import Sizes from "./Sizes";
import DressStyle from "./DressStyle";

const FilterComponent = ({ modal, className }) => {
  const t = useTranslations("Category");
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedFilterQueries, setSelectedFilterQueries] = useState({});
  const [priceRange, setPriceRange] = useState([0, 1000]);

  useEffect(() => {
    const paramsObj = convertStringToQueriesObject(searchParams);
    setSelectedFilterQueries(paramsObj);
  }, [searchParams]);

  const handleSelectFilterOptions = (name, value) => {
    let selectedQueries = selectedFilterQueries;

    if (selectedQueries[name]) {
      if (selectedQueries[name].includes(value)) {
        selectedQueries[name] = selectedQueries[name].filter(
          (query) => query !== value
        );
        if (!checkValidQuery(selectedQueries[name])) {
          delete selectedQueries[name];
        }
      } else {
        selectedQueries[name].push(value);
      }
    } else if (selectedQueries) {
      selectedQueries[name] = [value];
    }

    router.push(`?${convertValidStringQueries(selectedQueries)}`, {
      scroll: false,
    });
  };

  const filterCategories = [
    { name: t("tshirts"), value: "t-shirts" },
    { name: t("shorts"), value: "shorts" },
    { name: t("shirts"), value: "shirts" },
    { name: t("hoodie"), value: "hoodie" },
    { name: t("jeans"), value: "jeans" },
  ];
  const sizes = [
    t("xxs"),
    t("xs"),
    t("s"),
    t("m"),
    t("l"),
    t("xl"),
    t("xxl"),
    t("3xl"),
    t("4xl"),
  ];
  const dressStyles = [
    { name: t("casual"), value: "casual" },
    { name: t("formal"), value: "formal" },
    { name: t("party"), value: "party" },
    { name: t("gym"), value: "gym" },
  ];

  const setCategory = (category) =>
    handleSelectFilterOptions("category_like", category.toLowerCase());
  const setPrice = (price) => setPriceRange(price);
  const setColor = (colorName) =>
    handleSelectFilterOptions("color_like", colorName.toLowerCase());
  const setSize = (size) =>
    handleSelectFilterOptions("sizes_like", size.toLowerCase());
  const setDressStyle = (dressStyle) =>
    handleSelectFilterOptions("dressStyle_like", dressStyle.toLowerCase());
  const clearFilters = () => {
    setSelectedFilterQueries({});
    setPriceRange([0, 1000]);
    router.push("category", { scroll: false });
  };

  const applyAllFilters = () => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set("price_gte", priceRange[0]);
    searchParams.set("price_lte", priceRange[1]);
    router.replace(`?${searchParams.toString()}`, { scroll: false });
  };

  return (
    <FilterContainer className={className}>
      <Head title={t("filters")} clearFilters={clearFilters} modal={modal} />
      <Category
        selectedFilterQueries={selectedFilterQueries}
        setCategory={setCategory}
        filterCategories={filterCategories}
      />
      <Range title={t("price")} priceRange={priceRange} setPrice={setPrice} />
      <Colors
        title={t("colors")}
        selectedFilterQueries={selectedFilterQueries}
        setColor={setColor}
      />
      <Sizes
        title={t("size")}
        sizes={sizes}
        setSize={setSize}
        selectedFilterQueries={selectedFilterQueries}
      />
      <DressStyle
        title={t("dressStyle")}
        dressStyles={dressStyles}
        setDressStyle={setDressStyle}
        selectedFilterQueries={selectedFilterQueries}
      />

      <Button
        theme="dark"
        className="w-100 my-2 bg-black text-white"
        onClick={applyAllFilters}
      >
        {t("applyFilter")}
      </Button>
    </FilterContainer>
  );
};

export default FilterComponent;
