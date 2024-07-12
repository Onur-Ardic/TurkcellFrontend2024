export default function Home() {
    return (
        <>
            <div className="hero w-100 py-4">
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-md-5">
                            <h1 className="fw-bold">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                            <p className="text-secondary">
                            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
                            </p>
                            <a
                                className="btn main-btn text-white rounded-pill p-3 fs-6 text-decoration-none"
                                href="shop"
                                target="_blank"
                            >
                                Shop Now
                            </a>
                            <div className="row mt-4">
                                <div className="col-4">
                                    <h1 className="fw-bold">200+</h1>
                                    <p>International Brands</p>
                                </div>
                                <div
                                    className="col-4 border-start border-3 border-secondary-subtle"
                                >
                                    <h1 className="fw-bold">2,000+</h1>
                                    <p>High-Quality Products</p>
                                </div>
                                <div
                                    className="col-4 border-start border-3 border-secondary-subtle"
                                >
                                    <h1 className="fw-bold">30,000+</h1>
                                    <p>Happy Customers</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7 hero-main-img h-100"></div>
                    </div>
                </div>
            </div>
            <div className="brand-menu py-4">
                <div className="container">
                    <div className="row align-items-center fs-1 justify-content-center">
                        <div className="text-center col-5 col-md-2 my-1">
                            <a className="text-white text-decoration-none" href="#brand">VERSACE</a>
                        </div>
                        <div className="text-center col-5 col-md-2 my-1">
                            <a className="text-white text-decoration-none" href="#brand">ZARA</a>
                        </div>
                        <div className="text-center col-5 col-md-2 my-1">
                            <a className="text-white text-decoration-none" href="#brand">GUCCI</a>
                        </div>
                        <div className="text-center col-5 col-md-2 my-1">
                            <a className="text-white text-decoration-none" href="#brand">PRADA</a>
                        </div>
                        <div className="text-center col-6 col-md-3 my-2">
                            <a className="text-white text-decoration-none" href="#brand">Calvin Clein</a>
                        </div>
                    </div>
                </div>
            </div>
            <section className="container my-5">
                <div className="w-100 text-center my-4">
                    <h1 className="fw-bolder">NEW ARRIVALS</h1>
                </div>
                <div className="w-100 d-flex">
                    <div className="flex-grow-1">
                        <button
                            className="fw-bold btn fs-5 last-products-control btn-outline-primary rounded-circle d-flex align-items-center h-100"
                            type="button"
                            data-scroll="right"
                            data-row-target="last-products"
                        >
                            <i
                                className="bi bi-arrow-right"
                                data-scroll="right"
                                data-row-target="last-products"
                            ></i>
                        </button>
                    </div>
                    <div>
                        <button
                            className="fw-bold btn fs-5 last-products-control btn-outline-primary rounded-circle d-flex align-items-center h-100"
                            type="button"
                            data-scroll="left"
                            data-row-target="last-products"
                        >
                            <i
                                className="bi bi-arrow-left"
                                data-scroll="left"
                                data-row-target="last-products"
                            ></i>
                        </button>
                    </div>
                </div>
                <div
                    className="row my-3 product-row overflow-x-hidden align-items-stretch last-products"
                >
                    <div className="col-7 col-lg-3 my-3 last-pr-item">
                        <div className="product-container p-2 rounded-3">
                            <a href="product" className="text-black text-decoration-none">
                                <img
                                    loading="lazy"
                                    src={'/images/products/shirt-1.png'}
                                    alt="product"
                                    className="w-100 rounded-4"
                                />
                                <h5 className="my-3">T-shirt with Tape Details</h5>
                                <p>
                                    <span className="text-warning">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-half"></i>
                                    </span>
                                    <span className="text-secondary">4.5</span>/5
                                </p>
                                <div className="d-flex px-1">
                                    <div className="mx-1 fw-bold">120$</div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-7 col-lg-3 my-3 last-pr-item">
                        <div className="product-container p-2 rounded-3">
                            <a href="product" className="text-black text-decoration-none">
                                <img
                                    loading="lazy"
                                    src={'/images/products/shirt-2.png'}
                                    alt="product"
                                    className="w-100 rounded-4"
                                />
                                <h4 className="my-3">Skinny Fit Jeans</h4>
                                <p>
                                    <span className="text-warning">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                    </span>
                                    <span className="text-secondary">5</span>/5
                                </p>
                                <div className="d-flex px-1">
                                    <div className="mx-1 fw-bold">240$</div>
                                    <div className="mx-1">
                                        <del>260$</del>
                                    </div>
                                    <div className="mx-1">
                                        <span className="bg-danger-subtle rounded-pill px-2 py-1"
                                        >20%</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-7 col-lg-3 my-3 last-pr-item">
                        <div className="product-container p-2 rounded-3">
                            <a href="product" className="text-black text-decoration-none">
                                <img
                                    loading="lazy"
                                    src={'/images/products/shirt-3.png'}
                                    alt="product"
                                    className="w-100 rounded-4"
                                />
                                <h3 className="my-3">Checkered Shirt</h3>
                                <p>
                                    <span className="text-warning">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star"></i>
                                        <i className="bi bi-star"></i>
                                    </span>
                                    <span className="text-secondary">3</span>/5
                                </p>
                                <div className="d-flex px-1">
                                    <div className="mx-1 fw-bold">180$</div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-7 col-lg-3 my-3 last-pr-item">
                        <div className="product-container p-2 rounded-3">
                            <a href="product" className="text-black text-decoration-none">
                                <img
                                    loading="lazy"
                                    src={'/images/products/shirt-4.png'}
                                    alt="product"
                                    className="w-100 rounded-4"
                                />
                                <h4 className="my-3">Sleeve Striped T-shirt</h4>
                                <p>
                                    <span className="text-warning">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star"></i>
                                    </span>
                                    <span className="text-secondary">4</span>/5
                                </p>
                                <div className="d-flex px-1">
                                    <div className="mx-1 fw-bold">130$</div>
                                    <div className="mx-1">
                                        <del>160$</del>
                                    </div>
                                    <div className="mx-1">
                                        <span className="bg-danger-subtle rounded-pill px-2 py-1"
                                        >30%</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="w-100 text-center my-5">
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-3">
                            <a
                                href="shop"
                                className="btn py-2 px-5 rounded-pill border border-1 w-100"
                            >Show all</a>
                        </div>
                    </div>
                </div>
                <hr className="my-2" />

                <div className="w-100 text-center my-4">
                    <h1 className="fw-bolder">TOP SELLING</h1>
                </div>
                <div className="w-100 d-flex">
                    <div className="flex-grow-1">
                        <button
                            className="fw-bold btn fs-5 last-products-control btn-outline-primary rounded-circle d-flex align-items-center h-100"
                            type="button"
                            data-scroll="right"
                            data-row-target="high-sell-products"
                        >
                            <i
                                className="bi bi-arrow-right"
                                data-scroll="right"
                                data-row-target="high-sell-products"
                            ></i>
                        </button>
                    </div>
                    <div>
                        <button
                            className="fw-bold btn fs-5 last-products-control btn-outline-primary rounded-circle d-flex align-items-center h-100"
                            type="button"
                            data-scroll="left"
                            data-row-target="high-sell-products"
                        >
                            <i
                                className="bi bi-arrow-left"
                                data-scroll="left"
                                data-row-target="high-sell-products"
                            ></i>
                        </button>
                    </div>
                </div>
                <div
                    className="row my-3 product-row overflow-x-hidden align-items-stretch high-sell-products"
                >
                    <div className="col-7 col-lg-3 my-3 last-pr-item">
                        <div className="product-container p-2 rounded-3">
                            <a href="product" className="text-black text-decoration-none">
                                <img
                                    loading="lazy"
                                    src={'/images/products/vertical.png'}
                                    alt="product"
                                    className="w-100 rounded-4"
                                />
                                <h3 className="my-3">Vertical Striped Shirt</h3>
                                <p>
                                    <span className="text-warning">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-half"></i>
                                    </span>
                                    <span className="text-secondary">4.5</span>/5
                                </p>
                                <div className="d-flex px-1">
                                    <div className="mx-1 fw-bold">212$</div>
                                    <div className="mx-1">
                                        <del>232$</del>
                                    </div>
                                    <div className="mx-1">
                                        <span className="bg-danger-subtle rounded-pill px-2 py-1"
                                        >20%</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-7 col-lg-3 my-3 last-pr-item">
                        <div className="product-container p-2 rounded-3">
                            <a href="product" className="text-black text-decoration-none">
                                <img
                                    loading="lazy"
                                    src={'/images/products/courage.png'}
                                    alt="product"
                                    className="w-100 rounded-4"
                                />
                                <h5 className="my-4">Courage Graphic T-shirt</h5>
                                <p>
                                    <span className="text-warning">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                    </span>
                                    <span className="text-secondary">5</span>/5
                                </p>
                                <div className="d-flex px-1">
                                    <div className="mx-1 fw-bold">145$</div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-7 col-lg-3 my-3 last-pr-item">
                        <div className="product-container p-2 rounded-3">
                            <a href="product" className="text-black text-decoration-none">
                                <img
                                    loading="lazy"
                                    src={'/images/products/louse.png'}
                                    alt="product"
                                    className="w-100 rounded-4"
                                />
                                <h5 className="my-4">Loose Fit Bermuda Shorts</h5>
                                <p>
                                    <span className="text-warning">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star"></i>
                                        <i className="bi bi-star"></i>
                                    </span>
                                    <span className="text-secondary">3</span>/5
                                </p>
                                <div className="d-flex px-1">
                                    <div className="mx-1 fw-bold">80$</div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-7 col-lg-3 my-3 last-pr-item">
                        <div className="product-container p-2 rounded-3">
                            <a href="product" className="text-black text-decoration-none">
                                <img
                                    loading="lazy"
                                    src={'/images/products/faded.png'}
                                    alt="product"
                                    className="w-100 rounded-4"
                                />
                                <h4 className="my-4">Faded Skinny Jeans</h4>
                                <p>
                                    <span className="text-warning">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star"></i>
                                    </span>
                                    <span className="text-secondary">4</span>/5
                                </p>
                                <div className="d-flex px-1">
                                    <div className="mx-1 fw-bold">210$</div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-7 col-lg-3 my-3 last-pr-item">
                        <div className="product-container p-2 rounded-3">
                            <a href="product" className="text-black text-decoration-none">
                                <img
                                    loading="lazy"
                                    src={'/images/products/shirt-3.png'}
                                    alt="product"
                                    className="w-100 rounded-4"
                                />
                                <h2 className="my-3">Blue men shirt #2</h2>
                                <p>
                                    <span className="text-warning">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star"></i>
                                    </span>
                                    <span className="text-secondary">4</span>/5
                                </p>
                                <div className="d-flex px-1">
                                    <div className="mx-1 fw-bold">650$</div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-7 col-lg-3 my-3 last-pr-item">
                        <div className="product-container p-2 rounded-3">
                            <a href="product" className="text-black text-decoration-none">
                                <img
                                    loading="lazy"
                                    src={'/images/products/shirt-6.png'}
                                    alt="product"
                                    className="w-100 rounded-4"
                                />
                                <h2 className="my-3">White men shirt with tie</h2>
                                <p>
                                    <span className="text-warning">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star"></i>
                                        <i className="bi bi-star"></i>
                                    </span>
                                    <span className="text-secondary">3</span>/5
                                </p>
                                <div className="d-flex px-1">
                                    <div className="mx-1 fw-bold">450$</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="w-100 text-center my-5">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-3">
                            <a
                                href="shop"
                                className="btn py-2 px-5 rounded-pill border border-1 w-100"
                            >Show all </a>
                        </div>
                    </div>
                </div>

                <div className="row my-3 rounded-4 browse-container px-5 py-3">
                    <div className="w-100 text-center my-4">
                        <h1 className="fw-bolder">BROWSE BY DRESS STYLE</h1>
                    </div>
                    <div className="col-md-3 p-3">
                        <a href="shop" className="text-decoration-none">
                            <div className="browse-clothes casual p-2 px-4 rounded-3 text-dark">
                                <h1>Casual</h1>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-9 p-3">
                        <a href="shop" className="text-decoration-none">
                            <div className="browse-clothes formal p-2 px-4 rounded-3 text-dark">
                                <h1>Formal</h1>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-9 p-3">
                        <a href="shop" className="text-decoration-none">
                            <div className="browse-clothes party p-2 px-4 rounded-3 text-dark">
                                <h1>Party</h1>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-3 p-3">
                        <a href="shop" className="text-decoration-none">
                            <div className="browse-clothes gym p-2 px-4 rounded-3 text-dark">
                                <h1>Gym</h1>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="d-flex w-100 my-5">
                    <div className="flex-grow-1">
                        <h1 className="fw-bold">Customer comments</h1>
                    </div>
                    <div className="fw-bold fs-4">
                        <button
                            className="fw-bold btn fs-5 testimonial-control"
                            type="button"
                            data-scroll="right"
                        >
                            <i className="bi bi-arrow-right" data-scroll="right"></i>
                        </button>
                        <button
                            className="fw-bold btn fs-5 testimonial-control"
                            type="button"
                            data-scroll="left"
                        >
                            <i className="bi bi-arrow-left" data-scroll="left"></i>
                        </button>
                    </div>
                </div>

                <div className="row align-items-stretch customer-testimonial">
                    <div className="col-md-4 my-3">
                        <div className="user-comment p-4 rounded-3 border border-1 bg-white">
                            <h1 className="text-warning fs-5">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                            </h1>
                            <h1 className="fw-bold fs-4 my-3">
                                Sarah M.
                                <i className="fs-5 bi bi-check-circle-fill text-success"></i>
                            </h1>
                            <p>
                            "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 my-3">
                        <div className="user-comment p-4 rounded-3 border border-1 bg-white">
                            <h1 className="text-warning fs-5">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                            </h1>
                            <h1 className="fw-bold fs-4 my-3">
                            Alex K.
                                <i className="fs-5 bi bi-check-circle-fill text-success"></i>
                            </h1>
                            <p>
                            "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 my-3">
                        <div className="user-comment p-4 rounded-3 border border-1 bg-white">
                            <h1 className="text-warning fs-5">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-half"></i>
                            </h1>
                            <h1 className="fw-bold fs-4 my-3">
                            James L.
                                <i className="fs-5 bi bi-check-circle-fill text-success"></i>
                            </h1>
                            <p>
                            "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 my-3">
                        <div className="user-comment p-4 rounded-3 border border-1 bg-white">
                            <h1 className="text-warning fs-5">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                            </h1>
                            <h1 className="fw-bold fs-4 my-3">
                                Margret Lockman
                                <i className="fs-5 bi bi-check-circle-fill text-success"></i>
                            </h1>
                            <p>
                                Facere illo dicta sunt voluptatibus. Temporibus molestiae quae
                                qui hic voluptatibus consectetur saepe. Et quia totam architecto
                                tempora dolorem non velit. Odit sunt aliquam ipsam animi ex
                                maiores iusto ut. Omnis maxime iure. Enim asperiores minima
                                consequuntur quis.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 my-3">
                        <div className="user-comment p-4 rounded-3 border border-1 bg-white">
                            <h1 className="text-warning fs-5">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                            </h1>
                            <h1 className="fw-bold fs-4 my-3">
                                Mazie Miller
                                <i className="fs-5 bi bi-check-circle-fill text-success"></i>
                            </h1>
                            <p>
                                Cumque voluptas ipsum ipsum possimus laboriosam consequatur
                                cumque nemo soluta. Doloribus incidunt et. Eum quis tempora. Vel
                                est similique. Eveniet eligendi consequatur magni modi voluptate
                                aut quaerat.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 my-3">
                        <div className="user-comment p-4 rounded-3 border border-1 bg-white">
                            <h1 className="text-warning fs-5">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-half"></i>
                            </h1>
                            <h1 className="fw-bold fs-4 my-3">
                                Maci Lind
                                <i className="fs-5 bi bi-check-circle-fill text-success"></i>
                            </h1>
                            <p>
                                Error ipsa aut. Qui unde et aliquam rerum. Aspernatur molestiae
                                culpa dolores quasi tempora. Deleniti voluptas voluptatem ipsum
                                qui dolor laudantium quam dignissimos enim.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}