import Header from "@/app/components/Header"
import Navbar from "@/app/components/Navbar"
import ProductDetails from "@/app/components/ProductDetails"
import Reviews from "@/app/components/Reviews"
import YouMightLike from "@/app/components/YouMightLike"
import BlackBox from "@/app/components/BlackBox"
import Footer from "@/app/components/Footer"

const Details = ({ params }) => {
    return (
        <>
            <Header />
            <Navbar />
            <ProductDetails productType="newArrivals" id={params.id} />
            <Reviews />
            <YouMightLike />
            <BlackBox />
            <Footer />
        </>
    )
}

export default Details