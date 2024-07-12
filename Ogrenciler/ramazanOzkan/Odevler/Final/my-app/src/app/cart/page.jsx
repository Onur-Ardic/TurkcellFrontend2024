import Header from "../../components/Header";
import TopBanner from "@/components/TopBanner";
import Section4 from "@/components/Section4";
import ProductArea from "@/components/ProductArea";
import Footer from "@/components/Footer";
import ProductDetail from "@/components/ProductDetail";
import SectionFive from "@/components/Section5";
import ShopBasket from "@/components/ShopBasket";
import "../style.css";

const getBasket = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/carts`, {
    cache: "no-store",
  });

  const basket = await response.json();

  return basket;
};

export default async function CartPage() {
  const basketData = await getBasket();
  return (
    <div>
      <TopBanner />
      <div className="container">
        <Header></Header>
      </div>
      <div className="container">
        <ShopBasket basket={basketData}></ShopBasket>
      </div>

      <SectionFive></SectionFive>
      <div className="footer-bg">
        <div className="container">
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
}
