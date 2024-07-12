import Brands from "@/components/Brands";
import BrowseByDressStyle from "@/components/BrowseByDressStyle";
import Hero from "@/components/Hero";
import NewArrivals from "@/components/NewArrivals";
import NewsLetter from "@/components/Newsletter";
import OurHappyCustomers from "@/components/OurHappyCustomers";
import TopSelling from "@/components/TopSelling";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Brands/>
      <NewArrivals/>
      <TopSelling/>
      <BrowseByDressStyle/>
      <OurHappyCustomers/>
      <NewsLetter/>
    </div>
  );
}
