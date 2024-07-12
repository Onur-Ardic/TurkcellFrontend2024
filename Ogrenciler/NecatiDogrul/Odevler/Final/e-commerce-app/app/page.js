import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import BrandsSection from "../components/BrandsSection";
import NewArrivals from "@/components/NewArrivals";
import TopSelling from "@/components/TopSelling";
import Line from "@/components/Line";
import BrowseDressByStyle from "@/components/BrowseDressByStyle";
import OurHappyCustomers from "@/components/OurHappyCustomers";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div>
      <Banner />
      <Navbar bannerVisible={true} />
      <HeroSection />
      <BrandsSection />
      <NewArrivals />
      <Line />
      <TopSelling />
      <BrowseDressByStyle />
      <OurHappyCustomers />
      <Footer />
    </div>
  );
}
