import React from "react";
import BasketAmount from "../basketAmount";
import { useDispatch } from "react-redux";
import { actions as basketActions } from "../../../stores/basket-store";
import Image from "next/image";

function BasketProductCard({ product }) {
  const dispatch = useDispatch();

  const handleCountChange = (count) => {
    console.log("Selected count:", count);
  };

  const handleDelete = () => {
    dispatch(basketActions.removeFromBasket(product.id));
  };

  return (
    <div className="row justify-content-between mb-3 border-bottom">
      <div className="col-lg-2">
        <div className="basket-list-img">
          <div className="basket-img img-fluid">
            <Image src={`/${product.image}`} alt="Product" fill />
          </div>
        </div>
      </div>
      <div className="col-lg-10">
        <div className="p-3">
          <div className="d-flex justify-content-between align-items-center">
            <p className="fs-20 fw-bold m-0">{product.name}</p>
            <img src="/icons/delete.svg" alt="delete" onClick={handleDelete} />
          </div>
          <div>
            <p className="m-0">Size: {product.size}</p>
            <p className="m-0">
              Color:
              {product.colors && Array.isArray(product.colors) ? (
                product.colors.map((color, index) => (
                  <span key={index}>{color},</span>
                ))
              ) : (
                <p>Renk bilgisi bulunamadı</p>
              )}
            </p>
          </div>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <p className="fs-24 fw-bold">${product.price}</p>
            <BasketAmount onCountChange={handleCountChange} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasketProductCard;
