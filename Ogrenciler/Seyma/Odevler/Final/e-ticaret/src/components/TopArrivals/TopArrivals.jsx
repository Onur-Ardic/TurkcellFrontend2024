import i18next from "../../i18n";
import "./topArrivals.sass"

const page = () => {
    return (
        <div className="container-xxl">
            <h1 className="text-center">{i18next.t('newArrivals')}</h1>
            <div className="row row-cols-xl-4 row-cols-lg-3 g-4">
            <div className="col">
                    <div className="mb-6">
                        <div className="card card-product mb-4">
                            <div className="imgContainer overflow-hidden align-middle">
                                <a href="#"><img src="blacktshirt.png" alt="" className="w-100"/></a>
                            </div>
                        </div>
                        <div>
                            <span className="badge bg-danger rounded-pill">-45%</span>
                            <h2 className="mt-3 fs-6"><a href="#" className="text-inherit">Instant Food</a></h2>
                            <div>
                                <span className="text-dark fs-5 fw-bold">$18</span>
                                <span className="text-decoration-line-through text-muted">$24</span>
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
                        <div className="card card-product mb-4">
                            <div className="card-body text-center py-8">
                                <a href="#"><img src="" alt="Grocery Ecommerce Template" className="mb-3" /></a>
                            </div>
                        </div>
                        <div>
                            <span className="badge bg-danger rounded-pill">-45%</span>
                            <h2 className="mt-3 fs-6"><a href="#" className="text-inherit">Instant Food</a></h2>
                            <div>
                                <span className="text-dark fs-5 fw-bold">$18</span>
                                <span className="text-decoration-line-through text-muted">$24</span>
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
                        <div className="card card-product mb-4">
                            <div className="card-body text-center py-8">
                                <a href="#"><img src="" alt="Grocery Ecommerce Template" className="mb-3"/></a>
                            </div>
                        </div>
                        <div>
                            <span className="badge bg-danger rounded-pill">-45%</span>
                            <h2 className="mt-3 fs-6"><a href="#" className="text-inherit">Instant Food</a></h2>
                            <div>
                                <span className="text-dark fs-5 fw-bold">$18</span>
                                <span className="text-decoration-line-through text-muted">$24</span>
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
                        <div className="card card-product mb-4">
                            <div className="card-body text-center py-8">
                                <a href="#"><img src="" alt="Grocery Ecommerce Template" className="mb-3"/></a>
                            </div>
                        </div>
                        <div>
                            <span className="badge bg-danger rounded-pill">-45%</span>
                            <h2 className="mt-3 fs-6"><a href="#" className="text-inherit">Instant Food</a></h2>
                            <div>
                                <span className="text-dark fs-5 fw-bold">$18</span>
                                <span className="text-decoration-line-through text-muted">$24</span>
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
        </div>


    )
}

export default page