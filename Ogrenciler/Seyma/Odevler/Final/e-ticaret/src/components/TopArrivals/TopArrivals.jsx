import i18next from "../../i18n";
import ViewBtn from "../ViewBtn/ViewBtn";
import "./topArrivals.sass"

const page = () => {
    return (
        <div className="container-xxl">
            <h1 className="text-center title py-5">{i18next.t('newArrivals')}</h1>
            <div className="row row-cols-xl-4 row-cols-lg-3 g-4">
            <div className="col">
                    <div className="mb-6">
                            <div className="imgContainer">
                                <a href="#"><img src="blacktshirt.png" alt="" className="w-100"/></a>
                        </div>
                        <div>
                           
                            <h2 className="mt-3 fs-6"><a href="#" className="productTitle">Instant Food</a></h2>
                            <div className="d-flex align-items-center">
                                <span className="price">$18</span>
                                <span className="discountPrice">$24</span> 
                                <span className="badge rounded-pill">-45%</span>
                            </div>
                            <div className="text-warning">
                                <small>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-half"></i>
                                </small>
                                <span className="text-muted small">4.5</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="mb-6">
                            <div className="imgContainer">
                                <a href="#"><img src="blacktshirt.png" alt="" className="w-100"/></a>
                        </div>
                        <div>
                           
                            <h2 className="mt-3 fs-6"><a href="#" className="productTitle">Instant Food</a></h2>
                            <div className="d-flex align-items-center">
                                <span className="price">$18</span>
                                <span className="discountPrice">$24</span> 
                                <span className="badge rounded-pill">-45%</span>
                            </div>
                            <div className="text-warning">
                                <small>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-half"></i>
                                </small>
                                <span className="text-muted small">4.5</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="mb-6">
                            <div className="imgContainer">
                                <a href="#"><img src="blacktshirt.png" alt="" className="w-100"/></a>
                        </div>
                        <div>
                           
                            <h2 className="mt-3 fs-6"><a href="#" className="productTitle">Instant Food</a></h2>
                            <div className="d-flex align-items-center">
                                <span className="price">$18</span>
                                <span className="discountPrice">$24</span> 
                                <span className="badge rounded-pill">-45%</span>
                            </div>
                            <div className="text-warning">
                                <small>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-half"></i>
                                </small>
                                <span className="text-muted small">4.5</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="mb-6">
                            <div className="imgContainer">
                                <a href="#"><img src="blacktshirt.png" alt="" className="w-100"/></a>
                        </div>
                        <div>
                           
                            <h2 className="mt-3 fs-6"><a href="#" className="productTitle">Instant Food</a></h2>
                            <div className="d-flex align-items-center">
                                <span className="price">$18</span>
                                <span className="discountPrice">$24</span> 
                                <span className="badge rounded-pill">-45%</span>
                            </div>
                            <div className="text-warning">
                                <small>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-half"></i>
                                </small>
                                <span className="text-muted small">4.5</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center">
            <ViewBtn></ViewBtn>
            </div>
           
        </div>


    )
}

export default page