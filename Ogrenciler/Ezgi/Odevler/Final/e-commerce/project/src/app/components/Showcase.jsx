import React from 'react';
import { ShowcaseArea, ShowcaseImg, ShowcaseTitle, ShowcaseInfo, ShowcaseButton } from "../components/styles/styled";

const Showcase = () => {
    return (
        <ShowcaseArea className="d-flex align-items-center justify-content-center">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 order-2 order-md-1 d-flex flex-column justify-content-center text-center text-md-start">
                        <ShowcaseInfo>
                            <ShowcaseTitle className="fw-bold">FIND CLOTHES THAT MATCHES YOUR STYLE</ShowcaseTitle>
                            <p className="text-body-secondary py-3">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                            <ShowcaseButton className="ps-4 pe-4 py-2 bg-black text-white border border-0 rounded-5">Shop Now</ShowcaseButton>
                            <div className="d-flex flex-column flex-md-row gap-5 mt-5 justify-content-center justify-content-md-start">
                                <div>
                                    <h2 className="fw-bold">200+</h2>
                                    <p className="text-body-secondary">International Brands</p>
                                </div>
                                <div>
                                    <h2 className="fw-bold">2,000+</h2>
                                    <p className="text-body-secondary">High-Quality Products</p>
                                </div>
                                <div>
                                    <h2 className="fw-bold">30,000+</h2>
                                    <p className="text-body-secondary">Happy Customers</p>
                                </div>
                            </div>
                        </ShowcaseInfo>
                    </div>
                    <div className="col-12 col-md-6 order-1 order-md-2 d-flex justify-content-center">
                        <ShowcaseImg className="img-fluid" src="../assets/images/brand-couple.jpeg" alt="showcase" />
                    </div>
                </div>
            </div>
        </ShowcaseArea>
    );
}

export default Showcase;
