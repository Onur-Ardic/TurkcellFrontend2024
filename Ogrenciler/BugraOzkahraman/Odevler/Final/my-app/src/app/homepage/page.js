import { Content } from "./styled.js";
import NewProducts from "../../components/NewProducts/index.js";
import productsData from "../../datas/db.json";
import DressStyle from "../../components/DressStyle/index.js";
import OurHappyCustomer from "../../components/CustomerComments/customerComments.js";
import BrandIcons from "../../components/BrandIcon/index.js";
import Link from "next/link.js";

const HomePage = () => {
  const products = productsData.products;

  return (
    <>
      <Content className="content d-flex flex-column flex-lg-row justify-content-center">
        <div className="left-content col-lg-6">
          <h1 className="fw-bold">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
          <p className="fs-6">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <Link href={"/categorypage/casual"}>
            <button className="btn bg-black text-white">Shop Now</button>
          </Link>
          <div className="d-flex col gap-5 mt-5">
            <div>
              <h1>200+</h1>
              <p>International Brands</p>
            </div>

            <div>
              <h1>2,000+</h1>
              <p>High-Quality Products</p>
            </div>
            <div>
              <h1>30,000+</h1>
              <p>Happy Customers</p>
            </div>
          </div>
        </div>
        <div className="right-content col-lg-6 mt-5 mt-lg-0">
          <img
            className="img-fluid"
            src="https://s3-alpha-sig.figma.com/img/b26f/ea69/ccfd8aa5825862cdb9604a4fb4930464?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G-9RyLEkxR7GSHXAiS0Ye3bRfLVbJ1vhvBXDqLm81BcKzafHbiTxrXbM3ghEIqGbg-~YxvwnnIl3qiRRIWgapKU1~1hknT9XS1GoM1Ov2c2ztocB5S6Ay4rBz5xz93T80Jtkpgk5TP28vXOhQKVFDZVlX-GC2E2GbknRB3mIWTb2FUrsbjHxwfsw47l5~~bvCssRVI56POnbGj3RFkgnyejkjrDxO-GtpenOO67wrAX1hI5znzmCDiNTPi1vWJhQ08XXLHga7RQVl1GDVG9u1I2LpMQcPG3dxAdzooUtN1I9tFmNhg7Ewd0W8EWvhXfkVBS20virgXVUkcL5Qaz~gQ__"
          />
        </div>
      </Content>
      <div>
        {" "}
        <BrandIcons />
      </div>

      <div className="newArrivals">
        <h1 className="d-flex justify-content-center py-5  fw-bold">
          NEW ARRIVALS
        </h1>

        <NewProducts products={products} />
      </div>
      <hr />
      <div className="newArrivals">
        <h1 className="d-flex justify-content-center py-5  fw-bold">
          TOP SELLING
        </h1>

        <NewProducts products={products} />
      </div>
      <div>
        <DressStyle />
      </div>
      <div>
        <OurHappyCustomer />
      </div>
    </>
  );
};

export default HomePage;
