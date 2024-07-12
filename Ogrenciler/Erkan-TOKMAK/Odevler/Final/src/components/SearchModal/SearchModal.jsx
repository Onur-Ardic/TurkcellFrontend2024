"use client"
import { getAllProducts } from "@/api/server";
import { useTranslations } from "next-intl"
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import SingleProduct from "../Products/SingleProduct";


const SearchModal = () => {
    const t = useTranslations();

    const [param, setParam] = useState();
    const [products, setProducts] = useState([])

    // const getProduct = async () => {
    //     const res = await fetch(`${URL}/products`, { cache: "no-store" });
    //     const data = await res.json();
    //     setProducts(data)
    // }


    // useEffect(() => {
    //     getProduct();
    //     console.log(param)
    //     console.log(products)
    // }, [param])

    return (
        <div className="modal fade"
        tabIndex="-1"
            id="searchModal"
            aria-labelledby="searchModalLabel"
            aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content w-100">
                    <div className="modal-header">
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        />
                    </div>
                    <div className="modal-body">
                        asdfasdf
                        {/* <div className="d-flex col-xxl-6 col-xl-4 px-2 rounded-pill bg-body-tertiary me-3 w-100">
                                <input type="text" value={param} onChange={() => setParam(param)} />
                                {
                                    products ? (

                                        products.map((product) => {
                                            <SingleProduct
                                                key={product.id}
                                                id={product.id}
                                                image={product.image}
                                                title={product.title}
                                                rating={product.rating}
                                                price={product.price}
                                                discountPercentage={product.discountPercentage} />
                                        }
                            )
                            ) : (<div></div>)
                                }
                        </div> */}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SearchModal