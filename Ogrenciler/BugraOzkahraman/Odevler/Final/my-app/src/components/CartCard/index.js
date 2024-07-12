import React from "react";

const CartCard = ({ product, removeFromCart }) => {
  return (
    <div
      className="card mb-3"
      style={{ maxWidth: "650px", height: "125px", overflow: "hidden" }}>
      <div className="row g-0">
        <div className="col-md-4 d-flex align-items-center justify-content-center">
          <img
            src={product.image}
            alt={product.name}
            className="img-fluid rounded"
            style={{ width: "150px", height: "150px", objectFit: "cover" }}
          />
        </div>
        <div className="col-md-8 d-flex align-items-center">
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">${product.price}</p>
            <button
              className="btn btn-danger"
              onClick={() => removeFromCart(product.id)}>
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
