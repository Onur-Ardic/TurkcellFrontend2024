import React from 'react';
import { useSelector } from 'react-redux';

function OrderSummary() {
  const { products, totalAmount } = useSelector((store) => store.basket);

  const getSubtotal = () => {
    return products.reduce((total, product) => {
      return total + product.price * product.count;
    }, 0);
  };

  const getTotalDiscount = () => {
    return products.reduce((total, product) => {
      if (product.discountRate) {
        return total + product.price * product.discountRate * product.count;
      }
      return total;
    }, 0);
  };

  const subtotal = getSubtotal();
  const totalDiscount = getTotalDiscount();
  const deliveryFee = 15;
  const total = subtotal - totalDiscount + deliveryFee;

  return (
    <div className='order-summary-container'>
      <h5>Order Summary</h5>
      <div className='d-flex justify-content-between'>
        <p className='fw-bold'>Subtotal</p>
        <p>${subtotal.toFixed(2)}</p>
      </div>
      <div className='d-flex justify-content-between'>
        <p className='fw-bold'>Discount</p>
        <p>-${totalDiscount.toFixed(2)}</p>
      </div>
      <div className='d-flex justify-content-between'>
        <p className='fw-bold'>Delivery Fee</p>
        <p>${deliveryFee.toFixed(2)}</p>
      </div>
      <hr />
      <div className='d-flex justify-content-between'>
        <p className='fw-bold'>Total</p>
        <p>${total.toFixed(2)}</p>
      </div>
      <div className='d-flex jusftify-content-center align-items-center gap-3 mb-3 '>
        <div className='position-relative'>
           <img src='/icons/ticket.svg' className='ticket-icon position-absolute' />
           <input type="text" className='search-input' placeholder="Add promo code" />
        </div>
        <button className='shop-now-btn p-2'>Apply</button>
      </div>
      <button className='shop-now-btn w-100'>Go to Checkout</button>
    </div>
  );
}

export default OrderSummary;
