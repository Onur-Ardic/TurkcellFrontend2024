import Link from "next/link"
import Image from "next/image"
import bannerImage from "../assets/banner/banner-image.jpg"
const Banner = () => {
    return (
        <div className="banner-container">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                        <p className="banner-paragraph">Browse through our diverse range of meticulously crafted garments,
                            designed to bring out your individuality and cater to your sense of style.
                        </p>
                        <Link href="/categories">
                            <button className="btn btn-dark text-white">Shop Now</button>
                        </Link>
                        <div className="numbers d-flex flex-wrap justify-content-center justify-content-md-start">
                            <div>
                                <h3>200+</h3>
                                <p className="numbers-paragraph">International Brands</p>
                            </div>
                            <div>
                                <svg width="1" height="74" viewBox="0 0 1 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="0.5" y1="-2.18557e-08" x2="0.500003" y2="74" stroke="black" strokeOpacity="0.1" />
                                </svg>
                            </div>
                            <div>
                                <h3>2,000+</h3>
                                <p className="numbers-paragraph">High-Quality Products</p>
                            </div>
                            <div className="d-none d-md-block">
                                <svg width="1" height="74" viewBox="0 0 1 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="0.5" y1="-2.18557e-08" x2="0.500003" y2="74" stroke="black" strokeOpacity="0.1" />
                                </svg>
                            </div>
                            <div>
                                <h3>30,000+</h3>
                                <p className="numbers-paragraph">Happy Customers</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <Image src={bannerImage} className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner