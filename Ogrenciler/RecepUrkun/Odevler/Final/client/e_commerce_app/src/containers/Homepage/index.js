import Hero from "@/components/Hero/Hero";
import Brand from "@/components/Brand/Brand";
import HomepageProducts from "@/containers/Products/HomepageProduct";
import DressStyle from "@/components/DressStyle/DressStyle";
import HappyCustomers from "@/components/HappyCustomers/HappyCustomers";

const HomepageContainer = () => {
    return (
        <div>
            <Hero />
            <Brand />
            <HomepageProducts />
            <DressStyle />
            <HappyCustomers />
        </div>
    )
}

export default HomepageContainer