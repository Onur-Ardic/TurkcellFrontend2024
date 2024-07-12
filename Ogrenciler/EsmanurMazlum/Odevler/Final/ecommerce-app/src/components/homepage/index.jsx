import React from "react";
import NewArrivals from "./newArrivals";
import TopSelling from "./topSelling";
import DressStyle from "./dressStyle";
import HappyCustomers from "./happyCustomers";

function HomePage() {
  return (
    <>
    <div className="header-container">
      <div className="container d-flex">
        <div className="col-6 mt-5">
          <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
          <p className="transparent-6">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
          <button className="shop-now-btn">Shop Now</button>
          <div>
            <div className="row mt-5">
                <div className="col-4">
                    <p className="fw-bold fs-3 m-0">200+</p>
                    <p className="transparent-6 m-0">International Brands</p>
                </div>
                <div className="col-4">
                    <p className="fw-bold fs-3 m-0">2,000+</p>
                    <p className="transparent-6 m-0">High-Quality Products</p>
                </div>
                <div className="col-4">
                    <p className="fw-bold fs-3 m-0">30,000+</p>
                    <p className="transparent-6 m-0">Happy Customers</p>
                </div>
            </div>
          </div>
        </div>
        <div className="col-6">
          <img src="assets/homepage-manken.jpeg" className="img-fluid" />
        </div>
      </div>
    </div>
    <div className="bg-black">
        <div className="container d-flex justify-content-between align-items-center py-5">
            <img src="icons/versace.svg"/>
            <img src="icons/zara.svg"/>
            <img src="icons/gucci.svg"/>
            <img src="icons/prada.svg"/>
            <img src="icons/calvin.svg"/>
        </div>
    </div>
    <NewArrivals/>
    <div className=' container my-5'>
        <img src='icons/line.svg' alt='Line'/>
    </div>
    <TopSelling />
    <DressStyle />
    <HappyCustomers />
    </>
  );
}

export default HomePage;
