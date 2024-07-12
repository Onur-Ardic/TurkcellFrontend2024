import ProductList from "@/containers/Products/ProductList";
import { Divider } from "@/styles/GlobalStyled";
import { useTranslations } from "next-intl";

const NewArrivals = ({ products }) => {
  const t = useTranslations("HomepageProduct");
  return (
    <>
      <ProductList title={t("NewArrivals")} products={products} />
      <div className="container">
        <Divider />
      </div>
    </>
  );
};

export default NewArrivals;
