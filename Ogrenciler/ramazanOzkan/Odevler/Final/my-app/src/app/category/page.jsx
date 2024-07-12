import Filter from "@/components/Filter";
import Header from "@/components/Header";
import TopBanner1 from "@/components/TopBanner";
import "../style.css";
import ProductCard from "@/components/ProductCard";
import CategoryProvider from "./context";
import ProductList from "./product-list";

const getProducts = async () => {
  try {
    const productResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/products`
    );

    const productRes = await productResponse.json();

    return productRes;
  } catch (err) {
    return { products: [], comments: [] };
  }
};

export default async function CategoryPage() {
  const products = await getProducts();
  return (
    <CategoryProvider products={products}>
      <div>
        {/* <h1>{t("title")}</h1> */}
        <TopBanner1 />
        <div className="container">
          <Header />
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2">
              <Filter />
            </div>
            <div className="col-12 col-md-10">
              <ProductList />
            </div>
          </div>
        </div>
      </div>
    </CategoryProvider>
  );
}
