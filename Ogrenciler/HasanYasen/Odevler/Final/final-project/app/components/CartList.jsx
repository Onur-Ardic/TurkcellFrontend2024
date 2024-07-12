"use client"
import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { deleteFromCart } from "../redux/features/cartSlice"
import Link from "next/link"
import Image from "next/image"

const CartList = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("http://localhost:3001/cart", { cache: "no-store" })
            .then((res) => res.json())
            .then((data) => setProducts(data))
    }, [products])

    const dispatch = useDispatch()

    const subTotal = products.reduce((sum, product) => sum + Number(product.price), 0)

    return (
        <div className="cartList-container container">
            <h2>YOUR CART</h2>
            {products.length == 0 &&
                <>
                    <div className="text-center text-muted fs-5">
                        There is no product in your cart!
                        <div>
                            <Link href="/categories" className="text-decoration-none text-primary fw-bold fs-6">See all products</Link>
                        </div>
                    </div>
                </>
            }

            <div className="row">
                <div className="left col-12 col-md-7 mb-3">
                    {products.length > 0 && <div className="inner-div p-3">
                        {products.map((product, index) => {
                            return (
                                <div key={index} className="p-2 d-flex gap-3 pt-3" style={{ borderBottom: "1px solid #0000001A" }}>
                                    <div>
                                        <Image className="image" src={product?.imgUrl} width={124} height={124} />
                                    </div>
                                    <div className="w-100 row">
                                        <div className="col-12">
                                            <div className="d-block d-sm-flex justify-content-between align-items-center">
                                                <div className="title">{product?.title}</div>
                                                <svg className="trash-icon" onClick={() => dispatch(deleteFromCart(product.id))} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M20.25 4.5H16.5V3.75C16.5 3.15326 16.2629 2.58097 15.841 2.15901C15.419 1.73705 14.8467 1.5 14.25 1.5H9.75C9.15326 1.5 8.58097 1.73705 8.15901 2.15901C7.73705 2.58097 7.5 3.15326 7.5 3.75V4.5H3.75C3.55109 4.5 3.36032 4.57902 3.21967 4.71967C3.07902 4.86032 3 5.05109 3 5.25C3 5.44891 3.07902 5.63968 3.21967 5.78033C3.36032 5.92098 3.55109 6 3.75 6H4.5V19.5C4.5 19.8978 4.65804 20.2794 4.93934 20.5607C5.22064 20.842 5.60218 21 6 21H18C18.3978 21 18.7794 20.842 19.0607 20.5607C19.342 20.2794 19.5 19.8978 19.5 19.5V6H20.25C20.4489 6 20.6397 5.92098 20.7803 5.78033C20.921 5.63968 21 5.44891 21 5.25C21 5.05109 20.921 4.86032 20.7803 4.71967C20.6397 4.57902 20.4489 4.5 20.25 4.5ZM10.5 15.75C10.5 15.9489 10.421 16.1397 10.2803 16.2803C10.1397 16.421 9.94891 16.5 9.75 16.5C9.55109 16.5 9.36032 16.421 9.21967 16.2803C9.07902 16.1397 9 15.9489 9 15.75V9.75C9 9.55109 9.07902 9.36032 9.21967 9.21967C9.36032 9.07902 9.55109 9 9.75 9C9.94891 9 10.1397 9.07902 10.2803 9.21967C10.421 9.36032 10.5 9.55109 10.5 9.75V15.75ZM15 15.75C15 15.9489 14.921 16.1397 14.7803 16.2803C14.6397 16.421 14.4489 16.5 14.25 16.5C14.0511 16.5 13.8603 16.421 13.7197 16.2803C13.579 16.1397 13.5 15.9489 13.5 15.75V9.75C13.5 9.55109 13.579 9.36032 13.7197 9.21967C13.8603 9.07902 14.0511 9 14.25 9C14.4489 9 14.6397 9.07902 14.7803 9.21967C14.921 9.36032 15 9.55109 15 9.75V15.75ZM15 4.5H9V3.75C9 3.55109 9.07902 3.36032 9.21967 3.21967C9.36032 3.07902 9.55109 3 9.75 3H14.25C14.4489 3 14.6397 3.07902 14.7803 3.21967C14.921 3.36032 15 3.55109 15 3.75V4.5Z" fill="#FF3333" />
                                                </svg>
                                            </div>
                                            <div className="mt-1">
                                                <div className="p"><span className="fw-bold">Size:</span> <span className="text-muted">Large</span></div>
                                                <div className="p"><span className="fw-bold">Color:</span> <span className="text-muted">{product?.color}</span></div>
                                            </div>
                                            <div className="fw-bold fs-4 mt-3">${product?.price}</div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    }
                </div>

                <div className="right col-12 col-md-5">
                    {products.length > 0 && <div className="inner-div p-4">
                        <div className="order-summary mb-3">Order Summary</div>
                        <div className="d-flex justify-content-between align-items-center mb-3 fs-5">
                            <div className="text-muted">Subtotal</div>
                            <div className="fw-bold">${subTotal}</div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-3 fs-5">
                            <div className="text-muted">Discount (-20%)</div>
                            <div className="fw-bold text-danger">-${subTotal / 5}</div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-3 fs-5 delivery-fee pb-3">
                            <div className="text-muted">Delivery Fee</div>
                            <div className="fw-bold">$15</div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-4 fs-4">
                            <div className="text-muted">Total</div>
                            <div className="fw-bold fs-3">${subTotal - (subTotal / 5) + 15}</div>
                        </div>
                        <div className="row mb-4 fs-4">
                            <input className="col-9" placeholder="Add promo code" />
                            <button className="col-3 btn btn-dark text-center text-white button-row1 button">Apply</button>
                        </div>
                        <div className="row mb-2">
                            <button className="col-12 btn btn-dark text-center text-white button-row1 button">
                                <span className="me-3">Go to Checkout</span>
                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.7959 4.4541L21.5459 11.2041C21.6508 11.3086 21.734 11.4328 21.7908 11.5696C21.8476 11.7063 21.8768 11.8529 21.8768 12.001C21.8768 12.149 21.8476 12.2957 21.7908 12.4324C21.734 12.5691 21.6508 12.6933 21.5459 12.7979L14.7959 19.5479C14.5846 19.7592 14.2979 19.8779 13.9991 19.8779C13.7002 19.8779 13.4135 19.7592 13.2022 19.5479C12.9908 19.3365 12.8721 19.0499 12.8721 18.751C12.8721 18.4521 12.9908 18.1654 13.2022 17.9541L18.0313 13.125L4.25 13.125C3.95163 13.125 3.66548 13.0065 3.4545 12.7955C3.24353 12.5846 3.125 12.2984 3.125 12C3.125 11.7017 3.24353 11.4155 3.45451 11.2045C3.66548 10.9936 3.95163 10.875 4.25 10.875L18.0313 10.875L13.2013 6.04598C12.9899 5.83463 12.8712 5.54799 12.8712 5.2491C12.8712 4.95022 12.9899 4.66357 13.2013 4.45223C13.4126 4.24088 13.6992 4.12215 13.9981 4.12215C14.297 4.12215 14.5837 4.24088 14.795 4.45223L14.7959 4.4541Z" fill="white" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default CartList