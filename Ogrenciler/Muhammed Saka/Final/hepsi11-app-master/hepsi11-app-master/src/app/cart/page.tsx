export default function Cart() {
    return (
        <>
            <section className="container mb-5">
                <hr />

                <div className="breadcrumb">
                    <p className="fs-6">
                        <span><a href="/" className="text-decoration-none text-secondary"
                        >Home</a></span>
                        <span>&nbsp; <i className="bi bi-chevron-right"></i> &nbsp;</span>
                        <span>Cart</span>
                    </p>
                </div>

                <div className="cart">
                    <div className="cart-header">
                        <h1 className="fw-bold fs-1">Cart</h1>
                    </div>

                    <div className="row">
                        <div className="cart-main col-md-7 my-2">
                            <div
                                className="rounded-4 border border-1 py-3 px-4 position-relative overflow-x-hidden"
                            >
                                <div
                                    className="cart-item position-relative rounded-4 px-1 my-2 py-1"
                                >
                                    <div className="row align-items-center">
                                        <div className="col-3">
                                            <a href="product" target="_blank">
                                                <img
                                                    loading="lazy"
                                                    className="img-fluid w-100 rounded-3"
                                                    src={'/images/products/shirt-3.png'}
                                                    alt="cart-item"
                                                />
                                            </a>
                                        </div>
                                        <div className="col-9">
                                            <div className="d-flex w-100 align-items-center">
                                                <div className="flex-grow-1">
                                                    <h1 className="fs-4 fw-bold">
                                                        <a
                                                            href="product"
                                                            className="text-decoration-none text-black"
                                                            target="_blank"
                                                        >
                                                            Men shirt
                                                        </a>
                                                    </h1>
                                                </div>
                                                <div>
                                                    <button className="btn fs-4 text-danger del-btn">
                                                        <i className="bi bi-trash-fill"></i>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="w-100">
                                                <p className="fs-6">
                                                    <span>Size : </span><span className="text-secondary">L</span>
                                                </p>
                                            </div>
                                            <div className="w-100">
                                                <p className="fs-6">
                                                    <span>Color : </span><span className="text-secondary">Blue</span>
                                                </p>
                                            </div>
                                            <div className="w-100 d-flex align-items-center">
                                                <div className="flex-grow-1">
                                                    <h1 className="fs-5 fw-bold">$300</h1>
                                                </div>
                                                <div
                                                    className="d-flex p-1 cart-item-controller rounded-pill fs-6 align-items-center"
                                                >
                                                    <div className="mx-1">
                                                        <button className="btn fs-5 rounded-pill">
                                                            <i className="bi bi-plus"></i>
                                                        </button>
                                                    </div>
                                                    <div className="mx-1 text-secondary">1</div>
                                                    <div className="mx-1">
                                                        <button className="btn fs-5 rounded-pill">
                                                            <i className="bi bi-dash"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="cart-item position-relative rounded-4 px-1 my-2 py-1"
                                >
                                    <div className="row align-items-center">
                                        <div className="col-3">
                                            <a href="product" target="_blank">
                                                <img
                                                    loading="lazy"
                                                    className="img-fluid w-100 rounded-3"
                                                    src={'/images/products/shirt-4.png'}
                                                    alt="cart-item"
                                                />
                                            </a>
                                        </div>
                                        <div className="col-9">
                                            <div className="d-flex w-100 align-items-center">
                                                <div className="flex-grow-1">
                                                    <h1 className="fs-4 fw-bold">
                                                        <a
                                                            href="product"
                                                            className="text-decoration-none text-black"
                                                            target="_blank"
                                                        >
                                                            Red men shirt
                                                        </a>
                                                    </h1>
                                                </div>
                                                <div>
                                                    <button className="btn fs-4 text-danger del-btn">
                                                        <i className="bi bi-trash-fill"></i>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="w-100">
                                                <p className="fs-6">
                                                    <span>Size : </span ><span className="text-secondary">XL</span>
                                                </p>
                                            </div>
                                            <div className="w-100">
                                                <p className="fs-6">
                                                    <span>Color : </span><span className="text-secondary">Red</span>
                                                </p>
                                            </div>
                                            <div className="w-100 d-flex align-items-center">
                                                <div className="flex-grow-1">
                                                    <h1 className="fs-5 fw-bold">$500</h1>
                                                </div>
                                                <div
                                                    className="d-flex p-1 cart-item-controller rounded-pill fs-6 align-items-center"
                                                >
                                                    <div className="mx-1">
                                                        <button className="btn fs-5 rounded-pill">
                                                            <i className="bi bi-plus"></i>
                                                        </button>
                                                    </div>
                                                    <div className="mx-1 text-secondary">1</div>
                                                    <div className="mx-1">
                                                        <button className="btn fs-5 rounded-pill">
                                                            <i className="bi bi-dash"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="cart-item position-relative rounded-4 px-1 my-2 py-1"
                                >
                                    <div className="row align-items-center">
                                        <div className="col-3">
                                            <a href="product" target="_blank">
                                                <img
                                                    loading="lazy"
                                                    className="img-fluid w-100 rounded-3"
                                                    src={'/images/products/shirt-5.png'}
                                                    alt="cart-item"
                                                />
                                            </a>
                                        </div>
                                        <div className="col-9">
                                            <div className="d-flex w-100 align-items-center">
                                                <div className="flex-grow-1">
                                                    <h1 className="fs-4 fw-bold">
                                                        <a
                                                            href="product"
                                                            className="text-decoration-none text-black"
                                                            target="_blank"
                                                        >
                                                            men shirt
                                                        </a>
                                                    </h1>
                                                </div>
                                                <div>
                                                    <button className="btn fs-4 text-danger del-btn">
                                                        <i className="bi bi-trash-fill"></i>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="w-100">
                                                <p className="fs-6">
                                                    <span>Size : </span><span className="text-secondary">XXL</span>
                                                </p>
                                            </div>
                                            <div className="w-100">
                                                <p className="fs-6">
                                                    <span>Color : </span><span className="text-secondary">White</span>
                                                </p>
                                            </div>
                                            <div className="w-100 d-flex align-items-center">
                                                <div className="flex-grow-1">
                                                    <h1 className="fs-5 fw-bold">$360</h1>
                                                </div>
                                                <div
                                                    className="d-flex p-1 cart-item-controller rounded-pill fs-6 align-items-center"
                                                >
                                                    <div className="mx-1">
                                                        <button className="btn fs-5 rounded-pill">
                                                            <i className="bi bi-plus"></i>
                                                        </button>
                                                    </div>
                                                    <div className="mx-1 text-secondary">3</div>
                                                    <div className="mx-1">
                                                        <button className="btn fs-5 rounded-pill">
                                                            <i className="bi bi-dash"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 my-2">
                            <div className="order-summery border border-1 rounded-4 py-3 px-4">
                                <div className="order-summery">
                                    <h1 className="fs-4 fw-bold">Order summary</h1>
                                </div>
                                <div className="order-price">
                                    <div className="w-100 d-flex mt-4 my-2 fs-5">
                                        <div className="flex-grow-1">Total price</div>
                                        <div className="text-secondary">$1160</div>
                                    </div>
                                    <div className="w-100 d-flex my-3 fs-5">
                                        <div className="flex-grow-1">Discount(20%)</div>
                                        <div className="text-secondary">
                                            <span className="text-danger">- $232</span>
                                        </div>
                                    </div>
                                    <div className="w-100 d-flex my-3 fs-5">
                                        <div className="flex-grow-1">Shipment cost</div>
                                        <div className="text-secondary">$30</div>
                                    </div>
                                    <hr />
                                    <div className="w-100 d-flex my-3 fs-5 fw-bold">
                                        <div className="flex-grow-1">Total</div>
                                        <div className="text-secondary">$958</div>
                                    </div>
                                    <div className="w-100 d-flex mt-4 my-2 fs-5">
                                        <div
                                            className="flex-grow-1 coupon-input mx-1 rounded-pill d-flex px-3"
                                        >
                                            <div
                                                className="d-flex justify-content-center align-items-center"
                                            >
                                                <i className="bi bi-tag"></i>
                                            </div>
                                            <div className="flex-grow-1">
                                                <input
                                                    type="text"
                                                    placeholder="Enter your coupon"
                                                    className="border-0 h-100 w-100 rounded-pill fs-6 px-2"
                                                />
                                            </div>
                                        </div>
                                        <div className="text-secondary mx-1">
                                            <button
                                                className="btn main-btn rounded-pill px-4 text-white py-2"
                                            >
                                                Submit
                                            </button>
                                        </div>
                                    </div>
                                    <div className="w-100 mt-4 my-2 fs-5">
                                        <a
                                            href="#"
                                            className="btn main-btn text-white w-100 px-6 py-3 rounded-pill"
                                        >
                                            Pay &nbsp;
                                            <i className="bi bi-arrow-left"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}