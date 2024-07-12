import Banner from "./components/Banner"
import Brands from "./components/Brands"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import NewArrivals from "./components/NewArrivals"
import TopSelling from "./components/TopSelling"
import DressStyles from "./components/dressStyles"
import HappyCustomers from "./components/HappyCustomers"
import BlackBox from "./components/BlackBox"
import Footer from "./components/Footer"

const Home = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Banner />
      <Brands />
      <NewArrivals />
      <TopSelling />
      <DressStyles />
      <HappyCustomers />
      <BlackBox />
      <Footer />
    </>
  )
}

export default Home