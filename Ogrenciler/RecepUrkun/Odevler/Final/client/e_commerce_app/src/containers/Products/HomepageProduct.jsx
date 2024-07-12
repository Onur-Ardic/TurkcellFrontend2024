import NewArrivals from "@/components/TopAndArrivalsProduct/NewArrivals";
import TopSelling from "@/components/TopAndArrivalsProduct/TopSelling";
import { getProducts } from "@/services/api";

const HomepageProducts = async () => {
  const products = await getProducts();
  const newArrivalsProducts = products.slice(0, 8);
  const topSellingProducts = products.slice(4, 12);

  return (
    <div>
      <NewArrivals products={newArrivalsProducts} />
      <TopSelling products={topSellingProducts} />
    </div>
  );
};

export default HomepageProducts;
