import React from 'react'
import { AddBasketButton } from '../add-basket-button';


function BasketAmount({count, onCountChange}) {

  const increment = () => {
    const newCount = count + 1;
      onCountChange(newCount);
  };

  const decrement = () => {
    const newCount = count > 0 ? count - 1 : 0;
    onCountChange(newCount);
  };
  return (
    <>
    <div className='amount-btn bg-secondary d-flex justify-content-around align-items-center'>
        <button onClick={decrement} className='border-0'>
            <img src="/icons/minus.svg" alt='minus'/>
        </button>
        <span className='fs-6'>{count}</span>
        <button onClick={increment} className='border-0'>
            <img src="/icons/plus.svg" alt='minus'/>
        </button>
    </div>
    </>
  )
}

export default BasketAmount