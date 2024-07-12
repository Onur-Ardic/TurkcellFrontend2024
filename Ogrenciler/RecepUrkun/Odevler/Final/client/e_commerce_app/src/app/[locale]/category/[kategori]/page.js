import { getTranslations } from "next-intl/server";
import { getProductsForCategory } from "@/services/api";
import Breadcrumb from "@/components/Breadcrumb";
import RangeSliderWithLabel from "@/components/RangeSliderWithLabel";

import { DetailsDivider } from "@/styles/GlobalStyled";

import FilterWrapper from "./FilterWrapper";
import FilterAndSortProducts from "./FilterAndSortProducts";
import SortProducts from "./SortProducts";
import FilterModalReal from "@/components/FilterModalReal";

const CategoryAndFilter = async ({ params, searchParams }) => {
    const activeCategory = params.kategori;
    const products = await getProductsForCategory(activeCategory);
    const t = await getTranslations("CategoryAndFilter");

    const filters = {
        categories: searchParams.categories ? searchParams.categories.split(",") : [],
        colors: searchParams.colors ? searchParams.colors.split(",") : [],
        sizes: searchParams.sizes ? searchParams.sizes.split(",").map(size => size.toLowerCase()) : [],
        dressStyles: searchParams.dressStyles ? searchParams.dressStyles.split(",") : [],
    };

    const sortOption = searchParams.sortOption || "Most Popular";

    return (
        <div className="container">
            <DetailsDivider />
            <Breadcrumb activeCategory={activeCategory} />
            <div className="d-flex flex-column flex-lg-row">
                <div className="d-lg-flex col-lg-2 flex-wrap align-content-between me-md-3_5">
                    <div className="d-flex flex-column">
                        <div className="border px-2 py-3 my-2">
                            <div className="d-flex justify-content-between align-items-center">
                                <h5 className="fw-bold">{t("Filters")}</h5>
                                {/* <FilterModalReal /> */}
                            </div>
                            <div className="d-none d-lg-block">
                                <div className="d-flex list-group list-group-flush">
                                    <DetailsDivider />
                                    <FilterWrapper
                                        filters={filters}
                                        RangeSliderWithLabel={RangeSliderWithLabel}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-10">
                    <SortProducts
                        products={products}
                        defaultSort={sortOption}
                        activeCategory={activeCategory}
                    />
                    <DetailsDivider />
                    <FilterAndSortProducts
                        products={products}
                        filters={filters}
                        sortOption={sortOption}
                    />
                    <DetailsDivider />
                </div>
            </div>
        </div>
    );
};

export default CategoryAndFilter;