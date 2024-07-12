"use client";

import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function Product() {
    const router = useRouter()

    const onAddToCart = async () => {
        toast.success('Ürün sepete eklendi')
    }

    return (
        <>
            <section className="container mb-5">
                <hr />

                <div className="breadcrumb">
                    <p className="fs-6">
                        <span
                        ><a href="#" className="text-decoration-none text-secondary"
                        >Home</a>
                        </span><span>&nbsp; <i className="bi bi-chevron-right"></i> &nbsp;</span>
                        <span
                        ><a href="shop" className="text-decoration-none text-secondary"
                        >Shop</a
                            ></span
                        ><span>&nbsp; <i className="bi bi-chevron-right"></i> &nbsp;</span>
                        <span
                        ><a
                            href="shop   "
                            className="text-decoration-none text-secondary"
                        >Men</a
                            ></span
                        ><span>&nbsp; <i className="bi bi-chevron-right"></i> &nbsp;</span>
                        <span>T-shirt</span>
                    </p>
                </div>

                <div className="row align-items-stretch justify-content-center">
                    <div className="col-12"></div>
                    <div className="col-1 d-none d-lg-block">
                        <div className="image-menu d-flex flex-column">
                            <img
                                loading="lazy"
                                src={'/images/products/t-shirt-1.png'}
                                alt="product"
                                className="w-100 rounded-4 pointer-cursor my-2 gallery-img"
                            />
                            <img
                                loading="lazy"
                                src={'/images/products/t-shirt-2.png'}
                                alt="product"
                                className="w-100 rounded-4 pointer-cursor my-2 opacity-50 gallery-img"
                            />
                            <img
                                loading="lazy"
                                src={'/images/products/t-shirt-4.png'}
                                alt="product"
                                className="w-100 rounded-4 pointer-cursor my-2 opacity-50 gallery-img"
                            />
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div
                            className="rounded-4 overflow-hidden position-relative main-product-img"
                        >
                            <img
                                loading="lazy"
                                src={'/images/products/t-shirt-1.png'}
                                alt="product"
                                className="w-100 rounded-4 my-2 product-image overflow-hidden"
                            />
                        </div>
                    </div>
                    <div className="col-12 row d-flex d-lg-none">
                        <div className="col-4">
                            <img
                                loading="lazy"
                                src={'/images/products/t-shirt-1.png'}
                                alt="product"
                                className="w-100 rounded-4 pointer-cursor my-2 gallery-img"
                            />
                        </div>
                        <div className="col-4">
                            <img
                                loading="lazy"
                                src={'/images/products/t-shirt-2.png'}
                                alt="product"
                                className="w-100 rounded-4 pointer-cursor my-2 opacity-50 gallery-img"
                            />
                        </div>
                        <div className="col-4">
                            <img
                                loading="lazy"
                                src={'/images/products/t-shirt-4.png'}
                                alt="product"
                                className="w-100 rounded-4 pointer-cursor my-2 opacity-50 gallery-img"
                            />
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="h-100 py-2">
                            <div className="my-2">
                                <h1 className="fs-2 fw-bold">Green men T-shirt</h1>
                            </div>
                            <div className="my-2">
                                <span className="text-warning">
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-half"></i
                                    ></span>
                                <span className="text-secondary">4.5/</span>
                                <span>5</span>
                            </div>
                            <div className="my-2">
                                <h1 className="fs-4 fw-bold">$296</h1>
                            </div>
                            <div className="my-2">
                                <p className="text-secondary">
                                    Go green with our eco-friendly and stylish green shirts! Made
                                    from sustainable materials, these shirts are not only
                                    fashion-forward but also contribute to a greener planet.
                                    Embrace your love for nature while looking effortlessly chic
                                    in our vibrant green shirts.
                                </p>
                            </div>
                            <hr />
                            <div className="my-2">
                                <p className="text-secondary">Select size.</p>
                                <button
                                    className="btn main-btn text-white rounded-pill my-2 mx-2 bg-alternative"
                                >
                                    Large
                                </button>
                                <button
                                    className="btn rounded-pill my-2 mx-2 bg-alternative text-secondary"
                                >
                                    XX-Large
                                </button>
                                <button
                                    className="btn rounded-pill my-2 mx-2 bg-alternative text-secondary"
                                >
                                    X-Large
                                </button>
                            </div>
                            <hr />
                            <div className="my-2">
                                <p className="text-secondary">Select</p>
                                <button
                                    className="btn main-btn text-white rounded-pill my-2 mx-2 bg-alternative"
                                >
                                    Male
                                </button>
                                <button
                                    className="btn rounded-pill my-2 mx-2 bg-alternative text-secondary"
                                >
                                    Female
                                </button>
                            </div>
                            <hr />
                            <div className="my-2 row">
                                <div className="col-md-9 px-2">
                                    <button
                                        className="btn main-btn py-2 text-white rounded-pill w-100 my-2 mx-2 bg-alternative"
                                        onClick={onAddToCart}
                                    >
                                        Add to cart
                                    </button>
                                </div>
                                <div className="col-md-3 px-2 text-center">
                                    <div
                                        className="d-flex justify-content-center p-1 cart-item-controller rounded-pill fs-6 align-items-center"
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
                </div>

                <div className="row mt-4 pt-4">
                    <div
                        className="col-4 py-2 border-bottom border-3 text-secondary text-center tab-panel-controller rounded-3 pointer-cursor rounded-bottom-0"
                        data-tab-controller="pr_detail"
                    >
                        <h1 className="fs-5 fw-bold">Products details</h1>
                    </div>
                    <div
                        className="col-4 py-2 border-bottom text-center border-3 border-black tab-panel-controller rounded-3 pointer-cursor rounded-bottom-0 pane-active"
                        data-tab-controller="pr_rating"
                    >
                        <h1 className="fs-5 fw-bold">Rating</h1>
                    </div>
                    <div
                        className="col-4 py-2 text-secondary border-bottom border-3 text-center tab-panel-controller rounded-3 pointer-cursor rounded-bottom-0"
                        data-tab-controller="pr_faq"
                    >
                        <h1 className="fs-5 fw-bold">FAQ</h1>
                    </div>
                </div>

                <div className="row flex-nowrap flex-column overflow-hidden main-pr-details">
                    <div className="col-12 mt-3 px-4">
                        <div className="shadow border-1 rounded-3 p-3 my-3">
                            <table className="table table-hover table-responsive caption-top">
                                <caption className="text-center fs-4 text-black">
                                    Product details
                                </caption>
                                <tbody>
                                    <tr className="my-3">
                                        <th>Weight</th>
                                        <td>500 grams</td>
                                    </tr>
                                    <tr className="my-3">
                                        <th>Color</th>
                                        <td>green</td>
                                    </tr>
                                    <tr className="my-3">
                                        <th>Sizes</th>
                                        <td>
                                            XX-Small, X-Small, Small, Medium, Large, X-large, XX-large
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-12 mt-3 px-4">
                        <div className="my-3 d-flex align-items-center">
                            <div className="flex-grow-1">
                                <h1 className="fs-5 fw-bold">
                                    All comments
                                    <span className="text-secondary">(450)</span>
                                </h1>
                            </div>
                            <div>
                                <button
                                    className="toggle-filter-menu mx-1 btn bg-alternative text-black rounded-circle d-flex justify-content-center align-items-center"
                                >
                                    <i
                                        className="toggle-filter-menu bi bi-sliders2-vertical fs-6"
                                    ></i>
                                </button>
                            </div>
                            <div>
                                <button
                                    className="d-none d-lg-block toggle-filter-menu rounded-pill mx-1 btn bg-alternative text-black d-flex justify-content-center align-items-center"
                                >
                                    Newest&nbsp;
                                    <i className="toggle-filter-menu bi bi-chevron-down fs-6"></i>
                                </button>
                            </div>
                            <div>
                                <button
                                    className="toggle-filter-menu rounded-pill mx-1 btn text-white main-btn px-4 d-flex justify-content-center align-items-center"
                                >
                                    Put a comment
                                </button>
                            </div>
                        </div>
                        <div className="row my-3">
                            <div className="col-md-6 p-2">
                                <div className="border border-1 rounded-5 p-4 h-100">
                                    <div className="d-flex">
                                        <div className="flex-grow-1">
                                            <span className="text-warning">
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                            </span>
                                        </div>
                                        <div className="text-secondary fs-5 pointer-cursor">
                                            <i className="bi bi-three-dots"></i>
                                        </div>
                                    </div>
                                    <div className="my-2">
                                        <h1 className="fs-5 fw-bold">
                                            Andrew Maxwell &nbsp;
                                            <span className="fs-5 text-success"
                                            ><i className="bi bi-check-circle-fill"></i
                                            ></span>
                                        </h1>
                                    </div>
                                    <p className="text-secondary my-3">
                                        tea cup cover sound length recently say handsome fairly to
                                        pair condition season baseball trunk doing nor off become
                                        nature why neck smaller cake
                                    </p>
                                    <div className="my-2">Published on 5 Aug</div>
                                </div>
                            </div>
                            <div className="col-md-6 p-2">
                                <div className="border border-1 rounded-5 p-4 h-100">
                                    <div className="d-flex">
                                        <div className="flex-grow-1">
                                            <span className="text-warning">
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star"></i>
                                                <i className="bi bi-star"></i>
                                            </span>
                                        </div>
                                        <div className="text-secondary fs-5 pointer-cursor">
                                            <i className="bi bi-three-dots"></i>
                                        </div>
                                    </div>
                                    <div className="my-2">
                                        <h1 className="fs-5 fw-bold">
                                            Cody Lawrence &nbsp;
                                            <span className="fs-5 text-success"
                                            ><i className="bi bi-check-circle-fill"></i
                                            ></span>
                                        </h1>
                                    </div>
                                    <p className="text-secondary my-3">
                                        police white planned step use bank examine tightly age tune
                                        strength rubber notice bone band tail center sick there clay
                                        deer coast driven where
                                    </p>
                                    <div className="my-2">Published on 5 Aug</div>
                                </div>
                            </div>
                            <div className="col-md-6 p-2">
                                <div className="border border-1 rounded-5 p-4 h-100">
                                    <div className="d-flex">
                                        <div className="flex-grow-1">
                                            <span className="text-warning">
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-half"></i>
                                            </span>
                                        </div>
                                        <div className="text-secondary fs-5 pointer-cursor">
                                            <i className="bi bi-three-dots"></i>
                                        </div>
                                    </div>
                                    <div className="my-2">
                                        <h1 className="fs-5 fw-bold">
                                            Christina Lindsey &nbsp;
                                            <span className="fs-5 text-success"
                                            ><i className="bi bi-check-circle-fill"></i
                                            ></span>
                                        </h1>
                                    </div>
                                    <p className="text-secondary my-3">
                                        now widely other rate break damage gradually separate meal
                                        consonant beyond gray window hot could double bottom fight
                                        exciting climate unless lady hearing needle
                                    </p>
                                    <div className="my-2">Published on 5 Aug</div>
                                </div>
                            </div>
                            <div className="col-md-6 p-2">
                                <div className="border border-1 rounded-5 p-4 h-100">
                                    <div className="d-flex">
                                        <div className="flex-grow-1">
                                            <span className="text-warning">
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                            </span>
                                        </div>
                                        <div className="text-secondary fs-5 pointer-cursor">
                                            <i className="bi bi-three-dots"></i>
                                        </div>
                                    </div>
                                    <div className="my-2">
                                        <h1 className="fs-5 fw-bold">
                                            Florence Luna &nbsp;
                                            <span className="fs-5 text-success"
                                            ><i className="bi bi-check-circle-fill"></i
                                            ></span>
                                        </h1>
                                    </div>
                                    <p className="text-secondary my-3">
                                        map grabbed quickly accident stranger voice partly never fed
                                        hold planning angry twenty hat sick way whose three
                                        arrangement powder trade likely deer orange
                                    </p>
                                    <div className="my-2">Published on 5 Aug</div>
                                </div>
                            </div>
                            <div className="col-md-6 p-2">
                                <div className="border border-1 rounded-5 p-4 h-100">
                                    <div className="d-flex">
                                        <div className="flex-grow-1">
                                            <span className="text-warning">
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star"></i>
                                            </span>
                                        </div>
                                        <div className="text-secondary fs-5 pointer-cursor">
                                            <i className="bi bi-three-dots"></i>
                                        </div>
                                    </div>
                                    <div className="my-2">
                                        <h1 className="fs-5 fw-bold">
                                            Miguel Jacobs &nbsp;
                                            <span className="fs-5 text-success"
                                            ><i className="bi bi-check-circle-fill"></i
                                            ></span>
                                        </h1>
                                    </div>
                                    <p className="text-secondary my-3">
                                        quiet wish brain recognize beneath who hello fellow did
                                        setting exclaimed accept shadow jack customs west course
                                        star folks drew physical cage neck object
                                    </p>
                                    <div className="my-2">Published on 5 Aug</div>
                                </div>
                            </div>
                            <div className="col-md-6 p-2">
                                <div className="border border-1 rounded-5 p-4 h-100">
                                    <div className="d-flex">
                                        <div className="flex-grow-1">
                                            <span className="text-warning">
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                            </span>
                                        </div>
                                        <div className="text-secondary fs-5 pointer-cursor">
                                            <i className="bi bi-three-dots"></i>
                                        </div>
                                    </div>
                                    <div className="my-2">
                                        <h1 className="fs-5 fw-bold">
                                            Tillie Waters &nbsp;
                                            <span className="fs-5 text-success"
                                            ><i className="bi bi-check-circle-fill"></i
                                            ></span>
                                        </h1>
                                    </div>
                                    <p className="text-secondary my-3">
                                        power chamber explanation instance chest choose scientific
                                        dollar apart nation needs different paint contrast safety
                                        joined nervous sharp swam cheese cause close there title
                                    </p>
                                    <div className="my-2">Published on 5 Aug</div>
                                </div>
                            </div>
                            <div className="col-12 row p-3 justify-content-center">
                                <div className="col-6 p-3 d-flex justify-content-center">
                                    <button
                                        className="btn py-2 px-4 rounded-pill border w-100 border-1"
                                    >
                                        More comments
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 mt-3 px-4">
                        <div className="p-3">
                            <div className="accordion" id="main-FAQ">
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button
                                            className="accordion-button"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#faq-1"
                                            aria-expanded="true"
                                            aria-controls="faq-1"
                                        >
                                            Shipment methods?
                                        </button>
                                    </h2>
                                    <div
                                        id="faq-1"
                                        className="accordion-collapse collapse show"
                                        data-bs-parent="#main-FAQ"
                                    >
                                        <div className="accordion-body">
                                            It depends on your location.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#faq-2"
                                            aria-expanded="false"
                                            aria-controls="faq-2"
                                        >
                                            What are the conditions for returning the product?
                                        </button>
                                    </h2>
                                    <div
                                        id="faq-2"
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#main-FAQ"
                                    >
                                        <div className="accordion-body">
                                            You can return products one week after your purchase.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#faq-3"
                                            aria-expanded="false"
                                            aria-controls="faq-3"
                                        >
                                            How is payment methods?
                                        </button>
                                    </h2>
                                    <div
                                        id="faq-3"
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#main-FAQ"
                                    >
                                        <div className="accordion-body">
                                            You can pay with your card of paypal or any
                                            cryptocurrency.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <div className="w-100 text-center my-4">
                            <h1 className="fw-bolder">Similar products</h1>
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
                                            <div className="mx-1 fw-bold">150$</div>
                                            <div className="mx-1">
                                                <del>200$</del>
                                            </div>
                                            <div className="mx-1">
                                                <span className="bg-danger-subtle rounded-pill px-2 py-1"
                                                >20%</span
                                                >
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-7 col-lg-3 my-3 last-pr-item">
                                <div className="product-container p-2 rounded-3">
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
                                                <i className="bi bi-star-fill"></i>
                                            </span>
                                            <span className="text-secondary">5</span>/5
                                        </p>
                                        <div className="d-flex px-1">
                                            <div className="mx-1 fw-bold">250$</div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-7 col-lg-3 my-3 last-pr-item">
                                <div className="product-container p-2 rounded-3">
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
                                        <h2 className="my-3">Warm blue men shirt</h2>
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
                                            <div className="mx-1 fw-bold">300$</div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-7 col-lg-3 my-3 last-pr-item">
                                <div className="product-container p-2 rounded-3">
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
                                                <i className="bi bi-star"></i>
                                            </span>
                                            <span className="text-secondary">4</span>/5
                                        </p>
                                        <div className="d-flex px-1">
                                            <div className="mx-1 fw-bold">450$</div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}