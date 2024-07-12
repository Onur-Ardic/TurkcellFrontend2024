import Navbar from "./components/Navbar/Navbar.jsx"
import Banner from "./components/Banner/Banner.jsx";
import NewArrivals from "./components/NewArrivals/NewArrivals.jsx";
import TrendingProducts from "./components/TrendingProducts/TrendingProducts.jsx";
import CustomerComments from "./components/CustomerComments/CustomerComments.jsx"
import BrowseByDressStyle from "./components/BrowseByDressStyle/BrowseByDressStyle.jsx";
import Footer from "./components/Footer/Footer.jsx"
export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <NewArrivals />
      <TrendingProducts/>
      <BrowseByDressStyle />
      <CustomerComments/>
      <Footer/>
    </>
  );
}
