"use client";

import { useCallback, useEffect, useState } from "react";

export default function Shop() {
    const [, setProducts] = useState([]);

    const getProducts = useCallback(async () => {
        const response = await fetch('http://localhost:3000/product');
        const data = await response.json();
        
        setProducts(data);

    }, [setProducts]);

    useEffect(() => {
        getProducts()
    }, []);

    return (
    <> 
        
            <section className="container mb-5">
                <hr />

                <div className="breadcrumb">
                    <p className="fs-6">
                        <span><a href="#" className="text-decoration-none text-secondary"
                        >Home</a></span><span>&nbsp; <i className="bi bi-chevron-right"></i> &nbsp;</span><span>Shop</span>
                    </p>
                </div>

                <div className="shop-container">
                    <div className="row">
                        <div
                            className="col-12 rounded-4 col-lg-4 d-lg-block filter-menu-container overflow-y-auto"
                        >
                            <div
                                className="shop-filter border border-1 px-4 py-2 rounded-4 bg-white"
                            >
                                <div className="d-flex align-items-center py-2 border-bottom my-3">
                                    <div className="flex-grow-1">
                                        <h1 className="fs-5 fw-bold">Filters</h1>
                                    </div>
                                    <div>
                                        <i
                                            className="fs-5 bi bi-sliders2-vertical d-none d-lg-block"
                                        ></i>
                                        <button className="btn close-filter-mnu d-block d-lg-none">
                                            <i className="fs-5 bi bi-x-lg close-filter-mnu"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="category my-3 py-2 border-bottom">
                                    <div
                                        className="d-flex text-secondary pointer-cursor my-3 hover p-2 rounded-2"
                                    >
                                        <div className="flex-grow-1">T-shirt</div>
                                        <div><i className="bi bi-chevron-right"></i></div>
                                    </div>
                                    <div
                                        className="d-flex text-secondary pointer-cursor my-3 hover p-2 rounded-2"
                                    >
                                        <div className="flex-grow-1">Shorts</div>
                                        <div><i className="bi bi-chevron-right"></i></div>
                                    </div>
                                    <div
                                        className="d-flex text-secondary pointer-cursor my-3 hover p-2 rounded-2"
                                    >
                                        <div className="flex-grow-1">Shirts</div>
                                        <div><i className="bi bi-chevron-right"></i></div>
                                    </div>
                                    <div
                                        className="d-flex text-secondary pointer-cursor my-3 hover p-2 rounded-2"
                                    >
                                        <div className="flex-grow-1">Hoodie</div>
                                        <div><i className="bi bi-chevron-right"></i></div>
                                    </div>
                                    <div
                                        className="d-flex text-secondary pointer-cursor my-3 hover p-2 rounded-2"
                                    >
                                        <div className="flex-grow-1">Hoodie</div>
                                        <div><i className="bi bi-chevron-right"></i></div>
                                    </div>  
                                </div>
                                <div
                                    className="price my-3 py-2 border-bottom overflow-hidden filter-menu-item"
                                >
                                    <div className="d-flex p-2 rounded-2 align-items-center">
                                        <div className="flex-grow-1">
                                            <h1 className="fs-5 fw-bold">Price</h1>
                                        </div>
                                        <div>
                                            <button
                                                className="btn main-btn text-white filter-control"
                                                data-filter-item="price"
                                            >
                                                <i
                                                    className="fs-5 bi bi-chevron-down"
                                                    data-filter-item="price"
                                                ></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="py-2 overflow-hidden px-4">
                                        <div id="slider" className="mt-5"></div>
                                    </div>
                                </div>
                                <div
                                    className="colors my-3 border-bottom py-2 overflow-hidden filter-menu-item"
                                >
                                    <div className="d-flex p-2 rounded-2 align-items-center">
                                        <div className="flex-grow-1">
                                            <h1 className="fs-5 fw-bold">Colors</h1>
                                        </div>
                                        <div>
                                            <button
                                                className="btn main-btn text-white filter-control"
                                                data-filter-item="colors"
                                            >
                                                <i
                                                    className="fs-5 bi bi-chevron-down"
                                                    data-filter-item="colors"
                                                ></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="py-2 overflow-hidden p-3">
                                        <div
                                            className="d-flex justify-content-center color-menu flex-wrap"
                                        >
                                            <div
                                                className="color-selector my-1 mx-1 bg-danger border border-1 border-secondary pointer-cursor"
                                            ></div>
                                            <div
                                                className="color-selector my-1 mx-1 bg-success border border-1 border-secondary pointer-cursor"
                                            ></div>
                                            <div
                                                className="color-selector my-1 mx-1 bg-warning border border-1 border-secondary pointer-cursor"
                                            ></div>
                                            <div
                                                className="color-selector my-1 mx-1 bg-info border border-1 border-secondary pointer-cursor"
                                            ></div>
                                            <div
                                                className="color-selector my-1 mx-1 bg-primary border border-1 border-secondary pointer-cursor"
                                            ></div>
                                            <div
                                                className="color-selector my-1 mx-1 bg-success-subtle border border-1 border-secondary pointer-cursor"
                                            ></div>
                                            <div
                                                className="color-selector my-1 mx-1 bg-dark border border-1 border-secondary pointer-cursor d-flex justify-content-center align-items-center"
                                            >
                                                <i className="bi bi-check fs-4 text-white"></i>
                                            </div>
                                            <div
                                                className="color-selector my-1 mx-1 bg-danger-subtle border border-1 border-secondary pointer-cursor"
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="sizes my-3 py-2 border-bottom overflow-hidden filter-menu-item"
                                >
                                    <div className="d-flex p-2 rounded-2 align-items-center">
                                        <div className="flex-grow-1">
                                            <h1 className="fs-5 fw-bold">Size</h1>
                                        </div>
                                        <div>
                                            <button
                                                className="btn main-btn text-white filter-control"
                                                data-filter-item="sizes"
                                            >
                                                <i
                                                    className="fs-5 bi bi-chevron-down"
                                                    data-filter-item="sizes"
                                                ></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="py-2 overflow-hidden p-4 filter-active">
                                        <div className="d-flex flex-wrap size-menu">
                                            <button
                                                className="btn rounded-pill my-2 mx-2 bg-alternative text-secondary"
                                            >
                                                XX-Small
                                            </button>
                                            <button
                                                className="btn rounded-pill my-2 mx-2 bg-alternative text-secondary"
                                            >
                                                X-Small
                                            </button>
                                            <button
                                                className="btn rounded-pill my-2 mx-2 bg-alternative text-secondary"
                                            >
                                                Small
                                            </button>
                                            <button
                                                className="btn rounded-pill my-2 mx-2 bg-alternative text-secondary"
                                            >
                                                Medium
                                            </button>
                                            <button
                                                className="btn text-white main-btn rounded-pill my-2 mx-2 bg-alternative text-secondary"
                                            >
                                                Large
                                            </button>
                                            <button
                                                className="btn rounded-pill my-2 mx-2 bg-alternative text-secondary"
                                            >
                                                X-Large
                                            </button>
                                            <button
                                                className="btn rounded-pill my-2 mx-2 bg-alternative text-secondary"
                                            >
                                                XX-Large
                                            </button>
                                            <button
                                                className="btn rounded-pill my-2 mx-2 bg-alternative text-secondary"
                                            >
                                                3X-Large
                                            </button>
                                            <button
                                                className="btn rounded-pill my-2 mx-2 bg-alternative text-secondary"
                                            >
                                                4X-Large
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="clothes-type my-3 py-2 overflow-hidden filter-menu-item"
                                >
                                    <div className="d-flex p-2 rounded-2 align-items-center">
                                        <div className="flex-grow-1">
                                            <h1 className="fs-5 fw-bold">Clothe type</h1>
                                        </div>
                                        <div>
                                            <button
                                                className="btn main-btn text-white filter-control"
                                                data-filter-item="clothes-type"
                                            >
                                                <i
                                                    className="fs-5 bi bi-chevron-down"
                                                    data-filter-item="clothes-type"
                                                ></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="py-2 overflow-hidden p-4">
                                        <div className="d-flex w-100 size-menu">
                                            <div className="w-100 my-3 py-2 border-bottom style-menu">
                                                <div
                                                    className="d-flex text-secondary pointer-cursor my-3 hover p-2 rounded-2"
                                                >
                                                    <div className="flex-grow-1">Formal</div>
                                                    <div><i className="bi bi-chevron-right"></i></div>
                                                </div>
                                                <div
                                                    className="d-flex text-secondary pointer-cursor my-3 hover p-2 rounded-2"
                                                >
                                                    <div className="flex-grow-1">Gym</div>
                                                    <div><i className="bi bi-chevron-right"></i></div>
                                                </div>
                                                <div
                                                    className="d-flex text-secondary pointer-cursor my-3 hover p-2 rounded-2"
                                                >
                                                    <div className="flex-grow-1">Wedding</div>
                                                    <div><i className="bi bi-chevron-right"></i></div>
                                                </div>
                                                <div
                                                    className="d-flex text-secondary pointer-cursor my-3 hover p-2 rounded-2"
                                                >
                                                    <div className="flex-grow-1">Casual</div>
                                                    <div><i className="bi bi-chevron-right"></i></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-100">
                                    <button
                                        className="btn main-btn rounded-pill px-4 py-2 text-white w-100"
                                    >
                                        Apply Filter
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-8">
                            <div className="shop-header d-flex">
                                <div className="flex-grow-1 align-items-center">
                                    <h1 className="fs-5 fw-bold">Formal</h1>
                                </div>
                                <div className="d-flex align-items-center">
                                    <div className="text-secondary">Showing 1-10 of 100 products</div>
                                    <div className="text-secondary mx-2 d-none d-lg-block">
                                        Sort by:
                                    </div>
                                    <div className="position-relative sort-menu d-none d-lg-block">
                                        <a className="text-decoration-none text-black pointer-cursor">
                                            Most Popular
                                            <i className="bi bi-chevron-down"></i>
                                        </a>
                                        <div
                                            className="shadow bg-white d-block py-2 px-2 rounded-2 position-absolute"
                                        >
                                            <a
                                                href="#"
                                                className="d-block my-1 text-decoration-none text-black"
                                            >Cheapest</a>
                                            <a
                                                href="#"
                                                className="d-block my-1 text-decoration-none text-black"
                                            >Most sell</a>
                                            <a
                                                href="#"
                                                className="d-block my-1 text-decoration-none text-black"
                                            >High rated</a>
                                        </div>
                                    </div>
                                    <div>
                                        <button
                                            className="toggle-filter-menu d-block d-lg-none mx-1 btn bg-alternative text-black rounded-circle d-flex justify-content-center align-items-center"
                                        >
                                            <i
                                                className="toggle-filter-menu bi bi-sliders2-vertical fs-6"
                                            ></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="shop-products py-2 border-bottom">
                                <div
                                    className="alert alert-danger d-none d-flex align-items-center"
                                    role="alert"
                                    id="noPr"
                                >
                                    <div className="mx-1">
                                        <i className="bi bi-exclamation-triangle-fill"></i>
                                    </div>
                                    <div>No product found!</div>
                                </div>

                                <div className="row align-items-stretch">
                                    <div className="col-6 col-md-4 py-1 px-2 my-4">
                                        <div className="shop-item h-100">
                                            <div
                                                className="product-container bg-transparent h-100 p-2 rounded-3"
                                            >
                                                <a
                                                    href="product"
                                                    className="text-black text-decoration-none"
                                                >
                                                    <img
                                                        loading="lazy"
                                                        src={'/images/products/shirt-1.png'}
                                                        alt="product"
                                                        className="w-100 rounded-4"
                                                    />
                                                    <h2 className="my-3">Blue men shirt</h2>
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
                                                        <div className="mx-1 fw-bold" data-item-type="price">
                                                            $360
                                                        </div>
                                                        <div className="mx-1">
                                                            <del>$420</del>
                                                        </div>
                                                        <div className="mx-1">
                                                            <span className="bg-danger-subtle rounded-pill px-2 py-1">20%</span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-4 py-1 px-2 my-4">
                                        <div className="shop-item h-100">
                                            <div
                                                className="product-container bg-transparent h-100 p-2 rounded-3"
                                            >
                                                <a
                                                    href="product"
                                                    className="text-black text-decoration-none"
                                                >
                                                    <img
                                                        loading="lazy"
                                                        src={'/images/products/shirt-2.png'}
                                                        alt="product"
                                                        className="w-100 rounded-4"
                                                    />
                                                    <h2 className="my-3">Red men shirt</h2>
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
                                                        <div className="mx-1 fw-bold" data-item-type="price">
                                                            $500
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-4 py-1 px-2 my-4">
                                        <div className="shop-item h-100">
                                            <div
                                                className="product-container bg-transparent h-100 p-2 rounded-3"
                                            >
                                                <a
                                                    href="product"
                                                    className="text-black text-decoration-none"
                                                >
                                                    <img
                                                        loading="lazy"
                                                        src={'/images/products/shirt-3.png'}
                                                        alt="product"
                                                        className="w-100 rounded-4"
                                                    />
                                                    <h2 className="my-3">Midnight blue men shirt</h2>
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
                                                        <div className="mx-1 fw-bold" data-item-type="price">
                                                            $300
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-4 py-1 px-2 my-4">
                                        <div className="shop-item h-100">
                                            <div
                                                className="product-container bg-transparent h-100 p-2 rounded-3"
                                            >
                                                <a
                                                    href="product"
                                                    className="text-black text-decoration-none"
                                                >
                                                    <img
                                                        loading="lazy"
                                                        src={'/images/products/shirt-4.png'}
                                                        alt="product"
                                                        className="w-100 rounded-4"
                                                    />
                                                    <h2 className="my-3">White men shirt</h2>
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
                                                        <div className="mx-1 fw-bold" data-item-type="price">
                                                            $300
                                                        </div>
                                                        <div className="mx-1">
                                                            <del>$430</del>
                                                        </div>
                                                        <div className="mx-1">
                                                            <span
                                                                className="bg-danger-subtle rounded-pill px-2 py-1"
                                                            >30%</span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-4 py-1 px-2 my-4">
                                        <div className="shop-item h-100">
                                            <div
                                                className="product-container bg-transparent h-100 p-2 rounded-3"
                                            >
                                                <a
                                                    href="product"
                                                    className="text-black text-decoration-none"
                                                >
                                                    <img
                                                        loading="lazy"
                                                        src={'/images/products/shirt-5.png'}
                                                        alt="product"
                                                        className="w-100 rounded-4"
                                                    />
                                                    <h2 className="my-3">Light men shirt</h2>
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
                                                        <div className="mx-1 fw-bold" data-item-type="price">
                                                            $345
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-4 py-1 px-2 my-4">
                                        <div className="shop-item h-100">
                                            <div
                                                className="product-container bg-transparent h-100 p-2 rounded-3"
                                            >
                                                <a
                                                    href="product"
                                                    className="text-black text-decoration-none"
                                                >
                                                    <img
                                                        loading="lazy"
                                                        src={'/images/products/shirt-6.png'}
                                                        alt="product"
                                                        className="w-100 rounded-4"
                                                    />
                                                    <h2 className="my-3">Men shirt</h2>
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
                                                        <div className="mx-1 fw-bold" data-item-type="price">
                                                            $400
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-4 py-1 px-2 my-4">
                                        <div className="shop-item h-100">
                                            <div
                                                className="product-container bg-transparent h-100 p-2 rounded-3"
                                            >
                                                <a
                                                    href="product"
                                                    className="text-black text-decoration-none"
                                                >
                                                    <img
                                                        loading="lazy"
                                                        src={'/images/products/shirt-2.png'}
                                                        alt="product"
                                                        className="w-100 rounded-4"
                                                    />
                                                    <h2 className="my-3">Red men shirt</h2>
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
                                                        <div className="mx-1 fw-bold" data-item-type="price">
                                                            $420
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-4 py-1 px-2 my-4">
                                        <div className="shop-item h-100">
                                            <div
                                                className="product-container bg-transparent h-100 p-2 rounded-3"
                                            >
                                                <a
                                                    href="product"
                                                    className="text-black text-decoration-none"
                                                >
                                                    <img
                                                        loading="lazy"
                                                        src={'/images/products/shirt-3.png'}
                                                        alt="product"
                                                        className="w-100 rounded-4"
                                                    />
                                                    <h2 className="my-3">Midnight blue men shirt</h2>
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
                                                        <div className="mx-1 fw-bold" data-item-type="price">
                                                            $329
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-4 py-1 px-2 my-4">
                                        <div className="shop-item h-100">
                                            <div
                                                className="product-container bg-transparent h-100 p-2 rounded-3"
                                            >
                                                <a
                                                    href="product"
                                                    className="text-black text-decoration-none"
                                                >
                                                    <img
                                                        loading="lazy"
                                                        src={'/images/products/shirt-4.png'}
                                                        alt="product"
                                                        className="w-100 rounded-4"
                                                    />
                                                    <h2 className="my-3">White men shirt</h2>
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
                                                        <div className="mx-1 fw-bold" data-item-type="price">
                                                            $150
                                                        </div>
                                                        <div className="mx-1">
                                                            <del>$360</del>
                                                        </div>
                                                        <div className="mx-1">
                                                            <span
                                                                className="bg-danger-subtle rounded-pill px-2 py-1"
                                                            >20%</span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="shop-footer d-flex justify-content-center my-2 py-3">
                                <div>
                                    <button className="btn border border-1 py-2 px-3">
                                        <i className="bi bi-arrow-right"></i>
                                        &nbsp;Previous
                                    </button>
                                </div>
                                <div className="flex-grow-1 text-center">
                                    <a
                                        href="#"
                                        className="text-decoration-none btn mx-1 py-1 px-3 bg-alternative"
                                    >1</a>
                                    <a
                                        href="#"
                                        className="text-decoration-none btn text-secondary mx-1 py-1 px-3"
                                    >2</a>
                                    <a
                                        href="#"
                                        className="text-decoration-none btn text-secondary mx-1 py-1 px-3"
                                    >3</a>
                                    <span className="mx-2">...</span>
                                    <a
                                        href="#"
                                        className="text-decoration-none btn text-secondary mx-1"
                                    >10</a>
                                    <a
                                        href="#"
                                        className="text-decoration-none btn text-secondary mx-1"
                                        >11</a>
                                </div>
                                <div>
                                    <button className="btn border border-1 py-2 px-3">
                                        Next
                                        <i className="bi bi-arrow-left"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section></>

)
}