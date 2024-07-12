"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { useRouter } from "@/navigation";
import { useSearchParams } from "next/navigation";

const Sort = () => {
    const t = useTranslations();
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
            case "az":
                params.set("_sort", "title");
                params.set("_order", "asc");
                break;
            case "za":
                params.set("_sort", "title");
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
        <>
            <div className="d-flex justify-content-end align-items-center">
                {t('sortby')}
                <select
                    value={sortOption}
                    onChange={handleSortChange}
                    className="form-select d-inline-block w-auto bg-transparent border-0"
                >
                    <option value="mostPopular">{t("sortMostPopular")}</option>
                    <option value="priceLowToHigh">{t("sortPriceLowToHigh")}</option>
                    <option value="priceHighToLow">{t("sortPriceHighToLow")}</option>
                    <option value="az">{t("sortAz")}</option>
                    <option value="za">{t("sortZa")}</option>
                </select>
            </div>
        </>
    );
};

export default Sort;