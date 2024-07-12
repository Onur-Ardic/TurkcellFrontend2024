import ProductList from "@/containers/Products/ProductList";
import { getProducts } from "@/services/api";
import { getTranslations } from "next-intl/server";

const AlsoLike = async () => {
  const products = await getProducts();
  const split_product = products.slice(0, 4);
  const t = await getTranslations("AlsoLike");
  return (
    <div>
      <ProductList products={split_product} title={t("Title")} />
    </div>
  );
};

export default AlsoLike;
