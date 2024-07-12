import { useTranslations } from "next-intl";
import Header from "@/components/Header";
import SectionOne from "../components/Section1";
import SectionTwo from "../components/Section2";
import SectionThree from "../components/Section3";
import SectionFour from "../components/Section4";
import SectionFive from "../components/Section5";
import ProductCard from "../components/ProductCard";
import ProductArea from "@/components/ProductArea";
import Footer from "../components/Footer";
import ProductDetail from "@/components/ProductDetail";
import TopBanner from "../components/TopBanner";
import "../app/style.css";
import Filter from "../components/Filter";
import ShopBasket from "@/components/ShopBasket";

const getData = async () => {
  try {
    const productResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/products?_limit=4`
    );

    const productRes = await productResponse.json();

    const commentsResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/comments?_limit=3`
    );

    const commentRes = await commentsResponse.json();

    return { products: productRes, comments: commentRes };
  } catch (err) {
    return { products: [], comments: [] };
  }
};

export default async function Index() {
  const { products, comments } = await getData();
  return (
    <div>
      <TopBanner />
      <div className="container">
        <Header />
      </div>
      <div>
        <SectionOne></SectionOne>
      </div>
      <div className="w-100 bg-black py-3">
        <SectionTwo></SectionTwo>
      </div>
      <ProductArea products={products} />
      <SectionThree />
      <SectionFour comments={comments}></SectionFour>
      <SectionFive></SectionFive>
      <div className="footer-bg">
        <div className="container">
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
}
