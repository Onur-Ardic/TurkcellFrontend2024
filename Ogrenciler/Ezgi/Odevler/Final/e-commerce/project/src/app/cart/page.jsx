"use client";
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../redux/cartSlice';
import { FaArrowRight } from "react-icons/fa6";
import { ImageOfCart, ProductAddedToCart, OrderSummary } from '../components/styles/styled';
import { FaTrashAlt } from 'react-icons/fa';
import Link from 'next/link';


const CartPage = () => {
    const cartItems = useSelector(state => state.cart.cartItems);
    const dispatch = useDispatch();

    const handleRemoveFromCart = (item) => {
        dispatch(removeFromCart(item));
    };

    const subtotal = cartItems.reduce((acc, item) => acc + (item.price), 0);
    const discount = subtotal * 0.2;
    const deliveryFee = 10;
    const total = subtotal - discount + deliveryFee;

    
    return (
        <div className="container" style={{ minHeight: "100vh" }}>
            <h1 className='fw-bold mt-5'>YOUR CART</h1>
            <div className="d-flex justify-content-between gap-4 my-5">
                <ProductAddedToCart>
                    {cartItems && cartItems.length > 0 ? (
                        <div className='border border-1 p-3 rounded-4'>
                            {cartItems.map((item) => (
                                <div key={item.id} className="d-flex justify-content-between my-4">
                                    <div className="d-flex gap-4 my-4">
                                        <ImageOfCart className='rounded-4 img-fluid' src={item.image} alt={item.title} />
                                        <div>
                                            <h3 className='fw-bold fs-5'>{item.title}</h3>
                                            <p className='fw-semibold'>Color:<span className='text-secondary'> {item.color}</span></p>
                                            <p className='fw-semibold'>Size: <span className='text-secondary'>{item.size}</span></p>
                                            <p className='fw-semibold fs-4'> ${item.price}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <button
                                            className='bg-white border-0 text-danger fs-5 p-0 mt-3 pe-3'
                                            onClick={() => handleRemoveFromCart(item)}
                                        >
                                            <FaTrashAlt />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className='text-center'>Your cart is empty.</p>
                    )}
                </ProductAddedToCart>
                <OrderSummary className="border border-1 rounded-4 p-4">
                    <h4 className="fw-bold mb-4">Order Summary</h4>
                    <div className="d-flex justify-content-between mb-2">
                        <span>Subtotal</span>
                        <span className='fw-semibold fs-5'>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                        <span>Discount (-20%)</span>
                        <span className='fw-semibold fs-5 text-danger'>-${discount.toFixed(2)}</span>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                        <span>Delivery Fee</span>
                        <span className='fw-semibold fs-5'>${deliveryFee.toFixed(2)}</span>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between mb-2">
                        <span>Total</span>
                        <span className='fw-semibold fs-4'>${total.toFixed(2)}</span>
                    </div>
                    <div className='d-flex gap-4 my-4'>
                        <div className='bg-body-secondary rounded-5 ps-5 pe-5 py-3 text-secondary w-75'>Add promo code</div>
                        <div className='bg-black text-white rounded-5 text-center py-3 w-25'>Apply</div>
                    </div>
                    <div>
                        <Link href={'/login'}><button className='bg-black text-white rounded-5 text-center py-3 w-100 border-0'>Go to Checkout <FaArrowRight /></button></Link>
                    </div>
                </OrderSummary>
            </div>
           
        </div>
    );
};

export default CartPage;
