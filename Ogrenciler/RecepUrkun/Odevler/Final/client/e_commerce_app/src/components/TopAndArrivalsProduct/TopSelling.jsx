import ProductList from "@/containers/Products/ProductList";
import { useTranslations } from "next-intl";

const TopSelling = ({ products }) => {
  const t = useTranslations("HomepageProduct");
  return (
    <>
      <ProductList title={t("TopSelling")} products={products} />;
    </>
  );
};
export default TopSelling;
