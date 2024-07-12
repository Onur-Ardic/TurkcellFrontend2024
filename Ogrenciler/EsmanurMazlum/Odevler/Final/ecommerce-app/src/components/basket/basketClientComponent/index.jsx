// BasketClientComponents.js
'use client'
import React, { useState } from 'react';
import BasketAmount from '../basketAmount';
import { AddBasketButton } from '../add-basket-button';

const BasketClientComponents = ({ product }) => {
  const [count, setCount] = useState(0);

  const handleCountChange = (newCount) => {
    setCount(newCount);
  };

  return (
    <div className="d-flex justify-content-between align-items-center gap-4">
      <BasketAmount count={count} onCountChange={handleCountChange} />
      <AddBasketButton product={product} count={count} />
    </div>
  );
};

export default BasketClientComponents;
